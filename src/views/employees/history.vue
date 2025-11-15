<script setup lang="ts">
import { onMounted, reactive, ref, watch, computed } from 'vue';
import type { DataTableColumns } from 'naive-ui';
import { NInputNumber, NInput, NDatePicker, NForm, NFormItemGi, NGrid, NCard, NDataTable, NPagination, NButton, NSpace } from 'naive-ui';
import dayjs from 'dayjs';
import { fetchEmployeeHistory } from '@/service/api/employee';

defineOptions({ name: 'EmployeeHistory' });

// Employee history data interface
interface EmployeeHistoryData {
  emp_no: number;
  employee_first_name: string;
  employee_last_name: string;
  title: string;
  salary: number;
  dept_no: string;
  dept_name: string;
  manager_first_name: string;
  manager_last_name: string;
  effective_date: string;
  end_date: string;
  [key: string]: any;
}

// Search form data
const searchForm = ref({
  Employee_ID_min: null,
  Employee_ID_max: null,
  Employee_Name: '',
  Manager_Name: '',
  Title: '',
  Salary_min: null,
  Salary_max: null,
  Department_Number: '',
  Department: '',
  Effective_Date_min: null,
  Effective_Date_max: null,
  End_Date_min: null,
  End_Date_max: null
});

const historyData = ref<EmployeeHistoryData[]>([]);

// Pagination data
const pagination = reactive({
  Page_Number: 1,
  Row_Count: 10, // Fixed at 10 per page
  'item-count': 0
});

// Loading state
const loading = ref(false);

// Page jump input
const jumpPageInput = ref<number | null>(1);

// Calculate max page
const maxPage = computed(() => {
  const total = pagination['item-count'];
  if (total === 0) return 1;
  return Math.ceil(total / pagination.Row_Count);
});

// Table columns configuration
const columns: DataTableColumns<EmployeeHistoryData> = [
  {
    title: 'Employee ID',
    key: 'emp_no',
    width: 100
  },
  {
    title: 'Employee Name',
    key: 'employee_name',
    width: 180,
    render: row => {
      return `${row.employee_first_name || ''} ${row.employee_last_name || ''}`.trim();
    }
  },
  {
    title: 'Title',
    key: 'title',
    width: 180
  },
  {
    title: 'Salary',
    key: 'salary',
    width: 120,
    render: row => {
      return `$ ${row.salary || 0}`;
    }
  },
  {
    title: 'Dept ID',
    key: 'dept_no',
    width: 100
  },
  {
    title: 'Dept Name',
    key: 'dept_name',
    width: 180
  },
  {
    title: 'Manager Name',
    key: 'manager_name',
    width: 180,
    render: row => {
      return `${row.manager_first_name || ''} ${row.manager_last_name || ''}`.trim();
    }
  },
  {
    title: 'Effective Date',
    key: 'effective_date',
    width: 140
  },
  {
    title: 'End Date',
    key: 'end_date',
    width: 140
  }
];

// Search function
async function search() {
  loading.value = true;
  try {
    // Prepare search params - ensure Page_Number and Row_Count are always present (required by backend)
    const searchParams: any = {
      Page_Number: pagination.Page_Number || 1,
      Row_Count: pagination.Row_Count || 10
    };

    // Add optional search filters - Range searches
    if (searchForm.value.Employee_ID_min !== null && searchForm.value.Employee_ID_min !== '') {
      const empIdMin = parseInt(searchForm.value.Employee_ID_min.toString());
      if (!isNaN(empIdMin)) {
        searchParams.Employee_ID_min = empIdMin;
      }
    }
    if (searchForm.value.Employee_ID_max !== null && searchForm.value.Employee_ID_max !== '') {
      const empIdMax = parseInt(searchForm.value.Employee_ID_max.toString());
      if (!isNaN(empIdMax)) {
        searchParams.Employee_ID_max = empIdMax;
      }
    }
    if (searchForm.value.Salary_min !== null && searchForm.value.Salary_min !== '') {
      const salaryMin = parseInt(searchForm.value.Salary_min.toString());
      if (!isNaN(salaryMin)) {
        searchParams.Salary_min = salaryMin;
      }
    }
    if (searchForm.value.Salary_max !== null && searchForm.value.Salary_max !== '') {
      const salaryMax = parseInt(searchForm.value.Salary_max.toString());
      if (!isNaN(salaryMax)) {
        searchParams.Salary_max = salaryMax;
      }
    }
    if (searchForm.value.Effective_Date_min) {
      searchParams.Effective_Date_min = dayjs(searchForm.value.Effective_Date_min).format('YYYY-MM-DD');
    }
    if (searchForm.value.Effective_Date_max) {
      searchParams.Effective_Date_max = dayjs(searchForm.value.Effective_Date_max).format('YYYY-MM-DD');
    }
    if (searchForm.value.End_Date_min) {
      searchParams.End_Date_min = dayjs(searchForm.value.End_Date_min).format('YYYY-MM-DD');
    }
    if (searchForm.value.End_Date_max) {
      searchParams.End_Date_max = dayjs(searchForm.value.End_Date_max).format('YYYY-MM-DD');
    }
    // Fuzzy/Exact searches
    if (searchForm.value.Employee_Name) {
      searchParams.Employee_Name = searchForm.value.Employee_Name;
    }
    if (searchForm.value.Manager_Name) {
      searchParams.Manager_Name = searchForm.value.Manager_Name;
    }
    if (searchForm.value.Title) {
      searchParams.Title = searchForm.value.Title;
    }
    if (searchForm.value.Department_Number) {
      searchParams.Department_Number = searchForm.value.Department_Number;
    }
    if (searchForm.value.Department) {
      searchParams.Department = searchForm.value.Department;
    }
    
    console.log('Search params:', searchParams);
    const res = await fetchEmployeeHistory(searchParams);
    console.log('Employee history response:', res);
    console.log('Response type:', typeof res);
    console.log('Is array:', Array.isArray(res));
    
    // Handle different response formats
    let data = [];
    if (Array.isArray(res)) {
      data = res;
    } else if (res && Array.isArray(res.data)) {
      data = res.data;
    } else if (res && res.data) {
      data = Array.isArray(res.data) ? res.data : [];
    } else if (res && typeof res === 'object') {
      // If it's an object but not an array, try to extract data
      console.log('Response is object, keys:', Object.keys(res));
      // Check if it's a single object that should be in an array
      if (res.emp_no || res.employee_first_name) {
        data = [res];
      }
    }
    
    console.log('Extracted data:', data);
    console.log('Data length:', data.length);
    
    if (data && data.length > 0) {
      historyData.value = data;
      // Update total count for pagination
      // Since backend doesn't return total, estimate based on current page
      if (data.length < pagination.Row_Count) {
        // Last page - exact count
        pagination['item-count'] = (pagination.Page_Number - 1) * pagination.Row_Count + data.length;
      } else {
        // Full page - assume there are at least 10 pages (100 records) to enable jump functionality
        const estimatedTotal = Math.max(100, pagination.Page_Number * pagination.Row_Count + 1);
        pagination['item-count'] = estimatedTotal;
      }
    } else {
      historyData.value = [];
      pagination['item-count'] = 0;
      // Don't show warning if it's the initial load with no filters
      const hasFilters = searchForm.value.Employee_ID_min || searchForm.value.Employee_ID_max ||
                        searchForm.value.Employee_Name || searchForm.value.Manager_Name ||
                        searchForm.value.Title || searchForm.value.Salary_min || searchForm.value.Salary_max ||
                        searchForm.value.Department_Number || searchForm.value.Department ||
                        searchForm.value.Effective_Date_min || searchForm.value.Effective_Date_max ||
                        searchForm.value.End_Date_min || searchForm.value.End_Date_max;
      if (hasFilters) {
        window.$message?.warning('No data found');
      }
    }
  } catch (err: any) {
    console.error('Search error:', err);
    window.$message?.error(err?.message || 'Failed to fetch employee history');
    historyData.value = [];
  } finally {
    loading.value = false;
  }
}

