<script setup lang="ts">
import { h, onMounted, reactive, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { DataTableColumns } from 'naive-ui';
import { NButton, NPopconfirm, NSpace, NInputNumber, NInput, NDatePicker, NSelect, NForm, NFormItemGi, NGrid, NCard, NDataTable, NPagination } from 'naive-ui';
import dayjs from 'dayjs';
import { delEmployee, fetchEmployeesList } from '@/service/api/employee';

// 用户数据接口定义
interface UserData {
  birth_date: string;
  emp_no: number;
  first_name: string;
  gender: 'M' | 'F';
  hire_date: string;
  last_name: string;
  [key: string]: any;
}

const router = useRouter();

// 搜索表单数据
const searchForm = ref({
  emp_no_min: null,
  emp_no_max: null,
  birth_date_range: null,
  hire_date_range: null,
  name: '',
  gender: '',
  salary_min: null,
  salary_max: null,
  dept_name: '',
  title: ''
});

const userData = ref<any[]>([]);

// 分页数据
const pagination = reactive({
  page: 1,
  pageSize: 10, // Fixed at 10 per page
  'item-count': 0
});

// 加载状态
const loading = ref(false);

// Page jump input
const jumpPageInput = ref<number | null>(1);

// Calculate max page
const maxPage = computed(() => {
  const total = pagination['item-count'];
  if (total === 0) return 1;
  return Math.ceil(total / pagination.pageSize);
});

// 表格列配置
const columns: DataTableColumns<UserData> = [
  {
    title: 'Employee ID',
    key: 'emp_no',
    width: 100
  },
  {
    title: 'Employee Name',
    key: 'name',
    width: 180,
    render: row => {
      return `${row.first_name} ${row.last_name}`;
    }
  },
  {
    title: 'Birth Date',
    key: 'birth_date',
    width: 140
  },
  {
    title: 'Dept Name',
    key: 'dept_name',
    width: 180
  },
  {
    title: 'Title',
    key: 'title',
    width: 180
  },
  {
    title: 'Salary',
    key: 'salary',
    width: 100,
    render: row => {
      return `$ ${row.salary}`;
    }
  },
  {
    title: 'Hire Date',
    key: 'hire_date',
    width: 140
  },
  {
    title: 'Gender',
    key: 'gender',
    width: 120,
    render: row => {
      return row.gender === 'M' ? 'male' : 'female';
    }
  },
  {
    title: 'Operation',
    key: 'actions',
    width: 150,
    fixed: 'right',
    render: (row: UserData) => {
      return h(
        NSpace,
        {},
        {
          default: () => [
            h(
              NButton,
              {
                size: 'small',
                type: 'primary',
                onClick: () => handleEdit(row)
              },
              {
                default: () => 'Edit'
              }
            ),
            h(
              NPopconfirm,
              {
                onPositiveClick: () => handleDelete(row)
              },
              {
                trigger: () =>
                  h(
                    NButton,
                    {
                      size: 'small',
                      type: 'error'
                    },
                    {
                      default: () => 'Delete'
                    }
                  ),
                default: () => 'Are you sure to delete this employee?'
              }
            )
          ]
        }
      );
    }
  }
];

// 编辑用户
function handleEdit(row: UserData) {
  // 实现编辑功能
  router.push({
    path: `employees/detail`,
    query: {
      emp_no: row.emp_no
    }
  });
}

// 删除用户
async function handleDelete(row: UserData) {
  try {
    await delEmployee(row.emp_no);
    search();
    window.$message?.success('delete success');
  } catch (err: any) {
    window.$message?.error(err || 'fail to delete');
  }
  // 实现删除功能
  // const index = userData.value.findIndex(item => item.id === row.emp_no);
  // if (index > -1) {
  //   userData.value.splice(index, 1);
  //   pagination['item-count'] -= 1;
  // }
}

// 搜索用户
function handleSearch() {
  console.log('搜索条件:', searchForm);
  pagination.page = 1; // Reset to page 1 when searching
  search();
  // 实现搜索功能
}

// 重置搜索
function handleReset() {
  doReset();
  search();
}

// 新增用户
function handleAdd() {
  console.log('新增用户');
  router.push('/employees/detail');
  // 实现新增功能
}

// Jump to specific page
function handleJumpToPage() {
  const page = jumpPageInput.value;
  if (!page || page < 1) {
    window.$message?.warning('Please enter a valid page number');
    jumpPageInput.value = pagination.page;
    return;
  }
  
  const max = maxPage.value;
  if (page > max) {
    window.$message?.warning(`Page number cannot exceed ${max}`);
    jumpPageInput.value = pagination.page;
    return;
  }
  
  pagination.page = page;
  // search() will be triggered by the watch on pagination.page
}

function doReset() {
  searchForm.value = {
    emp_no_min: null,
    emp_no_max: null,
    birth_date_range: null,
    hire_date_range: null,
    name: '',
    gender: '',
    salary_min: null,
    salary_max: null,
    dept_name: '',
    title: ''
  };
}

async function search() {
  loading.value = true;
  try {
    // Prepare search params - ensure page and pageSize are always present (required by backend)
    const searchParams: any = {
      page: pagination.page || 1,
      pageSize: pagination.pageSize || 10
    };

    // Add optional search filters - Range searches
    if (searchForm.value.emp_no_min !== null && searchForm.value.emp_no_min !== '') {
      searchParams.emp_no_min = parseInt(searchForm.value.emp_no_min);
    }
    if (searchForm.value.emp_no_max !== null && searchForm.value.emp_no_max !== '') {
      searchParams.emp_no_max = parseInt(searchForm.value.emp_no_max);
    }
    // Handle birth date range
    if (searchForm.value.birth_date_range) {
      const [fromTs, toTs] = searchForm.value.birth_date_range as [number, number];
      if (fromTs) {
        searchParams.birth_date_min = dayjs(fromTs).format('YYYY-MM-DD');
      }
      if (toTs) {
        searchParams.birth_date_max = dayjs(toTs).format('YYYY-MM-DD');
      }
    }
    // Handle hire date range
    if (searchForm.value.hire_date_range) {
      const [fromTs, toTs] = searchForm.value.hire_date_range as [number, number];
      if (fromTs) {
        searchParams.hire_date_min = dayjs(fromTs).format('YYYY-MM-DD');
      }
      if (toTs) {
        searchParams.hire_date_max = dayjs(toTs).format('YYYY-MM-DD');
      }
    }
    if (searchForm.value.salary_min !== null && searchForm.value.salary_min !== '') {
      searchParams.salary_min = parseInt(searchForm.value.salary_min);
    }
    if (searchForm.value.salary_max !== null && searchForm.value.salary_max !== '') {
      searchParams.salary_max = parseInt(searchForm.value.salary_max);
    }
    // Exact/Fuzzy searches
    if (searchForm.value.name) {
      searchParams.name = searchForm.value.name;
    }
    if (searchForm.value.gender) {
      searchParams.gender = searchForm.value.gender;
    }
    if (searchForm.value.dept_name) {
      searchParams.dept_name = searchForm.value.dept_name;
    }
    if (searchForm.value.title) {
      searchParams.title = searchForm.value.title;
    }
    
    const res = await fetchEmployeesList(searchParams);
    if (res && res.data) {
      userData.value = res.data;
      // Update total count for pagination
      // Since backend doesn't return total, estimate based on current page
      if (res.total !== undefined) {
        pagination['item-count'] = res.total;
      } else if (Array.isArray(res.data)) {
        if (res.data.length < pagination.pageSize) {
          // Last page - exact count
          pagination['item-count'] = (pagination.page - 1) * pagination.pageSize + res.data.length;
        } else {
          // Full page - assume there are at least 10 pages (100 records) to enable jump functionality
          const estimatedTotal = Math.max(100, pagination.page * pagination.pageSize + 1);
          pagination['item-count'] = estimatedTotal;
        }
      }
    } else {
      userData.value = [];
      pagination['item-count'] = 0;
      // Don't show warning on initial load with no filters
      const hasFilters = searchForm.value.name || searchForm.value.emp_no_min || searchForm.value.emp_no_max ||
                        searchForm.value.birth_date_range || searchForm.value.hire_date_range ||
                        searchForm.value.gender || searchForm.value.salary_min || searchForm.value.salary_max ||
                        searchForm.value.dept_name || searchForm.value.title;
      if (hasFilters) {
        window.$message?.warning('No data found');
      }
    }
  } catch (err: any) {
    console.error('Search error:', err);
    window.$message?.error(err?.message || 'Failed to fetch employees');
    userData.value = [];
  } finally {
    loading.value = false;
  }
}

// 页面挂载时加载数据
onMounted(() => {
  // 初始化数据加载
  handleReset();
  search();
});

watch(
  () => pagination.page,
  (newPage) => {
    // Update jump input when page changes
    jumpPageInput.value = newPage;
    // Trigger search when page changes
    search();
  }
);
</script>

<template>
  <div class="user-management">
    <!-- 搜索表单 -->
    <NCard title="Search Conditions" class="mb-4">
      <NForm :model="searchForm" label-placement="left" label-width="130px" class="search-form">
        <NGrid :cols="4" :x-gap="16" :y-gap="16">
          <NFormItemGi label="Employee Name" :span="1">
            <NInput v-model:value="searchForm.name" clearable placeholder="Please Input" />
          </NFormItemGi>
          <NFormItemGi label="Employee ID Min" :span="1">
            <NInputNumber v-model:value="searchForm.emp_no_min" clearable placeholder="Min" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Employee ID Max" :span="1">
            <NInputNumber v-model:value="searchForm.emp_no_max" clearable placeholder="Max" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Gender" :span="1">
            <NSelect
              v-model:value="searchForm.gender"
              clearable
              placeholder="Please Select"
              :options="[
                { label: 'Male', value: 'M' },
                { label: 'Female', value: 'F' }
              ]"
            />
          </NFormItemGi>

          <NFormItemGi label="Birth Date Range" :span="1">
            <NDatePicker v-model:value="searchForm.birth_date_range" type="daterange" clearable placeholder="Select Date Range" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Hire Date Range" :span="1">
            <NDatePicker v-model:value="searchForm.hire_date_range" type="daterange" clearable placeholder="Select Date Range" style="width: 100%" />
          </NFormItemGi>

          <NFormItemGi label="Salary Min" :span="1">
            <NInputNumber v-model:value="searchForm.salary_min" clearable placeholder="Min" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Salary Max" :span="1">
            <NInputNumber v-model:value="searchForm.salary_max" clearable placeholder="Max" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Dept Name" :span="1">
            <NInput v-model:value="searchForm.dept_name" clearable placeholder="Please Input" />
          </NFormItemGi>
          <NFormItemGi label="Title" :span="1">
            <NInput v-model:value="searchForm.title" clearable placeholder="Please Input" />
          </NFormItemGi>

          <NFormItemGi :span="4">
            <NSpace>
              <NButton type="primary" @click="handleSearch">
                <template #icon>
                  <icon-ic-round-search />
                </template>
                Search
              </NButton>
              <NButton @click="handleReset">
                <template #icon>
                  <icon-ic-round-refresh />
                </template>
                Reset
              </NButton>
            </NSpace>
          </NFormItemGi>
        </NGrid>
      </NForm>
    </NCard>

    <!-- 用户列表 -->
    <NCard title="Employee List">
      <template #header-extra>
        <NButton type="primary" @click="handleAdd">
          <template #icon>
            <icon-ic-round-add />
          </template>
          Add Employee
        </NButton>
      </template>

      <NDataTable
        :columns="columns"
        :data="userData"
        :loading="loading"
        :bordered="false"
        :single-line="false"
        class="user-table"
      />
      <div class="flex items-center gap-4 mt-4">
        <NPagination
          v-model:page="pagination.page"
          :page-size="pagination.pageSize"
          :item-count="pagination['item-count']"
          :show-size-picker="false"
        />
        <div class="flex items-center gap-2">
          <span class="text-sm">Jump to:</span>
          <NInputNumber
            v-model:value="jumpPageInput"
            :min="1"
            :max="maxPage"
            :show-button="false"
            size="small"
            style="width: 80px"
            @keyup.enter="handleJumpToPage"
          />
          <NButton size="small" @click="handleJumpToPage">Go</NButton>
        </div>
      </div>
    </NCard>
  </div>
</template>

<style scoped>
.user-management {
  padding: 16px;
}

.search-form {
  margin-bottom: 16px;
}

.search-form :deep(.n-form-item-label) {
  white-space: nowrap;
  overflow: visible;
}

.search-form :deep(.n-form-item-label__text) {
  white-space: nowrap;
}

.user-table {
  margin-top: 16px;
}
</style>
