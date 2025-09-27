<script lang="ts" setup>
import { ref } from 'vue';
import { fetchExecutor } from '@/service/api/executor';
defineOptions({ name: 'SqlExecutor' });

const result = ref('');
const error = ref('');
const loading = ref(false);
const examples = [
  'SELECT * FROM departments',
  'SELECT emp_no FROM dept_emp',
  "SELECT dept_no FROM dept_emp WHERE dept_no = 'd005'",
  'SELECT salary FROM salaries WHERE salary >= 140000 AND salary <150000',
  'SELECT * FROM dept_emp ORDER BY emp_no LIMIT 10 OFFSET 0',
  'SELECT COUNT(*) FROM dept_emp',
  'SELECT CEILING(COUNT(*) / 10) FROM dept_emp',
  "SELECT * FROM dept_emp WHERE timestamp(from_date) > '1989-05-28' < '1995-10-18' LIMIT 10",
  "SELECT * FROM dept_emp WHERE timestamp(from_date) between '1989-05-28' and '1995-10-18' LIMIT 10",
  "INSERT INTO departments (dept_no, dept_name) VALUES ('d666', 'Mayer')",
  "UPDATE departments SET dept_no='d777', dept_name='Vice Mayer' WHERE dept_no='d666'",
  "DELETE FROM departments WHERE dept_no='d777'"
];

const sql = ref(examples[0]);

const handleClean = () => {
  sql.value = '';
  result.value = '';
  error.value = '';
};

const handleRun = async () => {
  loading.value = true;
  try {
    const res = await fetchExecutor(sql.value);
    result.value = JSON.stringify(res);
    error.value = '';
  } catch (err: any) {
    // console.log('err', err);
    error.value = err;
    result.value = '';
  } finally {
    loading.value = false;
  }
};

const handleCopy = (_sql: string) => {
  navigator.clipboard.writeText(_sql);
  window.$message?.success('复制成功');
};

const handleCopy2Input = (_sql: string) => {
  sql.value = _sql;
};
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="SQL执行">
      <div class="flex gap-8px">
        <NInput v-model:value="sql" placeholder="请输入SQL语句并且点击执行" />
        <NButton type="primary" :loading="loading" @click="handleRun">执行</NButton>
        <NButton type="warning" @click="handleClean">清空</NButton>
      </div>
    </NCard>
    <NCard v-if="result" title="执行结果">
      {{ result }}
    </NCard>
    <NCard v-if="error" title="报错信息">
      <NAlert type="error">
        {{ error }}
      </NAlert>
    </NCard>
    <NCard title="SQL举例">
      <NTable>
        <thead>
          <tr>
            <th>SQL语句</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="_sql in examples" :key="_sql">
            <td>{{ _sql }}</td>
            <td>
              <NButton quaternary type="info" size="small" class="mr-8px" @click="handleCopy2Input(_sql)">
                复制到输入框
              </NButton>
              <NButton quaternary type="info" size="small" @click="handleCopy(_sql)">复制到粘贴板</NButton>
            </td>
          </tr>
        </tbody>
      </NTable>
    </NCard>
  </NSpace>
</template>

<style lang="scss" scoped></style>
