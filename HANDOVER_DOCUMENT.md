# fading-moments 站点级交接文档

**文档版本**: v1.0  
**生成时间**: 2026-03-06  
**交接范围**: 全站结构审计  
**目标读者**: Codex（Bug 审计与修复）

---

## 1. 站点主模块状态总览

### 模块状态图例
- ✅ **已完成** — 页面存在，功能完整，导航已接入，可正常访问
- 🟡 **部分完成** — 页面存在但内容待完善，或导航结构待统一
- 🔴 **未完成但已接入导航** — 导航/首页有入口，但页面不存在（真实 404 风险）
- ⚪ **计划中** — 尚未开发，导航中无入口（正常未开发状态）

### 主模块状态表

| 主模块 | 状态 | 三语完成度 | 导航入口 | 真实页面 | 404 风险 |
|--------|------|------------|----------|----------|----------|
| **Home** | ✅ 已完成 | 100% (EN/DE/ZH) | ✅ 有 | ✅ 存在 | 无 |
| **About** | ✅ 已完成 | 100% (EN/DE/ZH) | ✅ 有 | ✅ 存在 | 无 |
| **Writing** | 🟡 部分完成 | 见子模块分解 | ✅ 有 | 见子模块 | 见子模块 |
| **Visual Archive** | 🔴 **未完成但已接入导航** | 0% | ✅ 有 | ❌ 不存在 | **高风险** |
| **Films & Music** | 🔴 **未完成但已接入导航** | 0% | ✅ 有 | ❌ 不存在 | **高风险** |
| **Studio** | 🔴 **未完成但已接入导航** | 0% | ✅ 有 | ❌ 不存在 | **高风险** |
| **Digital Lab** | 🔴 **未完成但已接入导航** | 0% | ✅ 有 | ❌ 不存在 | **高风险** |

---

## 2. Writing 模块子模块分解

### Writing 子模块状态表

| 子模块 | 状态 | 三语完成度 | 导航入口 | 真实页面 | 404 风险 |
|--------|------|------------|----------|----------|----------|
| **Writing 首页** | ✅ 已完成 | 100% | ✅ 有 | ✅ 存在 | 无 |
| **Novels 列表页** | ✅ 已完成 | 100% | ✅ 有 | ✅ 存在 | 无 |
| **Novel: The Night at the Station** | ✅ 已完成 | 100% | ✅ 有 | ✅ 存在 | 无 |
| **Essays 列表页** | ✅ 已创建并可访问 | 100% | ✅ 有 | ✅ 存在 | 无（但导航结构旧） |
| **Notes 列表页** | 🔴 **已有入口但页面不存在** | 0% | ✅ 有 | ❌ 不存在 | **高风险** |

### Writing 首页导航链接审计

**Writing 首页 (en/writing/index.html)** 包含以下入口卡片：

| 卡片 | 链接目标 | 页面状态 | 风险 |
|------|----------|----------|------|
| Essays ✍️ | /en/writing/essays/ | ✅ 存在 | 无 |
| Novels 📖 | /en/writing/novels/ | ✅ 存在 | 无 |
| Notes 📝 | /en/writing/notes/ | ❌ 不存在 | **404 风险** |

**注意**: Notes 卡片在 Writing 首页存在，但目标页面未创建。

---

## 3. 三语页面映射与缺失分析

### 已完成模块的三语映射

#### Novels 子模块（三语齐全，slug 一致）
```
Novels 列表页
├── en/writing/novels/index.html  ✅
├── de/writing/novels/index.html  ✅
└── zh/writing/novels/index.html  ✅

The Night at the Station 目录页
├── en/writing/night-at-station/index.html  ✅
├── de/writing/night-at-station/index.html  ✅
└── zh/writing/night-at-station/index.html  ✅

Chapter 1-5（每章三语齐全，slug 一致为 chapter-1 至 chapter-5）
├── en/writing/night-at-station/chapter-*/index.html  ✅
├── de/writing/night-at-station/chapter-*/index.html  ✅
└── zh/writing/night-at-station/chapter-*/index.html  ✅
```

#### Essays 子模块（三语已创建，但导航结构旧）
```
Essays 列表页
├── en/essays/index.html  ✅ 已创建（但使用旧导航结构 Photo Archive/Stories/Videos）
├── de/essays/index.html  ✅ 已创建（但使用旧导航结构）
└── zh/essays/index.html  ✅ 已创建（但使用旧导航结构）

具体文章示例
└── en/essays/winter-light-on-the-river/index.html  ✅ 已创建
```

