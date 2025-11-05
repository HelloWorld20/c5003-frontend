<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { NButton, NCard, NForm, NFormItemGi, NGrid, NInput, useMessage } from 'naive-ui';
import { addTitle, updateTitle } from '@/service/api/titles';

defineOptions({ name: 'TitleDetail' });

const route = useRoute();
const router = useRouter();
const message = useMessage();

// 获取路由参数中的标题信息
// 示例：emp_no=10002&title=Staff&from_date=1996-08-03&to_date=9999-01-01
const { emp_no, title, from_date, to_date } = route.query;

// 表单数据（日期存储为时间戳，便于与 NDatePicker 绑定）
const formData = reactive({
  emp_no: (emp_no as string) || '',
  title: (title as string) || '',
  from_date: from_date ? new Date(from_date as string).getTime() : null,
  to_date: to_date ? new Date(to_date as string).getTime() : null
});

// Form reference
const formRef = ref();

// 表单校验规则（日期字段为 number 类型）
const rules: any = {
  emp_no: {
    required: true,
    message: 'Please enter employee number',
    trigger: 'blur'
  },
  title: {
    required: true,
    message: 'Please enter title',
    trigger: 'blur'
  },
  from_date: {
    required: true,
    type: 'number',
    message: 'Please select from date',
    trigger: 'change'
  },
  to_date: {
    required: true,
    type: 'number',
    message: 'Please select to date',
    trigger: 'change'
  }
};

/**
 * 提交表单：如果存在 emp_no（编辑模式），则调用更新接口；否则调用新增接口
 */
const handleSubmit = () => {
  formRef.value?.validate((errors: any) => {
    if (!errors) {
      // 组装提交参数（将时间戳转为 yyyy-MM-dd）
      const payload = {
        emp_no: formData.emp_no,
        title: formData.title,
        from_date: formData.from_date ? new Date(formData.from_date).toISOString().split('T')[0] : null,
        to_date: formData.to_date ? new Date(formData.to_date).toISOString().split('T')[0] : null
      };

      if (route.query.emp_no) {
        // 更新标题信息
        updateTitle(payload).then(() => {
          message.success('Title updated successfully!');
          // router.push('/titles');
        });
      } else {
        // 新增标题信息
        addTitle(payload).then(() => {
          message.success('Title added successfully!');
          // router.push('/titles');
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
    emp_no: (emp_no as string) || '',
    title: (title as string) || '',
    from_date: from_date ? new Date(from_date as string).getTime() : null,
    to_date: to_date ? new Date(to_date as string).getTime() : null
  });
};

/**
 * 返回列表页
 */
const handleBack = () => {
  router.push('/titles');
};
</script>

<template>
  <div class="p-6">
    <NCard title="Title Information" class="mx-auto">
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

          <!-- Title -->
          <NFormItemGi label="Title" path="title">
            <NInput v-model:value="formData.title" placeholder="Please enter title" class="w-full" />
          </NFormItemGi>

          <!-- From Date -->
          <NFormItemGi label="From Date" path="from_date">
            <NDatePicker
              v-model:value="formData.from_date"
              type="date"
              placeholder="Please select from date"
              class="w-full"
            />
          </NFormItemGi>

          <!-- To Date -->
          <NFormItemGi label="To Date" path="to_date">
            <NDatePicker
              v-model:value="formData.to_date"
              type="date"
              placeholder="Please select to date"
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
