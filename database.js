// Generated from /Users/anguschow/Downloads/三年级上册.docx
// Clue prompts covered by /Users/anguschow/Downloads/小学英语全词汇猜词填空题_按册次Unit整理.docx
// Source contains eight textbook sections in order: 三上、三下、四上、四下、五上、五下、六上、六下.

const PRIMARY_UNITS = [
  {
    "group": "基础词",
    "name": "颜色和数词",
    "id": "colors_numbers",
    "color": "sun"
  },
  {
    "group": "学习生活",
    "name": "学校和文具",
    "id": "school_classroom",
    "color": "sky"
  },
  {
    "group": "人物",
    "name": "家人朋友和职业",
    "id": "family_people_jobs",
    "color": "coral"
  },
  {
    "group": "生活",
    "name": "身体和衣物",
    "id": "body_clothes",
    "color": "leaf"
  },
  {
    "group": "生活",
    "name": "食物和饮品",
    "id": "food_drink",
    "color": "coral"
  },
  {
    "group": "自然",
    "name": "动物和自然",
    "id": "animals_nature",
    "color": "leaf"
  },
  {
    "group": "生活",
    "name": "家庭和日常",
    "id": "home_daily",
    "color": "sky"
  },
  {
    "group": "出行",
    "name": "地点和交通",
    "id": "places_transport",
    "color": "leaf"
  },
  {
    "group": "时间",
    "name": "时间天气季节",
    "id": "time_weather",
    "color": "sky"
  },
  {
    "group": "动作",
    "name": "动作和活动",
    "id": "actions_phrases",
    "color": "coral"
  },
  {
    "group": "描述",
    "name": "感受和形容词",
    "id": "feelings_adjectives",
    "color": "sun"
  },
  {
    "group": "语法",
    "name": "代词介词和功能词",
    "id": "grammar_function",
    "color": "sky"
  }
];

const PRIMARY_BOOKS = [
  {
    "id": "g3a",
    "grade": "三年级",
    "term": "上册",
    "name": "三年级上册"
  },
  {
    "id": "g3b",
    "grade": "三年级",
    "term": "下册",
    "name": "三年级下册"
  },
  {
    "id": "g4a",
    "grade": "四年级",
    "term": "上册",
    "name": "四年级上册"
  },
  {
    "id": "g4b",
    "grade": "四年级",
    "term": "下册",
    "name": "四年级下册"
  },
  {
    "id": "g5a",
    "grade": "五年级",
    "term": "上册",
    "name": "五年级上册"
  },
  {
    "id": "g5b",
    "grade": "五年级",
    "term": "下册",
    "name": "五年级下册"
  },
  {
    "id": "g6a",
    "grade": "六年级",
    "term": "上册",
    "name": "六年级上册"
  },
  {
    "id": "g6b",
    "grade": "六年级",
    "term": "下册",
    "name": "六年级下册"
  }
];

