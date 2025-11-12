<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NDatePicker, NForm, NFormItemGi, NGrid, NInput, NSelect, useMessage } from 'naive-ui';
import dayjs from 'dayjs';
import { addEmployee, fetchEmployeeById, updateEmployee } from '@/service/api/employee';
import { fetchDepartmentsList } from '@/service/api/departments';

defineOptions({ name: 'EmployeeDetail' });

const route = useRoute();
const router = useRouter();
const message = useMessage();

const initialData = ref<any>(null);

// Get employee information from route parameters
// const { emp_no, birth_date, first_name, last_name, gender, hire_date, department, title, salary } = route.query;

const { emp_no } = route.query;

// Form data
const formData = reactive({
  emp_no: '',
  birth_date: null,
  first_name: '',
  last_name: '',
  gender: '',
  hire_date: null,
  dept_no: '',
  title: '',
  salary: '',
  to_date: null
});

/**
 * 加载员工详情
 *
 * 调用接口 `GET /employees/{emp_no}`，将返回的员工信息填充到表单中
 */
async function loadEmployeeDetails() {
  if (!emp_no) return;
  try {
    const resp = await fetchEmployeeById(emp_no as string);
    const data = Array.isArray(resp) ? resp?.[0] : (resp?.data ?? resp); // 兼容不同返回结构
    if (!data) return;
    formData.emp_no = `${data.emp_no}` || '';
    formData.first_name = data.first_name ?? '';
    formData.last_name = data.last_name ?? '';
    formData.gender = data.gender ?? '';
    formData.salary = `${data.salary}` || '';
    formData.birth_date = data.birth_date ? new Date(data.birth_date).getTime() : null;
    formData.hire_date = data.hire_date ? new Date(data.hire_date).getTime() : null;
    formData.dept_no = data.dept_no ?? `${Math.floor(Math.random() * 900000) + 10000}`;
    formData.title = data.title ?? '';
    formData.to_date = data.to_date ? new Date(data.to_date).getTime() : null;

    initialData.value = { ...formData };
  } catch (err) {
    console.error('加载员工详情失败:', err);
  }
}

// Form reference
const formRef = ref();

// Gender options
const genderOptions = [
  { label: 'Male', value: 'M' },
  { label: 'Female', value: 'F' }
];

// 部门选项（从接口加载）
const departmentOptions = ref<Array<{ label: string; value: string }>>([]);

/**
 * 加载部门列表并渲染下拉选项
 *
 * 调用接口 `GET /dept/list`，参数固定为 `Page_Number=1`、`Row_Count=99`
 * 将返回的 `{ dept_no, dept_name }[]` 映射为 `{ label, value }`
 */
async function loadDepartments() {
  try {
    const resp = await fetchDepartmentsList({ Page_Number: 1, Row_Count: 99 });
    const list = Array.isArray(resp) ? resp : (resp?.data ?? []);
    departmentOptions.value = list.map((item: any) => ({
      label: item.dept_name,
      value: item.dept_no
    }));
  } catch (err) {
    console.error('加载部门列表失败:', err);
    message.error('加载部门列表失败');
  }
}

// Form validation rules
const rules: any = {
  emp_no: {
    required: true,
    message: 'Please enter employee number',
    trigger: 'blur'
  },
  first_name: {
    required: true,
    message: 'Please enter first name',
    trigger: 'blur'
  },
  last_name: {
    required: true,
    message: 'Please enter last name',
    trigger: 'blur'
  },
  gender: {
    required: true,
    message: 'Please select gender',
    trigger: 'change'
  },
  birth_date: {
    required: true,
    type: 'number',
    message: 'Please select birth date',
    trigger: 'change'
  },
  hire_date: {
    required: true,
    type: 'number',
    message: 'Please select hire date',
    trigger: 'change'
  },
  dept_no: {
    required: true,
    message: 'Please select department',
    trigger: 'change'
  },
  title: {
    required: true,
    message: 'Please select title',
    trigger: 'change'
  },
  salary: {
    required: true,
    message: 'Please enter salary',
    trigger: 'blur'
  }
};

