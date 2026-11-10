# 使用 Next.js 静态导出构建站点

站点需要 React 生态、Markdown/MDX 内容与 GitHub Pages 静态托管。选择 Next.js App Router + `output: 'export'`，因为它同时提供文件路由、MDX 与 SSG；Vite + React Router 需要自行补预渲染，Astro 虽更适合内容站但不属于 React 生态。
