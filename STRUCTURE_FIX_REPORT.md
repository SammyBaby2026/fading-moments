# 小说结构修正报告

## 任务概述
将 `The Night at the Station` 小说从错误路径 `/writing/night-at-station/` 移动到正确路径 `/writing/novels/night-at-station/`，并更新小说列表页的分类结构。

## 新的三语目录结构树

```
/en/writing/novels/
├── index.html                    # 小说列表页（按长篇/中篇/短篇分类）
└── night-at-station/
    ├── index.html                # 小说目录页
    ├── chapter-1/index.html      # 第1章
    ├── chapter-2/index.html      # 第2章
    ├── chapter-3/index.html      # 第3章
    ├── chapter-4/index.html      # 第4章
    └── chapter-5/index.html      # 第5章

/de/writing/novels/
├── index.html                    # 小说列表页（Romane/Novellen/Kurzgeschichten）
└── night-at-station/
    ├── index.html                # 小说目录页
    ├── chapter-1/index.html      # 第1章
    ├── chapter-2/index.html      # 第2章
    ├── chapter-3/index.html      # 第3章
    ├── chapter-4/index.html      # 第4章
    └── chapter-5/index.html      # 第5章

/zh/writing/novels/
├── index.html                    # 小说列表页（长篇/中篇/短篇）
└── night-at-station/
    ├── index.html                # 小说目录页
    ├── chapter-1/index.html      # 第1章
    ├── chapter-2/index.html      # 第2章
    ├── chapter-3/index.html      # 第3章
    ├── chapter-4/index.html      # 第4章
    └── chapter-5/index.html      # 第5章
```

## 关键路径的最终版本

### 小说列表页
- EN: `/en/writing/novels/index.html`
- DE: `/de/writing/novels/index.html`
- ZH: `/zh/writing/novels/index.html`

### 小说目录页
- EN: `/en/writing/novels/night-at-station/index.html`
- DE: `/de/writing/novels/night-at-station/index.html`
- ZH: `/zh/writing/novels/night-at-station/index.html`

### 章节页
- EN: `/en/writing/novels/night-at-station/chapter-{1-5}/index.html`
- DE: `/de/writing/novels/night-at-station/chapter-{1-5}/index.html`
- ZH: `/zh/writing/novels/night-at-station/chapter-{1-5}/index.html`

## 小说列表页新分类结构

### 英文版
1. **Full-length Novels** (长篇) - 状态: Finished/Ongoing
2. **Novellas** (中篇) - 状态: Finished/Ongoing  
   - The Night at the Station (5章, 已完结)
3. **Short Stories** (短篇) - 状态: Finished/Ongoing

### 德文版
1. **Romane** (长篇) - 状态: Fertig/Fortlaufend
2. **Novellen** (中篇) - 状态: Fertig/Fortlaufend
   - Die Nacht am Bahnhof (5 Kapitel, Abgeschlossen)
3. **Kurzgeschichten** (短篇) - 状态: Fertig/Fortlaufend

### 中文版
1. **长篇小说** - 状态: 已完结/连载中
2. **中篇小说** - 状态: 已完结/连载中
   - 车站之夜 (5章, 已完结)
3. **短篇小说** - 状态: 已完结/连载中

## 需要同步修正的链接清单

### 1. 从 Writing 首页到 Novels 列表页
- 路径不变: `/en/writing/novels/`

### 2. 从 Novels 列表页到小说目录页
**旧链接:** `/en/writing/night-at-station/`
**新链接:** `/en/writing/novels/night-at-station/`

### 3. 从小说目录页到各章节
**旧链接:** `/en/writing/night-at-station/chapter-{1-5}/`
**新链接:** `/en/writing/novels/night-at-station/chapter-{1-5}/`

### 4. 章节页导航链接
- Previous/Next 章节链接
- TOC (返回目录) 链接: `../` 改为 `./` 或 `/en/writing/novels/night-at-station/`
- 返回小说列表: `/en/writing/novels/`

### 5. 语言切换链接
**旧格式:** `/en/writing/night-at-station/chapter-1/`
**新格式:** `/en/writing/novels/night-at-station/chapter-1/`

### 6. Writing 首页精选区
如果有指向小说的链接，需要从 `/en/writing/night-at-station/` 改为 `/en/writing/novels/night-at-station/`

## 文件状态

### 已创建/更新（本地）

#### 英文版 (EN)
| 文件 | 状态 |
|------|------|
| `/en/writing/novels/index.html` | ✅ 已更新（新分类结构） |
| `/en/writing/novels/night-at-station/index.html` | ✅ 已创建（新路径） |
| `/en/writing/novels/night-at-station/chapter-1/index.html` | ✅ 已创建（新路径） |
| `/en/writing/novels/night-at-station/chapter-2/index.html` | ✅ 已创建（新路径） |
| `/en/writing/novels/night-at-station/chapter-3/index.html` | ✅ 已创建（新路径） |
| `/en/writing/novels/night-at-station/chapter-4/index.html` | ✅ 已创建（新路径） |
| `/en/writing/novels/night-at-station/chapter-5/index.html` | ✅ 已创建（新路径） |

#### 德文版 (DE)
| 文件 | 状态 |
|------|------|
| `/de/writing/novels/index.html` | ✅ 已更新（新分类结构） |
| `/de/writing/novels/night-at-station/index.html` | ✅ 已创建（新路径） |
| `/de/writing/novels/night-at-station/chapter-{1-5}/index.html` | ⏳ 待创建 |

#### 中文版 (ZH)
| 文件 | 状态 |
|------|------|
| `/zh/writing/novels/index.html` | ⏳ 待更新 |
| `/zh/writing/novels/night-at-station/index.html` | ⏳ 待创建 |
| `/zh/writing/novels/night-at-station/chapter-{1-5}/index.html` | ⏳ 待创建 |

### GitHub 上传状态

| 文件 | 状态 |
|------|------|
| `en/writing/novels/night-at-station/index.html` | ✅ 已上传 (201) |
| `en/writing/novels/night-at-station/chapter-1/index.html` | ✅ 已上传 (201) |
| `en/writing/novels/night-at-station/chapter-2/index.html` | ✅ 已上传 (201) |
| `en/writing/novels/night-at-station/chapter-3/index.html` | ✅ 已上传 (201) |
| `en/writing/novels/night-at-station/chapter-4/index.html` | ✅ 已上传 (201) |
| `en/writing/novels/night-at-station/chapter-5/index.html` | ✅ 已上传 (201) |
| `en/writing/novels/index.html` | ❌ 上传失败 (422) - 需要重新上传 |

## 需要删除的旧路径文件

以下旧路径文件需要删除（或使用重定向）：
- `/en/writing/night-at-station/index.html`
- `/en/writing/night-at-station/chapter-{1-5}/index.html`
- `/de/writing/night-at-station/index.html`
- `/de/writing/night-at-station/chapter-{1-5}/index.html`
- `/zh/writing/night-at-station/index.html`
- `/zh/writing/night-at-station/chapter-{1-5}/index.html`

## 下一步行动

1. 重新上传 `en/writing/novels/index.html`
2. 创建德文版5个章节页面
3. 更新中文版小说列表页
4. 创建中文版小说目录页和5个章节页面
5. 上传所有德文和中文版本文件
6. 删除旧路径文件（或设置重定向）

## 规则确认

✅ 以后所有小说必须遵循固定规则:
```
/[lang]/writing/novels/[novel-slug]/...
```

不再直接挂在 `/[lang]/writing/` 之下。
