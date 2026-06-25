# 小学英语单词练习网站

打开 `index.html` 即可使用。学习记录保存在当前浏览器的 `localStorage` 中，不需要服务器和账号系统。

## 文件说明

- `index.html`: 页面、样式和练习逻辑。
- `database.js`: 已从 Word 文档导入 8 册词表，共 12 个用法主题、848 个词汇条目、155 个短语条目，并带课本维度、动词变形、名词复数、数词序数词和猜词填空题库提示。
- `assets/word-classroom.png`: 首页横幅图。

## 修改词库

在 `database.js` 中修改 `PRIMARY_WORDS` 即可。每个单词建议保留这些字段：

```js
{
  book: "g3a",
  books: ["g3a"],
  lesson: "Unit 1",
  unit: "school_classroom",
  sec: "学校和文具",
  word: "ruler",
  pos: "n.",
  cn: "尺子",
  phonics: "ruler",
  sentence: "The ____ is in my classroom.",
  clue: "It's a noun. You use it to draw a straight line."
}
```

如果新增主题，也要同步在 `PRIMARY_UNITS` 中添加对应的 `id`、`name` 和 `group`。如果新增课本，也要同步在 `PRIMARY_BOOKS` 中添加对应的 `id` 和显示名称。

动词变形题型需要额外字段：

```js
{
  book: "g4b",
  books: ["g4b"],
  lesson: "Unit 4",
  unit: "actions_phrases",
  sec: "动作和活动",
  word: "eat",
  pos: "v.",
  cn: "吃",
  phonics: "eat",
  sentence: "I can ____.",
  clue: "It's a verb. You put food in your mouth.",
  forms: {
    base: "eat",
    past: "ate",
    third: "eats",
    presentParticiple: "eating"
  }
}
```

名词题型严格使用文档后半部分的可数名词和特殊复数汇总表，只考察“单数写复数”。数词变形题型使用 `ordinal` 字段，例如 `one` 对应 `first`。

词组和介词短语放在 `PRIMARY_PHRASES` 中：

```js
{
  book: "g6a",
  unit: "g5_places",
  type: "verb_phrase",
  phrase: "go to school",
  cn: "去上学",
  example: "I go to school by bus."
}
```

本次导入已完成：

- 按顺序识别 8 册：三年级上册、三年级下册、四年级上册、四年级下册、五年级上册、五年级下册、六年级上册、六年级下册。
- 第 8 段原文标题重复写成“六年级上册”，已按顺序归入“六年级下册”。
- 按用法主题自动归类，例如颜色数词、学校文具、动物自然、动作活动、代词介词和功能词等。
- 已根据汇总表补入特殊过去式、第三人称单数、-ing 形式、特殊复数、不可数名词和序数词。
- 猜词填空已使用 `/Users/anguschow/Downloads/小学英语全词汇猜词填空题_按册次Unit整理.docx` 覆盖：先提示词性，再给英文描述或语境。
- 已导入动词词组、介词短语、名词短语和常用表达。

## 已做优化

- 去掉原版硬编码账号密码，改为本机昵称区分记录。
- 去掉外部 CDN，离线也能打开。
- 题干改成短句，更适合小学生。
- 保留听音、选择、拼写、猜词填空、动词变形、名词复数、数词变形、词组短语、短语拼写、错题重练和学习记录。
- 动词变形按一轮内 `三单:ing:过去式 = 1:2:2` 的队列出题，并减少“写出原形”的反向题。
- 支持按课本和按用法主题组合筛选；两边都勾选时取交集。
- 错词重练会先进入错词范围，再由学生选择题型。
- 每轮练习最多 40 题，同一轮不会重复考察同一个单词或短语；如果当前范围不足 40 个考点，就只出可用的不重复题。
- 新增短语查表页面，可按类型筛选动词词组、介词短语、名词短语和常用表达。
- 首页、复习设置、练习中、错题本、学习数据已拆成独立页面，更适合手机和平板。
- 学习数据页会保留历史每日记录，记录每日题型练习次数和每日去重单词数；同一个词当天重复练习只算 1 个复习词。
- 桌面端、平板端和手机端都做了布局验证。

## 当前词表状态

当前网站使用 `/Users/anguschow/Downloads/三年级上册.docx` 导入的真实词库，不再是示例词库。猜词填空提示已由新题库文档覆盖；名词题型当前只考察 278 个可数名词复数考点。
