# 01: 工具链与第一页

**What to build:** 初始化一个能构建为纯静态站点的 Next.js + TypeScript 项目，并让首页只显示站点名 `itsxzh`。`npm run build` 必须产出可直接静态托管的文件，`npm run preview` 能本地打开；同时建立 Playwright 端到端测试接缝：测试命令会先构建、再启动静态服务器、再断言首页可访问。此票不追求视觉样式，只证明“仓库 → 构建 → 页面 → 测试”这条链路成立。

**Blocked by:** None (can start immediately)

**Status:** ready-for-agent

- [x] 使用 Next.js App Router、TypeScript strict 和 npm；`npm run build` 成功并生成静态产物。
- [x] 静态产物可由本地静态服务器打开，首页显示 `itsxzh`。
- [x] 页面 `lang="zh-CN"`，有唯一 `h1`，浏览器控制台无错误。
- [x] `npm run test:e2e` 会自动构建、启动服务器并运行 Playwright；首页冒烟测试通过。
- [x] 构建过程无 TypeScript 错误。

## Comments

- 2026-11-19：Ticket 01 完成。`npm run typecheck` 无输出、退出码 0；`npm run build` 成功生成 `out/`；`npm run test:e2e` 1 passed（chromium，首页冒烟测试：状态码、`lang`、唯一 `h1`、文案、无 console error）。commit `1957857`（静态导出脚手架）、`da9dcf3` 与 `bd64d4b`（Playwright 冒烟测试）、`47228a7`（typecheck 脚本）。