**重要说明**:
- Essays 列表页三语均已创建，可正常访问
- 但使用的是 **旧版导航结构**（Photo Archive、Stories、Videos 等）
- 与新版站点导航（Visual Archive、Films & Music、Studio、Digital Lab）**不一致**
- 需要统一导航结构或重新设计 Essays 页面
```

### 缺失模块的三语状态

#### Notes（完全缺失：已有入口，页面不存在）
```
Notes 列表页
├── en/writing/notes/index.html  ❌ 不存在
├── de/writing/notes/index.html  ❌ 不存在
└── zh/writing/notes/index.html  ❌ 不存在

**入口来源**:
- Writing 首页（en/writing/index.html）Notes 📝 卡片链接到上述路径
- 这是真实的 404 风险
```
```

#### Visual Archive / Films & Music / Studio / Digital Lab（完全缺失）
```
Visual Archive
├── en/visual-archive/index.html  ❌ 不存在
├── de/visual-archive/index.html  ❌ 不存在
└── zh/visual-archive/index.html  ❌ 不存在

Films & Music
├── en/films-music/index.html  ❌ 不存在
├── de/films-music/index.html  ❌ 不存在
└── zh/films-music/index.html  ❌ 不存在

Studio
├── en/studio/index.html  ❌ 不存在
├── de/studio/index.html  ❌ 不存在
└── zh/studio/index.html  ❌ 不存在

Digital Lab
├── en/digital-lab/index.html  ❌ 不存在
├── de/digital-lab/index.html  ❌ 不存在
└── zh/digital-lab/index.html  ❌ 不存在

**入口来源**:
- 三语 Home 页的导航栏（.main-nav）中有链接
- 三语 Home 页的内容区域有卡片/链接指向这些模块
- 这是真实的 404 风险
```

---

## 4. 真实 404 风险点清单

### 🔴 高风险（导航有入口，页面不存在）

| # | 路径 | 入口位置 | 影响语言 | 修复建议 |
|---|------|----------|----------|----------|
| 1 | `/writing/notes/` | Writing 首页 Notes 卡片 | EN/DE/ZH | **创建三语 Notes 列表页** 或 **临时移除首页卡片** |
| 2 | `/visual-archive/` | Home 导航栏 + 首页卡片 | EN/DE/ZH | **创建页面** 或 **临时移除导航链接** |
| 3 | `/films-music/` | Home 导航栏 + 首页卡片 | EN/DE/ZH | **创建页面** 或 **临时移除导航链接** |
| 4 | `/studio/` | Home 导航栏 + 首页卡片 | EN/DE/ZH | **创建页面** 或 **临时移除导航链接** |
| 5 | `/digital-lab/` | Home 导航栏 + 首页卡片 | EN/DE/ZH | **创建页面** 或 **临时移除导航链接** |

### 首页具体 404 风险链接

**英文首页 (en/index.html)** 包含以下指向不存在页面的链接：
- `<a href="/en/visual-archive/">` — 404
- `<a href="/en/films-music/">` — 404
- `<a href="/en/studio/">` — 404
- `<a href="/en/digital-lab/">` — 404
- `<a href="/en/visual-archive/faded-family-album/">` — 404（具体内容页）
- `<a href="/en/films-music/easy-morning-winter-light/">` — 404（具体内容页）

**德文/中文首页** 同理包含对应语言的导航链接。

---

## 5. Codex 应修复 vs 不应修复

### ✅ Codex 应修复的问题

| 优先级 | 问题 | 修复方式 |
|--------|------|----------|
| **P0** | Notes 页面 404 | 创建 `writing/notes/index.html`（三语）或移除 Writing 首页 Notes 卡片 |
| **P0** | Visual Archive 等模块 404 | 决策：快速创建占位页 **或** 临时从导航/首页移除链接 |
| **P1** | Essays 页面导航结构不统一 | 更新 Essays 页面使用新版导航（Visual Archive、Films & Music 等） |
| **P1** | 章节页语言切换链接 | 审计并确保每章的语言切换指向对应语言的同章节 |
| **P2** | content.json 同步 | 确认 Novels 和章节内容是否已加入 content.json |

