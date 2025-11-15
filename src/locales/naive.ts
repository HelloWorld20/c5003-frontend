import { dateEnUS, dateZhCN, enUS, zhCN } from 'naive-ui';
import type { NDateLocale, NLocale } from 'naive-ui';

// Create Traditional Chinese locale by modifying Simplified Chinese locale
const zhTW: NLocale = {
  ...zhCN,
  Input: {
    ...zhCN.Input,
    placeholder: '請輸入'
  },
  Select: {
    ...zhCN.Select,
    placeholder: '請選擇'
  },
  DatePicker: {
    ...zhCN.DatePicker,
    dateFormat: 'yyyy-MM-dd',
    dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
    monthFormat: 'yyyy-MM',
    yearFormat: 'yyyy',
    quarterFormat: 'yyyy-QQQQ',
    clear: '清除',
    now: '現在',
    confirm: '確認',
    selectTime: '選擇時間',
    selectDate: '選擇日期',
    datePlaceholder: '選擇日期',
    datetimePlaceholder: '選擇日期時間',
    monthPlaceholder: '選擇月份',
    yearPlaceholder: '選擇年份',
    quarterPlaceholder: '選擇季度',
    startDatePlaceholder: '開始日期',
    endDatePlaceholder: '結束日期',
    startDatetimePlaceholder: '開始日期時間',
    endDatetimePlaceholder: '結束日期時間',
    startMonthPlaceholder: '開始月份',
    endMonthPlaceholder: '結束月份',
    monthBeforeYear: true,
    firstDayOfWeek: 7 as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7,
    today: '今天'
  }
};

// Create Traditional Chinese date locale
const dateZhTW: NDateLocale = {
  ...dateZhCN,
  monthFormat: 'yyyy年M月',
  yearFormat: 'yyyy年',
  monthBeforeYear: true,
  firstDayOfWeek: 7 as 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7
};

export const naiveLocales: Record<App.I18n.LangType, NLocale> = {
  'zh-CN': zhTW, // Use Traditional Chinese for zh-CN
  'en-US': enUS
};

export const naiveDateLocales: Record<App.I18n.LangType, NDateLocale> = {
  'zh-CN': dateZhTW, // Use Traditional Chinese for zh-CN
  'en-US': dateEnUS
};