const PRIMARY_WORDS = [
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "ruler",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "尺子",
    "phonics": "ruler",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. Draw a straight line with your ___.",
    "noun": true,
    "countable": true,
    "singular": "ruler",
    "plural": "rulers"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "pencil",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "铅笔",
    "phonics": "pencil",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a writing tool made of wood with dark lead inside. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pencil",
    "plural": "pencils"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "eraser",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "橡皮",
    "phonics": "eraser",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a small thing used to remove pencil marks. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "eraser",
    "plural": "erasers"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "crayon",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "蜡笔",
    "phonics": "crayon",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a coloured wax stick used for drawing. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "crayon",
    "plural": "crayons"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "bag",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "包",
    "phonics": "bag",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means something you carry things in. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "pen",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "钢笔",
    "phonics": "pen",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a writing tool that uses ink. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pen",
    "plural": "pens"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "pencil box",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "铅笔盒",
    "phonics": "pencil box",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a small box for pencils, pens and erasers. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "book",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "书",
    "phonics": "book",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means something with pages that you read. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "book",
    "plural": "books"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "no",
    "pos": "adv. / interj.",
    "posDetail": "副词 adv. / 感叹词 interj.",
    "cn": "不；不是；没有",
    "phonics": "no",
    "sentence": "I can ____.",
    "clue": "It's an adverb. “Can I eat ten cakes?” “___!”"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "your",
    "pos": "adj. / pron. / det.",
    "posDetail": "形容词性物主代词 / 限定词 det.",
    "cn": "你（们）的",
    "phonics": "your",
    "sentence": "It is ____.",
    "clue": "It's an adjective. Is this ___ pencil?"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "red",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "红色；红色的",
    "phonics": "red",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the colour of fire engines and many apples. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "green",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "绿色；绿色的",
    "phonics": "green",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the colour of grass and many leaves. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "yellow",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "黄色；黄色的",
    "phonics": "yellow",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the colour of the sun in many children’s pictures. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "blue",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "蓝色；蓝色的",
    "phonics": "blue",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the colour of a clear sky. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "black",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "黑色；黑色的",
    "phonics": "black",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the darkest colour. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "brown",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "棕色；棕色的",
    "phonics": "brown",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the colour of chocolate or tree trunks. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "white",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "白色；白色的",
    "phonics": "white",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the colour of snow. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "orange",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "橙色；橙色的",
    "phonics": "orange",
    "sentence": "It is ____.",
    "clue": "It's an adjective. Mix red and yellow to make ___.",
    "noun": true,
    "countable": true,
    "singular": "orange",
    "plural": "oranges"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "OK",
    "pos": "adj. / interj.",
    "posDetail": "感叹词 interj. / 形容词 adj.",
    "cn": "好；行",
    "phonics": "OK",
    "sentence": "It is ____.",
    "clue": "It's an adjective. “Let’s begin now.” “___!”"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "mum",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "妈妈",
    "phonics": "mum",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a British word for your female parent. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mum",
    "plural": "mums"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "mom",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "妈妈（美式英语）",
    "phonics": "mom",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an American word for your female parent. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mom",
    "plural": "moms"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "face",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "脸",
    "phonics": "face",
    "sentence": "The word is ____.",
    "clue": "It's a noun. Wash your ___ before school.",
    "noun": true,
    "countable": true,
    "singular": "face",
    "plural": "faces"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "ear",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "耳朵",
    "phonics": "ear",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the body part used for h___ing. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "ear",
    "plural": "ears"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "eye",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "眼睛",
    "phonics": "eye",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the body part used for seeing. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "eye",
    "plural": "eyes"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "nose",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "鼻子",
    "phonics": "nose",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the body part used for smelling. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "nose",
    "plural": "noses"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "mouth",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "嘴",
    "phonics": "mouth",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the part of the face used for eating and speaking. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mouth",
    "plural": "mouths"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "arm",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "胳膊",
    "phonics": "arm",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the body part between your shoulder and hand. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "arm",
    "plural": "arms"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "hand",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "手",
    "phonics": "hand",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the body part at the end of your arm. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hand",
    "plural": "hands"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "head",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "头",
    "phonics": "head",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the top part of your body, above your neck. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "head",
    "plural": "heads"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "body",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "身体",
    "phonics": "body",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means all of a person or animal except the head and limbs. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "body",
    "plural": "bodies"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "leg",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "腿",
    "phonics": "leg",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the body part used for standing and walking. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "leg",
    "plural": "legs"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "foot",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "脚",
    "phonics": "foot",
    "sentence": "The word is ____.",
    "clue": "It's a noun. My shoe goes on my ___.",
    "noun": true,
    "countable": true,
    "singular": "foot",
    "plural": "feet"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 3",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "school",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "学校",
    "phonics": "school",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. We have English lessons at ___.",
    "noun": true,
    "countable": true,
    "singular": "school",
    "plural": "schools"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "duck",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "鸭子",
    "phonics": "duck",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a water bird with a flat bill. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "duck",
    "plural": "ducks"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "pig",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "猪",
    "phonics": "pig",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a farm animal with a round body and a short nose. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pig",
    "plural": "pigs"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "cat",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "猫",
    "phonics": "cat",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a small pet that says “meow”. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cat",
    "plural": "cats"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "bear",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "熊",
    "phonics": "bear",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large wild animal with thick fur. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bear",
    "plural": "bears"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "dog",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "狗",
    "phonics": "dog",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a common pet that may bark. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dog",
    "plural": "dogs"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "elephant",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大象",
    "phonics": "elephant",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very large animal with a long trunk. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "elephant",
    "plural": "elephants"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "monkey",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "猴子",
    "phonics": "monkey",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means an animal that can climb trees and has hands like ours. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "monkey",
    "plural": "monkeys"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "bird",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "鸟",
    "phonics": "bird",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means an animal with feathers and wings. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bird",
    "plural": "birds"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "tiger",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "老虎",
    "phonics": "tiger",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large wild cat with black stripes. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "tiger",
    "plural": "tigers"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "panda",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大熊猫",
    "phonics": "panda",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a black-and-white animal from China that eats bamboo. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "panda",
    "plural": "pandas"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "zoo",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "动物园",
    "phonics": "zoo",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a place where people can see many kinds of animals. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "funny",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "滑稽的；好笑的",
    "phonics": "funny",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means making people laugh. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "bread",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "面包",
    "phonics": "bread",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means food made from flour and baked in an oven. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "juice",
    "pos": "n.",
    "posDetail": "名词 n.，通常不可数",
    "cn": "果汁",
    "phonics": "juice",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a drink made from fruit. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "egg",
    "pos": "n.",
    "posDetail": "名词 n.，可数",
    "cn": "蛋",
    "phonics": "egg",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means food with a shell that comes from a hen. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "egg",
    "plural": "eggs"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "milk",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "牛奶",
    "phonics": "milk",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a white drink from cows. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "water",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "水",
    "phonics": "water",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means the clear liquid we drink every day. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "cake",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "蛋糕",
    "phonics": "cake",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a sweet baked food often eaten at birthdays. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cake",
    "plural": "cakes",
    "alsoUncountable": true
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "fish",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "鱼肉；鱼",
    "phonics": "fish",
    "sentence": "I like ____.",
    "clue": "It's a noun. The ___ is swimming in the river.",
    "verb": true,
    "forms": {
      "base": "fish",
      "third": "fishes",
      "presentParticiple": "fishing"
    },
    "noun": true,
    "countable": true,
    "singular": "fish",
    "plural": "fish"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "rice",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "米饭",
    "phonics": "rice",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means small white grains often eaten as a main food. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "one",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "一",
    "phonics": "one",
    "sentence": "The number is ____.",
    "clue": "It's a number word. I have only ___ nose.",
    "number": true,
    "cardinal": "one",
    "ordinal": "first",
    "cnOrdinal": "第一"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "two",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "二",
    "phonics": "two",
    "sentence": "The number is ____.",
    "clue": "It's a number word. A bird has ___ wings.",
    "number": true,
    "cardinal": "two",
    "ordinal": "second",
    "cnOrdinal": "第二"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "three",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "三",
    "phonics": "three",
    "sentence": "The number is ____.",
    "clue": "It's a number word. A triangle has ___ sides.",
    "number": true,
    "cardinal": "three",
    "ordinal": "third",
    "cnOrdinal": "第三"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "four",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "四",
    "phonics": "four",
    "sentence": "The number is ____.",
    "clue": "It's a number word. A square has ___ sides.",
    "number": true,
    "cardinal": "four",
    "ordinal": "fourth",
    "cnOrdinal": "第四"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "five",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "五",
    "phonics": "five",
    "sentence": "The number is ____.",
    "clue": "It's a number word. One hand has ___ fingers.",
    "number": true,
    "cardinal": "five",
    "ordinal": "fifth",
    "cnOrdinal": "第五"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "six",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "六",
    "phonics": "six",
    "sentence": "The number is ____.",
    "clue": "It's a number word. An insect has ___ legs."
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "seven",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "七",
    "phonics": "seven",
    "sentence": "The number is ____.",
    "clue": "It's a number word. There are ___ days in a week."
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "eight",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "八",
    "phonics": "eight",
    "sentence": "The number is ____.",
    "clue": "It's a number word. A spider has ___ legs."
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "nine",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "九",
    "phonics": "nine",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Ten minus one is ___."
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "ten",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十",
    "phonics": "ten",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Five plus five is ___."
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "brother",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "兄；弟",
    "phonics": "brother",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a boy or man who has the same parents as you. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "brother",
    "plural": "brothers"
  },
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "plate",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "盘子",
    "phonics": "plate",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a flat dish used for food. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "plate",
    "plural": "plates"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "UK",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "英国",
    "phonics": "UK",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. London is the capital of the ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Canada",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "加拿大",
    "phonics": "Canada",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. Ottawa is the capital of ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "USA",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "美国",
    "phonics": "USA",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. New York is in the ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "China",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "中国",
    "phonics": "China",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. Beijing is the capital of ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "she",
    "pos": "pron.",
    "posDetail": "人称代词 pron.",
    "cn": "她",
    "phonics": "she",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means a pronoun used for a girl or woman. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "student",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "学生",
    "phonics": "student",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a person who studies at a school. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "student",
    "plural": "students"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "pupil",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "学生；尤指小学生",
    "phonics": "pupil",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a child who learns at school. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pupil",
    "plural": "pupils"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "he",
    "pos": "pron.",
    "posDetail": "人称代词 pron.",
    "cn": "他",
    "phonics": "he",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means a pronoun used for a boy or man. Complete t___ sentence with t___ best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "teacher",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "教师",
    "phonics": "teacher",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a person who helps students learn. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "teacher",
    "plural": "teachers"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "boy",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "男孩",
    "phonics": "boy",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a male child. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "boy",
    "plural": "boys"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "and",
    "pos": "conj.",
    "posDetail": "连词 conj.",
    "cn": "和；与",
    "phonics": "and",
    "sentence": "The word is ____.",
    "clue": "It's a linking word. I have a pencil ___ an eraser."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "girl",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "女孩",
    "phonics": "girl",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a female child. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "girl",
    "plural": "girls"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "new",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "新的",
    "phonics": "new",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not old or not used before. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "friend",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "朋友",
    "phonics": "friend",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person you know and like. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "friend",
    "plural": "friends"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 1",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "today",
    "pos": "n. / adv.",
    "posDetail": "名词 n. / 副词 adv.",
    "cn": "今天",
    "phonics": "today",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means the day that is happening now. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "father",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "父亲；爸爸",
    "phonics": "father",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means your male parent. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "father",
    "plural": "fathers"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "dad",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "爸爸；爹爹（口语）",
    "phonics": "dad",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an informal word for father. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dad",
    "plural": "dads"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "man",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "男人",
    "phonics": "man",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an adult male person. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "man",
    "plural": "mans"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "woman",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "女人",
    "phonics": "woman",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an adult female person. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "woman",
    "plural": "womans"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "mother",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "母亲；妈妈",
    "phonics": "mother",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means your female parent. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mother",
    "plural": "mothers"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "sister",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "姐；妹",
    "phonics": "sister",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a girl or woman who has the same parents as you. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sister",
    "plural": "sisters"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "brother",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "兄；弟",
    "phonics": "brother",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a boy or man who has the same parents as you. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "brother",
    "plural": "brothers"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "grandmother",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "（外）祖母",
    "phonics": "grandmother",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the mother of your father or mother. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "grandmother",
    "plural": "grandmothers"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "grandma",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "（外）祖母，奶奶；外婆（口语）",
    "phonics": "grandma",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an informal word for grandmother. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "grandma",
    "plural": "grandmas"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "grandfather",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "（外）祖父",
    "phonics": "grandfather",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the father of your father or mother. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "grandfather",
    "plural": "grandfathers"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "grandpa",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "（外）祖父，爷爷；外公（口语）",
    "phonics": "grandpa",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an informal word for grandfather. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "grandpa",
    "plural": "grandpas"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "family",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "家；家庭",
    "phonics": "family",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means parents, children and other close relatives. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "thin",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "瘦的",
    "phonics": "thin",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having little fat on the body. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "fat",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "胖的；肥的",
    "phonics": "fat",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a lot of ___ on the body. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "tall",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "高的",
    "phonics": "tall",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having more height than most people or things. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "short",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "矮的；短的",
    "phonics": "short",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not tall, or not long. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "long",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "长的",
    "phonics": "long",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means measuring a great distance from one end to the other. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "small",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "小的",
    "phonics": "small",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not big. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "big",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "大的",
    "phonics": "big",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means large in size. Complete the sentence with the best word: ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "giraffe",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "长颈鹿",
    "phonics": "giraffe",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very tall African animal with a long neck. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "giraffe",
    "plural": "girafves"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "so",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "这么；那么",
    "phonics": "so",
    "sentence": "I can ____.",
    "clue": "It's an adverb. The giraffe is ___ tall!"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "children",
    "pos": "n.",
    "posDetail": "名词 n.，child 的复数",
    "cn": "儿童；孩子们",
    "phonics": "children",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means more than one child. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "child",
    "plural": "children"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "tail",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "尾巴",
    "phonics": "tail",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the long or short part at the back of an animal. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "tail",
    "plural": "tails"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "on",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "在……上",
    "phonics": "on",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. The book is ___ the desk."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "in",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "在……里",
    "phonics": "in",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. The pencils are ___ the box."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "under",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "在……下面",
    "phonics": "under",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. The cat is ___ the chair."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "chair",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "椅子",
    "phonics": "chair",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a seat for one person, usually with a back. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "chair",
    "plural": "chairs"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "desk",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "书桌",
    "phonics": "desk",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a table used for studying or working. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "desk",
    "plural": "desks"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "cap",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "帽子",
    "phonics": "cap",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a soft hat, often with a part sticking out in front. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cap",
    "plural": "caps"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "ball",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "球",
    "phonics": "ball",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a round object used in many games. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "car",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "小汽车",
    "phonics": "car",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a road vehicle with four wheels. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "car",
    "plural": "cars"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "boat",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "小船",
    "phonics": "boat",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a small vehicle used on water. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "boat",
    "plural": "boats"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "map",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "地图",
    "phonics": "map",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a picture that shows places and roads. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "map",
    "plural": "maps"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "toy",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "玩具",
    "phonics": "toy",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something children play with. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "box",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "盒；箱",
    "phonics": "box",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a container with flat sides. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "box",
    "plural": "boxes"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "pear",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "梨",
    "phonics": "pear",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a sweet fruit that is narrow at the top and wide at the bottom. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pear",
    "plural": "pears"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "apple",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "苹果",
    "phonics": "apple",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a round fruit that can be red, green or yellow. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "apple",
    "plural": "apples"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "orange",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "橙子",
    "phonics": "orange",
    "sentence": "The word is ____.",
    "clue": "It's a noun. Mix red and yellow to make ___.",
    "noun": true,
    "countable": true,
    "singular": "orange",
    "plural": "oranges"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "banana",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "香蕉",
    "phonics": "banana",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a long yellow fruit. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "banana",
    "plural": "bananas"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "watermelon",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "西瓜",
    "phonics": "watermelon",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a very large fruit with green skin and red flesh. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "watermelon",
    "plural": "watermelons"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "strawberry",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "草莓",
    "phonics": "strawberry",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a small red fruit with tiny seeds outside. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "strawberry",
    "plural": "strawberries"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "grape",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "葡萄",
    "phonics": "grape",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a small round fruit that grows in bunches. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "grape",
    "plural": "grapes"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "buy",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "买",
    "phonics": "buy",
    "sentence": "I can ____.",
    "clue": "It's a verb. I want to ___ a new schoolbag.",
    "verb": true,
    "forms": {
      "base": "buy",
      "past": "bought",
      "third": "buys",
      "presentParticiple": "buying"
    },
    "past": "bought"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "fruit",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "水果",
    "phonics": "fruit",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means sweet food that grows on trees or plants. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "fruit",
    "plural": "fruits",
    "alsoUncountable": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "eleven",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十一",
    "phonics": "eleven",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Ten plus one is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "twelve",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十二",
    "phonics": "twelve",
    "sentence": "The number is ____.",
    "clue": "It's a number word. A year has ___ months.",
    "number": true,
    "cardinal": "twelve",
    "ordinal": "twelfth",
    "cnOrdinal": "第十二"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "thirteen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十三",
    "phonics": "thirteen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Twelve plus one is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "fourteen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十四",
    "phonics": "fourteen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Seven plus seven is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "fifteen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十五",
    "phonics": "fifteen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Ten plus five is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "sixteen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十六",
    "phonics": "sixteen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Eight plus eight is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "seventeen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十七",
    "phonics": "seventeen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Twenty minus three is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "eighteen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十八",
    "phonics": "eighteen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Nine plus nine is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "nineteen",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "十九",
    "phonics": "nineteen",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Twenty minus one is ___."
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "twenty",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "二十",
    "phonics": "twenty",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Two tens make ___.",
    "number": true,
    "cardinal": "twenty",
    "ordinal": "twentieth",
    "cnOrdinal": "第二十"
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "kite",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "风筝",
    "phonics": "kite",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a light toy that flies in the wind on a string. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g3b",
    "books": [
      "g3b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "beautiful",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "美丽的",
    "phonics": "beautiful",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means very nice to look at. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "classroom",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "教室",
    "phonics": "classroom",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a room where students have lessons. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "classroom",
    "plural": "classrooms"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "window",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "窗户",
    "phonics": "window",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an opening in a wall with glass in it. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "window",
    "plural": "windows"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "blackboard",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "黑板",
    "phonics": "blackboard",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a large dark board a teacher writes on. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "blackboard",
    "plural": "blackboards"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "light",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "电灯",
    "phonics": "light",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a lamp that makes a room bright. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "light",
    "plural": "lights",
    "alsoUncountable": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "picture",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "图画",
    "phonics": "picture",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a drawing, painting or photo. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "picture",
    "plural": "pictures"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "door",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "门",
    "phonics": "door",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the part you open to enter or leave a room. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "door",
    "plural": "doors"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "teacher's desk",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "讲台",
    "phonics": "teacher's desk",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means the desk used by the teacher in a classroom. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "computer",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "计算机",
    "phonics": "computer",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means an electronic machine used for work, study and games. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "computer",
    "plural": "computers"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "fan",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "风扇",
    "phonics": "fan",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a machine with turning blades that moves air. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "fan",
    "plural": "fans"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "wall",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "墙壁",
    "phonics": "wall",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means one of the upright sides of a room. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "wall",
    "plural": "walls"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "floor",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "地板",
    "phonics": "floor",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the part of a room that you walk on. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "floor",
    "plural": "floors"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "really",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "真的；确实，表示兴趣或惊讶",
    "phonics": "really",
    "sentence": "I can ____.",
    "clue": "It's an adverb. Is that ___ your new robot?"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "near",
    "pos": "adj. / adv. / prep.",
    "posDetail": "介词 prep. / 形容词 adj. / 副词 adv.",
    "cn": "距离近；在……附近",
    "phonics": "near",
    "sentence": "I can ____.",
    "clue": "It's an adjective. My home is ___ the school, so I walk there."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "TV",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "电视",
    "phonics": "TV",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a machine used for watching programmes. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "clean",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "打扫",
    "phonics": "clean",
    "sentence": "I can ____.",
    "clue": "It's a verb. Please ___ the blackboard after class.",
    "verb": true,
    "forms": {
      "base": "clean",
      "past": "cleaned",
      "third": "cleans",
      "presentParticiple": "cleaning"
    },
    "past": "cleaned"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "help",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "帮助",
    "phonics": "help",
    "sentence": "I can ____.",
    "clue": "It's a verb. Can you ___ me carry this box?",
    "verb": true,
    "forms": {
      "base": "help",
      "third": "helps",
      "presentParticiple": "helping"
    }
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "schoolbag",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "书包",
    "phonics": "schoolbag",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a bag used by a student to carry school things. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "schoolbag",
    "plural": "schoolbags"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "maths book",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "数学书",
    "phonics": "maths book",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school book used for learning numbers and shapes. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "maths book",
    "plural": "maths books"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "English book",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "英语书",
    "phonics": "English book",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school book used for learning English. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "Chinese book",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "语文书",
    "phonics": "Chinese book",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school book used for learning Chinese. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "storybook",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "故事书",
    "phonics": "storybook",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a book that contains stories. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "storybook",
    "plural": "storybooks"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "candy",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "糖果",
    "phonics": "candy",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a small sweet food made with sugar. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "notebook",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "笔记本",
    "phonics": "notebook",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a small book for writing notes. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "notebook",
    "plural": "notebooks"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "toy",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "玩具",
    "phonics": "toy",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something children play with. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "key",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "钥匙",
    "phonics": "key",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a small metal object used to open a lock. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "key",
    "plural": "keys"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "wow",
    "pos": "interj.",
    "posDetail": "感叹词 interj.",
    "cn": "哇；呀",
    "phonics": "wow",
    "sentence": "The word is ____.",
    "clue": "It's a useful expression. It means a word used to show surprise. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "lost",
    "pos": "v.",
    "posDetail": "动词 v.，过去式",
    "cn": "丢失，是 lose 的过去式",
    "phonics": "lost",
    "sentence": "I can ____.",
    "clue": "It's a verb. I ___ my key yesterday and could not find it.",
    "verb": true,
    "forms": {
      "base": "lose",
      "past": "lost",
      "third": "loses",
      "presentParticiple": "losing"
    },
    "past": "lost"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "so much",
    "pos": "adv. phr. / adv.",
    "posDetail": "副词短语 adv. phr. / 限定短语",
    "cn": "非常地；这么多",
    "phonics": "so much",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's an adverb. It means a very large amount or very strongly. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 2",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "cute",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "可爱的",
    "phonics": "cute",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means pretty and lovable. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "strong",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "强壮的",
    "phonics": "strong",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a lot of power in the body. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "friendly",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "友好的",
    "phonics": "friendly",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means kind and pleasant to other people. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "quiet",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "安静的",
    "phonics": "quiet",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means making little or no noise. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "hair",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "头发",
    "phonics": "hair",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the strands that grow on a person’s head. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "shoe",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "鞋",
    "phonics": "shoe",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something worn on the foot. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "shoe",
    "plural": "shoes"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "glasses",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "眼镜",
    "phonics": "glasses",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means two pieces of glass in a frame, worn to help someone see. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "his",
    "pos": "adj. / pron. / det.",
    "posDetail": "形容词性物主代词 / 限定词 det.",
    "cn": "他的",
    "phonics": "his",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means belonging to a boy or man. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "or",
    "pos": "conj.",
    "posDetail": "连词 conj.",
    "cn": "或者",
    "phonics": "or",
    "sentence": "The word is ____.",
    "clue": "It's a linking word. Would you like milk ___ juice?"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "right",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "正确的；对的",
    "phonics": "right",
    "sentence": "It is ____.",
    "clue": "It's an adjective. Your answer is ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "hat",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "帽子，常指带檐的帽子",
    "phonics": "hat",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something worn on the head, often with a brim. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hat",
    "plural": "hats"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 3",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "her",
    "pos": "adj. / pron. / det.",
    "posDetail": "形容词性物主代词 / 限定词 det.",
    "cn": "她的",
    "phonics": "her",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means belonging to a girl or woman. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "bedroom",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "卧室",
    "phonics": "bedroom",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a room where people sleep. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bedroom",
    "plural": "bedrooms"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "living room",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "客厅；起居室",
    "phonics": "living room",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a room where a family sits and relaxes. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "living room",
    "plural": "living rooms"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "study",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "书房",
    "phonics": "study",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a room used for reading or working. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "study",
      "third": "studies",
      "presentParticiple": "studying"
    },
    "noun": true,
    "countable": true,
    "singular": "study",
    "plural": "studies"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "kitchen",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "厨房",
    "phonics": "kitchen",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a room where food is cooked. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "kitchen",
    "plural": "kitchens"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "bathroom",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "浴室；洗手间",
    "phonics": "bathroom",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a room with a bath or shower. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bathroom",
    "plural": "bathrooms"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "bed",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "床",
    "phonics": "bed",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a piece of furniture used for sleeping. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bed",
    "plural": "beds"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "phone",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "电话",
    "phonics": "phone",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a device used to call or message people. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "phone",
    "plural": "phones"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "table",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "桌子",
    "phonics": "table",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a piece of furniture with a flat top and legs. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "table",
    "plural": "tables"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "sofa",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "长沙发",
    "phonics": "sofa",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a long soft seat for two or more people. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sofa",
    "plural": "sofas"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "fridge",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "冰箱",
    "phonics": "fridge",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a cold cupboard that keeps food fresh. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "fridge",
    "plural": "fridges"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "find",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "找到",
    "phonics": "find",
    "sentence": "I can ____.",
    "clue": "It's a verb. I can’t ___ my glasses.",
    "verb": true,
    "forms": {
      "base": "find",
      "third": "finds",
      "presentParticiple": "finding"
    }
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "them",
    "pos": "pron.",
    "posDetail": "人称代词 pron.，宾格",
    "cn": "他（她、它）们",
    "phonics": "them",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. These books are heavy. Please carry ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "beef",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "牛肉",
    "phonics": "beef",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means meat from a cow. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "chicken",
    "pos": "n.",
    "posDetail": "名词 n.，此处通常不可数",
    "cn": "鸡肉",
    "phonics": "chicken",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means meat from a ___. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "noodles",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "面条",
    "phonics": "noodles",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means long thin pieces of food made from flour. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "soup",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "汤",
    "phonics": "soup",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means liquid food often eaten hot. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "vegetable",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "蔬菜",
    "phonics": "vegetable",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a plant or part of a plant eaten as food. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "chopsticks",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "筷子",
    "phonics": "chopsticks",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means two thin sticks used for eating. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "bowl",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "碗",
    "phonics": "bowl",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a deep round dish for food. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bowl",
    "plural": "bowls"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "fork",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "餐叉",
    "phonics": "fork",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means an eating tool with points at one end. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "fork",
    "plural": "forks"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "knife",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "刀",
    "phonics": "knife",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a tool with a sharp edge used for cutting. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "knife",
    "plural": "knives"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "spoon",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "勺",
    "phonics": "spoon",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means an eating tool with a small round bowl at one end. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "spoon",
    "plural": "spoons"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "dinner",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "正餐，通常指中午或晚上吃的正餐",
    "phonics": "dinner",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means the main meal of the day, often eaten in the evening. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "ready",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "准备好",
    "phonics": "ready",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means prepared and able to begin. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "help yourself",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "为自己取用；随便吃",
    "phonics": "help yourself",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to take some food or drink without waiting to be served. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "pass",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "给；递",
    "phonics": "pass",
    "sentence": "I can ____.",
    "clue": "It's a verb. Please ___ me the spoon.",
    "verb": true,
    "forms": {
      "base": "pass",
      "third": "passes",
      "presentParticiple": "passing"
    }
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "try",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "试；尝试",
    "phonics": "try",
    "sentence": "I can ____.",
    "clue": "It's a verb. Please ___ the soup. It is delicious.",
    "verb": true,
    "forms": {
      "base": "try",
      "third": "tries",
      "presentParticiple": "trying"
    }
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "parents",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "父母",
    "phonics": "parents",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person’s mother and father. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "parent",
    "plural": "parents"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "cousin",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "同辈表亲或堂亲",
    "phonics": "cousin",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the child of your aunt or uncle. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cousin",
    "plural": "cousins"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "uncle",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "舅父；叔父；伯父；姑父；姨夫",
    "phonics": "uncle",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the brother of your mother or father, or your aunt’s husband. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "uncle",
    "plural": "uncles"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "aunt",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "姑母；姨母",
    "phonics": "aunt",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the sister of your mother or father, or your uncle’s wife. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "aunt",
    "plural": "aunts"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "baby brother",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "婴儿小弟弟",
    "phonics": "baby brother",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a very young male child in your family. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "doctor",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "医生",
    "phonics": "doctor",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who treats sick people. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "doctor",
    "plural": "doctors"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "cook",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "厨师",
    "phonics": "cook",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person whose job is making food, or to make food. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "cook",
      "third": "cooks",
      "presentParticiple": "cooking"
    },
    "noun": true,
    "countable": true,
    "singular": "cook",
    "plural": "cooks"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "driver",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "司机",
    "phonics": "driver",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who drives a vehicle. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "driver",
    "plural": "drivers"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "farmer",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "农民",
    "phonics": "farmer",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who grows crops or keeps animals. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "farmer",
    "plural": "farmers"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "nurse",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "护士",
    "phonics": "nurse",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who cares for sick people. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "nurse",
    "plural": "nurses"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "people",
    "pos": "n.",
    "posDetail": "名词 n.，复数意义",
    "cn": "人们",
    "phonics": "people",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means more than one person. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "person",
    "plural": "people"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "but",
    "pos": "conj.",
    "posDetail": "连词 conj.",
    "cn": "但是",
    "phonics": "but",
    "sentence": "The word is ____.",
    "clue": "It's a linking word. The puppy is small, ___ it is strong."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "little",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "小的",
    "phonics": "little",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means small in size or young. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "puppy",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "小狗",
    "phonics": "puppy",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a young dog. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "puppy",
    "plural": "puppies"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "football player",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "足球运动员",
    "phonics": "football player",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a person who plays football. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "football player",
    "plural": "football players"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "job",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "工作",
    "phonics": "job",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the work a person does for money. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "job",
    "plural": "jobs"
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "basketball",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "篮球",
    "phonics": "basketball",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a game in which players throw a ball through a high hoop. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "first floor",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "一楼",
    "phonics": "first floor",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. The library is downstairs on the ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "second floor",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "二楼",
    "phonics": "second floor",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. The music room is upstairs on the ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "teachers' office",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "教师办公室",
    "phonics": "teachers' office",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means the room where teachers work when they are not teaching. Complete the phrase: ___.",
    "noun": true,
    "countable": true,
    "singular": "teachers' office",
    "plural": "teachers' offices"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "library",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "图书馆",
    "phonics": "library",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where people can read or borrow books. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "library",
    "plural": "libraries"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "playground",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "操场",
    "phonics": "playground",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means an outdoor place where children play. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "playground",
    "plural": "playgrounds"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "computer room",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "计算机房",
    "phonics": "computer room",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school room with many computers. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "computer room",
    "plural": "computer rooms"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "art room",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "美术教室",
    "phonics": "art room",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school room for drawing and painting. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "art room",
    "plural": "art rooms"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "music room",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "音乐教室",
    "phonics": "music room",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school room for singing and playing music. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "music room",
    "plural": "music rooms"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "next to",
    "pos": "prep. phr. / prep.",
    "posDetail": "介词短语 prep. phr.",
    "cn": "紧邻；在……近旁",
    "phonics": "next to",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a prepositional phrase. It means very close to the side of something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "homework",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "作业",
    "phonics": "homework",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means schoolwork done at home. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "class",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "班；班级",
    "phonics": "class",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a group of students, or a lesson. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "class",
    "plural": "classes"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "forty",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "四十",
    "phonics": "forty",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Four tens make ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "way",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "方向",
    "phonics": "way",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a direction or route. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "breakfast",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "早餐；早饭",
    "phonics": "breakfast",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means the first meal of the day. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "English class",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "英语课",
    "phonics": "English class",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a lesson where students learn English. Complete the phrase: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "lunch",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "午餐；午饭",
    "phonics": "lunch",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means the meal eaten around the middle of the day. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "music class",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "音乐课",
    "phonics": "music class",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a lesson where students learn or make music. Complete the phrase: ___.",
    "noun": true,
    "countable": true,
    "singular": "music class",
    "plural": "music classes"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "PE class",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "体育课",
    "phonics": "PE class",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a lesson where students do sports and exercise. Complete the phrase: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "dinner",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "正餐，通常指中午或晚上吃的正餐",
    "phonics": "dinner",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means the main meal of the day, often eaten in the evening. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "get up",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "起床",
    "phonics": "get up",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to leave your bed after sleeping. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go to school",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去上学",
    "phonics": "go to school",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to travel to the place where you have lessons. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go home",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "回家",
    "phonics": "go home",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to return to the place where you live. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go to bed",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "上床睡觉",
    "phonics": "go to bed",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to get into bed to sleep. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "over",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "结束",
    "phonics": "over",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means finished. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "now",
    "pos": "n. / adv.",
    "posDetail": "副词 adv. / 名词 n.",
    "cn": "现在；目前",
    "phonics": "now",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means at this time. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "o'clock",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "……点钟，表示整点",
    "phonics": "o'clock",
    "sentence": "I can ____.",
    "clue": "It's an adverb. School begins at eight ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "kid",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "小孩",
    "phonics": "kid",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a child. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "kid",
    "plural": "kids"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "thirty",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "三十",
    "phonics": "thirty",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Three tens make ___.",
    "number": true,
    "cardinal": "thirty",
    "ordinal": "thirtieth",
    "cnOrdinal": "第三十"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "hurry up",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "快点",
    "phonics": "hurry up",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to do something more quickly. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "come on",
    "pos": "v. phr. / v.",
    "posDetail": "感叹用语 / 动词短语",
    "cn": "快；加油",
    "phonics": "come on",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means used to ask someone to move faster or encourage them. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "just a minute",
    "pos": "phr.",
    "posDetail": "固定短语",
    "cn": "稍等一会儿",
    "phonics": "just a minute",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a useful expression. It means a phrase asking someone to wait for a short time. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "cold",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "寒冷的；冷的",
    "phonics": "cold",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a low temperature. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "cool",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "凉的；凉爽的",
    "phonics": "cool",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means a little cold in a pleasant way. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "warm",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "温暖的；暖和的",
    "phonics": "warm",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means a little hot in a pleasant way. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "hot",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "热的；烫的",
    "phonics": "hot",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a high temperature, or having a strong spicy taste. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "sunny",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "阳光充足的",
    "phonics": "sunny",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means with a lot of sunshine. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "windy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "多风的；风大的",
    "phonics": "windy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means with a lot of wind. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "cloudy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "阴天的；多云的",
    "phonics": "cloudy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means with many clouds in the sky. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "snowy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "下雪多的；多雪的",
    "phonics": "snowy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means with a lot of snow. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "rainy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "阴雨的；多雨的",
    "phonics": "rainy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means with a lot of rain. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "outside",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "在户外",
    "phonics": "outside",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means not inside a building. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "be careful",
    "pos": "phr.",
    "posDetail": "固定短语 / 祈使表达",
    "cn": "小心",
    "phonics": "be careful",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a useful expression. It means used to warn someone to avoid danger. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "weather",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "天气",
    "phonics": "weather",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means the condition of the air and sky outside. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "New York",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "纽约",
    "phonics": "New York",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It is a place name. It is a famous large city in the USA. The answer is ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "how about...?",
    "pos": "pattern",
    "posDetail": "固定句型",
    "cn": "……怎么样；……情况如何",
    "phonics": "how about...?",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a useful expression. It means a phrase used to ask for an opinion or make a suggestion. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "degree",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "度；度数",
    "phonics": "degree",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a unit used to measure temperature. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "degree",
    "plural": "degrees"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "world",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "世界",
    "phonics": "world",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means the Earth and all the people and places on it. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "London",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "伦敦",
    "phonics": "London",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is the capital city of the UK. The answer is ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Moscow",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "莫斯科",
    "phonics": "Moscow",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is the capital city of Russia. The answer is ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Singapore",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "新加坡（市）",
    "phonics": "Singapore",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a country and city in Southeast Asia. The answer is ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Sydney",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "悉尼",
    "phonics": "Sydney",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a famous Australian city with a large opera house. The answer is ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "fly",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "放飞，如放风筝",
    "phonics": "fly",
    "sentence": "I can ____.",
    "clue": "It's a verb. Let’s ___ a kite in the park.",
    "verb": true,
    "forms": {
      "base": "fly",
      "third": "flies",
      "presentParticiple": "flying"
    }
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "love",
    "pos": "n.",
    "posDetail": "名词 n. / 书信结尾用语",
    "cn": "爱你的，用于书信结尾的热情问候语",
    "phonics": "love",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a warm word often used at the end of a letter. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "tomato",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "西红柿",
    "phonics": "tomato",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a soft red fruit often used as a vegetable. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "tomato",
    "plural": "tomatoes"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "potato",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "马铃薯；土豆",
    "phonics": "potato",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a round vegetable that grows under the ground. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "potato",
    "plural": "potatoes"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "green beans",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.，复数",
    "cn": "豆角；四季豆",
    "phonics": "green beans",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means long green vegetables that grow in pods. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "green bean",
    "plural": "green beans"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "carrot",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "胡萝卜",
    "phonics": "carrot",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a long orange vegetable that grows under the ground. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "carrot",
    "plural": "carrots"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "horse",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "马",
    "phonics": "horse",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large animal people can ride. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "horse",
    "plural": "horses"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "cow",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "母牛；奶牛",
    "phonics": "cow",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large farm animal that gives milk. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cow",
    "plural": "cows"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "sheep",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "羊；绵羊",
    "phonics": "sheep",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a farm animal with thick wool. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sheep",
    "plural": "sheep"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "hen",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "母鸡",
    "phonics": "hen",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means an adult female chicken. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hen",
    "plural": "hens"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "these",
    "pos": "pron. / det.",
    "posDetail": "指示代词 pron. / 限定词 det.",
    "cn": "这些，this 的复数形式",
    "phonics": "these",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. ___ apples here are red.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "yum",
    "pos": "interj.",
    "posDetail": "感叹词 interj.",
    "cn": "表示味道或气味非常好",
    "phonics": "yum",
    "sentence": "The word is ____.",
    "clue": "It's a useful expression. It means a sound used when food tastes or smells very good. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "animal",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "兽；动物",
    "phonics": "animal",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a living thing that is not a plant. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "those",
    "pos": "pron. / det.",
    "posDetail": "指示代词 pron. / 限定词 det.",
    "cn": "那些，that 的复数形式",
    "phonics": "those",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. ___ cows over there are big.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "garden",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "花园；菜园",
    "phonics": "garden",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a piece of land where flowers or vegetables grow. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "garden",
    "plural": "gardens"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "farm",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "农场",
    "phonics": "farm",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means land where crops are grown or animals are kept. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "farm",
    "plural": "farms"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "goat",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "山羊",
    "phonics": "goat",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a farm animal with horns that can climb well. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "goat",
    "plural": "goats"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "eat",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "吃",
    "phonics": "eat",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to put food in your mouth and swallow it. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "eat",
      "past": "ate",
      "third": "eats",
      "presentParticiple": "eating"
    },
    "past": "ate"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "clothes",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "衣服；服装",
    "phonics": "clothes",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means things people wear. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "pants",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "裤子",
    "phonics": "pants",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means clothing worn from the waist down with two legs. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "hat",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "帽子，常指带檐的帽子",
    "phonics": "hat",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something worn on the head, often with a brim. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hat",
    "plural": "hats"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "dress",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "连衣裙",
    "phonics": "dress",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a one-piece item of clothing often worn by girls or women. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dress",
    "plural": "dresses"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "skirt",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "女裙",
    "phonics": "skirt",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means clothing that hangs from the waist and has no separate legs. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "skirt",
    "plural": "skirts"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "coat",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "外衣；大衣",
    "phonics": "coat",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means warm outer clothing worn over other clothes. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "coat",
    "plural": "coats"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "sweater",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "毛衣",
    "phonics": "sweater",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means warm knitted clothing for the upper body. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sweater",
    "plural": "sweaters"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "sock",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "短袜",
    "phonics": "sock",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means soft clothing worn on the foot inside a shoe. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sock",
    "plural": "socks"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "shorts",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "短裤",
    "phonics": "shorts",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means short trousers that do not cover the lower legs. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "jacket",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "夹克衫",
    "phonics": "jacket",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a short coat. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "jacket",
    "plural": "jackets"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "shirt",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "衬衫，尤指男士衬衫",
    "phonics": "shirt",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means clothing for the upper body, usually with buttons. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "shirt",
    "plural": "shirts"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "yours",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "你的；你们的",
    "phonics": "yours",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to you, used without a noun after it. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "whose",
    "pos": "pron. / det.",
    "posDetail": "疑问代词 pron. / 疑问限定词 det.",
    "cn": "谁的",
    "phonics": "whose",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means used to ask who something belongs to. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "mine",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "我的",
    "phonics": "mine",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to me, used without a noun after it. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "pack",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "收拾行李",
    "phonics": "pack",
    "sentence": "I can ____.",
    "clue": "It's a verb. Please ___ your clothes before the trip.",
    "verb": true,
    "forms": {
      "base": "pack",
      "third": "packs",
      "presentParticiple": "packing"
    }
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "wait",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "等待",
    "phonics": "wait",
    "sentence": "I can ____.",
    "clue": "It's a verb. Please ___ here for one minute.",
    "verb": true,
    "forms": {
      "base": "wait",
      "third": "waits",
      "presentParticiple": "waiting"
    }
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "glove",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "分手指的手套",
    "phonics": "glove",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a covering for the hand with separate parts for the fingers. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "glove",
    "plural": "gloves"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "scarf",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "围巾；披巾",
    "phonics": "scarf",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a long piece of cloth worn around the neck. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "scarf",
    "plural": "scarves"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "umbrella",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "伞；雨伞",
    "phonics": "umbrella",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something held over the head to keep off rain. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "umbrella",
    "plural": "umbrellas"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "sunglasses",
    "pos": "n.",
    "posDetail": "名词 n.，复数形式",
    "cn": "太阳镜",
    "phonics": "sunglasses",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means dark glasses worn to protect the eyes from sunlight. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "pretty",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "美观的；精致的",
    "phonics": "pretty",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means nice and attractive to look at. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "expensive",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "昂贵的；花钱多的",
    "phonics": "expensive",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means costing a lot of money. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "cheap",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "花钱少的；便宜的",
    "phonics": "cheap",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not costing much money. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "nice",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "好的",
    "phonics": "nice",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means pleasant or good. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "try on",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "试穿",
    "phonics": "try on",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to put on clothes to see whether they fit. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "size",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "尺码；号",
    "phonics": "size",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a number or word that shows how large clothes or shoes are. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "size",
    "plural": "sizes"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "of course",
    "pos": "adv. phr. / adv.",
    "posDetail": "副词短语 adv. phr.",
    "cn": "当然",
    "phonics": "of course",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's an adverb. It means used to say yes in a friendly, certain way. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "too",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "太；过于",
    "phonics": "too",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means more than is wanted or needed. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "just",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "正好；恰好",
    "phonics": "just",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means exactly or only. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "how much",
    "pos": "疑问短语",
    "posDetail": "疑问短语",
    "cn": "多少钱",
    "phonics": "how much",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It means used to ask about a price or amount. Complete the sentence with the best word: ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "eighty",
    "pos": "num.",
    "posDetail": "数词 num.",
    "cn": "八十",
    "phonics": "eighty",
    "sentence": "The number is ____.",
    "clue": "It's a number word. Eight tens make ___."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "dollar",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "元，美元等货币单位",
    "phonics": "dollar",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a unit of money used in the USA and some other countries. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dollar",
    "plural": "dollars"
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "sale",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "特价销售；大减价",
    "phonics": "sale",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a time when shops sell things at lower prices. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "more",
    "pos": "adj. / det.",
    "posDetail": "形容词 adj. / 限定词 det.",
    "cn": "更多的",
    "phonics": "more",
    "sentence": "It is ____.",
    "clue": "It's an adjective. I want ___ water, please."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "us",
    "pos": "pron.",
    "posDetail": "人称代词 pron.，宾格",
    "cn": "我们",
    "phonics": "us",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means the object form of “we”. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "old",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "老的；年纪大的",
    "phonics": "old",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having lived for many years, or not new. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "young",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "年轻的；岁数不大的",
    "phonics": "young",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not old. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "funny",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "滑稽的；可笑的",
    "phonics": "funny",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means making people laugh. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "kind",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "体贴的；慈祥的；宽容的",
    "phonics": "kind",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means caring and helpful to other people. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "strict",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "要求严格的；严厉的",
    "phonics": "strict",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means making people follow rules carefully. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "polite",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "有礼貌的；客气的",
    "phonics": "polite",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means showing good manners. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "hard-working",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "工作努力的；辛勤的",
    "phonics": "hard-working",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means working with a lot of effort. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "helpful",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "有用的；愿意帮忙的",
    "phonics": "helpful",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means ready to help or useful. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "clever",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "聪明的；聪颖的",
    "phonics": "clever",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means quick at learning and understanding. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "shy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "羞怯的；腼腆的；怕生的",
    "phonics": "shy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means nervous about speaking to people. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "know",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "知道；了解",
    "phonics": "know",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to have information in your mind. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "know",
      "third": "knows",
      "presentParticiple": "knowing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "our",
    "pos": "adj. / pron. / det.",
    "posDetail": "形容词性物主代词 / 限定词 det.",
    "cn": "我们的",
    "phonics": "our",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means belonging to us. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "Ms",
    "pos": "n.",
    "posDetail": "称谓名词 n.",
    "cn": "女士，用于女子的姓氏或姓名前，不指明婚否",
    "phonics": "Ms",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a title used before a woman’s family name without showing whether she is married. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "will",
    "pos": "modal v. / v.",
    "posDetail": "情态动词 modal v.",
    "cn": "将要，谈及将来",
    "phonics": "will",
    "sentence": "The word is ____.",
    "clue": "It's a verb. We ___ visit the zoo tomorrow."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "sometimes",
    "pos": "adv.",
    "posDetail": "频度副词 adv.",
    "cn": "有时；间或",
    "phonics": "sometimes",
    "sentence": "I can ____.",
    "clue": "It's an adverb. I ___ play football, but not every day."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "robot",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "机器人",
    "phonics": "robot",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a machine that can do tasks by itself. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "robot",
    "plural": "robots"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "him",
    "pos": "pron.",
    "posDetail": "人称代词 pron.，宾格",
    "cn": "他，用作宾语或表语",
    "phonics": "him",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. Tom is my friend. I often play with ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "speak",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "会说；会讲某种语言；用某种语言说话",
    "phonics": "speak",
    "sentence": "I can ____.",
    "clue": "It's a verb. Can you ___ English?",
    "verb": true,
    "forms": {
      "base": "speak",
      "third": "speaks",
      "presentParticiple": "speaking"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "finish",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "完成；做好",
    "phonics": "finish",
    "sentence": "I can ____.",
    "clue": "It's a verb. Please ___ your homework before dinner.",
    "verb": true,
    "forms": {
      "base": "finish",
      "third": "finishes",
      "presentParticiple": "finishing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Monday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期一",
    "phonics": "Monday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Tuesday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Tuesday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期二",
    "phonics": "Tuesday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Wednesday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Wednesday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期三",
    "phonics": "Wednesday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Thursday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Thursday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期四",
    "phonics": "Thursday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Friday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Friday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期五",
    "phonics": "Friday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Saturday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Saturday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期六",
    "phonics": "Saturday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Sunday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "Sunday",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "星期日",
    "phonics": "Sunday",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It is a day of the week. It comes before Monday. Today is ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "weekend",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "周末",
    "phonics": "weekend",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means Saturday and Sunday. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "wash",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "洗",
    "phonics": "wash",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to clean something with water. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "wash",
      "past": "washed",
      "third": "washes",
      "presentParticiple": "washing"
    },
    "past": "washed"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "wash my clothes",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "洗我的衣服",
    "phonics": "wash my clothes",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to clean the clothes that belong to me. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "watch",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "看",
    "phonics": "watch",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to look at something for some time. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "watch",
      "past": "watched",
      "third": "watches",
      "presentParticiple": "watching"
    },
    "past": "watched"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "watch TV",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "看电视",
    "phonics": "watch TV",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to look at programmes on television. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "do",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "做；干",
    "phonics": "do",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to perform an action or task. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "do",
      "third": "does",
      "presentParticiple": "doing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "do homework",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "做作业",
    "phonics": "do homework",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to complete schoolwork at home. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "read",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "看；读",
    "phonics": "read",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “___”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "read",
      "past": "read",
      "third": "reads",
      "presentParticiple": "reading"
    },
    "past": "read"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "read books",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "看书；读书",
    "phonics": "read books",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to look at and understand books. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "踢；玩；参加体育运动",
    "phonics": "play",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to take part in a game, use a toy, or act in a story. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "play",
      "third": "plays",
      "presentParticiple": "playing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play football",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "踢足球",
    "phonics": "play football",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to take part in the game of football. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "cooking",
    "pos": "n.",
    "posDetail": "名词 n. / 动名词",
    "cn": "烹饪；烹调",
    "phonics": "cooking",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the activity of making food. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "cook",
      "third": "cooks",
      "presentParticiple": "cooking"
    },
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "often",
    "pos": "adv.",
    "posDetail": "频度副词 adv.",
    "cn": "时常；常常",
    "phonics": "often",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means many times. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "park",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "公园",
    "phonics": "park",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a public green place where people can walk or play. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "park",
    "plural": "parks"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "tired",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "疲倦的",
    "phonics": "tired",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means needing rest or sleep. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "sport",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "体育运动",
    "phonics": "sport",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a game or activity using physical skill. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sport",
    "plural": "sports",
    "alsoUncountable": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play sports",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "做体育运动",
    "phonics": "play sports",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to do games and physical activities. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "should",
    "pos": "modal v. / v.",
    "posDetail": "情态动词 modal v.",
    "cn": "应该；应当，常用于纠正别人",
    "phonics": "should",
    "sentence": "The word is ____.",
    "clue": "It's a verb. You ___ wash your hands before eating."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "every",
    "pos": "det.",
    "posDetail": "限定词 det.",
    "cn": "每一个；每个",
    "phonics": "every",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means each one in a group. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "day",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "一天；一日",
    "phonics": "day",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a period of twenty-four hours. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "schedule",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "工作计划；日程安排",
    "phonics": "schedule",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a plan showing what will happen and when. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "schedule",
    "plural": "schedules"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "sandwich",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "三明治",
    "phonics": "sandwich",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means food made by putting something between two pieces of bread. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sandwich",
    "plural": "sandwiches"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "salad",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "蔬菜沙拉；混合沙拉",
    "phonics": "salad",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a cold dish of mixed vegetables or fruit. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "salad",
    "plural": "salads",
    "alsoUncountable": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "hamburger",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "汉堡包",
    "phonics": "hamburger",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a round flat piece of meat served in a bread roll. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hamburger",
    "plural": "hamburgers"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "ice cream",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "冰激凌",
    "phonics": "ice cream",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a cold sweet food made from milk. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "tea",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "茶；茶水",
    "phonics": "tea",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a drink made by putting leaves in hot water. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "fresh",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "新鲜的；刚摘的",
    "phonics": "fresh",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means newly made, picked or caught. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "healthy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "健康的",
    "phonics": "healthy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means good for your body. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "delicious",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "美味的；可口的",
    "phonics": "delicious",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a very good taste. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "hot",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "辣的；辛辣的",
    "phonics": "hot",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a high temperature, or having a strong spicy taste. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "sweet",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "含糖的；甜的",
    "phonics": "sweet",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means tasting like sugar. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "drink",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "喝；饮",
    "phonics": "drink",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to take liquid into your mouth and swallow it. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "drink",
      "past": "drank",
      "third": "drinks",
      "presentParticiple": "drinking"
    },
    "past": "drank"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "thirsty",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "渴的；口渴的",
    "phonics": "thirsty",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means needing or wanting a drink. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "favourite",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "特别喜爱的",
    "phonics": "favourite",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means liked more than all the others. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "food",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "食物",
    "phonics": "food",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means things people or animals eat. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "Dear",
    "pos": "adj.",
    "posDetail": "形容词 adj. / 称呼语",
    "cn": "亲爱的，用于信函抬头的名字或头衔前",
    "phonics": "Dear",
    "sentence": "It is ____.",
    "clue": "It's an adjective. ___ Amy, Thank you for your letter."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "onion",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "洋葱；葱头",
    "phonics": "onion",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a round vegetable with many layers and a strong smell. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "onion",
    "plural": "onions"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "sing",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "唱；唱歌",
    "phonics": "sing",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to make music with your voice. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "sing",
      "third": "sings",
      "presentParticiple": "singing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "song",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "歌曲",
    "phonics": "song",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a short piece of music with words. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "song",
    "plural": "songs"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "sing English songs",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "唱英文歌曲",
    "phonics": "sing English songs",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to make music with your voice using English words. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play the pipa",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "弹琵琶",
    "phonics": "play the pipa",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to make music with a traditional Chinese string instrument. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "kung fu",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "功夫；武术",
    "phonics": "kung fu",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It means a Chinese martial art. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "do kung fu",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "练武术",
    "phonics": "do kung fu",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to practise Chinese martial arts. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "dance",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "跳舞",
    "phonics": "dance",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to move your body to music. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "dance",
      "third": "dances",
      "presentParticiple": "dancing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "draw",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "画",
    "phonics": "draw",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to make a picture with a pencil or pen. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "draw",
      "third": "draws",
      "presentParticiple": "drawing"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "cartoon",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "漫画",
    "phonics": "cartoon",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a funny or simple drawing, or an animated film. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cartoon",
    "plural": "cartoons"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "draw cartoons",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "画漫画",
    "phonics": "draw cartoons",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to make funny or simple pictures. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "cook",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "烹调；烹饪",
    "phonics": "cook",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means a person whose job is making food, or to make food. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "cook",
      "third": "cooks",
      "presentParticiple": "cooking"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "swim",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "游泳",
    "phonics": "swim",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to move through water using your arms and legs. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "swim",
      "third": "swims",
      "presentParticiple": "swimming"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play basketball",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "打篮球",
    "phonics": "play basketball",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to take part in the game played with a ball and a high hoop. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "ping-pong",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "乒乓球",
    "phonics": "ping-pong",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a game played over a table with small bats and a light ball. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play ping-pong",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "打乒乓球",
    "phonics": "play ping-pong",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to hit a small light ball over a table net. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "speak English",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "说英语",
    "phonics": "speak English",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to talk using the English language. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "we'll",
    "pos": "modal v. / v. / pron.",
    "posDetail": "人称代词＋情态动词缩写",
    "cn": "we will 的缩写，我们将要",
    "phonics": "we'll",
    "sentence": "The word is ____.",
    "clue": "It's a verb. It means the short form of “we will”. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "party",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "聚会；派对",
    "phonics": "party",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a social event where people eat, talk and have fun. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "party",
    "plural": "parties"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "next",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "下一个的；紧接着的；接下来的",
    "phonics": "next",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means coming immediately after this one. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "wonderful",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "极好的；了不起的",
    "phonics": "wonderful",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means extremely good. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "learn",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "学；学习；学会",
    "phonics": "learn",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to get knowledge or a new skill. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "learn",
      "third": "learns",
      "presentParticiple": "learning"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "any",
    "pos": "det.",
    "posDetail": "限定词 det.",
    "cn": "任何的；任一的",
    "phonics": "any",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means one or some, no matter which. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "problem",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "问题",
    "phonics": "problem",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something difficult that needs an answer or solution. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "problem",
    "plural": "problems"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "no problem",
    "pos": "phr.",
    "posDetail": "固定短语",
    "cn": "没问题",
    "phonics": "no problem",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a useful expression. It means a friendly phrase meaning something is easy or all right. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "want",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "要；想要",
    "phonics": "want",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to wish to have or do something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "want",
      "third": "wants",
      "presentParticiple": "wanting"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "send",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "邮寄；发送",
    "phonics": "send",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to make a letter, message or object go to another person. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "send",
      "third": "sends",
      "presentParticiple": "sending"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "email",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "电子邮件",
    "phonics": "email",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a message sent by computer or phone. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "at",
    "pos": "prep.",
    "posDetail": "介词 prep. / 符号读法",
    "cn": "用于电子邮箱地址中的“@”",
    "phonics": "at",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. My email is lily ___ school.com."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "clock",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "时钟；钟",
    "phonics": "clock",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a thing that shows the time. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "clock",
    "plural": "clocks"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "plant",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "植物",
    "phonics": "plant",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a living thing that grows in soil, or to put seeds in soil. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "plant",
      "third": "plants",
      "presentParticiple": "planting"
    },
    "noun": true,
    "countable": true,
    "singular": "plant",
    "plural": "plants",
    "alsoUncountable": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "bottle",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "瓶子",
    "phonics": "bottle",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a container for liquids with a narrow top. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bottle",
    "plural": "bottles"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "water bottle",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "水瓶",
    "phonics": "water bottle",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a bottle used for carrying drinking water. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "water bottle",
    "plural": "water bottles"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "bike",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "自行车；脚踏车",
    "phonics": "bike",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a two-wheeled vehicle moved by pushing pedals. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bike",
    "plural": "bikes"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "photo",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "照片；相片",
    "phonics": "photo",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a picture made with a camera. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "photo",
    "plural": "photos"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "front",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "正面",
    "phonics": "front",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the side that faces forward. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "in front of",
    "pos": "prep. phr. / prep.",
    "posDetail": "介词短语 prep. phr.",
    "cn": "在……前面",
    "phonics": "in front of",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a prepositional phrase. It means in a place before something, not behind it. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "between",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "在……中间",
    "phonics": "between",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. It means in the middle of two people or things. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "above",
    "pos": "adv. / prep.",
    "posDetail": "介词 prep. / 副词 adv.",
    "cn": "在或向……上面",
    "phonics": "above",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means in a higher place than something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "beside",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "在旁边；在附近",
    "phonics": "beside",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. It means next to something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "behind",
    "pos": "adv. / prep.",
    "posDetail": "介词 prep. / 副词 adv.",
    "cn": "在或向……后面",
    "phonics": "behind",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means at the back of something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "there",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "表示存在或发生",
    "phonics": "there",
    "sentence": "I can ____.",
    "clue": "It's an adverb. ___ is a clock on the wall."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "grandparent",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "祖父；祖母；外祖父；外祖母",
    "phonics": "grandparent",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a grandmother or grandfather. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "grandparent",
    "plural": "grandparents"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "their",
    "pos": "adj. / pron. / det.",
    "posDetail": "形容词性物主代词 / 限定词 det.",
    "cn": "他们的；她们的；它们的",
    "phonics": "their",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means belonging to them. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "house",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "房屋；房子；住宅",
    "phonics": "house",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a building where people live. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "house",
    "plural": "houses"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "lot",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大量；许多",
    "phonics": "lot",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a large number or amount. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "lots of",
    "pos": "限定短语",
    "posDetail": "限定短语",
    "cn": "大量；许多",
    "phonics": "lots of",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It means a large number or amount of something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "flower",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "花；花朵",
    "phonics": "flower",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means the colourful part of a plant. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "flower",
    "plural": "flowers"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "move",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "搬家",
    "phonics": "move",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to go from one home or place to another. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "move",
      "third": "moves",
      "presentParticiple": "moving"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "dirty",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "肮脏的",
    "phonics": "dirty",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not clean. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "everywhere",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "处处；到处",
    "phonics": "everywhere",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means in all places. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "mouse",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "老鼠",
    "phonics": "mouse",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very small animal with a long tail. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mouse",
    "plural": "mice"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "live",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "住；居住",
    "phonics": "live",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to have your home in a place. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "live",
      "third": "lives",
      "presentParticiple": "living"
    }
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 5",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "nature",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "自然界；大自然",
    "phonics": "nature",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means plants, animals and everything not made by people. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "forest",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "森林；林区",
    "phonics": "forest",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large area covered with trees. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "forest",
    "plural": "forests"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "river",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "河；江",
    "phonics": "river",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a long natural flow of water. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "river",
    "plural": "rivers"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "lake",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "湖；湖泊",
    "phonics": "lake",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large area of water with land around it. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "lake",
    "plural": "lakes"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "mountain",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "高山；山岳",
    "phonics": "mountain",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very high area of land. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mountain",
    "plural": "mountains"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "hill",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "山丘；小山",
    "phonics": "hill",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a raised area of land lower than a mountain. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hill",
    "plural": "hills"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "tree",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "树；树木；乔木",
    "phonics": "tree",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a tall plant with a trunk and branches. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "tree",
    "plural": "trees"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "bridge",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "桥",
    "phonics": "bridge",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a structure used to cross a river or road. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bridge",
    "plural": "bridges"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "building",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "建筑物；房子；楼房",
    "phonics": "building",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a structure with walls and a roof. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "building",
    "plural": "buildings"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "village",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "村庄；村镇",
    "phonics": "village",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a small group of houses in the countryside. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "village",
    "plural": "villages"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "house",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "房屋；房子；住宅",
    "phonics": "house",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a building where people live. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "house",
    "plural": "houses"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "boating",
    "pos": "n.",
    "posDetail": "名词 n. / 动名词",
    "cn": "划船",
    "phonics": "boating",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the activity of travelling in a small boat. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go boating",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去划船",
    "phonics": "go boating",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to travel or have fun in a small boat. Complete the phrase: ___."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "aren't",
    "pos": "v.",
    "posDetail": "be 动词否定缩写",
    "cn": "are not 的缩写，不是；没有",
    "phonics": "aren't",
    "sentence": "The word is ____.",
    "clue": "It's a verb. There ___ any tall buildings in the village."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "rabbit",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "兔；野兔",
    "phonics": "rabbit",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a small animal with long ears. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "rabbit",
    "plural": "rabbits"
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "high",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "高的",
    "phonics": "high",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means far above the ground. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "eat breakfast",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "吃早饭",
    "phonics": "eat breakfast",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to have the first meal of the day. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "have ... class",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "上……课",
    "phonics": "have ... class",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to attend a lesson in a subject. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "play sports",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "进行体育运动",
    "phonics": "play sports",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to do games and physical activities. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "exercise",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "活动；运动",
    "phonics": "exercise",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means physical activity that keeps the body strong. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "do morning exercises",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "做早操",
    "phonics": "do morning exercises",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to do a set of movements in the morning. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "eat dinner",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "吃晚饭",
    "phonics": "eat dinner",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to have the main evening meal. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "clean my room",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "打扫我的房间",
    "phonics": "clean my room",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to make my bedroom tidy and not dirty. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go for a walk",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "散步",
    "phonics": "go for a walk",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to walk for pleasure or exercise. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go shopping",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去买东西；购物",
    "phonics": "go shopping",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to visit shops to buy things. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "take",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "学习；上课",
    "phonics": "take",
    "sentence": "I can ____.",
    "clue": "It's a verb. I ___ an art class on Saturdays.",
    "verb": true,
    "forms": {
      "base": "take",
      "past": "took",
      "third": "takes",
      "presentParticiple": "taking"
    },
    "past": "took"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "dancing",
    "pos": "n.",
    "posDetail": "名词 n. / 动名词",
    "cn": "跳舞；舞蹈",
    "phonics": "dancing",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means moving the body to music as an activity. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "dance",
      "third": "dances",
      "presentParticiple": "dancing"
    },
    "noun": true,
    "countable": false
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "take a dancing class",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "上舞蹈课",
    "phonics": "take a dancing class",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to attend a lesson where you learn to dance. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "when",
    "pos": "adv. / conj.",
    "posDetail": "疑问副词 adv. / 连词 conj.",
    "cn": "什么时候；何时",
    "phonics": "when",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means used to ask at what time something happens. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "after",
    "pos": "adv. / prep. / conj.",
    "posDetail": "介词 prep. / 连词 conj. / 副词 adv.",
    "cn": "在某段时间之后",
    "phonics": "after",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means later than a time or event. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "start",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "开始",
    "phonics": "start",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to begin. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "start",
      "third": "starts",
      "presentParticiple": "starting"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "usually",
    "pos": "adv.",
    "posDetail": "频度副词 adv.",
    "cn": "通常地；惯常地",
    "phonics": "usually",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means most of the time. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Spain",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "西班牙",
    "phonics": "Spain",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a country in Europe whose capital is Madrid. The answer is ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "late",
    "pos": "adj. / adv.",
    "posDetail": "形容词 adj. / 副词 adv.",
    "cn": "晚；迟",
    "phonics": "late",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It means after the expected or correct time. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "a.m.",
    "pos": "n.",
    "posDetail": "名词 n. / 时间标记",
    "cn": "午前；上午",
    "phonics": "a.m.",
    "sentence": "The word is ____.",
    "clue": "It's a noun. 7:00 ___ is in the morning.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "p.m.",
    "pos": "n.",
    "posDetail": "名词 n. / 时间标记",
    "cn": "午后；下午",
    "phonics": "p.m.",
    "sentence": "The word is ____.",
    "clue": "It's a noun. 7:00 ___ is in the evening.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "why",
    "pos": "adv.",
    "posDetail": "疑问副词 adv.",
    "cn": "为什么",
    "phonics": "why",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means used to ask for a reason. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "shop",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "去买东西；购物",
    "phonics": "shop",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to go to stores and buy things. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "shop",
      "third": "shops",
      "presentParticiple": "shopping"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "work",
    "pos": "v. / n.",
    "posDetail": "动词 v. / 名词 n.",
    "cn": "工作",
    "phonics": "work",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to do a job. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "work",
      "third": "works",
      "presentParticiple": "working"
    },
    "noun": true,
    "countable": false
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "last",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "上一个的；刚过去的",
    "phonics": "last",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the one just before the present one. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "sound",
    "pos": "v.",
    "posDetail": "连系动词 v.",
    "cn": "听起来好像",
    "phonics": "sound",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to seem in a particular way when heard. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "sound",
      "third": "sounds",
      "presentParticiple": "sounding"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "also",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "还；也",
    "phonics": "also",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means in addition; too. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "busy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "忙的",
    "phonics": "busy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means having a lot to do. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "need",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "需要",
    "phonics": "need",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to require something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "need",
      "third": "needs",
      "presentParticiple": "needing"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "play",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "戏剧；剧本",
    "phonics": "play",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means to take part in a game, use a toy, or act in a story. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "play",
      "third": "plays",
      "presentParticiple": "playing"
    },
    "noun": true,
    "countable": true,
    "singular": "play",
    "plural": "plays"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "letter",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "信",
    "phonics": "letter",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a written message sent to someone. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "letter",
    "plural": "letters"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "live",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "居住",
    "phonics": "live",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to have your home in a place. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "live",
      "third": "lives",
      "presentParticiple": "living"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "island",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "岛",
    "phonics": "island",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means land with water all around it. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "island",
    "plural": "islands"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "always",
    "pos": "adv.",
    "posDetail": "频度副词 adv.",
    "cn": "总是；一直",
    "phonics": "always",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means at all times. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "cave",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "山洞；洞穴",
    "phonics": "cave",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a large hole in the side of a hill or underground. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cave",
    "plural": "caves"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go swimming",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去游泳",
    "phonics": "go swimming",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to swim for fun or exercise. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "win",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "获胜",
    "phonics": "win",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to be the best in a game or contest. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "win",
      "third": "wins",
      "presentParticiple": "wining"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "spring",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "春天",
    "phonics": "spring",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the season after winter when plants begin to grow. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "summer",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "夏天",
    "phonics": "summer",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the hottest season of the year. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "autumn",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "秋天",
    "phonics": "autumn",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the season after summer when leaves fall. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "winter",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "冬天",
    "phonics": "winter",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the coldest season of the year. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "season",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "季节",
    "phonics": "season",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means one of the four parts of the year. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "season",
    "plural": "seasons"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "picnic",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "野餐",
    "phonics": "picnic",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a meal eaten outdoors. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "picnic",
    "plural": "picnics"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go on a picnic",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去野餐",
    "phonics": "go on a picnic",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to go outdoors and eat a meal there. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "pick",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "摘；采集",
    "phonics": "pick",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to take a flower or fruit from a plant. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "pick",
      "third": "picks",
      "presentParticiple": "picking"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "pick apples",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "摘苹果",
    "phonics": "pick apples",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to take apples from a tree. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "snowman",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "雪人",
    "phonics": "snowman",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a person-shaped figure made of snow. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "snowman",
    "plural": "snowmans"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "make a snowman",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "堆雪人",
    "phonics": "make a snowman",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to build a person-shaped figure from snow. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go swimming",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去游泳",
    "phonics": "go swimming",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to swim for fun or exercise. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "which",
    "pos": "pron. / det.",
    "posDetail": "疑问代词 pron. / 疑问限定词 det.",
    "cn": "哪一个",
    "phonics": "which",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means used to ask someone to choose one from a group. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "best",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "最；最高程度地",
    "phonics": "best",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means better than all the others. Complete the sentence with the ___ word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "snow",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "雪",
    "phonics": "snow",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means soft white pieces of frozen water that fall from the sky. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "good job",
    "pos": "固定表达",
    "posDetail": "固定表达",
    "cn": "做得好",
    "phonics": "good job",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a useful expression. It means words used to praise someone for doing well. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "because",
    "pos": "conj.",
    "posDetail": "连词 conj.",
    "cn": "因为",
    "phonics": "because",
    "sentence": "The word is ____.",
    "clue": "It's a linking word. It means used before the reason for something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "vacation",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "假期",
    "phonics": "vacation",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a time when you do not go to school or work. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "vacation",
    "plural": "vacations"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "all",
    "pos": "adv. / pron. / det.",
    "posDetail": "副词 adv. / 代词 pron. / 限定词 det.",
    "cn": "全；完全",
    "phonics": "all",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means the whole number or amount. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "pink",
    "pos": "n. / adj.",
    "posDetail": "名词 n. / 形容词 adj.",
    "cn": "粉色；粉色的",
    "phonics": "pink",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means a pale red colour. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "lovely",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "可爱的；美丽的",
    "phonics": "lovely",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means very pleasant, beautiful or lovable. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "leaf",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "叶子",
    "phonics": "leaf",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a flat green part of a plant. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "leaf",
    "plural": "leaves"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "leaves",
    "pos": "n.",
    "posDetail": "名词 n.，复数",
    "cn": "叶子，leaf 的复数",
    "phonics": "leaves",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means more than one leaf. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "leaf",
    "plural": "leaves"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "fall",
    "pos": "v. / n.",
    "posDetail": "动词 v. / 名词 n.",
    "cn": "落下；美式英语中表示“秋天”",
    "phonics": "fall",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to move down towards the ground, or the American word for autumn. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "fall",
      "past": "fell",
      "third": "falls",
      "presentParticiple": "falling"
    },
    "past": "fell",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "paint",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "用颜料绘画",
    "phonics": "paint",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to make a picture using colours and a brush. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "paint",
      "third": "paints",
      "presentParticiple": "painting"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "January",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "一月",
    "phonics": "January",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 1 of the year, between December and February. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "February",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "二月",
    "phonics": "February",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 2 of the year, between January and March. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "March",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "三月",
    "phonics": "March",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 3 of the year, between February and April. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "April",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "四月",
    "phonics": "April",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 4 of the year, between March and May. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "May",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "五月",
    "phonics": "May",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 5 of the year, between April and June. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "June",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "六月",
    "phonics": "June",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 6 of the year, between May and July. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "July",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "七月",
    "phonics": "July",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 7 of the year, between June and August. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "August",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "八月",
    "phonics": "August",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 8 of the year, between July and September. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "September",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "九月",
    "phonics": "September",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 9 of the year, between August and October. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "October",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "十月",
    "phonics": "October",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 10 of the year, between September and November. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "November",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "十一月",
    "phonics": "November",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 11 of the year, between October and December. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "December",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "十二月",
    "phonics": "December",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is month 12 of the year, between November and January. My birthday is in ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "few",
    "pos": "adj. / det.",
    "posDetail": "形容词 adj. / 限定词 det.",
    "cn": "不多；很少",
    "phonics": "few",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not many. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "a few",
    "pos": "限定短语",
    "posDetail": "限定短语",
    "cn": "一些；几个",
    "phonics": "a few",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It means a small number of something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "thing",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "事情",
    "phonics": "thing",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an object, idea, event or activity. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "thing",
    "plural": "things"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "meet",
    "pos": "v. / n.",
    "posDetail": "名词 n. / 动词 v.",
    "cn": "集会；开会",
    "phonics": "meet",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means an organised event, or to come together. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "meet",
      "third": "meets",
      "presentParticiple": "meeting"
    },
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "sports meet",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "运动会",
    "phonics": "sports meet",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a school event with races and other sports. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "trip",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "旅行",
    "phonics": "trip",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a journey to another place, or to catch your foot and nearly fall. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "trip",
      "third": "trips",
      "presentParticiple": "triping"
    },
    "noun": true,
    "countable": true,
    "singular": "trip",
    "plural": "trips"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "year",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "年",
    "phonics": "year",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means twelve months. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "year",
    "plural": "years"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "plant",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "种植",
    "phonics": "plant",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means a living thing that grows in soil, or to put seeds in soil. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "plant",
      "third": "plants",
      "presentParticiple": "planting"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "contest",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "比赛；竞赛",
    "phonics": "contest",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a competition to find the best person or team. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "contest",
    "plural": "contests"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "the Great Wall",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "长城",
    "phonics": "the Great Wall",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It is a proper name. It is a very long ancient wall in northern China. The answer is ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "national",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "国家的",
    "phonics": "national",
    "sentence": "I can see the ____.",
    "clue": "It's an adjective. It means connected with a whole country. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "National Day",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "国庆日",
    "phonics": "National Day",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It is a proper name. It is a holiday celebrating a country. The answer is ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "American",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "美国的",
    "phonics": "American",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means from the United States of America. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Thanksgiving",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "感恩节",
    "phonics": "Thanksgiving",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a proper name. It is an American holiday when families give thanks and eat together. The answer is ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Christmas",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "圣诞节",
    "phonics": "Christmas",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a proper name. It is a holiday on December 25. The answer is ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "game",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "游戏",
    "phonics": "game",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an activity played for fun or competition. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "game",
    "plural": "games"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "riddle",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "谜；谜语",
    "phonics": "riddle",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a question with a clever or funny answer. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "riddle",
    "plural": "riddles"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "act",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "扮演",
    "phonics": "act",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to play a part in a play. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "act",
      "third": "acts",
      "presentParticiple": "acting"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "act out",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "把……表演出来",
    "phonics": "act out",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to show a story by performing it. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "RSVP",
    "pos": "abbr.",
    "posDetail": "缩略语",
    "cn": "请赐复，尤用于请柬",
    "phonics": "RSVP",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means letters on an invitation asking you to reply. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "by",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "在……之前",
    "phonics": "by",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. It means not later than a particular time, or using a way of travel. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "first",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第一的",
    "phonics": "first",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 1, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "one",
    "ordinal": "first",
    "cnOrdinal": "第一"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "second",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第二的",
    "phonics": "second",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 2, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "two",
    "ordinal": "second",
    "cnOrdinal": "第二"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "third",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第三的",
    "phonics": "third",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 3, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "three",
    "ordinal": "third",
    "cnOrdinal": "第三"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "fourth",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第四的",
    "phonics": "fourth",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 4, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "four",
    "ordinal": "fourth",
    "cnOrdinal": "第四"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "fifth",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第五的",
    "phonics": "fifth",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 5, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "five",
    "ordinal": "fifth",
    "cnOrdinal": "第五"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "twelfth",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第十二的",
    "phonics": "twelfth",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 12, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "twelve",
    "ordinal": "twelfth",
    "cnOrdinal": "第十二"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "twentieth",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第二十的",
    "phonics": "twentieth",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 20, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "twenty",
    "ordinal": "twentieth",
    "cnOrdinal": "第二十"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "twenty-first",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第二十一的",
    "phonics": "twenty-first",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 21, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "twenty-one",
    "ordinal": "twenty-first",
    "cnOrdinal": "第二十一"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "twenty-third",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第二十三的",
    "phonics": "twenty-third",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 23, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "twenty-three",
    "ordinal": "twenty-third",
    "cnOrdinal": "第二十三"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "colors_numbers",
    "sec": "颜色和数词",
    "word": "thirtieth",
    "pos": "num.",
    "posDetail": "序数词 num.",
    "cn": "第三十的",
    "phonics": "thirtieth",
    "sentence": "The number is ____.",
    "clue": "It's a number word. It shows position number 30, not the amount. He came ___ in the race.",
    "number": true,
    "cardinal": "thirty",
    "ordinal": "thirtieth",
    "cnOrdinal": "第三十"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "other",
    "pos": "adj. / det.",
    "posDetail": "形容词 adj. / 限定词 det.",
    "cn": "其他的",
    "phonics": "other",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means different from the one already mentioned. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "special",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "特殊的；特别的",
    "phonics": "special",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means different from usual and important. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "show",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "展览",
    "phonics": "show",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an event where things are displayed, or to let someone see something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "show",
      "third": "shows",
      "presentParticiple": "showing"
    },
    "noun": true,
    "countable": true,
    "singular": "show",
    "plural": "shows",
    "alsoUncountable": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "festival",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "节日",
    "phonics": "festival",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a special day or time of celebration. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "festival",
    "plural": "festivals"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "kitten",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "小猫",
    "phonics": "kitten",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a young cat. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "kitten",
    "plural": "kittens"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "diary",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "日记",
    "phonics": "diary",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a book where you write about each day. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "diary",
    "plural": "diaries"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "still",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "仍然；依旧；还是",
    "phonics": "still",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means continuing until now. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "noise",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "声音；响声；噪音",
    "phonics": "noise",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a sound, especially one that is loud or unpleasant. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "noise",
    "plural": "noises",
    "alsoUncountable": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "fur",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "某些动物身上浓密的软毛",
    "phonics": "fur",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the thick soft hair on an animal. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "open",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "开着的",
    "phonics": "open",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not closed. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "walk",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "行走",
    "phonics": "walk",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to move on foot. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "walk",
      "third": "walks",
      "presentParticiple": "walking"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "mine",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "我的",
    "phonics": "mine",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to me, used without a noun after it. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "yours",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "你或你们的",
    "phonics": "yours",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to you, used without a noun after it. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "his",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "他的",
    "phonics": "his",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to a boy or man. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "hers",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "她的",
    "phonics": "hers",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to her, used without a noun. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "theirs",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "他们的；她们的；它们的",
    "phonics": "theirs",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to them, used without a noun. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "ours",
    "pos": "n. / pron.",
    "posDetail": "名词性物主代词 pron.",
    "cn": "我们的",
    "phonics": "ours",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means belonging to us, used without a noun. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "climbing",
    "pos": "n.",
    "posDetail": "现在分词 / 动名词",
    "cn": "正在攀登；攀爬，climb 的-ing形式",
    "phonics": "climbing",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means moving up a tree, wall or mountain. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "climb",
      "third": "climbs",
      "presentParticiple": "climbing"
    },
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "eating",
    "pos": "n.",
    "posDetail": "现在分词 / 动名词",
    "cn": "正在吃，eat 的-ing形式",
    "phonics": "eating",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means putting food in the mouth and swallowing it now. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "eat",
      "past": "ate",
      "third": "eats",
      "presentParticiple": "eating"
    },
    "past": "ate",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "playing",
    "pos": "n.",
    "posDetail": "现在分词 / 动名词",
    "cn": "正在玩耍，play 的-ing形式",
    "phonics": "playing",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means taking part in a game or using a toy now. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "play",
      "third": "plays",
      "presentParticiple": "playing"
    },
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "jumping",
    "pos": "n.",
    "posDetail": "现在分词 / 动名词",
    "cn": "正在跳，jump 的-ing形式",
    "phonics": "jumping",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means pushing yourself off the ground into the air now. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "jump",
      "third": "jumps",
      "presentParticiple": "jumping"
    },
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "drinking",
    "pos": "n.",
    "posDetail": "现在分词 / 动名词",
    "cn": "正在喝水，drink 的-ing形式",
    "phonics": "drinking",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means taking liquid into the mouth now. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "drink",
      "past": "drank",
      "third": "drinks",
      "presentParticiple": "drinking"
    },
    "past": "drank",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "sleeping",
    "pos": "n.",
    "posDetail": "现在分词 / 动名词",
    "cn": "正在睡觉，sleep 的-ing形式",
    "phonics": "sleeping",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means resting with eyes closed now. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "sleep",
      "past": "slept",
      "third": "sleeps",
      "presentParticiple": "sleeping"
    },
    "past": "slept",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "each",
    "pos": "pron. / det.",
    "posDetail": "限定词 det. / 代词 pron.",
    "cn": "每一；各个",
    "phonics": "each",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means every one separately. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "each other",
    "pos": "pron.",
    "posDetail": "相互代词 pron.",
    "cn": "相互；彼此",
    "phonics": "each other",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a pronoun or a word used before a noun. It means one another. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "excited",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "兴奋的；激动的",
    "phonics": "excited",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means very happy and interested because something good is going to happen. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "like",
    "pos": "prep. / conj.",
    "posDetail": "介词 prep. / 连词 conj.",
    "cn": "像……那样",
    "phonics": "like",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. It means similar to. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "doing morning exercises",
    "pos": "现在进行时短语",
    "posDetail": "现在进行时短语",
    "cn": "正在做早操",
    "phonics": "doing morning exercises",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means doing a set of body movements in the morning right now. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "having ... class",
    "pos": "现在进行时短语",
    "posDetail": "现在进行时短语",
    "cn": "正在上……课",
    "phonics": "having ... class",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means attending a lesson right now. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "eating lunch",
    "pos": "现在进行时短语",
    "posDetail": "现在进行时短语",
    "cn": "正在吃午饭",
    "phonics": "eating lunch",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means having the midday meal right now. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "reading a book",
    "pos": "现在进行时短语",
    "posDetail": "现在进行时短语",
    "cn": "正在看书",
    "phonics": "reading a book",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means looking at and understanding a book right now. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "listening to music",
    "pos": "现在进行时短语",
    "posDetail": "现在进行时短语",
    "cn": "正在听音乐",
    "phonics": "listening to music",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means paying attention to songs or music right now. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "keep",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "保持某种状态",
    "phonics": "keep",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to continue to have something in the same state. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "keep",
      "third": "keeps",
      "presentParticiple": "keeping"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "keep to the right",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "靠右",
    "phonics": "keep to the right",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to stay on the right side while moving. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "keep your desk clean",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "保持你的课桌干净",
    "phonics": "keep your desk clean",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to make sure your desk does not become dirty or untidy. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "talk quietly",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "小声讲话",
    "phonics": "talk quietly",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to speak in a low voice. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "turn",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "顺序",
    "phonics": "turn",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means to change direction. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "turn",
      "third": "turns",
      "presentParticiple": "turning"
    },
    "noun": true,
    "countable": true,
    "singular": "turn",
    "plural": "turns"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "take turns",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "按顺序来；轮流",
    "phonics": "take turns",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to do something one person after another. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "bamboo",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "竹子",
    "phonics": "bamboo",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a tall plant with hard hollow stems, eaten by pandas. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "its",
    "pos": "adj. / pron. / det.",
    "posDetail": "形容词性物主代词 / 限定词 det.",
    "cn": "它的；他的；她的，指事物、动物或幼儿",
    "phonics": "its",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means belonging to an animal or thing. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "show",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "给人看",
    "phonics": "show",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means an event where things are displayed, or to let someone see something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "show",
      "third": "shows",
      "presentParticiple": "showing"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "anything",
    "pos": "pron.",
    "posDetail": "不定代词 pron.",
    "cn": "任何事物",
    "phonics": "anything",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means any object, event or idea. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "else",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "另外；其他",
    "phonics": "else",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means different or more. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "exhibition",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "展览",
    "phonics": "exhibition",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a public event where pictures or objects are displayed. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "exhibition",
    "plural": "exhibitions"
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "say",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "说；讲",
    "phonics": "say",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to speak words. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "say",
      "third": "says",
      "presentParticiple": "saying"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "have a look",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "看一看",
    "phonics": "have a look",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to look at something for a short time. Complete the phrase: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "sushi",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "寿司",
    "phonics": "sushi",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a Japanese food often made with rice and fish. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "teach",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "教",
    "phonics": "teach",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to help someone learn. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "teach",
      "third": "teaches",
      "presentParticiple": "teaching"
    }
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "sure",
    "pos": "adj.",
    "posDetail": "感叹用语 / 形容词 adj.",
    "cn": "当然，表示同意",
    "phonics": "sure",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means used to show that you agree or are certain. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "Canadian",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "加拿大的",
    "phonics": "Canadian",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means from Canada. Complete the sentence with the best word: ___."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "Spanish",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "西班牙的",
    "phonics": "Spanish",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means from Spain or in the language of Spain. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "science",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "科学",
    "phonics": "science",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means the study of the natural world through tests and facts. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "museum",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "博物馆",
    "phonics": "museum",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where old, scientific or artistic objects are shown. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "museum",
    "plural": "museums"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "post office",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "邮局",
    "phonics": "post office",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a place where people send letters and parcels. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "post office",
    "plural": "post offices"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "bookstore",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "书店",
    "phonics": "bookstore",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a shop that sells books. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bookstore",
    "plural": "bookstores"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "cinema",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "电影院",
    "phonics": "cinema",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where people watch films on a large screen. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cinema",
    "plural": "cinemas"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "hospital",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "医院",
    "phonics": "hospital",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where sick or hurt people get medical care. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hospital",
    "plural": "hospitals"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "crossing",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "十字路口",
    "phonics": "crossing",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where roads meet or where people cross. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "crossing",
    "plural": "crossings"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "turn",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "转弯",
    "phonics": "turn",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to change direction. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "turn",
      "third": "turns",
      "presentParticiple": "turning"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "left",
    "pos": "n. / adj. / adv.",
    "posDetail": "名词 n. / 副词 adv. / 形容词 adj.",
    "cn": "左；向左",
    "phonics": "left",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It means the side opposite right. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "straight",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "笔直地",
    "phonics": "straight",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means without turning left or right. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "right",
    "pos": "n. / adj. / adv.",
    "posDetail": "名词 n. / 副词 adv. / 形容词 adj.",
    "cn": "右；向右",
    "phonics": "right",
    "sentence": "I can ____.",
    "clue": "It's an adjective. Your answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "ask",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "问",
    "phonics": "ask",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to speak or write in order to get an answer. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "ask",
      "third": "asks",
      "presentParticiple": "asking"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "sir",
    "pos": "n.",
    "posDetail": "名词 n. / 称呼语",
    "cn": "先生，对男子的礼貌称呼",
    "phonics": "sir",
    "sentence": "The word is ____.",
    "clue": "It's a useful expression. It means a polite word used when speaking to a man. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "interesting",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "有趣的",
    "phonics": "interesting",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means making you want to know more. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Italian",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "意大利的",
    "phonics": "Italian",
    "sentence": "I can see the ____.",
    "clue": "It's an adjective. It means from Italy. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "restaurant",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "餐馆",
    "phonics": "restaurant",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where people pay to eat meals. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "restaurant",
    "plural": "restaurants"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "pizza",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "比萨饼",
    "phonics": "pizza",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a round flat food with cheese and other things on top. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "street",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大街；街道",
    "phonics": "street",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a road in a town or city with buildings beside it. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "street",
    "plural": "streets"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "get",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "到达",
    "phonics": "get",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to arrive at a place. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "get",
      "third": "gets",
      "presentParticiple": "geting"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "GPS",
    "pos": "n. / abbr.",
    "posDetail": "名词 n. / 缩略语",
    "cn": "全球卫星定位系统",
    "phonics": "GPS",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a system that uses satellites to show where you are. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "gave",
    "pos": "v.",
    "posDetail": "动词 v.，过去式",
    "cn": "提供；交给，give 的过去式",
    "phonics": "gave",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means the past form of “give”. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "give",
      "past": "gave",
      "third": "gives",
      "presentParticiple": "giving"
    },
    "past": "gave"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "feature",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "特点",
    "phonics": "feature",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an important or interesting part of something. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "feature",
    "plural": "features"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "follow",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "跟着",
    "phonics": "follow",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to go after someone or move along the same way. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "follow",
      "third": "follows",
      "presentParticiple": "following"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "far",
    "pos": "adj. / adv.",
    "posDetail": "形容词 adj. / 副词 adv.",
    "cn": "较远的；远",
    "phonics": "far",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It means a long distance away. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "tell",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "告诉",
    "phonics": "tell",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to give someone information. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "tell",
      "third": "tells",
      "presentParticiple": "telling"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "on foot",
    "pos": "prep. phr. / prep.",
    "posDetail": "介词短语 prep. phr. / 方式状语",
    "cn": "步行",
    "phonics": "on foot",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a prepositional phrase. It means by walking. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "by",
    "pos": "prep.",
    "posDetail": "介词 prep.",
    "cn": "乘，表示交通方式",
    "phonics": "by",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. It means not later than a particular time, or using a way of travel. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "bus",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "公共汽车",
    "phonics": "bus",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a large road vehicle that carries many people. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "bus",
    "plural": "buses"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "plane",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "飞机",
    "phonics": "plane",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a vehicle with wings that flies. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "plane",
    "plural": "planes"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "taxi",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "出租汽车",
    "phonics": "taxi",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a car with a driver that takes passengers for money. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "taxi",
    "plural": "taxis"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "ship",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大船",
    "phonics": "ship",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a very large boat. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "ship",
    "plural": "ships"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "subway",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "地铁",
    "phonics": "subway",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means an underground city railway. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "subway",
    "plural": "subways"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "train",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "火车",
    "phonics": "train",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a group of railway carriages pulled along tracks. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "train",
    "plural": "trains"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "slow",
    "pos": "v. / adj.",
    "posDetail": "动词 v. / 形容词 adj.",
    "cn": "使放慢速度；慢的",
    "phonics": "slow",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means not moving quickly, or to make something move less quickly. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "slow",
      "third": "slows",
      "presentParticiple": "slowing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "down",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "减少；降低；向下",
    "phonics": "down",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means towards a lower place. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "slow down",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "慢下来",
    "phonics": "slow down",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to move less quickly. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "stop",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "停下",
    "phonics": "stop",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to end movement. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "stop",
      "third": "stops",
      "presentParticiple": "stopping"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "Mrs",
    "pos": "n.",
    "posDetail": "称谓名词 n.",
    "cn": "夫人",
    "phonics": "Mrs",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a title used before the family name of a married woman. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "early",
    "pos": "adj. / adv.",
    "posDetail": "形容词 adj. / 副词 adv.",
    "cn": "早到的；早地",
    "phonics": "early",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It means before the expected or usual time. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "body_clothes",
    "sec": "身体和衣物",
    "word": "helmet",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "头盔",
    "phonics": "helmet",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a hard covering worn to protect the head. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "helmet",
    "plural": "helmets"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "must",
    "pos": "modal v. / v.",
    "posDetail": "情态动词 modal v.",
    "cn": "必须",
    "phonics": "must",
    "sentence": "The word is ____.",
    "clue": "It's a verb. It means used to say something is necessary. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "wear",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "戴",
    "phonics": "wear",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to have clothes or something on your body. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "wear",
      "third": "wears",
      "presentParticiple": "wearing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "attention",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "注意",
    "phonics": "attention",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means careful watching or listening. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "pay attention to",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "注意",
    "phonics": "pay attention to",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to watch or listen to something carefully. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "traffic",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "交通",
    "phonics": "traffic",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means cars, buses and other vehicles on roads. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "traffic lights",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.，复数",
    "cn": "交通信号灯",
    "phonics": "traffic lights",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means red, yellow and green lights that control road traffic. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "traffic light",
    "plural": "traffic lights"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Munich",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "慕尼黑，德国城市",
    "phonics": "Munich",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a city in southern Germany. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Germany",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "德国",
    "phonics": "Germany",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a European country whose capital is Berlin. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Alaska",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "阿拉斯加州，美国州名",
    "phonics": "Alaska",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a cold US state far to the northwest. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "sled",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "雪橇",
    "phonics": "sled",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a vehicle that slides over snow. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "sled",
    "plural": "sleds"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "fast",
    "pos": "adj. / adv.",
    "posDetail": "形容词 adj. / 副词 adv.",
    "cn": "快的；快速地",
    "phonics": "fast",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It means moving quickly. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "ferry",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "轮渡",
    "phonics": "ferry",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a boat that carries people or vehicles across water. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "ferry",
    "plural": "ferries"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Papa Westray",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "帕帕韦斯特雷岛",
    "phonics": "Papa Westray",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It is a place name. It is a small island in Scotland. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Scotland",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "苏格兰",
    "phonics": "Scotland",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is the northern part of the UK. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "visit",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "拜访",
    "phonics": "visit",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to go and spend time with a person or at a place. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "visit",
      "third": "visits",
      "presentParticiple": "visiting"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "film",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "电影",
    "phonics": "film",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a story shown as moving pictures. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "see a film",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "看电影",
    "phonics": "see a film",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to watch a movie. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "trip",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "旅行",
    "phonics": "trip",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a journey to another place, or to catch your foot and nearly fall. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "trip",
      "third": "trips",
      "presentParticiple": "triping"
    },
    "noun": true,
    "countable": true,
    "singular": "trip",
    "plural": "trips"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "take a trip",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去旅行",
    "phonics": "take a trip",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to travel somewhere for a short time. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "supermarket",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "超市",
    "phonics": "supermarket",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a large shop selling food and many other things. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "supermarket",
    "plural": "supermarkets"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "evening",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "晚上；傍晚",
    "phonics": "evening",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the part of the day between afternoon and night. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "tonight",
    "pos": "n. / adv.",
    "posDetail": "副词 adv. / 名词 n.",
    "cn": "在今晚",
    "phonics": "tonight",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means during this evening or night. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "tomorrow",
    "pos": "n. / adv.",
    "posDetail": "名词 n. / 副词 adv.",
    "cn": "明天",
    "phonics": "tomorrow",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means the day after today. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "next week",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr. / 时间状语",
    "cn": "下周",
    "phonics": "next week",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means the week after this one. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "dictionary",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "词典",
    "phonics": "dictionary",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a book or app that explains words. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dictionary",
    "plural": "dictionaries"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "comic",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "滑稽的",
    "phonics": "comic",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means funny. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "comic book",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "儿童连环画册",
    "phonics": "comic book",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a book that tells stories with pictures and speech bubbles. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "comic book",
    "plural": "comic books"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "word",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "单词",
    "phonics": "word",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a single unit of language. Complete the sentence with the best ___: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "word book",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "单词书",
    "phonics": "word book",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a book used for learning and recording words. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "word book",
    "plural": "word books"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "postcard",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "明信片",
    "phonics": "postcard",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a card with a picture, sent without an envelope. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "postcard",
    "plural": "postcards"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "lesson",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "课",
    "phonics": "lesson",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a period of time when someone teaches you. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "lesson",
    "plural": "lessons"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "space",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "太空",
    "phonics": "space",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the area beyond Earth where stars and planets are. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "travel",
    "pos": "v. / n.",
    "posDetail": "动词 v. / 名词 n.",
    "cn": "旅行，尤指长途旅行",
    "phonics": "travel",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to go from one place to another, often far away. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "travel",
      "third": "travels",
      "presentParticiple": "traveling"
    },
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "half",
    "pos": "n. / pron. / det.",
    "posDetail": "名词 n. / 代词 pron. / 限定词 det.",
    "cn": "一半",
    "phonics": "half",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. It means one of two equal parts. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "price",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "价格",
    "phonics": "price",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the amount of money needed to buy something. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "price",
    "plural": "prices"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "Mid-Autumn Festival",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "中秋节",
    "phonics": "Mid-Autumn Festival",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It is a proper name. It is a Chinese festival when families eat mooncakes and admire the moon. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "together",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "一起",
    "phonics": "together",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means with one another. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "get together",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "聚会",
    "phonics": "get together",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to meet and spend time as a group. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "mooncake",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "月饼",
    "phonics": "mooncake",
    "sentence": "I like ____.",
    "clue": "It's a noun. It means a round Chinese cake eaten at the Mid-Autumn Festival. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mooncake",
    "plural": "mooncakes"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "poem",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "诗",
    "phonics": "poem",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a piece of writing arranged in lines, often with rhythm. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "poem",
    "plural": "poems"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 3",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "moon",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "月亮",
    "phonics": "moon",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means the bright round object that moves around Earth. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "moon",
    "plural": "moons"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "studies",
    "pos": "v.",
    "posDetail": "动词 v.，第三人称单数",
    "cn": "学习，study 的第三人称单数形式",
    "phonics": "studies",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means the form of “study” used with he, she or it. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "study",
      "third": "studies",
      "presentParticiple": "studying"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "puzzle",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "谜",
    "phonics": "puzzle",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a question or game that makes you think. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "puzzle",
    "plural": "puzzles"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "hiking",
    "pos": "n.",
    "posDetail": "名词 n. / 动名词",
    "cn": "远足",
    "phonics": "hiking",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means walking a long way in the countryside. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "pen pal",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "笔友",
    "phonics": "pen pal",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a friend you know by writing letters or messages. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pen pal",
    "plural": "pen pals"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "hobby",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "业余爱好",
    "phonics": "hobby",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an activity you enjoy in your free time. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hobby",
    "plural": "hobbies"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "jasmine",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "茉莉",
    "phonics": "jasmine",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a plant with small white flowers and a sweet smell. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "idea",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "想法；主意",
    "phonics": "idea",
    "sentence": "The word is ____.",
    "clue": "It's a noun. I have a good ___. Let’s make a class garden.",
    "noun": true,
    "countable": true,
    "singular": "idea",
    "plural": "ideas"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Canberra",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "堪培拉，澳大利亚首都",
    "phonics": "Canberra",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is the capital city of Australia. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "amazing",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "令人惊奇的",
    "phonics": "amazing",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means very surprising and impressive. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "shall",
    "pos": "modal v. / v.",
    "posDetail": "情态动词 modal v.",
    "cn": "表示征求意见",
    "phonics": "shall",
    "sentence": "The word is ____.",
    "clue": "It's a verb. ___ we go to the park?"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "goal",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "射门",
    "phonics": "goal",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a point scored in football when the ball goes into the net. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "goal",
    "plural": "goals"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "join",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "加入",
    "phonics": "join",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to become part of a group or activity. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "join",
      "third": "joins",
      "presentParticiple": "joining"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "club",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "俱乐部",
    "phonics": "club",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a group of people with the same interest. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "club",
    "plural": "clubs"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "share",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "分享",
    "phonics": "share",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to use, have or give something with another person. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "share",
      "third": "shares",
      "presentParticiple": "sharing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "factory",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "工厂",
    "phonics": "factory",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a building where goods are made. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "factory",
    "plural": "factories"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "worker",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "工人",
    "phonics": "worker",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who does a job. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "worker",
    "plural": "workers"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "postman",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "邮递员",
    "phonics": "postman",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a man who delivers letters and parcels. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "postman",
    "plural": "postmans"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "businessman",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "商人；企业家",
    "phonics": "businessman",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a man who works in business. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "businessman",
    "plural": "businessmans"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "police officer",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "警察",
    "phonics": "police officer",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a person whose job is to keep people safe and enforce the law. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "police officer",
    "plural": "police officers"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "fisherman",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "渔民",
    "phonics": "fisherman",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who catches fish for a job. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "fisherman",
    "plural": "fishermans"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "scientist",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "科学家",
    "phonics": "scientist",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who studies science. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "scientist",
    "plural": "scientists"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "pilot",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "飞行员",
    "phonics": "pilot",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who flies a plane. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "pilot",
    "plural": "pilots"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "coach",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "教练",
    "phonics": "coach",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who trains a sports team. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "coach",
    "plural": "coaches"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "country",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "国家",
    "phonics": "country",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means an area of land with its own government. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "country",
    "plural": "countries"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "head teacher",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "校长",
    "phonics": "head teacher",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means the teacher who leads a school. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "head teacher",
    "plural": "head teachers"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "sea",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大海",
    "phonics": "sea",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a very large area of salt water. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "stay",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "保持",
    "phonics": "stay",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to remain in a place or state. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "stay",
      "past": "stayed",
      "third": "stays",
      "presentParticiple": "staying"
    },
    "past": "stayed"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "university",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大学",
    "phonics": "university",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where adults study for degrees. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "university",
    "plural": "universities"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "gym",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "体育馆",
    "phonics": "gym",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place used for exercise and sports. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "gym",
    "plural": "gyms"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "if",
    "pos": "conj.",
    "posDetail": "连词 conj.",
    "cn": "如果",
    "phonics": "if",
    "sentence": "The word is ____.",
    "clue": "It's a linking word. Wear a coat ___ it is cold."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "reporter",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "记者",
    "phonics": "reporter",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who collects and tells news. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "reporter",
    "plural": "reporters"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "use",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "使用",
    "phonics": "use",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to do something with a tool or object for a purpose. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "use",
      "third": "uses",
      "presentParticiple": "using"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "type",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "打字",
    "phonics": "type",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to write using a keyboard. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "type",
      "third": "types",
      "presentParticiple": "typing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "quickly",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "迅速地",
    "phonics": "quickly",
    "sentence": "I can ____.",
    "clue": "It's an adverb. The rabbit runs very ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 5",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "secretary",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "秘书",
    "phonics": "secretary",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a person who organises office work and messages. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "secretary",
    "plural": "secretaries"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "angry",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "生气的",
    "phonics": "angry",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means feeling strong displeasure. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "afraid",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "害怕",
    "phonics": "afraid",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means feeling fear. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "sad",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "难过的",
    "phonics": "sad",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means unhappy. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "worried",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "担心的；发愁的",
    "phonics": "worried",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means thinking that something bad may happen. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "happy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "高兴的",
    "phonics": "happy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means feeling pleased and cheerful. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "see a doctor",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "看病；看医生",
    "phonics": "see a doctor",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to visit a medical professional because you are sick. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "wear",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "穿",
    "phonics": "wear",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to have clothes or something on your body. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "wear",
      "third": "wears",
      "presentParticiple": "wearing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "more",
    "pos": "adj. / det.",
    "posDetail": "形容词 adj. / 限定词 det.",
    "cn": "更多的",
    "phonics": "more",
    "sentence": "It is ____.",
    "clue": "It's an adjective. I want ___ water, please."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "deep",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "深的",
    "phonics": "deep",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means going a long way down or in. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "breath",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "呼吸；一口气",
    "phonics": "breath",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the air taken into or sent out of the lungs. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "take a deep breath",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "深深吸一口气",
    "phonics": "take a deep breath",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to breathe in a large amount of air slowly. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "count",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "数数",
    "phonics": "count",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to say numbers in order. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "count",
      "third": "counts",
      "presentParticiple": "counting"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "count to ten",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "数到十",
    "phonics": "count to ten",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to say the numbers from one through ten. Complete the phrase: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "chase",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "追赶",
    "phonics": "chase",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to run after someone or something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "chase",
      "third": "chases",
      "presentParticiple": "chasing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "mice",
    "pos": "n.",
    "posDetail": "名词 n.，复数",
    "cn": "老鼠，mouse 的复数",
    "phonics": "mice",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means more than one mouse. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mouse",
    "plural": "mice"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "bad",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "邪恶的；坏的",
    "phonics": "bad",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not good or doing wrong. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "hurt",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "使受伤",
    "phonics": "hurt",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “___”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "hurt",
      "past": "hurt",
      "third": "hurts",
      "presentParticiple": "hurting"
    },
    "past": "hurt"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "ill",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "有病；不舒服",
    "phonics": "ill",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means sick or not well. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "wrong",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "有毛病的；不对的",
    "phonics": "wrong",
    "sentence": "It is ____.",
    "clue": "It's an adjective. Something is ___ with my bike."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "should",
    "pos": "modal v. / v.",
    "posDetail": "情态动词 modal v.",
    "cn": "应该",
    "phonics": "should",
    "sentence": "The word is ____.",
    "clue": "It's a verb. You ___ wash your hands before eating."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "feel",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "觉得；感到",
    "phonics": "feel",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to experience an emotion or physical condition. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "feel",
      "past": "felt",
      "third": "feels",
      "presentParticiple": "feeling"
    },
    "past": "felt"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "well",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "健康；身体好",
    "phonics": "well",
    "sentence": "It is ____.",
    "clue": "It's an adjective. I was ill yesterday, but I feel ___ now."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "sit",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "坐",
    "phonics": "sit",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to rest with your body on a chair or the ground. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "sit",
      "third": "sits",
      "presentParticiple": "sitting"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "grass",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "草坪",
    "phonics": "grass",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means the short green plants covering the ground. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "hear",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "听见",
    "phonics": "hear",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to notice sound with your ears. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "hear",
      "third": "hears",
      "presentParticiple": "hearing"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "ant",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "蚂蚁",
    "phonics": "ant",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very small insect that lives in groups. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "ant",
    "plural": "ants"
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "worry",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "担心；担忧",
    "phonics": "worry",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to feel troubled about something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "worry",
      "third": "worries",
      "presentParticiple": "worrying"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "stuck",
    "pos": "v. / adj.",
    "posDetail": "形容词 adj. / 动词过去分词",
    "cn": "陷住；无法移动",
    "phonics": "stuck",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means unable to move. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "stuck",
      "third": "stucks",
      "presentParticiple": "stucking"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "mud",
    "pos": "n.",
    "posDetail": "名词 n.，不可数",
    "cn": "泥",
    "phonics": "mud",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means soft wet earth. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "pull",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "拉；拽",
    "phonics": "pull",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to move something towards you. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "pull",
      "third": "pulls",
      "presentParticiple": "pulling"
    }
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "lesson": "Unit 6",
    "unit": "family_people_jobs",
    "sec": "家人朋友和职业",
    "word": "everyone",
    "pos": "pron.",
    "posDetail": "不定代词 pron.",
    "cn": "每人；人人",
    "phonics": "everyone",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. ___ in our class likes the trip.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "younger",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更年轻的，young 的比较级",
    "phonics": "younger",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “young”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "older",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更年长的，old 的比较级",
    "phonics": "older",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “old”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "taller",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更高的，tall 的比较级",
    "phonics": "taller",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “tall”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "shorter",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更矮的；更短的，short 的比较级",
    "phonics": "shorter",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “short”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "longer",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更长的，long 的比较级",
    "phonics": "longer",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “long”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "thinner",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更瘦的，thin 的比较级",
    "phonics": "thinner",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “thin”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "heavier",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更重的，heavy 的比较级",
    "phonics": "heavier",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “heavy”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "bigger",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更大的，big 的比较级",
    "phonics": "bigger",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “big”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "smaller",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更小的，small 的比较级",
    "phonics": "smaller",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “small”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "stronger",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更强壮的，strong 的比较级",
    "phonics": "stronger",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “strong”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "dinosaur",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "恐龙",
    "phonics": "dinosaur",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very large animal that lived millions of years ago. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dinosaur",
    "plural": "dinosaurs"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "hall",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "大厅",
    "phonics": "hall",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a large room or an area inside the entrance of a building. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hall",
    "plural": "halls"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "metre",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "米，美式英语写作 meter",
    "phonics": "metre",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a unit of length equal to one hundred centi___s. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "metre",
    "plural": "metres"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "than",
    "pos": "prep. / conj.",
    "posDetail": "连词 conj. / 介词 prep.",
    "cn": "比",
    "phonics": "than",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. My brother is taller ___ me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "both",
    "pos": "pron. / det.",
    "posDetail": "代词 pron. / 限定词 det.",
    "cn": "两个都",
    "phonics": "both",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. Amy and Sarah are ___ students.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "kilogram",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "千克；公斤",
    "phonics": "kilogram",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a unit of weight equal to one thousand grams. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "kilogram",
    "plural": "kilograms"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "countryside",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "乡村",
    "phonics": "countryside",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means land outside towns and cities. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "countryside",
    "plural": "countrysides"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "lower",
    "pos": "adj. / adv.",
    "posDetail": "副词比较级 adv. / 形容词比较级 adj.",
    "cn": "更低地，low 的比较级",
    "phonics": "lower",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It is the comparative form of “low”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "shadow",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "阴影；影子",
    "phonics": "shadow",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a dark shape made when light is blocked. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "shadow",
    "plural": "shadows"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "smarter",
    "pos": "adj.",
    "posDetail": "形容词比较级 adj.",
    "cn": "更聪明的，smart 的比较级",
    "phonics": "smarter",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It is the comparative form of “smart”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 1",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "become",
    "pos": "v.",
    "posDetail": "连系动词 v.",
    "cn": "开始变得；变成",
    "phonics": "become",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to start to be something different. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "become",
      "third": "becomes",
      "presentParticiple": "becoming"
    }
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "cleaned",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "打扫，clean 的过去式",
    "phonics": "cleaned",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “clean”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "clean",
      "past": "cleaned",
      "third": "cleans",
      "presentParticiple": "cleaning"
    },
    "past": "cleaned"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "stayed",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "停留；待，stay 的过去式",
    "phonics": "stayed",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “stay”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "stay",
      "past": "stayed",
      "third": "stays",
      "presentParticiple": "staying"
    },
    "past": "stayed"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "washed",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "洗，wash 的过去式",
    "phonics": "washed",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “wash”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "wash",
      "past": "washed",
      "third": "washes",
      "presentParticiple": "washing"
    },
    "past": "washed"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "watched",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "看，watch 的过去式",
    "phonics": "watched",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “watch”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "watch",
      "past": "watched",
      "third": "watches",
      "presentParticiple": "watching"
    },
    "past": "watched"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "had",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "患病；得病，have 的过去式",
    "phonics": "had",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “have”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "have",
      "past": "had",
      "third": "haves",
      "presentParticiple": "having"
    },
    "past": "had"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "had a cold",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语，过去时",
    "cn": "感冒",
    "phonics": "had a cold",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It tells about an action that happened in the past. Yesterday, we ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "slept",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "睡觉，sleep 的过去式",
    "phonics": "slept",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “sleep”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "sleep",
      "past": "slept",
      "third": "sleeps",
      "presentParticiple": "sleeping"
    },
    "past": "slept"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "read",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "读，read 的过去式",
    "phonics": "read",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “___”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "read",
      "past": "read",
      "third": "reads",
      "presentParticiple": "reading"
    },
    "past": "read"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "saw",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "看见，see 的过去式",
    "phonics": "saw",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “see”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "see",
      "past": "saw",
      "third": "sees",
      "presentParticiple": "seeing"
    },
    "past": "saw"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "last",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "最近的；上一个的",
    "phonics": "last",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means the one just before the present one. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "yesterday",
    "pos": "n. / adv.",
    "posDetail": "名词 n. / 副词 adv.",
    "cn": "昨天",
    "phonics": "yesterday",
    "sentence": "I can ____.",
    "clue": "It's an adverb. We played football ___.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "before",
    "pos": "adv. / prep. / conj.",
    "posDetail": "介词 prep. / 连词 conj. / 副词 adv.",
    "cn": "在……之前",
    "phonics": "before",
    "sentence": "I can ____.",
    "clue": "It's an adverb. Wash your hands ___ dinner."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "drank",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "喝，drink 的过去式",
    "phonics": "drank",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “drink”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "drink",
      "past": "drank",
      "third": "drinks",
      "presentParticiple": "drinking"
    },
    "past": "drank"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "show",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "演出",
    "phonics": "show",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means an event where things are displayed, or to let someone see something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "show",
      "third": "shows",
      "presentParticiple": "showing"
    },
    "noun": true,
    "countable": true,
    "singular": "show",
    "plural": "shows",
    "alsoUncountable": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "school_classroom",
    "sec": "学校和文具",
    "word": "magazine",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "杂志",
    "phonics": "magazine",
    "sentence": "The ____ is in my classroom.",
    "clue": "It's a noun. It means a thin book published weekly or monthly with articles and pictures. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "magazine",
    "plural": "magazines"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "better",
    "pos": "adj. / adv.",
    "posDetail": "形容词比较级 adj. / 副词比较级 adv.",
    "cn": "更好的，well 的比较级",
    "phonics": "better",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It is the comparative form of “good”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "faster",
    "pos": "adj. / adv.",
    "posDetail": "形容词比较级 adj. / 副词比较级 adv.",
    "cn": "更快的；更快地，fast 的比较级",
    "phonics": "faster",
    "sentence": "I can ____.",
    "clue": "It's an adjective. It is the comparative form of “fast”. My brother is ___ than me."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "hotel",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "旅馆",
    "phonics": "hotel",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place where travellers pay to sleep. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "hotel",
    "plural": "hotels"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "fixed",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "修理，fix 的过去式",
    "phonics": "fixed",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “fix”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "fix",
      "past": "fixed",
      "third": "fixes",
      "presentParticiple": "fixing"
    },
    "past": "fixed"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "broken",
    "pos": "adj.",
    "posDetail": "形容词 adj. / 过去分词",
    "cn": "破损的",
    "phonics": "broken",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means damaged and not working. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "lamp",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "台灯",
    "phonics": "lamp",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a small light used on a table or beside a bed. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "lamp",
    "plural": "lamps"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "loud",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "喧闹的；大声的",
    "phonics": "loud",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means making a lot of noise. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "enjoy",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "享受……的乐趣；喜爱",
    "phonics": "enjoy",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to like doing or having something. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "enjoy",
      "third": "enjoys",
      "presentParticiple": "enjoying"
    }
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 2",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "stay",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "暂住；逗留",
    "phonics": "stay",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to remain in a place or state. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "stay",
      "past": "stayed",
      "third": "stays",
      "presentParticiple": "staying"
    },
    "past": "stayed"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "went",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "去，go 的过去式",
    "phonics": "went",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “go”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "go",
      "past": "went",
      "third": "goes",
      "presentParticiple": "going"
    },
    "past": "went"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "camp",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "野营",
    "phonics": "camp",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to stay in a tent outdoors. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "camp",
      "third": "camps",
      "presentParticiple": "camping"
    }
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "went camping",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语，过去时",
    "cn": "去野营，尤指在假日野营",
    "phonics": "went camping",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means stayed outdoors in a tent in the past. Complete the phrase: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "food_drink",
    "sec": "食物和饮品",
    "word": "fish",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "钓鱼；捕鱼",
    "phonics": "fish",
    "sentence": "I can ____.",
    "clue": "It's a verb. The ___ is swimming in the river.",
    "verb": true,
    "forms": {
      "base": "fish",
      "third": "fishes",
      "presentParticiple": "fishing"
    }
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "went fishing",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语，过去时",
    "cn": "去钓鱼",
    "phonics": "went fishing",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means tried to catch fish in the past. Complete the phrase: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "rode",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "骑马或自行车，ride 的过去式",
    "phonics": "rode",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “ride”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "ride",
      "past": "rode",
      "third": "rides",
      "presentParticiple": "riding"
    },
    "past": "rode"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "hurt",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "使受伤，hurt 的过去式",
    "phonics": "hurt",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “___”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "hurt",
      "past": "hurt",
      "third": "hurts",
      "presentParticiple": "hurting"
    },
    "past": "hurt"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "ate",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "吃，eat 的过去式",
    "phonics": "ate",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “eat”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "eat",
      "past": "ate",
      "third": "eats",
      "presentParticiple": "eating"
    },
    "past": "ate"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "took",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "拍照，take 的过去式",
    "phonics": "took",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “take”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "take",
      "past": "took",
      "third": "takes",
      "presentParticiple": "taking"
    },
    "past": "took"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "took pictures",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语，过去时",
    "cn": "照相；拍照片",
    "phonics": "took pictures",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means used a camera to make photos in the past. Complete the phrase: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "bought",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "买，buy 的过去式",
    "phonics": "bought",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “buy”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "buy",
      "past": "bought",
      "third": "buys",
      "presentParticiple": "buying"
    },
    "past": "bought"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "gift",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "礼物",
    "phonics": "gift",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means something given to someone as a present. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "gift",
    "plural": "gifts"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "fell",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "摔倒；落下，fall 的过去式",
    "phonics": "fell",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “fall”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "fall",
      "past": "fell",
      "third": "falls",
      "presentParticiple": "falling"
    },
    "past": "fell"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "off",
    "pos": "adv. / prep.",
    "posDetail": "副词 adv. / 介词 prep.",
    "cn": "从某处落下；离开",
    "phonics": "off",
    "sentence": "I can ____.",
    "clue": "It's an adverb. It means away from a place or no longer on something. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Labour Day",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "劳动节",
    "phonics": "Labour Day",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun. It is a proper name. It is a holiday that honours workers. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "mule",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "骡子",
    "phonics": "mule",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means an animal whose parents are a horse and a donkey. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "mule",
    "plural": "mules"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "Turpan",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "吐鲁番",
    "phonics": "Turpan",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It is a place name. It is a city in Xinjiang known for grapes and hot weather. The answer is ___.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "could",
    "pos": "modal v. / v.",
    "posDetail": "情态动词 modal v.",
    "cn": "能，can 的过去式",
    "phonics": "could",
    "sentence": "The word is ____.",
    "clue": "It's a verb. When I was five, I ___ swim."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "till",
    "pos": "prep. / conj.",
    "posDetail": "介词 prep. / 连词 conj.",
    "cn": "直到",
    "phonics": "till",
    "sentence": "The word is ____.",
    "clue": "It's a preposition. We waited ___ six o’clock."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "beach",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "海滩；沙滩",
    "phonics": "beach",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means land covered with sand or stones beside the sea. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "beach",
    "plural": "beaches"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "home_daily",
    "sec": "家庭和日常",
    "word": "basket",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "篮；筐",
    "phonics": "basket",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a container made of woven material, used for carrying things. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "basket",
    "plural": "baskets"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "part",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "角色",
    "phonics": "part",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a role played by an actor. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "part",
    "plural": "parts"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "licked",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "舔，lick 的过去式",
    "phonics": "licked",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “lick”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "lick",
      "past": "licked",
      "third": "licks",
      "presentParticiple": "licking"
    },
    "past": "licked"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 3",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "laughed",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "笑，laugh 的过去式",
    "phonics": "laughed",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “laugh”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "laugh",
      "past": "laughed",
      "third": "laughs",
      "presentParticiple": "laughing"
    },
    "past": "laughed"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "dining hall",
    "pos": "n. phr. / n.",
    "posDetail": "名词短语 n. phr.",
    "cn": "饭厅；餐厅",
    "phonics": "dining hall",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a noun phrase. It means a large room where many people eat. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "grass",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "草坪",
    "phonics": "grass",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means the short green plants covering the ground. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "places_transport",
    "sec": "地点和交通",
    "word": "gym",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "体育馆",
    "phonics": "gym",
    "sentence": "I can see the ____.",
    "clue": "It's a noun. It means a place used for exercise and sports. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "gym",
    "plural": "gyms"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "time_weather",
    "sec": "时间天气季节",
    "word": "ago",
    "pos": "adv.",
    "posDetail": "副词 adv.",
    "cn": "以前",
    "phonics": "ago",
    "sentence": "I can ____.",
    "clue": "It's an adverb. Our school had no gym twenty years ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "cycling",
    "pos": "n.",
    "posDetail": "名词 n. / 动名词",
    "cn": "骑自行车运动或活动",
    "phonics": "cycling",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the activity of riding a bicycle. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "cycle",
      "third": "cycles",
      "presentParticiple": "cycling"
    },
    "noun": true,
    "countable": false
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "go cycling",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "去骑自行车",
    "phonics": "go cycling",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to ride a bicycle for exercise or fun. Complete the phrase: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "ice-skate",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "滑冰",
    "phonics": "ice-skate",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means to move over ice wearing special boots with blades. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "ice-skate",
      "third": "ice-skates",
      "presentParticiple": "ice-skating"
    }
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "badminton",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "羽毛球运动",
    "phonics": "badminton",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a game in which players hit a shuttlecock over a net. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": false
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "star",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "星",
    "phonics": "star",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a bright object seen in the night sky. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "star",
    "plural": "stars"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "easy",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "容易的",
    "phonics": "easy",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not difficult. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "look up",
    "pos": "v. phr. / v.",
    "posDetail": "动词短语 v. phr.",
    "cn": "在词典中或通过电脑查阅",
    "phonics": "look up",
    "sentence": "Please remember this phrase: ____.",
    "clue": "It's a verb phrase. It means to search for information in a book or online. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "Internet",
    "pos": "prop. n. / n.",
    "posDetail": "专有名词 n.",
    "cn": "互联网",
    "phonics": "Internet",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means the worldwide computer network. Complete the sentence with the best word: ___.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "different",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "不同的",
    "phonics": "different",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means not the same. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "feelings_adjectives",
    "sec": "感受和形容词",
    "word": "active",
    "pos": "adj.",
    "posDetail": "形容词 adj.",
    "cn": "积极的；活跃的",
    "phonics": "active",
    "sentence": "It is ____.",
    "clue": "It's an adjective. It means often moving, working or taking part. Complete the sentence with the best word: ___."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "race",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "赛跑",
    "phonics": "race",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a competition to see who is fastest. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "race",
    "plural": "races"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "nothing",
    "pos": "pron.",
    "posDetail": "不定代词 pron.",
    "cn": "没有什么",
    "phonics": "nothing",
    "sentence": "The word is ____.",
    "clue": "It's a pronoun or a word used before a noun. There is ___ in the empty box.",
    "noun": true
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "thought",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "想，think 的过去式",
    "phonics": "thought",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “think”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "think",
      "past": "thought",
      "third": "thinks",
      "presentParticiple": "thinking"
    },
    "past": "thought"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "felt",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "感觉，feel 的过去式",
    "phonics": "felt",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “feel”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "feel",
      "past": "felt",
      "third": "feels",
      "presentParticiple": "feeling"
    },
    "past": "felt"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "animals_nature",
    "sec": "动物和自然",
    "word": "cheetah",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "猎豹",
    "phonics": "cheetah",
    "sentence": "I can see a ____.",
    "clue": "It's a noun. It means a very fast wild cat with dark spots. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "cheetah",
    "plural": "cheetahs"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "trip",
    "pos": "v.",
    "posDetail": "动词 v.",
    "cn": "绊倒",
    "phonics": "trip",
    "sentence": "I can ____.",
    "clue": "It's a verb. It means a journey to another place, or to catch your foot and nearly fall. Complete the sentence with the best word: ___.",
    "verb": true,
    "forms": {
      "base": "trip",
      "third": "trips",
      "presentParticiple": "triping"
    }
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "actions_phrases",
    "sec": "动作和活动",
    "word": "woke",
    "pos": "v.",
    "posDetail": "动词过去式 v.",
    "cn": "醒，wake 的过去式",
    "phonics": "woke",
    "sentence": "I can ____.",
    "clue": "It's a verb. It is the past form of “wake”. Yesterday, I ___ at home.",
    "verb": true,
    "forms": {
      "base": "wake",
      "past": "woke",
      "third": "wakes",
      "presentParticiple": "waking"
    },
    "past": "woke"
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "lesson": "Unit 4",
    "unit": "grammar_function",
    "sec": "代词介词和功能词",
    "word": "dream",
    "pos": "n.",
    "posDetail": "名词 n.",
    "cn": "梦",
    "phonics": "dream",
    "sentence": "The word is ____.",
    "clue": "It's a noun. It means a story or pictures in your mind while you sleep. Complete the sentence with the best word: ___.",
    "noun": true,
    "countable": true,
    "singular": "dream",
    "plural": "dreams"
  }
];