### ❌ Codex 不应擅自操作的内容

| 类型 | 说明 | 原因 |
|------|------|------|
| **删除正式模块** | 不要将 Notes、Visual Archive 等从网站结构中删除 | 这些是正式规划中的模块，只是尚未完成 |
| **删除 Essays** | 不要删除 Essays 模块 | Essays 是正式子模块，页面已存在，仅需更新导航结构 |
| **重写小说正文** | 不要修改小说章节正文内容 | 原创文学创作，已完成翻译/创作 |
| **统一标题为英文** | 不要将德文/中文标题改为英文 | 本地化是故意设计（如"车站之夜"、"Die Nacht am Bahnhof"） |
| **创建虚假内容** | 不要为 Visual Archive 等创建假内容填充 | 未完成模块应保持占位状态或隐藏入口，而非虚假内容 |

---

## 6. 模块完成状态详细说明

### ✅ 已完成且应正常访问

| 模块 | 路径示例 | 验证方式 |
|------|----------|----------|
| Home | `/`, `/de/`, `/zh/` | 直接访问 |
| About | `/en/about/`, `/de/about/`, `/zh/about/` | 直接访问 |
| Writing 首页 | `/en/writing/`, `/de/writing/`, `/zh/writing/` | 直接访问 |
| Novels 列表 | `/en/writing/novels/` 等 | 从 Writing 首页点击 Novels 卡片 |
| 小说目录 | `/en/writing/night-at-station/` 等 | 从 Novels 列表点击 |
| 小说章节 | `/en/writing/night-at-station/chapter-1/` 等 | 从小说目录点击 |
| Essays 首页 | `/en/essays/`, `/de/essays/`, `/zh/essays/` | 直接访问（但导航结构旧） |

### 🔴 未完成但不应被删除的正式模块

| 模块 | 状态说明 | 正确处理 |
|------|----------|----------|
| **Notes** | Writing 的正式子模块，首页有入口，页面未创建 | 应**创建页面**，而非删除入口 |
| **Visual Archive** | 主站正式模块，导航有入口，页面未创建 | 应**创建占位页**或**临时隐藏入口** |
| **Films & Music** | 主站正式模块，导航有入口，页面未创建 | 同上 |
| **Studio** | 主站正式模块，导航有入口，页面未创建 | 同上 |
| **Digital Lab** | 主站正式模块，导航有入口，页面未创建 | 同上 |

### ⚪ 计划中但导航中无入口的模块

目前所有计划模块均已在导航中有入口，无此类情况。

---

## 7. 优先修复建议（按紧急程度）

### 选项 A：快速修复 404（推荐）

1. **为缺失模块创建最小占位页**（仅包含 Hero + "Coming Soon" 文字）
   - `writing/notes/index.html`（三语）
   - `visual-archive/index.html`（三语）
   - `films-music/index.html`（三语）
   - `studio/index.html`（三语）
   - `digital-lab/index.html`（三语）

2. **更新 Essays 页面导航**统一为新结构

### 选项 B：临时隐藏入口

1. 从 Writing 首页移除 Notes 卡片
2. 从 Home 导航和首页移除 Visual Archive 等模块链接
3. **风险**: 这改变了网站规划结构，不建议未经讨论执行

---

## 8. 交接摘要

### 当前站点完成度
- **核心内容** (Home/About/Writing/Novels): ✅ 100% 完成，可正常访问
- **Writing 子模块**: 🟡 Essays 存在但导航旧，Notes 缺失
- **主站模块**: 🔴 Visual Archive 等 4 个模块缺失，但导航有入口

### Codex 最适合下手的修复
1. **创建 Notes 列表页**（三语，可复用 Novels 列表页结构）
2. **创建缺失主模块的占位页**（最小实现，解决 404）
3. **审计 Essays 页面导航**统一为新结构

### 关键决策点（需确认）
- Visual Archive 等模块是创建占位页，还是临时隐藏入口？
- Essays 页面是否需要完全重写以匹配新导航，还是仅更新导航栏？

### 绝对禁止的操作
- 删除 Notes、Visual Archive 等正式模块的入口或规划
- 修改小说章节正文内容
- 将本地化标题统一为英文

---

**文档结束**。如有歧义，请参考具体文件路径进行审计。