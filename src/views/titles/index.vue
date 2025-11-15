<script setup lang="ts">
import { h, onMounted, reactive, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { DataTableColumns } from 'naive-ui';
import { NButton, NPopconfirm, NSpace, NInputNumber } from 'naive-ui';
import dayjs from 'dayjs';
import { delTitle, fetchTitlesList } from '@/service/api/titles';
import { cleanObj } from '@/utils/common';

// 用户数据接口定义
interface UserData {
  Employee_ID: number;
  Title: string;
  Date: string;
}

const router = useRouter();

// 搜索表单数据
const searchForm = ref({
  Employee_ID: '',
  // birth_date: null,
  Title: '',
  Date: null
  // gender: 'M'
});

const tableData = ref<any[]>([]);

// 分页数据
const pagination = reactive({
  Page_Number: 1,
  Row_Count: 10, // Fixed at 10 per page
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
  return Math.ceil(total / pagination.Row_Count);
});

// 表格列配置
const columns: DataTableColumns<UserData> = [
  {
    title: 'emp_no',
    key: 'emp_no'
    // width: 180,
    // render: row => {
    //   return `${row.first_name} ${row.last_name}`;
    // }
  },
  {
    title: 'Title',
    key: 'title'
  },
  {
    title: 'from_date',
    key: 'from_date'
    // width: 200
  },
  {
    title: 'to_date',
    key: 'to_date'
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
    render: (row: UserData) => {
      return h(
        NSpace,
        {},
        {
          default: () => [
            // 编辑没有意义
            // h(
            //   NButton,
            //   {
            //     size: 'small',
            //     type: 'primary',
            //     onClick: () => handleEdit(row)
            //   },
            //   {
            //     default: () => 'Edit'
            //   }
            // ),
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
// function handleEdit(row: UserData) {
//   console.log('编辑用户:', row);
//   // 实现编辑功能
//   router.push({
//     path: `titles/detail`,
//     query: {
//       ...row
//     }
//   });
// }

// 删除用户
async function handleDelete(row: any) {
  try {
    await delTitle(row.emp_no, row.title);
    search();
    window.$message?.success('删除成功');
  } catch {
    window.$message?.error('删除失败');
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
  pagination.Page_Number = 1; // Reset to page 1 when searching
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
  router.push('/titles/detail');
  // 实现新增功能
}

// Jump to specific page
function handleJumpToPage() {
  const page = jumpPageInput.value;
  if (!page || page < 1) {
    window.$message?.warning('Please enter a valid page number');
    jumpPageInput.value = pagination.Page_Number;
    return;
  }
  
  const max = maxPage.value;
  if (page > max) {
    window.$message?.warning(`Page number cannot exceed ${max}`);
    jumpPageInput.value = pagination.Page_Number;
    return;
  }
  
  pagination.Page_Number = page;
  // search() will be triggered by the watch on pagination.Page_Number
}

function doReset() {
  searchForm.value.Employee_ID = '';
  searchForm.value.Title = '';
  searchForm.value.Date = null;
}

function search() {
  let params: any = {
    ...searchForm.value,
    Page_Number: pagination.Page_Number || 1,
    Row_Count: pagination.Row_Count || 10
  };

  if (params.Date) {
    const [fromTs, toTs] = params.Date as [number, number];
    params.From_Date = fromTs ? dayjs(fromTs).format('YYYY-MM-DD') : undefined;
    params.To_Date = toTs ? dayjs(toTs).format('YYYY-MM-DD') : undefined;
    delete params.Date;
  }

  params = cleanObj(params);
  fetchTitlesList(params).then((res: any) => {
    if (Array.isArray(res)) {
      tableData.value = res;
      // Update total count for pagination
      if (res.length < pagination.Row_Count) {
        // If we got fewer results than requested, this is the last page
        pagination['item-count'] = (pagination.Page_Number - 1) * pagination.Row_Count + res.length;
      } else {
        // Full page - assume there are at least 10 pages (100 records) to enable jump functionality
        const estimatedTotal = Math.max(100, pagination.Page_Number * pagination.Row_Count + 1);
        pagination['item-count'] = estimatedTotal;
      }
    } else if (res && res.data && Array.isArray(res.data)) {
      tableData.value = res.data;
      if (res.total !== undefined) {
        pagination['item-count'] = res.total;
      } else {
        // If no total provided, assume at least 10 pages
        const estimatedTotal = Math.max(100, pagination.Page_Number * pagination.Row_Count + 1);
        pagination['item-count'] = estimatedTotal;
      }
    } else {
      tableData.value = [];
      pagination['item-count'] = 0;
    }
  }).catch((err: any) => {
    console.error('Search error:', err);
    tableData.value = [];
    pagination['item-count'] = 0;
  });
}

// 页面挂载时加载数据
onMounted(() => {
  // 初始化数据加载
  handleReset();
  search();
});

watch(
  () => pagination.Page_Number,
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
      <NForm :model="searchForm" label-placement="left" label-width="80px" class="search-form">
        <NGrid :cols="4" :x-gap="16">
          <NFormItemGi label="Employee_ID">
            <NInput v-model:value="searchForm.Employee_ID" clearable />
          </NFormItemGi>

          <NFormItemGi label="Title">
            <NInput v-model:value="searchForm.Title" clearable />
          </NFormItemGi>

          <NFormItemGi label="Date">
            <NDatePicker v-model:value="searchForm.Date" type="daterange" clearable />
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
    <NCard title="Title List">
      <template #header-extra>
        <NButton type="primary" @click="handleAdd">
          <template #icon>
            <icon-ic-round-add />
          </template>
          Add Title
        </NButton>
      </template>

      <NDataTable
        :columns="columns"
        :data="tableData"
        :loading="loading"
        :bordered="false"
        :single-line="false"
        class="user-table"
      />
      <div class="flex items-center gap-4 mt-4">
        <NPagination
          v-model:page="pagination.Page_Number"
          :page-size="pagination.Row_Count"
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

.user-table {
  margin-top: 16px;
}
</style>
