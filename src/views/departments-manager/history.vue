<script setup lang="ts">
import { h, onMounted, reactive, ref, watch, computed } from 'vue';
import { useRouter } from 'vue-router';
import type { DataTableColumns } from 'naive-ui';
import { NButton, NPopconfirm, NSpace, NInputNumber, NForm, NFormItemGi, NGrid, NCard, NDataTable, NPagination, NInput, NDatePicker } from 'naive-ui';
import dayjs from 'dayjs';
import { fetchDepartmentListAll } from '@/service/api/department-manage';
import { cleanObj } from '@/utils/common';

// 用户数据接口定义
interface UserData {
  emp_no: number;
  dept_no: string;
  from_date: string;
  to_date: string;
}

const router = useRouter();

// 搜索表单数据
const searchForm = ref({
  Employee_ID: '',
  Dept_Number: '',
  Date: null
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
    title: 'Employee ID',
    key: 'emp_no',
    width: 120
  },
  {
    title: 'Dept ID',
    key: 'dept_no',
    width: 120
  },
  {
    title: 'From Date',
    key: 'from_date',
    width: 140
  },
  {
    title: 'To Date',
    key: 'to_date',
    width: 140
  }
];

// 搜索用户
function handleSearch() {
  console.log('Search conditions:', searchForm);
  pagination.Page_Number = 1; // Reset to page 1 when searching
  search();
}

// 重置搜索
function handleReset() {
  doReset();
  search();
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
  searchForm.value = {
    Employee_ID: '',
    Dept_Number: '',
    Date: null
  };
}

function search() {
  loading.value = true;
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
  fetchDepartmentListAll(params).then((res: any) => {
    if (Array.isArray(res)) {
      tableData.value = res;
      // Update total count for pagination
      if (res.length < pagination.Row_Count) {
        // If we got fewer results than requested, this is the last page - use exact count
        pagination['item-count'] = (pagination.Page_Number - 1) * pagination.Row_Count + res.length;
      } else {
        // Full page - try to determine actual total by checking a high page number
        checkTotalCount(params).then((total) => {
          if (total !== null) {
            pagination['item-count'] = total;
          } else {
            // Fallback: estimate conservatively (show at least current + 1 page)
            pagination['item-count'] = pagination.Page_Number * pagination.Row_Count + 1;
          }
        });
        // Set initial estimate while checking
        pagination['item-count'] = pagination.Page_Number * pagination.Row_Count + 1;
      }
    } else if (res && res.data && Array.isArray(res.data)) {
      tableData.value = res.data;
      if (res.total !== undefined) {
        pagination['item-count'] = res.total;
      } else {
        // If no total provided and we got a full page, try to determine actual total
        if (res.data.length < pagination.Row_Count) {
          // Last page - exact count
          pagination['item-count'] = (pagination.Page_Number - 1) * pagination.Row_Count + res.data.length;
        } else {
          // Full page - check total count
          checkTotalCount(params).then((total) => {
            if (total !== null) {
              pagination['item-count'] = total;
            } else {
              pagination['item-count'] = pagination.Page_Number * pagination.Row_Count + 1;
            }
          });
          pagination['item-count'] = pagination.Page_Number * pagination.Row_Count + 1;
        }
      }
    } else {
      tableData.value = [];
      pagination['item-count'] = 0;
    }
  }).catch((err: any) => {
    console.error('Search error:', err);
    window.$message?.error(err?.message || 'Failed to fetch manager history');
    tableData.value = [];
    pagination['item-count'] = 0;
  }).finally(() => {
    loading.value = false;
  });
}

// Helper function to determine total count by checking high page numbers
async function checkTotalCount(params: any): Promise<number | null> {
  try {
    // Try page 10 first (100 records)
    const testParams = { ...params, Page_Number: 10, Row_Count: pagination.Row_Count };
    const testRes = await fetchDepartmentListAll(testParams);
    const testData = Array.isArray(testRes) ? testRes : (testRes?.data || []);
    
    if (testData.length === 0) {
      // Page 10 is empty, so total is less than 100
      // Try to find the last page by checking pages 2-9 sequentially
      for (let page = 9; page >= 2; page--) {
        const pageParams = { ...params, Page_Number: page, Row_Count: pagination.Row_Count };
        const pageRes = await fetchDepartmentListAll(pageParams);
        const pageData = Array.isArray(pageRes) ? pageRes : (pageRes?.data || []);
        
        if (pageData.length > 0) {
          if (pageData.length < pagination.Row_Count) {
            // This is the last page
            return (page - 1) * pagination.Row_Count + pageData.length;
          } else {
            // Full page, so there's at least one more
            return page * pagination.Row_Count + 1;
          }
        }
      }
      // If we get here, only page 1 has data
      return pagination.Row_Count;
    } else if (testData.length < pagination.Row_Count) {
      // Page 10 is the last page
      return (10 - 1) * pagination.Row_Count + testData.length;
    } else {
      // Page 10 is full, so there are at least 10 pages
      // Estimate 10 pages (100 records) to show all pages upfront
      return 10 * pagination.Row_Count;
    }
  } catch (err) {
    console.error('Error checking total count:', err);
    return null;
  }
}

// 页面挂载时加载数据
onMounted(() => {
  // 初始化数据加载
  pagination.Page_Number = 1;
  doReset();
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
      <NForm :model="searchForm" label-placement="left" label-width="130px" class="search-form">
        <NGrid :cols="4" :x-gap="16" :y-gap="16">
          <NFormItemGi label="Employee ID" :span="1">
            <NInput v-model:value="searchForm.Employee_ID" clearable placeholder="Please Input" />
          </NFormItemGi>

          <NFormItemGi label="Dept ID" :span="1">
            <NInput v-model:value="searchForm.Dept_Number" clearable placeholder="Please Input" />
          </NFormItemGi>

          <NFormItemGi label="Date Range" :span="1">
            <NDatePicker v-model:value="searchForm.Date" type="daterange" clearable placeholder="Select Date Range" style="width: 100%" />
          </NFormItemGi>

          <NFormItemGi :span="1">
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
    <NCard title="All Department Managers (Legacy)">
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

