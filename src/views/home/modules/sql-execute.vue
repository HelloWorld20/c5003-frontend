<script lang="ts" setup>
import { computed, ref } from 'vue';
import { fetchExecutor } from '@/service/api/executor';
defineOptions({ name: 'SqlExecutor' });

// 接口返回的原始结果（数组/对象/字符串等）
const result = ref<any>(null);
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
  result.value = null;
  error.value = '';
};

/**
 * 执行 SQL，并根据接口返回设置结果与错误状态
 *
 * - 成功：`result` 直接保存原始数据（数组/对象/基础类型）
 * - 失败：`error` 保存错误信息字符串，清空结果
 */
const handleRun = async () => {
  loading.value = true;
  try {
    const res = await fetchExecutor(sql.value);
    result.value = res;
    error.value = '';
  } catch (err: any) {
    // console.log('err', err);
    error.value = String(err?.message ?? err);
    result.value = null;
  } finally {
    loading.value = false;
  }
};

// const handleCopy = (_sql: string) => {
//   navigator.clipboard.writeText(_sql);
//   window.$message?.success('复制成功');
// };

// const handleCopy2Input = (_sql: string) => {
//   sql.value = _sql;
// };
/**
 * 计算数组结果的列集合（合并所有行的键，保持唯一）
 */
const arrayKeys = computed(() => {
  const arr = Array.isArray(result.value) ? result.value : [];
  const set = new Set<string>();
  for (const row of arr) {
    Object.keys(row || {}).forEach(k => set.add(k));
  }
  return Array.from(set);
});

/**
 * 单元格格式化：对象与数组展示为紧凑 JSON，其他类型按原值显示
 */
function formatCell(val: unknown): string {
  if (val === null || val === undefined) return '';
  if (typeof val === 'object') return JSON.stringify(val);
  return String(val);
}

/**
 * 美化对象值为带缩进的 JSON 字符串
 */
function pretty(val: unknown): string {
  try {
    return JSON.stringify(val, null, 2);
  } catch {
    return String(val);
  }
}

/**
 * 计算对象结果的键值对数组，便于在模板中安全遍历与显示
 */
const objectPairs = computed((): Array<[string | number, unknown]> => {
  const obj = result.value;
  if (obj && typeof obj === 'object' && !Array.isArray(obj)) {
    try {
      return Object.entries(obj as Record<string | number, unknown>);
    } catch {
      return [];
    }
  }
  return [];
});
</script>

<template>
  <NSpace vertical :size="16">
    <NCard title="SQL">
      <div class="flex gap-8px">
        <NInput v-model:value="sql" type="textarea" />
        <NButton type="primary" :loading="loading" @click="handleRun">execute</NButton>
        <NButton type="warning" @click="handleClean">clear</NButton>
      </div>
    </NCard>
    <NCard v-if="result !== null" title="result">
      <!-- 数组：使用 NTable 动态生成列与行 -->
      <template v-if="Array.isArray(result)">
        <NTable>
          <thead>
            <tr>
              <th v-for="col in arrayKeys" :key="col">{{ col }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, idx) in result" :key="idx">
              <td v-for="col in arrayKeys" :key="col">
                {{ formatCell(row?.[col]) }}
              </td>
            </tr>
          </tbody>
        </NTable>
      </template>

      <!-- 对象：使用 NDescriptions 展示键值对；复杂值用预格式化 JSON -->
      <template v-else-if="typeof result === 'object' && result">
        <NDescriptions bordered label-placement="left" :column="2">
          <NDescriptionsItem v-for="[key, val] in objectPairs" :key="String(key)" :label="String(key)">
            <pre v-if="typeof val === 'object'" style="margin:0">{{ pretty(val) }}</pre>
            <span v-else>{{ String(val) }}</span>
          </NDescriptionsItem>
        </NDescriptions>
      </template>

      <!-- 其他类型：以代码块形式展示 -->
      <template v-else>
        <NCode :code="String(result)" language="json" />
      </template>
    </NCard>
    <NCard v-if="error" title="error info">
      <NAlert type="error">
        {{ error }}
      </NAlert>
    </NCard>
    <!--
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
-->
  </NSpace>
</template>

<style lang="scss" scoped></style>
