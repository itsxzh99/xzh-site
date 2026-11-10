# 04: Project 路径

**What to build:** 打通“一个 Project MDX 文件 → 首页精选 → 列表 → 详情”的完整路径。建立可复用的内容层：解析 frontmatter、用 `zod` 校验、以文件名作为 slug、按 `order` 升序再按日期倒序、排除 `draft`、识别 `placeholder`；非法或缺失字段必须让构建失败并指出文件名与字段名。放入 3 个占位 Project（覆盖有 repo、有 demo、两者都有或都无的差异，全部 `featured: true` 并用 `order` 控制顺序）和 1 个草稿夹具。`/projects/` 列表显示标题、摘要、日期、技术栈摘要和示例标记；`/projects/[slug]/` 详情显示标题、摘要、日期、角色、技术栈、相关链接、占位提示条和 MDX 正文（标题、列表、链接、代码块）；首页展示最多 3 个 Featured Project。内容层要为 05 的 Post 复用留出清晰边界，但本票不实现 Post。

**Blocked by:** 02（视觉系统与站点外壳）

**Status:** ready-for-agent

- [ ] 3 个占位 Project 按 `order` 出现在列表和首页；详情页可正常打开。
- [ ] 详情页显示角色、技术栈、相关链接、占位提示条，并正确渲染 MDX 标题、列表、链接和代码块。
- [ ] 草稿夹具不出现在列表或首页，其详情 URL 返回 404。
- [ ] frontmatter 缺字段或类型错误时构建失败，错误信息包含文件名和字段名。
- [ ] 内容层可被后续 Post 类型复用，没有把 Project 专有逻辑写死在通用解析里。
- [ ] E2E 覆盖列表顺序、详情要素、首页精选顺序和草稿排除。