const PRIMARY_PHRASES = [
  {
    "book": "g3a",
    "books": [
      "g3a"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "pencil box",
    "cn": "铅笔盒",
    "example": "Please remember this phrase: pencil box."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "teacher's desk",
    "cn": "讲台",
    "example": "Please remember this phrase: teacher's desk."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "maths book",
    "cn": "数学书",
    "example": "Please remember this phrase: maths book."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "English book",
    "cn": "英语书",
    "example": "Please remember this phrase: English book."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "Chinese book",
    "cn": "语文书",
    "example": "Please remember this phrase: Chinese book."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "so much",
    "cn": "非常地；这么多",
    "example": "Please remember this phrase: so much."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "home_daily",
    "type": "noun_phrase",
    "phrase": "living room",
    "cn": "客厅；起居室",
    "example": "Please remember this phrase: living room."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "help yourself",
    "cn": "为自己取用；随便吃",
    "example": "Please remember this phrase: help yourself."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "baby brother",
    "cn": "婴儿小弟弟",
    "example": "Please remember this phrase: baby brother."
  },
  {
    "book": "g4a",
    "books": [
      "g4a"
    ],
    "unit": "family_people_jobs",
    "type": "noun_phrase",
    "phrase": "football player",
    "cn": "足球运动员",
    "example": "Please remember this phrase: football player."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "first floor",
    "cn": "一楼",
    "example": "Please remember this phrase: first floor."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "second floor",
    "cn": "二楼",
    "example": "Please remember this phrase: second floor."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "teachers' office",
    "cn": "教师办公室",
    "example": "Please remember this phrase: teachers' office."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "computer room",
    "cn": "计算机房",
    "example": "Please remember this phrase: computer room."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "art room",
    "cn": "美术教室",
    "example": "Please remember this phrase: art room."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "music room",
    "cn": "音乐教室",
    "example": "Please remember this phrase: music room."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "prep_phrase",
    "phrase": "next to",
    "cn": "紧邻；在……近旁",
    "example": "Please remember this phrase: next to."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "English class",
    "cn": "英语课",
    "example": "Please remember this phrase: English class."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "music class",
    "cn": "音乐课",
    "example": "Please remember this phrase: music class."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "PE class",
    "cn": "体育课",
    "example": "Please remember this phrase: PE class."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "get up",
    "cn": "起床",
    "example": "Please remember this phrase: get up."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go to school",
    "cn": "去上学",
    "example": "Please remember this phrase: go to school."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go home",
    "cn": "回家",
    "example": "Please remember this phrase: go home."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go to bed",
    "cn": "上床睡觉",
    "example": "Please remember this phrase: go to bed."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "hurry up",
    "cn": "快点",
    "example": "Please remember this phrase: hurry up."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "come on",
    "cn": "快；加油",
    "example": "Please remember this phrase: come on."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "just a minute",
    "cn": "稍等一会儿",
    "example": "Please remember this phrase: just a minute."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "be careful",
    "cn": "小心",
    "example": "Please remember this phrase: be careful."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "how about...?",
    "cn": "……怎么样；……情况如何",
    "example": "Please remember this phrase: how about...?."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "food_drink",
    "type": "noun_phrase",
    "phrase": "green beans",
    "cn": "豆角；四季豆",
    "example": "Please remember this phrase: green beans."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "try on",
    "cn": "试穿",
    "example": "Please remember this phrase: try on."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "of course",
    "cn": "当然",
    "example": "Please remember this phrase: of course."
  },
  {
    "book": "g4b",
    "books": [
      "g4b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "how much",
    "cn": "多少钱",
    "example": "Please remember this phrase: how much."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "wash my clothes",
    "cn": "洗我的衣服",
    "example": "Please remember this phrase: wash my clothes."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "watch TV",
    "cn": "看电视",
    "example": "Please remember this phrase: watch TV."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "do homework",
    "cn": "做作业",
    "example": "Please remember this phrase: do homework."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "read books",
    "cn": "看书；读书",
    "example": "Please remember this phrase: read books."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "play football",
    "cn": "踢足球",
    "example": "Please remember this phrase: play football."
  },
  {
    "book": "g5a",
    "books": [
      "g5a",
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "play sports",
    "cn": "做体育运动",
    "example": "Please remember this phrase: play sports."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "food_drink",
    "type": "noun_phrase",
    "phrase": "ice cream",
    "cn": "冰激凌",
    "example": "Please remember this phrase: ice cream."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "sing English songs",
    "cn": "唱英文歌曲",
    "example": "Please remember this phrase: sing English songs."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "play the pipa",
    "cn": "弹琵琶",
    "example": "Please remember this phrase: play the pipa."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "kung fu",
    "cn": "功夫；武术",
    "example": "Please remember this phrase: kung fu."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "do kung fu",
    "cn": "练武术",
    "example": "Please remember this phrase: do kung fu."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "draw cartoons",
    "cn": "画漫画",
    "example": "Please remember this phrase: draw cartoons."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "play basketball",
    "cn": "打篮球",
    "example": "Please remember this phrase: play basketball."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "play ping-pong",
    "cn": "打乒乓球",
    "example": "Please remember this phrase: play ping-pong."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "speak English",
    "cn": "说英语",
    "example": "Please remember this phrase: speak English."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "no problem",
    "cn": "没问题",
    "example": "Please remember this phrase: no problem."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "home_daily",
    "type": "noun_phrase",
    "phrase": "water bottle",
    "cn": "水瓶",
    "example": "Please remember this phrase: water bottle."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "prep_phrase",
    "phrase": "in front of",
    "cn": "在……前面",
    "example": "Please remember this phrase: in front of."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "lots of",
    "cn": "大量；许多",
    "example": "Please remember this phrase: lots of."
  },
  {
    "book": "g5a",
    "books": [
      "g5a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go boating",
    "cn": "去划船",
    "example": "Please remember this phrase: go boating."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "eat breakfast",
    "cn": "吃早饭",
    "example": "Please remember this phrase: eat breakfast."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "have ... class",
    "cn": "上……课",
    "example": "Please remember this phrase: have ... class."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "do morning exercises",
    "cn": "做早操",
    "example": "Please remember this phrase: do morning exercises."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "eat dinner",
    "cn": "吃晚饭",
    "example": "Please remember this phrase: eat dinner."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "clean my room",
    "cn": "打扫我的房间",
    "example": "Please remember this phrase: clean my room."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go for a walk",
    "cn": "散步",
    "example": "Please remember this phrase: go for a walk."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go shopping",
    "cn": "去买东西；购物",
    "example": "Please remember this phrase: go shopping."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "take a dancing class",
    "cn": "上舞蹈课",
    "example": "Please remember this phrase: take a dancing class."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go swimming",
    "cn": "去游泳",
    "example": "Please remember this phrase: go swimming."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go on a picnic",
    "cn": "去野餐",
    "example": "Please remember this phrase: go on a picnic."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "pick apples",
    "cn": "摘苹果",
    "example": "Please remember this phrase: pick apples."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "make a snowman",
    "cn": "堆雪人",
    "example": "Please remember this phrase: make a snowman."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "good job",
    "cn": "做得好",
    "example": "Please remember this phrase: good job."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "a few",
    "cn": "一些；几个",
    "example": "Please remember this phrase: a few."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "sports meet",
    "cn": "运动会",
    "example": "Please remember this phrase: sports meet."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "act out",
    "cn": "把……表演出来",
    "example": "Please remember this phrase: act out."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "each other",
    "cn": "相互；彼此",
    "example": "Please remember this phrase: each other."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "doing morning exercises",
    "cn": "正在做早操",
    "example": "Please remember this phrase: doing morning exercises."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "having ... class",
    "cn": "正在上……课",
    "example": "Please remember this phrase: having ... class."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "eating lunch",
    "cn": "正在吃午饭",
    "example": "Please remember this phrase: eating lunch."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "reading a book",
    "cn": "正在看书",
    "example": "Please remember this phrase: reading a book."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "phrase",
    "phrase": "listening to music",
    "cn": "正在听音乐",
    "example": "Please remember this phrase: listening to music."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "keep to the right",
    "cn": "靠右",
    "example": "Please remember this phrase: keep to the right."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "keep your desk clean",
    "cn": "保持你的课桌干净",
    "example": "Please remember this phrase: keep your desk clean."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "talk quietly",
    "cn": "小声讲话",
    "example": "Please remember this phrase: talk quietly."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "take turns",
    "cn": "按顺序来；轮流",
    "example": "Please remember this phrase: take turns."
  },
  {
    "book": "g5b",
    "books": [
      "g5b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "have a look",
    "cn": "看一看",
    "example": "Please remember this phrase: have a look."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "places_transport",
    "type": "noun_phrase",
    "phrase": "post office",
    "cn": "邮局",
    "example": "Please remember this phrase: post office."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "prep_phrase",
    "phrase": "on foot",
    "cn": "步行",
    "example": "Please remember this phrase: on foot."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "slow down",
    "cn": "慢下来",
    "example": "Please remember this phrase: slow down."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "pay attention to",
    "cn": "注意",
    "example": "Please remember this phrase: pay attention to."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "noun_phrase",
    "phrase": "traffic lights",
    "cn": "交通信号灯",
    "example": "Please remember this phrase: traffic lights."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "see a film",
    "cn": "看电影",
    "example": "Please remember this phrase: see a film."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "take a trip",
    "cn": "去旅行",
    "example": "Please remember this phrase: take a trip."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "time_weather",
    "type": "noun_phrase",
    "phrase": "next week",
    "cn": "下周",
    "example": "Please remember this phrase: next week."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "comic book",
    "cn": "儿童连环画册",
    "example": "Please remember this phrase: comic book."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "school_classroom",
    "type": "noun_phrase",
    "phrase": "word book",
    "cn": "单词书",
    "example": "Please remember this phrase: word book."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "get together",
    "cn": "聚会",
    "example": "Please remember this phrase: get together."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "family_people_jobs",
    "type": "noun_phrase",
    "phrase": "pen pal",
    "cn": "笔友",
    "example": "Please remember this phrase: pen pal."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "family_people_jobs",
    "type": "noun_phrase",
    "phrase": "police officer",
    "cn": "警察",
    "example": "Please remember this phrase: police officer."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "family_people_jobs",
    "type": "noun_phrase",
    "phrase": "head teacher",
    "cn": "校长",
    "example": "Please remember this phrase: head teacher."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "see a doctor",
    "cn": "看病；看医生",
    "example": "Please remember this phrase: see a doctor."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "take a deep breath",
    "cn": "深深吸一口气",
    "example": "Please remember this phrase: take a deep breath."
  },
  {
    "book": "g6a",
    "books": [
      "g6a"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "count to ten",
    "cn": "数到十",
    "example": "Please remember this phrase: count to ten."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "had a cold",
    "cn": "感冒",
    "example": "Please remember this phrase: had a cold."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "went camping",
    "cn": "去野营，尤指在假日野营",
    "example": "Please remember this phrase: went camping."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "went fishing",
    "cn": "去钓鱼",
    "example": "Please remember this phrase: went fishing."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "took pictures",
    "cn": "照相；拍照片",
    "example": "Please remember this phrase: took pictures."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "places_transport",
    "type": "noun_phrase",
    "phrase": "dining hall",
    "cn": "饭厅；餐厅",
    "example": "Please remember this phrase: dining hall."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go cycling",
    "cn": "去骑自行车",
    "example": "Please remember this phrase: go cycling."
  },
  {
    "book": "g6b",
    "books": [
      "g6b"
    ],
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "look up",
    "cn": "在词典中或通过电脑查阅",
    "example": "Please remember this phrase: look up."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "eat lunch",
    "cn": "吃午饭",
    "example": "Please remember this phrase: eat lunch."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "read a book",
    "cn": "看书",
    "example": "Please remember this phrase: read a book."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "listen to music",
    "cn": "听音乐",
    "example": "Please remember this phrase: listen to music."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "work",
    "cn": "工作",
    "example": "I can work."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "have a cold",
    "cn": "感冒",
    "example": "Please remember this phrase: have a cold."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "feel well",
    "cn": "感觉身体很好",
    "example": "Please remember this phrase: feel well."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go camping",
    "cn": "去野营",
    "example": "Please remember this phrase: go camping."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "go fishing",
    "cn": "去钓鱼",
    "example": "Please remember this phrase: go fishing."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "ice-skate",
    "cn": "滑冰",
    "example": "I can ice-skate."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "ride a bike",
    "cn": "骑自行车",
    "example": "Please remember this phrase: ride a bike."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "fly a kite",
    "cn": "放风筝",
    "example": "Please remember this phrase: fly a kite."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "climbing",
    "cn": "正在攀爬",
    "example": "I can climbing."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "eating",
    "cn": "正在吃",
    "example": "I can eating."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "playing",
    "cn": "正在玩",
    "example": "I can playing."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "jumping",
    "cn": "正在跳",
    "example": "I can jumping."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "drinking",
    "cn": "正在喝",
    "example": "I can drinking."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "sleeping",
    "cn": "正在睡觉",
    "example": "I can sleeping."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "take pictures",
    "cn": "拍照",
    "example": "Please remember this phrase: take pictures."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "fall off",
    "cn": "从……摔下；掉下",
    "example": "Please remember this phrase: fall off."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "keep ... clean",
    "cn": "保持……干净",
    "example": "Please remember this phrase: keep ... clean."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "sound good",
    "cn": "听起来不错",
    "example": "Please remember this phrase: sound good."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "become taller",
    "cn": "变得更高",
    "example": "Please remember this phrase: become taller."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "stay healthy",
    "cn": "保持健康",
    "example": "Please remember this phrase: stay healthy."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "live on an island",
    "cn": "居住在岛上",
    "example": "Please remember this phrase: live on an island."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "follow someone",
    "cn": "跟着某人",
    "example": "Please remember this phrase: follow someone."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "tell someone",
    "cn": "告诉某人",
    "example": "Please remember this phrase: tell someone."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "ask someone",
    "cn": "询问某人",
    "example": "Please remember this phrase: ask someone."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "share something",
    "cn": "分享某物",
    "example": "Please remember this phrase: share something."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "send an email",
    "cn": "发送电子邮件",
    "example": "Please remember this phrase: send an email."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "teach someone",
    "cn": "教某人",
    "example": "Please remember this phrase: teach someone."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "show someone something",
    "cn": "给某人看某物",
    "example": "Please remember this phrase: show someone something."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "enjoy doing something",
    "cn": "喜欢做某事；享受做某事",
    "example": "Please remember this phrase: enjoy doing something."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "want to do something",
    "cn": "想要做某事",
    "example": "Please remember this phrase: want to do something."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "actions_phrases",
    "type": "verb_phrase",
    "phrase": "need to do something",
    "cn": "需要做某事",
    "example": "Please remember this phrase: need to do something."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "by bus",
    "cn": "乘公共汽车",
    "example": "Please remember this phrase: by bus."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "by plane",
    "cn": "乘飞机",
    "example": "Please remember this phrase: by plane."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "by train",
    "cn": "乘火车",
    "example": "Please remember this phrase: by train."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "by subway",
    "cn": "乘地铁",
    "example": "Please remember this phrase: by subway."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "by taxi",
    "cn": "乘出租车",
    "example": "Please remember this phrase: by taxi."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "by ship",
    "cn": "乘船",
    "example": "Please remember this phrase: by ship."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "at home",
    "cn": "在家",
    "example": "Please remember this phrase: at home."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "at school",
    "cn": "在学校",
    "example": "Please remember this phrase: at school."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "at night",
    "cn": "在晚上",
    "example": "Please remember this phrase: at night."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "after school",
    "cn": "放学后",
    "example": "Please remember this phrase: after school."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "before dinner",
    "cn": "晚饭前",
    "example": "Please remember this phrase: before dinner."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "between...and...",
    "cn": "在……和……之间",
    "example": "The word is between...and...."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "listen to",
    "cn": "听……",
    "example": "Please remember this phrase: listen to."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "in the countryside",
    "cn": "在乡村",
    "example": "Please remember this phrase: in the countryside."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "on an island",
    "cn": "在岛上",
    "example": "Please remember this phrase: on an island."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "in the mud",
    "cn": "在泥里",
    "example": "Please remember this phrase: in the mud."
  },
  {
    "book": "",
    "books": [],
    "global": true,
    "unit": "grammar_function",
    "type": "prep_phrase",
    "phrase": "in the world",
    "cn": "在世界上",
    "example": "Please remember this phrase: in the world."
  }
];

if (typeof window !== "undefined") {
  window.PRIMARY_UNITS = PRIMARY_UNITS;
  window.PRIMARY_BOOKS = PRIMARY_BOOKS;
  window.PRIMARY_WORDS = PRIMARY_WORDS;
  window.PRIMARY_PHRASES = PRIMARY_PHRASES;
}