// Search handler
function handleSearch() {
  console.log('Search conditions:', searchForm);
  pagination.Page_Number = 1; // Reset to page 1 when searching
  search();
}

// Reset search
function handleReset() {
  searchForm.value = {
    Employee_ID_min: null,
    Employee_ID_max: null,
    Employee_Name: '',
    Manager_Name: '',
    Title: '',
    Salary_min: null,
    Salary_max: null,
    Department_Number: '',
    Department: '',
    Effective_Date_min: null,
    Effective_Date_max: null,
    End_Date_min: null,
    End_Date_max: null
  };
  pagination.Page_Number = 1;
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

// Page mounted
onMounted(() => {
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
  <div class="employee-history">
    <!-- Search form -->
    <NCard title="Search Conditions" class="mb-4">
      <NForm :model="searchForm" label-placement="left" label-width="150px" class="search-form">
        <NGrid :cols="4" :x-gap="16" :y-gap="16">
          <NFormItemGi label="Employee Name" :span="1">
            <NInput v-model:value="searchForm.Employee_Name" clearable placeholder="Please Input" />
          </NFormItemGi>
          <NFormItemGi label="Employee ID Min" :span="1">
            <NInputNumber v-model:value="searchForm.Employee_ID_min" clearable placeholder="Min" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Employee ID Max" :span="1">
            <NInputNumber v-model:value="searchForm.Employee_ID_max" clearable placeholder="Max" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Manager Name" :span="1">
            <NInput v-model:value="searchForm.Manager_Name" clearable placeholder="Please Input" />
          </NFormItemGi>

          <NFormItemGi label="Title" :span="1">
            <NInput v-model:value="searchForm.Title" clearable placeholder="Please Input" />
          </NFormItemGi>
          <NFormItemGi label="Salary Min" :span="1">
            <NInputNumber v-model:value="searchForm.Salary_min" clearable placeholder="Min" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Salary Max" :span="1">
            <NInputNumber v-model:value="searchForm.Salary_max" clearable placeholder="Max" :show-button="false" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Dept ID" :span="1">
            <NInput v-model:value="searchForm.Department_Number" clearable placeholder="Please Input" />
          </NFormItemGi>

          <NFormItemGi label="Dept Name" :span="1">
            <NInput v-model:value="searchForm.Department" clearable placeholder="Please Input" />
          </NFormItemGi>
          <NFormItemGi label="Effective Date From" :span="1">
            <NDatePicker v-model:value="searchForm.Effective_Date_min" type="date" clearable placeholder="Select Date" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="Effective Date To" :span="1">
            <NDatePicker v-model:value="searchForm.Effective_Date_max" type="date" clearable placeholder="Select Date" style="width: 100%" />
          </NFormItemGi>
          <NFormItemGi label="End Date From" :span="1">
            <NDatePicker v-model:value="searchForm.End_Date_min" type="date" clearable placeholder="Select Date" style="width: 100%" />
          </NFormItemGi>

          <NFormItemGi label="End Date To" :span="1">
            <NDatePicker v-model:value="searchForm.End_Date_max" type="date" clearable placeholder="Select Date" style="width: 100%" />
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

    <!-- Employee history list -->
    <NCard title="Employee History">
      <NDataTable
        :columns="columns"
        :data="historyData"
        :loading="loading"
        :bordered="false"
        :single-line="false"
        class="history-table"
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
.employee-history {
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

.history-table {
  margin-top: 16px;
}
</style>

