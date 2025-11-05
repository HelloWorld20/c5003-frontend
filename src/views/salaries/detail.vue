<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NForm, NFormItemGi, NGrid, NInput, useMessage } from 'naive-ui';
import { addSalary, updateSalary } from '@/service/api/salary';

defineOptions({ name: 'SalaryDetail' });

const route = useRoute();
const router = useRouter();
const message = useMessage();

// 获取路由参数中的标题信息
// 示例：emp_no=10002&title=Staff&from_date=1996-08-03&to_date=9999-01-01
const { emp_no: Employee_ID, salary: Salary } = route.query;

// 表单数据（日期存储为时间戳，便于与 NDatePicker 绑定）
const formData = reactive({
  Employee_ID: (Employee_ID as string) || '',
  Salary: (Salary as string) || ''
});

// Form reference
const formRef = ref();

// 表单校验规则（日期字段为 number 类型）
const rules: any = {
  Employee_ID: {
    required: true,
    message: 'Please enter employee number',
    trigger: 'blur'
  },
  Salary: {
    required: true,
    message: 'Please enter salary',
    trigger: 'blur'
  }
};

/**
 * 提交表单：如果存在 Employee_ID（编辑模式），则调用更新接口；否则调用新增接口
 */
const handleSubmit = () => {
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      // 组装提交参数（将时间戳转为 yyyy-MM-dd）
      const payload = {
        Employee_ID: formData.Employee_ID,
        Salary: formData.Salary
      };

      if (formData.Employee_ID) {
        // 更新薪资信息
        updateSalary(payload).then(() => {
          message.success('Salary updated successfully!');
          // router.push('/salaries');
        });
      } else {
        // 新增薪资信息
        addSalary(payload).then(() => {
          message.success('Salary added successfully!');
          // router.push('/salaries');
        });
      }
    } else if (formData.Employee_ID) {
      // 更新薪资信息
      updateSalary(payload).then(() => {
        message.success('Salary updated successfully!');
        // router.push('/salaries');
      });
    } else {
      // 新增薪资信息
      addSalary(payload).then(() => {
        message.success('Salary added successfully!');
        // router.push('/salaries');
      });
    }
  });
};

/**
 * 重置表单：恢复到路由入参的初始值
 */
const handleReset = () => {
  formRef.value?.restoreValidation();
  // 重置为初始值
  Object.assign(formData, {
    Employee_ID: (Employee_ID as string) || '',
    Salary: (Salary as string) || ''
  });
};

/**
 * 返回列表页
 */
const handleBack = () => {
  router.push('/salaries');
};
</script>

<template>
  <div class="p-6">
    <NCard title="Salary Information" class="mx-auto">
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
          <NFormItemGi label="Employee Number" path="Employee_ID">
            <NInput
              v-model:value="formData.Employee_ID"
              placeholder="Please enter employee number"
              :disabled="!!Employee_ID"
              class="w-full"
            />
          </NFormItemGi>

          <!-- Salary -->
          <NFormItemGi label="Salary" path="Salary">
            <NInput v-model:value="formData.Salary" placeholder="Please enter salary" class="w-full" />
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
