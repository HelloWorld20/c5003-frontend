// const path = require('node:path');
// const express = require('express');
import path from 'node:path';
import express from 'express';

const app = express();
const port = 9527;

// 先挂载静态资源目录
app.use(express.static(path.resolve('./dist')));

/**
 * 单页应用（SPA）回退路由
 * 当请求路径不对应具体静态资源时，返回 dist/index.html，
 * 以支持刷新深链路（如 /home）时前端路由自行接管，避免 404。
 */
/**
 * 回退处理器
 * @param {import('express').Request} _req 未使用的请求对象（下划线前缀符合 ESLint 规则）
 * @param {import('express').Response} res 响应对象
 */
app.get('*', (_req, res) => {
  res.sendFile(path.resolve('./dist/index.html'));
});

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
});
