# 07: SEO 与订阅输出

**What to build:** 为所有公开页面补齐 SEO 元数据：首页标题为 `itsxzh — 开发者，写代码也写字`，其他页为 `页面名 · itsxzh`；每页有基于摘要的 description、canonical、OG 的 title/description/type/url/site_name 和 Twitter summary card；`metadataBase` 为 `https://itsxzh99.github.io`。生成全文 RSS，包含最近 20 篇非草稿 Post 的标题、链接、日期、摘要和正文 HTML，语言 `zh-CN`；生成 sitemap，包含公开静态页面和非草稿 Project/Post 详情，排除 404 与草稿；生成 robots，允许全部抓取并指向 sitemap。v1 不做动态 OG 图片和 JSON-LD。

**Blocked by:** 04（Project 路径）、05（Post 路径）

**Status:** ready-for-agent

- [ ] 首页、Project 详情、Post 详情、About 的 title、description、canonical、OG、Twitter 标签正确。
- [ ] `/rss.xml` 返回合法 XML，包含 3 篇已发布 Post 的全文，不含草稿。
- [ ] `/sitemap.xml` 包含公开页面和非草稿详情，不含 404 与草稿。
- [ ] `/robots.txt` 允许抓取并包含 sitemap 地址。
- [ ] E2E 覆盖 RSS、sitemap、robots 和关键页面的元数据。
