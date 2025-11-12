<script setup lang="ts">
import { h, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import type { DataTableColumns } from 'naive-ui';
import { NButton, NPopconfirm, NSpace } from 'naive-ui';
import { delEmployee, fetchEmployeesList } from '@/service/api/employee';
import { cleanObj } from '@/utils/common';

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
const searchForm = reactive({
  emp_no: '',
  birth_date: null,
  hire_date: null,
  name: '',
  gender: 'M'
});

const userData = ref<any[]>([]);

// 分页数据
const pagination = reactive({
  page: 1,
  pageSize: 10,
  'item-count': 99
});

// 加载状态
const loading = ref(false);

// 表格列配置
const columns: DataTableColumns<UserData> = [
  {
    title: 'name',
    key: 'name',
    width: 180,
    render: row => {
      return `${row.first_name} ${row.last_name}`;
    }
  },
  {
    title: 'emp_no',
    key: 'emp_no',
    width: 100
  },
  {
    title: 'birth_date',
    key: 'birth_date',
    width: 140
  },
  {
    title: 'dept_name',
    key: 'dept_name',
    width: 180
  },
  {
    title: 'title',
    key: 'title',
    width: 180
  },
  {
    title: 'salary',
    key: 'salary',
    width: 100,
    render: row => {
      return `$ ${row.salary}`;
    }
  },
  {
    title: 'hire_date',
    key: 'hire_date',
    width: 140
  },
  {
    title: 'gender',
    key: 'gender',
    width: 120,
    render: row => {
      return row.gender === 'M' ? 'male' : 'female';
    }
  },

  // {
  //   title: '创建时间',
  //   key: 'createTime',
  //   width: 180
  // },
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

function doReset() {
  Object.assign(searchForm, {
    emp_no: '',
    birth_date: null,
    hire_date: null,
    name: '',
    gender: ''
  });
}

function search() {
  let params: any = Object.assign(searchForm, pagination);
  delete params['item-count'];
  params = cleanObj(params);
  fetchEmployeesList(params).then((res: any) => {
    userData.value = res.data;
    // pagination['item-count'] = res.total;
  });
}

// 页面挂载时加载数据
onMounted(() => {
  // 初始化数据加载
  handleReset();
  search();
});

watch(
  () => [pagination.page, pagination.pageSize],
  () => {
    search();
  }
);
</script>

<template>
  <div class="user-management">
    <!-- 搜索表单 -->
    <NCard title="Search Conditions" class="mb-4">
      <NForm :model="searchForm" label-placement="left" label-width="80px" class="search-form">
        <NGrid :cols="4" :x-gap="16">
          <NFormItemGi label="name">
            <NInput v-model:value="searchForm.name" clearable />
          </NFormItemGi>
          <NFormItemGi label="emp_no">
            <NInput v-model:value="searchForm.emp_no" clearable />
          </NFormItemGi>
          <NFormItemGi label="birth_date">
            <NDatePicker v-model:value="searchForm.birth_date" type="daterange" clearable />
          </NFormItemGi>
          <NFormItemGi label="hire_date">
            <NDatePicker v-model:value="searchForm.hire_date" type="daterange" clearable />
          </NFormItemGi>

          <NFormItemGi label="gender">
            <NSelect
              v-model:value="searchForm.gender"
              clearable
              :options="[
                { label: 'All', value: 'ALL' },
                { label: 'Male', value: 'M' },
                { label: 'Female', value: 'F' }
              ]"
            />
          </NFormItemGi>
          <NFormItemGi>
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
      <NPagination
        v-model:page="pagination.page"
        v-model:page-size="pagination.pageSize"
        :item-count="pagination['item-count']"
        :page-sizes="[10, 20, 30, 40]"
        show-size-picker
      />
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

.user-table {
  margin-top: 16px;
}
</style>
