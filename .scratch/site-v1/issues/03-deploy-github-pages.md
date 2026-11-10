# 03: 部署到 GitHub Pages

**What to build:** 把站点发布到 `https://itsxzh99.github.io`。将 GitHub 仓库改名为 `itsxzh99.github.io`（执行前必须向作者确认），并配置 GitHub Actions：push 到 `main` 时依次安装依赖、构建、运行 E2E、上传静态产物、部署 GitHub Pages；产物根目录包含 `.nojekyll`。上线后首页和静态资源都能从根域名访问，且 E2E 失败时不会部署。

**Blocked by:** 01（工具链与第一页）。技术上不依赖样式；建议在 02 之后执行，让线上版本已有完整外壳。

**Status:** ready-for-agent

- [ ] 仓库已改名为 `itsxzh99.github.io`，本地 remote 同步更新，且作者已确认。
- [ ] push `main` 触发工作流：安装 → 构建 → E2E → 上传 → 部署。
- [ ] `https://itsxzh99.github.io` 可访问首页，CSS/JS 等静态资源无 404。
- [ ] 构建产物包含 `.nojekyll`。
- [ ] 人为让 E2E 失败时，部署步骤不会执行。
