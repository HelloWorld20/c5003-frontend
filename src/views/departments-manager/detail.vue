<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NForm, NFormItemGi, NGrid, NInput, NDatePicker, useMessage } from 'naive-ui';
import { addDepartment, updateDepartment } from '@/service/api/department-manage';
import dayjs from 'dayjs';

defineOptions({ name: 'DepartmentManagerDetail' });

const route = useRoute();
const router = useRouter();
const message = useMessage();

// Get route parameters for department manager information
// Example: emp_no=10001&dept_no=d001&from_date=1996-08-03&to_date=9999-01-01
const { emp_no, dept_no, from_date, to_date } = route.query;

// Form data (dates stored as timestamps for NDatePicker binding)
const formData = reactive({
  emp_no: (emp_no as string) || '',
  dept_no: (dept_no as string) || '',
  from_date: from_date ? dayjs(from_date as string).valueOf() : null,
  to_date: to_date ? dayjs(to_date as string).valueOf() : null
});

// Form reference
const formRef = ref();

// Form validation rules
const rules: any = {
  emp_no: {
    required: true,
    message: 'Please enter employee number',
    trigger: 'blur'
  },
  dept_no: {
    required: true,
    message: 'Please enter department number',
    trigger: 'blur'
  },
  from_date: {
    required: true,
    type: 'number',
    message: 'Please select from date',
    trigger: ['blur', 'change']
  }
};

/**
 * Submit form: if emp_no and dept_no exist (edit mode), call update API; otherwise call add API
 */
const handleSubmit = () => {
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      // Validate that from_date is provided
      if (!formData.from_date) {
        message.error('Please select from date');
        return;
      }

      // Prepare payload (convert timestamps to yyyy-MM-dd format)
      const payload: any = {
        emp_no: parseInt(formData.emp_no),
        dept_no: formData.dept_no,
        from_date: dayjs(formData.from_date).format('YYYY-MM-DD')
      };

      // to_date is optional, only include if provided
      if (formData.to_date) {
        payload.to_date = dayjs(formData.to_date).format('YYYY-MM-DD');
      }

      const isEditMode = emp_no && dept_no;

      if (isEditMode) {
        // Update department manager information
        updateDepartment(payload).then(() => {
          message.success('Department manager updated successfully!');
          router.push('/departments-manager');
        }).catch((err: any) => {
          console.error('Update error:', err);
          message.error(err?.message || err?.response?.data?.detail || 'Failed to update department manager');
        });
      } else {
        // Add new department manager
        addDepartment(payload).then(() => {
          message.success('Department manager added successfully!');
          router.push('/departments-manager');
        }).catch((err: any) => {
          console.error('Add error:', err);
          message.error(err?.message || err?.response?.data?.detail || 'Failed to add department manager');
        });
      }
    } else {
      console.error('Validation errors:', errors);
      message.error('Please check the form information');
    }
  });
};

/**
 * Reset form: restore to initial values from route parameters
 */
const handleReset = () => {
  formRef.value?.restoreValidation();
  // Reset to initial values
  Object.assign(formData, {
    emp_no: (emp_no as string) || '',
    dept_no: (dept_no as string) || '',
    from_date: from_date ? dayjs(from_date as string).valueOf() : null,
    to_date: to_date ? dayjs(to_date as string).valueOf() : null
  });
};

/**
 * Return to list page
 */
const handleBack = () => {
  router.push('/departments-manager');
};
</script>

<template>
  <div class="p-6">
    <NCard title="Department Information" class="mx-auto">
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
          <NFormItemGi label="Employee Number" path="emp_no">
            <NInput
              v-model:value="formData.emp_no"
              placeholder="Please enter employee number"
              :disabled="!!emp_no"
              class="w-full"
            />
          </NFormItemGi>

          <!-- Department Number -->
          <NFormItemGi label="Department Number" path="dept_no">
            <NInput
              v-model:value="formData.dept_no"
              placeholder="Please enter department number"
              :disabled="!!dept_no"
              class="w-full"
            />
          </NFormItemGi>

          <!-- From Date -->
          <NFormItemGi label="From Date" path="from_date">
            <NDatePicker
              v-model:value="formData.from_date"
              type="date"
              placeholder="Select from date"
              style="width: 100%"
            />
          </NFormItemGi>

          <!-- To Date (Optional) -->
          <NFormItemGi label="To Date" path="to_date">
            <NDatePicker
              v-model:value="formData.to_date"
              type="date"
              placeholder="Select to date (optional, defaults to 9999-01-01)"
              style="width: 100%"
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
