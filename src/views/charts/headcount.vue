<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue';
import * as echarts from 'echarts';
import { fetchHeadcountChanges } from '@/service/api/headcount';

defineOptions({ name: 'HeadcountChart' });

/**
 * 搜索表单状态：起始与结束年份
 */
const searchForm = reactive<{ start_year: number | null; end_year: number | null }>({
  start_year: 1985,
  end_year: 2002
});

/**
 * 图表容器与实例引用
 */
const chartRef = ref<HTMLDivElement | null>(null);
let chart: echarts.ECharts | null = null;

/**
 * 根据接口返回的数据渲染 ECharts 图表
 *
 * @param resp 接口返回对象，包含 `data` 与 `summary`
 */
function renderChart(resp: any) {
  if (!chart) return;
  const list = Array.isArray(resp?.data) ? resp.data : [];

  const years = list.map((i: any) => i.year);
  const hires = list.map((i: any) => i.new_hires);
  const departures = list.map((i: any) => i.departures);
  const netChange = list.map((i: any) => i.net_change);
  const turnover = list.map((i: any) => i.turnover_rate_percent);

  const option: echarts.EChartsOption = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['New Hires', 'Departures', 'Net Change', 'Turnover %'] },
    grid: { left: '3%', right: '4%', bottom: '6%', containLabel: true },
    xAxis: { type: 'category', data: years },
    yAxis: [
      { type: 'value', name: 'Headcount' },
      { type: 'value', name: 'Turnover %', position: 'right' }
    ],
    series: [
      { name: 'New Hires', type: 'bar', data: hires },
      { name: 'Departures', type: 'bar', data: departures },
      { name: 'Net Change', type: 'line', data: netChange, yAxisIndex: 0 },
      { name: 'Turnover %', type: 'line', data: turnover, yAxisIndex: 1 }
    ]
  };

  chart.setOption(option);
}

/**
 * 拉取接口数据并渲染图表
 */
async function search() {
  const params: Record<string, any> = {
    start_year: searchForm.start_year ?? undefined,
    end_year: searchForm.end_year ?? undefined
  };
  try {
    const resp = await fetchHeadcountChanges(params);
    renderChart(resp);
  } catch (err) {
    console.error('获取人力变动数据失败:', err);
    window.$message?.error('获取数据失败');
  }
}

/**
 * 重置搜索条件并重新查询
 */
function handleReset() {
  searchForm.start_year = 1999;
  searchForm.end_year = 2025;
  search();
}

/**
 * 点击搜索按钮触发查询
 */
function handleSearch() {
  search();
}

/**
 * 初始化图表实例并订阅窗口 resize
 */
function initChart() {
  if (!chartRef.value) return;
  chart = echarts.init(chartRef.value);
  window.addEventListener('resize', resizeChart);
}

/**
 * 图表自适应窗口大小
 */
function resizeChart() {
  chart?.resize();
}

onMounted(() => {
  initChart();
  search();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart);
  chart?.dispose();
  chart = null;
});
</script>

<template>
  <div class="headcount-page">
    <NCard title="Headcount Changes" class="mb-4">
      <NForm :model="searchForm" label-placement="left" label-width="100px" class="search-form">
        <NGrid :cols="4" :x-gap="16">
          <NFormItemGi label="start_year">
            <NInputNumber v-model:value="searchForm.start_year" :min="1900" :max="2100" />
          </NFormItemGi>
          <NFormItemGi label="end_year">
            <NInputNumber v-model:value="searchForm.end_year" :min="1900" :max="2100" />
          </NFormItemGi>
          <NFormItemGi>
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

    <NCard title="Chart">
      <div ref="chartRef" style="height: 420px; width: 100%" />
    </NCard>
  </div>
</template>

<style scoped></style>
