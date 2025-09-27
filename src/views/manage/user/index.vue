<script setup lang="ts">
import { h, onMounted, reactive, ref } from 'vue';
import type { DataTableColumns } from 'naive-ui';
import { NButton, NPopconfirm, NSpace, NTag } from 'naive-ui';

// 用户数据接口定义
interface UserData {
  id: number;
  username: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  role: string;
  createTime: string;
}

// 搜索表单数据
const searchForm = reactive({
  username: '',
  email: '',
  status: ''
});

// 用户列表数据
const userData = ref<UserData[]>([
  {
    id: 1,
    username: 'admin',
    email: 'admin@example.com',
    phone: '13800138000',
    status: 'active',
    role: '管理员',
    createTime: '2024-01-01 10:00:00'
  },
  {
    id: 2,
    username: 'user1',
    email: 'user1@example.com',
    phone: '13800138001',
    status: 'active',
    role: '普通用户',
    createTime: '2024-01-02 10:00:00'
  },
  {
    id: 3,
    username: 'user2',
    email: 'user2@example.com',
    phone: '13800138002',
    status: 'inactive',
    role: '普通用户',
    createTime: '2024-01-03 10:00:00'
  }
]);

// 分页数据
const pagination = reactive({
  page: 1,
  pageSize: 10,
  total: 3
});

// 加载状态
const loading = ref(false);

// 获取用户状态标签类型
function getUserStatusTagType(status: string) {
  return status === 'active' ? 'success' : 'error';
}

// 获取用户状态文本
function getUserStatusText(status: string) {
  return status === 'active' ? '正常' : '禁用';
}

// 表格列配置
const columns: DataTableColumns<UserData> = [
  {
    title: 'ID',
    key: 'id',
    width: 80
  },
  {
    title: '用户名',
    key: 'username',
    width: 120
  },
  {
    title: '邮箱',
    key: 'email',
    width: 200
  },
  {
    title: '手机号',
    key: 'phone',
    width: 140
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
    render: (row: UserData) => {
      return h(
        NTag,
        {
          type: getUserStatusTagType(row.status)
        },
        {
          default: () => getUserStatusText(row.status)
        }
      );
    }
  },
  {
    title: '角色',
    key: 'role',
    width: 120
  },
  {
    title: '创建时间',
    key: 'createTime',
    width: 180
  },
  {
    title: '操作',
    key: 'actions',
    width: 200,
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
                default: () => '编辑'
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
                      default: () => '删除'
                    }
                  ),
                default: () => '确定删除这个用户吗？'
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
}

// 删除用户
function handleDelete(row: UserData) {
  console.log('删除用户:', row);
  // 实现删除功能
  const index = userData.value.findIndex(item => item.id === row.id);
  if (index > -1) {
    userData.value.splice(index, 1);
    pagination.total -= 1;
  }
}

// 搜索用户
function handleSearch() {
  console.log('搜索条件:', searchForm);
  // 实现搜索功能
}

// 重置搜索
function handleReset() {
  Object.assign(searchForm, {
    username: '',
    email: '',
    status: ''
  });
}

// 新增用户
function handleAdd() {
  console.log('新增用户');
  // 实现新增功能
}

// 页面挂载时加载数据
onMounted(() => {
  // 初始化数据加载
});
</script>

<template>
  <div class="user-management">
    <!-- 搜索表单 -->
    <NCard title="搜索条件" class="mb-4">
      <NForm ref="searchFormRef" :model="searchForm" label-placement="left" label-width="80px" class="search-form">
        <NGrid :cols="4" :x-gap="16">
          <NFormItemGi label="用户名">
            <NInput v-model:value="searchForm.username" placeholder="请输入用户名" clearable />
          </NFormItemGi>
          <NFormItemGi label="邮箱">
            <NInput v-model:value="searchForm.email" placeholder="请输入邮箱" clearable />
          </NFormItemGi>
          <NFormItemGi label="状态">
            <NSelect
              v-model:value="searchForm.status"
              placeholder="请选择状态"
              clearable
              :options="[
                { label: '正常', value: 'active' },
                { label: '禁用', value: 'inactive' }
              ]"
            />
          </NFormItemGi>
          <NFormItemGi>
            <NSpace>
              <NButton type="primary" @click="handleSearch">
                <template #icon>
                  <icon-ic-round-search />
                </template>
                搜索
              </NButton>
              <NButton @click="handleReset">
                <template #icon>
                  <icon-ic-round-refresh />
                </template>
                重置
              </NButton>
            </NSpace>
          </NFormItemGi>
        </NGrid>
      </NForm>
    </NCard>

    <!-- 用户列表 -->
    <NCard title="用户列表">
      <template #header-extra>
        <NButton type="primary" @click="handleAdd">
          <template #icon>
            <icon-ic-round-add />
          </template>
          新增用户
        </NButton>
      </template>

      <NDataTable
        :columns="columns"
        :data="userData"
        :loading="loading"
        :pagination="pagination"
        :bordered="false"
        :single-line="false"
        class="user-table"
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
