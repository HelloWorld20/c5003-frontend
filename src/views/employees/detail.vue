<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NDatePicker, NForm, NFormItemGi, NGrid, NInput, NSelect, useMessage } from 'naive-ui';
import { addEmployee, updateEmployee } from '@/service/api/employee';

defineOptions({ name: 'EmployeeDetail' });

const route = useRoute();
const router = useRouter();
const message = useMessage();

// Get employee information from route parameters
const { emp_no, birth_date, first_name, last_name, gender, hire_date } = route.query;

// Form data
const formData = reactive({
  emp_no: (emp_no as string) || '',
  birth_date: birth_date ? new Date(birth_date as string).getTime() : null,
  first_name: (first_name as string) || '',
  last_name: (last_name as string) || '',
  gender: (gender as string) || '',
  hire_date: hire_date ? new Date(hire_date as string).getTime() : null
});

// Form reference
const formRef = ref();

// Gender options
const genderOptions = [
  { label: 'Male', value: 'M' },
  { label: 'Female', value: 'F' }
];

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
  }
};

// Submit form
const handleSubmit = () => {
  console.log('formData', formData, formData.birth_date, formData.hire_date);
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      // Here you can call API to save data
      console.log('Submitted data:', {
        ...formData,
        birth_date: formData.birth_date ? new Date(formData.birth_date).toISOString().split('T')[0] : null,
        hire_date: formData.hire_date ? new Date(formData.hire_date).toISOString().split('T')[0] : null
      });

      if (emp_no) {
        // Call API to update employee information
        updateEmployee(formData.emp_no, {
          ...formData,
          birth_date: formData.birth_date ? new Date(formData.birth_date).toISOString().split('T')[0] : null,
          hire_date: formData.hire_date ? new Date(formData.hire_date).toISOString().split('T')[0] : null
        }).then(() => {
          // You can choose to return to the list page
          // router.push('/employees');
          message.success('Employee information updated successfully!');
        });
      } else {
        addEmployee({
          ...formData,
          birth_date: formData.birth_date ? new Date(formData.birth_date).toISOString().split('T')[0] : null,
          hire_date: formData.hire_date ? new Date(formData.hire_date).toISOString().split('T')[0] : null
        }).then(() => {
          // You can choose to return to the list page
          // router.push('/employees');
          message.success('Employee information added successfully!');
        });
      }
    } else {
      message.error('Please check the form information');
    }
  });
};

// Reset form
const handleReset = () => {
  formRef.value?.restoreValidation();
  // Reset to initial values
  Object.assign(formData, {
    emp_no: (emp_no as string) || '',
    birth_date: birth_date ? new Date(birth_date as string).getTime() : null,
    first_name: (first_name as string) || '',
    last_name: (last_name as string) || '',
    gender: (gender as string) || '',
    hire_date: hire_date ? new Date(hire_date as string).getTime() : null
  });
};

// Back to list
const handleBack = () => {
  router.push('/employees');
};
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
