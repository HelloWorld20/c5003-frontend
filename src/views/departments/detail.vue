<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NForm, NFormItemGi, NGrid, NInput, useMessage } from 'naive-ui';
import { addDepartment, updateDepartment } from '@/service/api/departments';

defineOptions({ name: 'DepartmentDetail' });

const route = useRoute();
const router = useRouter();
const message = useMessage();

// 获取路由参数中的部门信息（兼容列表页传入的小写字段）
// 可能的参数：Dept_ID、Dept_Name 或 dept_no、dept_name
const { Dept_ID, Dept_Name, dept_no, dept_name } = route.query;

// 表单数据：仅包含 Dept_ID、Dept_Name 两个字段
const formData = reactive({
  Dept_ID: (Dept_ID as string) || (dept_no as string) || '',
  Dept_Name: (Dept_Name as string) || (dept_name as string) || ''
});

// Form reference
const formRef = ref();

// 表单校验规则：两个字段必填
const rules: any = {
  Dept_ID: {
    required: true,
    message: 'Please enter Dept_ID',
    trigger: 'blur'
  },
  Dept_Name: {
    required: true,
    message: 'Please enter Dept_Name',
    trigger: 'blur'
  }
};

/**
 * 提交表单：如果存在 Dept_ID（编辑模式），则调用更新；否则调用新增
 */
const handleSubmit = () => {
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      // 组装提交参数
      const payload = {
        Dept_ID: formData.Dept_ID,
        Dept_Name: formData.Dept_Name
      };

      if (formData.Dept_ID) {
        // 更新部门信息
        updateDepartment(payload).then(() => {
          message.success('Department updated successfully!');
          // router.push('/departments');
        });
      } else {
        // 新增部门信息
        addDepartment(payload).then(() => {
          message.success('Department added successfully!');
          // router.push('/departments');
        });
      }
    } else {
      message.error('Please check the form information');
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
    Dept_ID: (Dept_ID as string) || (dept_no as string) || '',
    Dept_Name: (Dept_Name as string) || (dept_name as string) || ''
  });
};

/**
 * 返回列表页
 */
const handleBack = () => {
  router.push('/departments');
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
          <!-- Dept_ID -->
          <NFormItemGi label="Dept_ID" path="Dept_ID">
            <NInput
              v-model:value="formData.Dept_ID"
              placeholder="Please enter Dept_ID"
              :disabled="!!Dept_ID || !!dept_no"
              class="w-full"
            />
          </NFormItemGi>

          <!-- Dept_Name -->
          <NFormItemGi label="Dept_Name" path="Dept_Name">
            <NInput v-model:value="formData.Dept_Name" placeholder="Please enter Dept_Name" class="w-full" />
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