// Submit form
const handleSubmit = () => {
  formRef.value?.validate(async (errors: any) => {
    if (!errors) {
      const params: any = {
        dept_no: formData.dept_no,
        first_name: formData.first_name,
        last_name: formData.last_name,
        gender: formData.gender,
        salary: formData.salary,
        title: formData.title,
        emp_no: formData.emp_no,

        birth_date: formData.birth_date ? dayjs(formData.birth_date).format('YYYY-MM-DD') : null,
        hire_date: formData.hire_date ? dayjs(formData.hire_date).format('YYYY-MM-DD') : null
      };

      // 如果dept_no, salary,title 没有改变，删除没改变的值
      if (params.dept_no === initialData.value?.dept_no) delete params.dept_no;

      if (params.salary === initialData.value?.salary) delete params.salary;
      if (params.title === initialData.value?.title) delete params.title;

      try {
        if (emp_no) {
          // Call API to update employee information
          await updateEmployee(formData.emp_no, params).then(() => {
            // You can choose to return to the list page
            // router.push('/employees');
            message.success('Employee information updated successfully!');
          });
        } else {
          await addEmployee({
            ...params,
            emp_no: Math.floor(Math.random() * 900000) + 10000
          }).then(() => {
            // You can choose to return to the list page
            // router.push('/employees');
            message.success('Employee information added successfully!');
          });
        }

        loadEmployeeDetails();
      } catch (err) {
        console.error('提交员工信息失败:', err);
        message.error('提交员工信息失败');
      }
    } else {
      message.error('Please check the form information');
    }
  });
};

// Reset form
const handleReset = () => {
  formRef.value?.restoreValidation();
};

// Back to list
const handleBack = () => {
  router.push('/employees');
};

onMounted(() => {
  loadDepartments();
  loadEmployeeDetails();
});
</script>

<template>
  <div class="p-6">
    <NCard title="Employee Information" class="mx-auto">
      <NForm
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-placement="left"
        label-width="120px"
        class="space-y-4"
      >
        <NGrid :cols="2" :x-gap="24" :y-gap="16">
          <!-- Employee Number -->

          <NFormItemGi v-if="!!emp_no" label="Employee Number" path="emp_no">
            <NInput
              v-model:value="formData.emp_no"
              placeholder="Please enter employee number"
              disabled
              class="w-full"
            />
          </NFormItemGi>

          <!-- First Name -->
          <NFormItemGi label="First Name" path="first_name">
            <NInput v-model:value="formData.first_name" placeholder="Please enter first name" class="w-full" />
          </NFormItemGi>

          <!-- Last Name -->
          <NFormItemGi label="Last Name" path="last_name">
            <NInput v-model:value="formData.last_name" placeholder="Please enter last name" class="w-full" />
          </NFormItemGi>

          <!-- Gender -->
          <NFormItemGi label="Gender" path="gender">
            <NSelect
              v-model:value="formData.gender"
              :options="genderOptions"
              placeholder="Please select gender"
              class="w-full"
            />
          </NFormItemGi>

          <!-- Birth Date -->
          <NFormItemGi label="Birth Date" path="birth_date">
            <NDatePicker
              v-model:value="formData.birth_date"
              type="date"
              placeholder="Please select birth date"
              class="w-full"
            />
          </NFormItemGi>

          <!-- Hire Date -->
          <NFormItemGi label="Hire Date" path="hire_date">
            <NDatePicker
              v-model:value="formData.hire_date"
              type="date"
              placeholder="Please select hire date"
              class="w-full"
            />
          </NFormItemGi>
          <!-- department -->
          <NFormItemGi label="Department" path="department">
            <NSelect
              v-model:value="formData.dept_no"
              :options="departmentOptions"
              placeholder="Please select department"
              class="w-full"
            />
          </NFormItemGi>

          <!-- Title -->
          <NFormItemGi label="Title" path="title">
            <NInput v-model:value="formData.title" placeholder="Please enter title" class="w-full" />
          </NFormItemGi>

          <!-- Salary -->
          <NFormItemGi label="Salary" path="salary">
            <NInput v-model:value="formData.salary" placeholder="Please enter salary" class="w-full" />
          </NFormItemGi>
        </NGrid>

        <!-- Action Buttons -->
        <div class="mt-8 flex justify-end space-x-4">
          <NButton @click="handleBack">Cancel</NButton>
          <NButton type="info" @click="handleReset">Reset</NButton>
          <NButton type="primary" @click="handleSubmit">Save</NButton>
        </div>
      </NForm>
    </NCard>
  </div>
</template>

<style lang="scss" scoped>
.employee-detail {
  padding: 20px;

  .employee-form-card {
    max-width: 800px;
    margin: 0 auto;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 16px;
    margin-bottom: 24px;
  }

  .form-actions {
    display: flex;
    justify-content: center;
    padding-top: 16px;
    border-top: 1px solid var(--n-border-color);
  }
}

@media (max-width: 768px) {
  .employee-detail {
    padding: 10px;

    .form-grid {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  }
}
</style>
