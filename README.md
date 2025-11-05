# 如何运行代码

## 1) 安装 Node.js（必须）
- 打开 https://nodejs.org 下载并安装最新版的安装包。
- 根据指引安装完成后打开终端/命令提示符，输入：
  ```bash
  node -v
  ```

## 2) 运行

```bash
node app.mjs
```

服务启动后，浏览器访问`http://localhost:9527`即可访问前端界面


<!-- # 用最简单的方式运行本项目（零基础友好）

本项目基于 Vue 3 + Vite + TypeScript。按照下面 5 步即可在 Windows、macOS 或 Linux 上跑起来。

## 1) 安装 Node.js（必须）
- 打开 https://nodejs.org 下载并安装「LTS」版本（推荐 20 及以上）。
- 安装完成后打开终端/命令提示符，输入：
  ```bash
  node -v  # 显示 v20.x.x 及以上即可
  ```

## 2) 安装 pnpm（用于安装依赖）
- 推荐方式（Node 自带的 corepack）：
  ```bash
  corepack enable
  corepack prepare pnpm@10.5.0 --activate
  ```
- 如果上面不工作，可使用 npm：
  ```bash
  npm i -g pnpm@10.5.0
  ```
- 验证：
  ```bash
  pnpm -v  # 显示 10.5.0 或以上即可
  ```

## 3) 安装项目依赖
在项目根目录（本文件所在位置）打开终端，执行：
```bash
pnpm i
```
（重要）本项目使用 pnpm 的 monorepo 管理方式，请不要用 npm 或 yarn 安装依赖。

## 4) 本地启动（开发）
```bash
pnpm dev
```
- 启动成功后，浏览器会自动打开；若没有，请手动访问：
  - http://localhost:9527/
- 结束运行：在终端按 Ctrl + C。

遇到问题时，优先确认：
- Node 版本是否为 20+；
- 是否已安装并使用 pnpm；
- 端口 9527 是否被其他程序占用（占用可关闭后重试）。

 -->
