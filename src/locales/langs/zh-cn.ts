const local: App.I18n.Schema = {
  system: {
    title: 'HR管理系統',
    updateTitle: '系統版本更新通知',
    updateContent: '檢測到系統有新版本發布，是否立即刷新頁面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍後再說'
  },
  common: {
    action: '操作',
    add: '新增',
    addSuccess: '添加成功',
    backToHome: '返回首頁',
    batchDelete: '批量刪除',
    cancel: '取消',
    close: '關閉',
    check: '勾選',
    expandColumn: '展開列',
    columnSetting: '列設置',
    config: '配置',
    confirm: '確認',
    delete: '刪除',
    deleteSuccess: '刪除成功',
    confirmDelete: '確認刪除嗎？',
    edit: '編輯',
    warning: '警告',
    error: '錯誤',
    index: '序號',
    keywordSearch: '請輸入關鍵詞搜索',
    loading: '數據加載中，請稍候...',
    logout: '退出登錄',
    logoutConfirm: '確認退出登錄嗎？',
    lookForward: '敬請期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '無數據',
    operate: '操作',
    pleaseCheckValue: '請檢查輸入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    switch: '切換',
    tip: '提示',
    trigger: '觸發',
    update: '更新',
    updateSuccess: '更新成功',
    userCenter: '個人中心',
    yesOrNo: {
      yes: '是',
      no: '否'
    }
  },
  request: {
    logout: '請求失敗後登出用戶',
    logoutMsg: '用戶狀態失效，請重新登錄',
    logoutWithModal: '請求失敗後彈出模態框再登出用戶',
    logoutWithModalMsg: '用戶狀態失效，請重新登錄',
    refreshToken: '請求的token已過期，刷新token',
    tokenExpired: 'token已過期'
  },
  theme: {
    themeSchema: {
      title: '主題模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟隨系統'
    },
    grayscale: '灰色模式',
    colourWeakness: '色弱模式',
    layoutMode: {
      title: '佈局模式',
      vertical: '左側菜單模式',
      'vertical-mix': '左側菜單混合模式',
      horizontal: '頂部菜單模式',
      'horizontal-mix': '頂部菜單混合模式',
      reverseHorizontalMix: '一級菜單與子級菜單位置反轉'
    },
    recommendColor: '應用推薦算法的顏色',
    recommendColorDesc: '推薦顏色的算法參照',
    themeColor: {
      title: '主題顏色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '錯誤色',
      followPrimary: '跟隨主色'
    },
    scrollMode: {
      title: '滾動模式',
      wrapper: '外層滾動',
      content: '主體滾動'
    },
    page: {
      animate: '頁面切換動畫',
      mode: {
        title: '頁面切換動畫類型',
        'fade-slide': '滑動',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '縮放消退',
        'zoom-fade': '漸變',
        'zoom-out': '閃現',
        none: '無'
      }
    },
    fixedHeaderAndTab: '固定頭部和標籤欄',
    header: {
      height: '頭部高度',
      breadcrumb: {
        visible: '顯示麵包屑',
        showIcon: '顯示麵包屑圖標'
      },
      multilingual: {
        visible: '顯示多語言按鈕'
      },
      globalSearch: {
        visible: '顯示全局搜索按鈕'
      }
    },
    tab: {
      visible: '顯示標籤欄',
      cache: '標籤欄信息緩存',
      height: '標籤欄高度',
      mode: {
        title: '標籤欄風格',
        chrome: '谷歌風格',
        button: '按鈕風格'
      }
    },
    sider: {
      inverted: '深色側邊欄',
      width: '側邊欄寬度',
      collapsedWidth: '側邊欄折疊寬度',
      mixWidth: '混合佈局側邊欄寬度',
      mixCollapsedWidth: '混合佈局側邊欄折疊寬度',
      mixChildMenuWidth: '混合佈局子菜單寬度'
    },
    footer: {
      visible: '顯示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    watermark: {
      visible: '顯示全屏水印',
      text: '水印文本',
      enableUserName: '啟用用戶名水印'
    },
    themeDrawerTitle: '主題配置',
    pageFunTitle: '頁面功能',
    resetCacheStrategy: {
      title: '重置緩存策略',
      close: '關閉頁面',
      refresh: '刷新頁面'
    },
    configOperation: {
      copyConfig: '複製配置',
      copySuccessMsg: '複製成功，請替換 src/theme/settings.ts 中的變量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登錄',
    403: '無權限',
    404: '頁面不存在',
    500: '服務器錯誤',
    'iframe-page': '外鏈頁面',
    home: '首頁',
    'demo-route': '演示路由',
    'demo-route_child': '演示子路由',
    manage: '系統管理',
    manage_user: '用戶管理',
    'employees-detail': '員工詳情'
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登錄 / 註冊',
        userNamePlaceholder: '請輸入用戶名',
        phonePlaceholder: '請輸入手機號',
        codePlaceholder: '請輸入驗證碼',
        passwordPlaceholder: '請輸入密碼',
        confirmPasswordPlaceholder: '請再次輸入密碼',
        codeLogin: '驗證碼登錄',
        confirm: '確定',
        back: '返回',
        validateSuccess: '驗證成功',
        loginSuccess: '登錄成功',
        welcomeBack: '歡迎回來，{userName} ！'
      },
      pwdLogin: {
        title: '密碼登錄',
        rememberMe: '記住我',
        forgetPassword: '忘記密碼？',
        register: '註冊賬號',
        otherAccountLogin: '其他賬號登錄',
        otherLoginMode: '其他登錄方式',
        superAdmin: '超級管理員',
        admin: '管理員',
        user: '普通用戶'
      },
      codeLogin: {
        title: '驗證碼登錄',
        getCode: '獲取驗證碼',
        reGetCode: '{time}秒後重新獲取',
        sendCodeSuccess: '驗證碼發送成功',
        imageCodePlaceholder: '請輸入圖片驗證碼'
      },
      register: {
        title: '註冊賬號',
        agreement: '我已經仔細閱讀並接受',
        protocol: '《用戶協議》',
        policy: '《隱私權政策》'
      },
      resetPwd: {
        title: '重置密碼'
      },
      bindWeChat: {
        title: '綁定微信'
      }
    },
    home: {
      branchDesc:
        '為了方便大家開發和更新合併，我們對main分支的代碼進行了精簡，只保留了首頁菜單，其餘內容已移至example分支進行維護。預覽地址顯示的內容即為example分支的內容。',
      greeting: '早安，{userName}, 今天又是充滿活力的一天!',
      weatherDesc: '今日多雲轉晴，20℃ - 25℃!',
      projectCount: '項目數',
      todo: '待辦',
      message: '消息',
      downloadCount: '下載量',
      registerCount: '註冊量',
      schedule: '作息安排',
      study: '學習',
      work: '工作',
      rest: '休息',
      entertainment: '娛樂',
      visitCount: '訪問量',
      turnover: '成交額',
      dealCount: '成交量',
      projectNews: {
        title: '項目動態',
        moreNews: '更多動態',
        desc1: 'Soybean 在2021年5月28日創建了開源項目 soybean-admin!',
        desc2: 'Yanbowe 向 soybean-admin 提交了一個bug，多標籤欄不會自適應。',
        desc3: 'Soybean 準備為 soybean-admin 的發布做充分的準備工作!',
        desc4: 'Soybean 正在忙於為soybean-admin寫項目說明文檔！',
        desc5: 'Soybean 剛才把工作臺頁面隨便寫了一些，湊合能看了！'
      },
      creativity: '創意'
    }
  },
  form: {
    required: '不能為空',
    userName: {
      required: '請輸入用戶名',
      invalid: '用戶名格式不正確'
    },
    phone: {
      required: '請輸入手機號',
      invalid: '手機號格式不正確'
    },
    pwd: {
      required: '請輸入密碼',
      invalid: '密碼格式不正確，6-18位字符，包含字母、數字、下劃線'
    },
    confirmPwd: {
      required: '請輸入確認密碼',
      invalid: '兩次輸入密碼不一致'
    },
    code: {
      required: '請輸入驗證碼',
      invalid: '驗證碼格式不正確'
    },
    email: {
      required: '請輸入郵箱',
      invalid: '郵箱格式不正確'
    }
  },
  dropdown: {
    closeCurrent: '關閉',
    closeOther: '關閉其它',
    closeLeft: '關閉左側',
    closeRight: '關閉右側',
    closeAll: '關閉所有'
  },
  icon: {
    themeConfig: '主題配置',
    themeSchema: '主題模式',
    lang: '切換語言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    reload: '刷新頁面',
    collapse: '折疊菜單',
    expand: '展開菜單',
    pin: '固定',
    unpin: '取消固定'
  },
  datatable: {
    itemCount: '共 {total} 條'
  }
};

export default local;
