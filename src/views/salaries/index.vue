<script setup lang="ts">
import { h, onMounted, reactive, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import type { DataTableColumns } from 'naive-ui';
import { NButton, NPopconfirm, NSpace } from 'naive-ui';
import dayjs from 'dayjs';
import { delSalary, fetchSalaryList } from '@/service/api/salary';
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
  Salary: null,
  Date: null
  // gender: 'M'
});

const tableData = ref<any[]>([]);

// 分页数据
const pagination = reactive({
  Page_Number: 1,
  Row_Count: 10,
  'item-count': 99
});

// 加载状态
const loading = ref(false);

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
    title: 'Salary',
    key: 'salary'
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
  console.log('编辑用户:', row);
  // 实现编辑功能
  router.push({
    path: `salaries/detail`,
    query: {
      ...row
    }
  });
}

// 删除用户
async function handleDelete(row: UserData) {
  try {
    await delSalary(row.Employee_ID);
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
  router.push('/salaries/detail');
  // 实现新增功能
}

function doReset() {
  searchForm.value = {
    Employee_ID: '',
    // birth_date: null,
    Salary: null,
    Date: null
  };
}

function search() {
  let params: any = {
    ...searchForm.value,
    ...pagination
  };

  if (params.Date) {
    const [fromTs, toTs] = params.Date as [number, number];
    params.From_Date = fromTs ? dayjs(fromTs).format('YYYY-MM-DD') : undefined;
    params.To_Date = toTs ? dayjs(toTs).format('YYYY-MM-DD') : undefined;
    delete params.Date;
  }

  delete params['item-count'];

  params = cleanObj(params);
  fetchSalaryList(params).then((res: any) => {
    // userData.value = res.data;
    tableData.value = res;
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
  () => [pagination.Page_Number, pagination.Row_Count],
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
          <NFormItemGi label="Employee_ID">
            <NInput v-model:value="searchForm.Employee_ID" clearable />
          </NFormItemGi>

          <NFormItemGi label="Salary">
            <NInput v-model:value="searchForm.Salary" clearable />
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
    <NCard title="Salary List">
      <template #header-extra>
        <NButton type="primary" @click="handleAdd">
          <template #icon>
            <icon-ic-round-add />
          </template>
          Add Salary
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
      <NPagination
        v-model:page="pagination.Page_Number"
        v-model:page-size="pagination.Row_Count"
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
