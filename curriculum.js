/**
 * STARBLOX ACADEMY: Malaysia Primary 3 (KSSR Semakan) Curriculum Matrix
 * Subjects:
 * - Bahasa Melayu (KSSR Semakan SK/SJK)
 * - Bahasa Cina / 华文 (KSSR Semakan SJKC)
 * - English (CEFR Year 3 / Get Smart Plus 3)
 * - Sains / Science (KSSR Semakan)
 * - Matematik / Mathematics (KSSR Semakan)
 */

const CURRICULUM_DATABASE = {
  version: "2026.1",
  standard: "KSSR Semakan Tahun 3 (Dokumen Standard Kurikulum dan Pentaksiran - DSKP)",
  
  // 14 Comprehensive Daily Dosage Lesson Modules covering full curriculum progression
  days: [
    {
      dayId: 1,
      themeTitle: "Hari Pertama: Pengenalan & Dunia Kita (Start Your Obby!)",
      kpopTheme: "Debut Stage Challenge - Blackpink / NewJeans Vibes",
      dateLabel: "Day 1 - Term Focus",
      
      bm: {
        subject: "Bahasa Melayu",
        topic: "Tema 1: Kekeluargaan (Keluarga Bahagia)",
        learningStandard: "SP 1.1.1, 2.1.1, 5.1.1 (Kata Nama Am & Kata Nama Khas)",
        read: {
          title: "Aktiviti Hujung Minggu Keluarga Sarah",
          text: "Pada hari Ahad yang lalu, Sarah dan keluarganya meluangkan masa bersama di ruang tamu. Ayahnya, Encik Azman, membaca surat khabar manakala ibunya, Puan Halimah, menyediakan kuih seri muka yang enak di dapur. Sarah dan abangnya, Adam, menyusun buku cerita di atas rak kayu. Rumah mereka sentiasa bersih dan ceria kerana semua ahli keluarga ringan tulang membantu satu sama lain.",
          vocabulary: [
            { word: "meluangkan", meaning: "memberikan masa lapang untuk sesuatu aktiviti" },
            { word: "ringan tulang", meaning: "simpulan bahasa: orang yang rajin menolong" },
            { word: "seri muka", meaning: "sejenis kuih tradisional masyarakat Melayu" }
          ]
        },
        write: {
          taskType: "fill_and_trace",
          instruction: "Lengkapkan ayat dengan Kata Nama Am atau Kata Nama Khas yang betul, kemudian salin semula ayat.",
          prompt: "Encik Azman membawa keluarganya berkelah di Pantai Teluk Cempedak.",
          question: "Perkataan 'Pantai Teluk Cempedak' ialah contoh Kata Nama ______.",
          options: ["Khas", "Am", "Ganti", "Kerja"],
          correctAnswer: "Khas",
          traceWord: "Keluarga Bahagia",
          explanation: "Nama pantai yang bermula dengan huruf besar ialah Kata Nama Khas."
        },
        speak: {
          prompt: "Saya sayang akan keluarga saya kerana kami sentiasa saling membantu.",
          targetSpeech: "Saya sayang akan keluarga saya kerana kami sentiasa saling membantu",
          tips: "Sebut dengan intonasi yang lembut dan jelas."
        },
        worksheetQuestions: [
          { q: "Nyatakan SATU Kata Nama Am daripada petikan:", a: "buku / rumah / dapur / rak" },
          { q: "Nyatakan SATU Kata Nama Khas daripada petikan:", a: "Sarah / Encik Azman / Puan Halimah / Adam" },
          { q: "Apakah maksud simpulan bahasa 'ringan tulang'?", a: "Rajin bekerja atau suka menolong orang lain." }
        ]
      },

      bc: {
        subject: "华文 (Bahasa Cina)",
        topic: "第一单元：通往未来的路《上学的路》",
        learningStandard: "BC SJKC 2.1.1 识字, 2.1.2 朗读, 5.3.1 词语搭配",
        read: {
          title: "课文朗读：上学的路",
          text: "清晨，太阳从东方升起，金色的阳光洒满大地。我背着崭新的书包，迎着微风，快快乐乐地上学去。马路两旁盛开着鲜艳的花朵，小鸟在绿树枝头欢快地歌唱。上学的路，是一条充满希望和梦想的阳光大道！",
          pinyin: "Qīngchén, tàiyáng cóng dōngfāng shēngqǐ, jīnsè de yángguāng sǎ mǎn dàdì...",
          vocabulary: [
            { word: "崭新", meaning: "zhǎnxīn - 全新的，刚买不久的" },
            { word: "盛开", meaning: "shèngkāi - 花朵完全开放" },
            { word: "希望", meaning: "xīwàng - 心中的愿望与憧憬" }
          ]
        },
        write: {
          taskType: "hanzi_trace",
          character: "宽",
          pinyin: "kuān",
          strokeCount: 10,
          radicals: "宀 (宝盖头)",
          phrase: "宽阔 (kuān kuò)",
          instruction: "在写字板上练习写出'宽'字，并记住笔顺和部首：宀部。",
          question: "‘宽’的反义词是哪一个？",
          options: ["窄 (zhǎi)", "高 (gāo)", "长 (cháng)", "大 (dà)"],
          correctAnswer: "窄 (zhǎi)",
          explanation: "宽（kuān）的意思是广阔，反义词是窄（zhǎi）。"
        },
        speak: {
          prompt: "上学的路，是一条充满希望的路。",
          targetSpeech: "上学的路是一条充满希望的路",
          pinyinPrompt: "Shàngxué de lù, shì yī tiáo chōngmǎn xīwàng de lù.",
          tips: "注意‘充’(chōng) 和‘望’(wàng) 的发音要饱满清脆。"
        },
        worksheetQuestions: [
          { q: "写出‘宽’字的部首和总笔画数：", a: "部首：宀，总笔画：10画" },
          { q: "选词配对：【崭新 / 欢快】的（歌声）与（书包）", a: "崭新的书包，欢快的歌声" },
          { q: "照样子造句：‘上学的路，是一条……’", a: "示例：上学的路，是一条通往智慧的彩虹路。" }
        ]
      },

      bi: {
        subject: "English",
        topic: "Module 1: Welcome! (Appearance & Talents)",
        learningStandard: "Get Smart Plus 3 - Grammar: have got / has got; Adjectives of appearance",
        read: {
          title: "Meet the K-Pop StarBlox Crew!",
          text: "Hi everyone! My name is Lily. I have got long brown curly hair and big green eyes. My best friend is Ken. He has got short black hair and brown eyes. We love playing Roblox together! Lily has got a super cute neon pet dog in Bloxburg. Ken can do karate and he can play the electric guitar very well. What about you? Have you got any cool hobbies?",
          vocabulary: [
            { word: "curly hair", meaning: "rambut kerinting / 卷发" },
            { word: "have got", meaning: "memiliki (untuk I / You / We / They)" },
            { word: "has got", meaning: "memiliki (untuk He / She / It / Nama tunggal)" }
          ]
        },
        write: {
          taskType: "grammar_quiz",
          instruction: "Complete the sentence with 'has got' or 'have got'.",
          prompt: "Look at Jennie! She _______ pretty pink hair and a cool microphone.",
          question: "Choose the correct answer:",
          options: ["has got", "have got", "having got", "is got"],
          correctAnswer: "has got",
          traceWord: "She has got",
          explanation: "Use 'has got' for singular 3rd person pronouns like She, He, or Jennie."
        },
        speak: {
          prompt: "I have got long brown hair and I can dance to K-Pop songs!",
          targetSpeech: "I have got long brown hair and I can dance to K-Pop songs",
          tips: "Pronounce 'dance' cleanly and smile while speaking!"
        },
        worksheetQuestions: [
          { q: "Fill in the blank: She (have got / has got) __________ straight hair.", a: "has got" },
          { q: "Fill in the blank: They (have got / has got) __________ cool Roblox avatars.", a: "have got" },
          { q: "Write one sentence describing yourself using 'I have got':", a: "e.g., I have got short black hair and brown eyes." }
        ]
      },

      sc: {
        subject: "Sains (Science)",
        topic: "Unit 3: Manusia - Jenis Gigi & Fungsinya",
        learningStandard: "SP 3.1.1 Menyatakan jenis gigi dan fungsinya; SP 3.1.2 Melabel struktur gigi",
        read: {
          title: "Tahukah Anda Rahsia Gigi Kita?",
          text: "Manusia mempunyai tiga jenis gigi utama. Pertama ialah Gigi Kacip yang terletak di bahagian hadapan, berbentuk seperti pahat untuk MEMOTONG makanan. Kedua ialah Gigi Taring yang lebih tajam dan runcing untuk MENGOYAK makanan liat seperti daging. Ketiga ialah Gigi Geraham yang berpermukaan lebar dan rata untuk MELUMATKAN makanan. Lapisan luar gigi yang paling keras dan berkilat dinamakan Enamel!",
          vocabulary: [
            { word: "Gigi Kacip", meaning: "Fungsi: Memotong makanan (Incisor)" },
            { word: "Gigi Taring", meaning: "Fungsi: Mengoyak makanan (Canine)" },
            { word: "Gigi Geraham", meaning: "Fungsi: Melumatkan makanan (Molar)" },
            { word: "Enamel", meaning: "Lapisan paling luar dan paling keras pada gigi" }
          ]
        },
        write: {
          taskType: "concept_match",
          instruction: "Padankan jenis gigi dengan fungsinya yang betul.",
          prompt: "Apakah fungsi utama bagi Gigi Taring?",
          question: "Pilih fungsi yang tepat:",
          options: ["Mengoyak makanan", "Memotong makanan", "Melumatkan makanan", "Menghadam makanan"],
          correctAnswer: "Mengoyak makanan",
          traceWord: "Gigi Taring Mengoyak",
          explanation: "Gigi taring tajam dan runcing berfungsi mengoyak makanan."
        },
        speak: {
          prompt: "Gigi kacip memotong makanan, gigi taring mengoyak, dan gigi geraham melumatkan.",
          targetSpeech: "Gigi kacip memotong makanan gigi taring mengoyak dan gigi geraham melumatkan",
          tips: "Sebut ketiga-tiga jenis gigi dengan terang!"
        },
        worksheetQuestions: [
          { q: "Namakan 3 jenis gigi manusia:", a: "1. Gigi Kacip  2. Gigi Taring  3. Gigi Geraham" },
          { q: "Apakah fungsi gigi geraham?", a: "Melumatkan dan menghancurkan makanan." },
          { q: "Apakah nama lapisan luar gigi yang paling keras?", a: "Enamel" }
        ]
      },

      ma: {
        subject: "Matematik (Mathematics)",
        topic: "Unit 1: Nombor Bulat Hingga 10 000 (Nilai Tempat & Nilai Digit)",
        learningStandard: "SP 1.1.2 Menentukan nilai tempat dan nilai digit bagi sebarang nombor hingga 10 000",
        read: {
          title: "Membaca Nombor dalam Roblox StarBlox!",
          text: "Dalam permainan StarBlox, markah tertinggi Lisa ialah 4 582. Nombor ini disebut 'empat ribu lima ratus lapan puluh dua'. Nilai tempat bagi digit 4 ialah 'ribu', digit 5 ialah 'ratus', digit 8 ialah 'puluh', dan digit 2 ialah 'sa'. Manakala nilai digit bagi digit 4 ialah 4 000, digit 5 ialah 500, digit 8 ialah 80, dan digit 2 ialah 2. Kita juga boleh mencerakinkan nombor ini: 4 582 = 4 000 + 500 + 80 + 2!",
          vocabulary: [
            { word: "Nilai Tempat", meaning: "Nama rumah digit: ribu, ratus, puluh, sa" },
            { word: "Nilai Digit", meaning: "Nilai angka sebenar: contohnya 4 000, 500, 80" },
            { word: "Mencerakin", meaning: "Memisahkan nombor mengikut nilai tempat atau nilai digit" }
          ]
        },
        write: {
          taskType: "math_calculation",
          instruction: "Tentukan nilai tempat atau nilai digit bagi soalan berikut.",
          prompt: "Diberi nombor 7 329. Apakah nilai digit bagi angka 3?",
          question: "Pilih nilai digit bagi 3:",
          options: ["300", "Ratus", "3 000", "30"],
          correctAnswer: "300",
          traceWord: "300 Tiga Ratus",
          explanation: "Angka 3 berada di rumah ratus, jadi nilai digitnya ialah 300."
        },
        speak: {
          prompt: "Tujuh ribu tiga ratus dua puluh sembilan sama dengan tujuh ribu tambah tiga ratus tambah dua puluh tambah sembilan.",
          targetSpeech: "Tujuh ribu tiga ratus dua puluh sembilan sama dengan tujuh ribu tambah tiga ratus tambah dua puluh tambah sembilan",
          tips: "Sebut nombor dalam sebutan matematik yang betul."
        },
        worksheetQuestions: [
          { q: "Tuliskan nombor '6 045' dalam perkataan:", a: "Enam ribu empat puluh lima" },
          { q: "Apakah nilai tempat bagi digit 8 dalam nombor 8 214?", a: "Ribu" },
          { q: "Cerakinkan nombor 9 157 mengikut nilai digit:", a: "9 000 + 100 + 50 + 7" }
        ]
      }
    },

    {
      dayId: 2,
      themeTitle: "Hari Kedua: Kesihatan & Tabiat Baik (Roblox Fitness Obby)",
      kpopTheme: "K-Pop Trainee Workout & Healthy Routine",
      dateLabel: "Day 2 - Term Focus",
      
      bm: {
        subject: "Bahasa Melayu",
        topic: "Tema 2: Kesihatan dan Kebersihan (Gigi Bersih Senyuman Manis)",
        learningStandard: "SP 2.1.2 Membaca dan memahami label ubat; SP 5.1.2 Kata Kerja Aktif Transitif",
        read: {
          title: "Amalan Penjagaan Kesihatan Diri",
          text: "Setiap pagi, Aminah akan memberus giginya dengan ubat gigi berfluorida. Selepas itu, dia mandi untuk membersihkan badan daripada peluh dan kotoran. Sebelum makan sarapan, Aminah mencuci tangannya dengan sabun pembasmi kuman. Kata kerja seperti 'memberus', 'membersihkan', dan 'mencuci' ialah Kata Kerja Aktif Transitif yang memerlukan objek di belakangnya.",
          vocabulary: [
            { word: "fluorida", meaning: "mineral yang menguatkan enamel gigi dan mencegah karies" },
            { word: "berfaedah", meaning: "memberi kebaikan atau manfaat" },
            { word: "transitif", meaning: "kata kerja yang mesti diikuti oleh objek" }
          ]
        },
        write: {
          taskType: "fill_and_trace",
          instruction: "Lengkapkan ayat dengan Kata Kerja Aktif Transitif yang sesuai.",
          prompt: "Ibu sedang _______ sayur bayam di sinki dapur.",
          question: "Pilih kata kerja yang tepat:",
          options: ["membasuh", "berjalan", "tertidur", "tersenyum"],
          correctAnswer: "membasuh",
          traceWord: "Membasuh Bersih",
          explanation: "Membasuh ialah kata kerja aktif transitif yang memerlukan objek (sayur bayam)."
        },
        speak: {
          prompt: "Kita mestilah memberus gigi sekurang-kurangnya dua kali sehari untuk mencegah kerosakan gigi.",
          targetSpeech: "Kita mestilah memberus gigi sekurang-kurangnya dua kali sehari untuk mencegah kerosakan gigi",
          tips: "Tekankan perkataan 'memberus gigi' dan 'mencegah'."
        },
        worksheetQuestions: [
          { q: "Gariskan Kata Kerja Aktif Transitif dalam ayat: 'Hani memotong kuku tangannya.'", a: "memotong" },
          { q: "Mengapakah kita perlu menggunakan ubat gigi berfluorida?", a: "Untuk menguatkan lapisan gigi dan mencegah gigi berlubang." },
          { q: "Bina satu ayat menggunakan kata kerja 'mencuci':", a: "Contoh: Adik mencuci pinggan selepas makan." }
        ]
      },

      bc: {
        subject: "华文 (Bahasa Cina)",
        topic: "第二单元：巧妙的道歉《魔豆传心意》",
        learningStandard: "BC SJKC 1.2.2 礼貌交际, 2.1.1 识字学词, 5.5.1 标点符号（冒号与引号）",
        read: {
          title: "课文朗读：真诚的道歉",
          text: "不小心做错事情时，我们应该勇敢承认，并诚恳地说声对不起。小明不小心弄坏了妹妹心爱的洋娃娃，他感到非常懊悔。他亲手制作了一张精美的心意卡，写着：‘妹妹，对不起，请原谅我。’妹妹看到了哥哥的诚意，甜甜地笑了，原谅了他。",
          pinyin: "Bù xiǎoxīn zuò cuò shìqíng shí, wǒmen yīnggāi yǒnggǎn chéngrèn...",
          vocabulary: [
            { word: "道歉", meaning: "dàoqiàn - 表示歉意，承认过失" },
            { word: "原谅", meaning: "yuánliàng - 不计较别人的过错" },
            { word: "诚恳", meaning: "chéngkěn - 真诚真实，发自内心" }
          ]
        },
        write: {
          taskType: "hanzi_trace",
          character: "歉",
          pinyin: "qiàn",
          strokeCount: 14,
          radicals: "欠 (欠字旁)",
          phrase: "道歉 (dào qiàn)",
          instruction: "在写字板上写出'歉'字，注意右边是'欠'字，左下是'兼'。",
          question: "当别人对你说‘对不起’时，你应该怎么礼貌回答？",
          options: ["没关系", "太讨厌了", "不客气", "快走开"],
          correctAnswer: "没关系",
          explanation: "别人诚心道歉时，正确的文明礼貌回应是‘没关系’。"
        },
        speak: {
          prompt: "做错了事要勇敢承认错误，诚恳地说对不起。",
          targetSpeech: "做错了事要勇敢承认错误诚恳地说对不起",
          pinyinPrompt: "Zuò cuòle shì yào yǒnggǎn chéngrèn cuòwù, chéngkěn de shuō duìbùqǐ.",
          tips: "发音要富有真诚感，字正腔圆。"
        },
        worksheetQuestions: [
          { q: "写出‘原’字的偏旁部首：", a: "厂 (厂字旁)" },
          { q: "给句子加上正确的标点符号：小明说（  ）对不起（  ）", a: "小明说：“对不起！”" },
          { q: "‘道歉’的意思是什么？", a: "向他人表示歉意，承认自己的过失。" }
        ]
      },

      bi: {
        subject: "English",
        topic: "Module 2: Every day (Daily Routines & Telling Time)",
        learningStandard: "Get Smart Plus 3 - Telling time (half past, o'clock); Adverbs of frequency",
        read: {
          title: "Rosé's Daily Routine",
          text: "Every morning, Rosé wakes up at six o'clock. She always brushes her teeth and washes her face. At half past six, she eats healthy cereal and strawberries for breakfast. Rosé never skips breakfast because she needs lots of energy for her dance training! In the afternoon, she usually practices singing and finishes her homework at quarter past four.",
          vocabulary: [
            { word: "routine", meaning: "jadual atau amalan harian / 日常作息" },
            { word: "half past", meaning: "lebih tiga puluh minit (contoh: 6:30)" },
            { word: "always", meaning: "sentiasa (100% of the time)" }
          ]
        },
        write: {
          taskType: "grammar_quiz",
          instruction: "Look at the time and fill in the blank.",
          prompt: "The clock shows 7:30. It is _______ seven.",
          question: "Choose the correct phrase:",
          options: ["half past", "o'clock", "quarter to", "minutes"],
          correctAnswer: "half past",
          traceWord: "Half Past Seven",
          explanation: "7:30 is read as 'half past seven'."
        },
        speak: {
          prompt: "I always brush my teeth in the morning and go to school at seven o'clock.",
          targetSpeech: "I always brush my teeth in the morning and go to school at seven o'clock",
          tips: "Notice the link between 'brush' and 'my'."
        },
        worksheetQuestions: [
          { q: "Write in words: 8:30 = ________________________", a: "half past eight" },
          { q: "Put the words in order: (never / I / breakfast / skip)", a: "I never skip breakfast." },
          { q: "What time do you usually wake up on school days?", a: "e.g., I usually wake up at half past six." }
        ]
      },

      sc: {
        subject: "Sains (Science)",
        topic: "Unit 3: Manusia - Struktur Gigi & Gigi Susu vs Gigi Kekal",
        learningStandard: "SP 3.1.3 Membandingkan set gigi susu dan set gigi kekal",
        read: {
          title: "Set Gigi Susu vs Set Gigi Kekal",
          text: "Kanak-kanak mempunyai Set Gigi Susu yang berjumlah 20 batang (8 kacip, 4 taring, 8 geraham). Gigi susu bersaiz lebih kecil, kurang kuat dan lapisan enamelnya lebih nipis. Apabila kanak-kanak berumur sekitar 6 tahun, gigi susu akan tanggal dan digantikan dengan Set Gigi Kekal! Set Gigi Kekal orang dewasa mempunyai 32 batang (8 kacip, 4 taring, 20 geraham). Jika gigi kekal rosak atau tercabut, ia tidak akan tumbuh lagi!",
          vocabulary: [
            { word: "Gigi Susu", meaning: "Jumlah 20 batang, mula tumbuh sejak umur 6 bulan" },
            { word: "Gigi Kekal", meaning: "Jumlah 32 batang, lebih kuat dan tahan lama" },
            { word: "Karies Gigi", meaning: "Kerosakan pada gigi akibat bakteria dan gula" }
          ]
        },
        write: {
          taskType: "concept_match",
          instruction: "Jawab soalan fakta perbandingan set gigi berikut.",
          prompt: "Berapakah jumlah bilangan gigi dalam satu set lengkap Gigi Kekal?",
          question: "Pilih bilangan yang tepat:",
          options: ["32 batang", "20 batang", "28 batang", "40 batang"],
          correctAnswer: "32 batang",
          traceWord: "32 Batang Gigi Kekal",
          explanation: "Set gigi kekal lengkap manusia dewasa terdiri daripada 32 batang gigi."
        },
        speak: {
          prompt: "Set gigi susu ada 20 batang, manakala set gigi kekal lengkap ada 32 batang.",
          targetSpeech: "Set gigi susu ada 20 batang manakala set gigi kekal lengkap ada 32 batang",
          tips: "Sebut nombor 20 dan 32 dengan jelas dan yakin."
        },
        worksheetQuestions: [
          { q: "Lengkapkan jadual perbandingan:", a: "Gigi Susu = 20 batang, Gigi Kekal = 32 batang" },
          { q: "Apakah yang akan berlaku jika gigi kekal kita tercabut?", a: "Gigi kekal tidak akan tumbuh lagi jika tercabut." },
          { q: "Berikan 2 cara menjaga kesihatan gigi:", a: "1. Memberus gigi 2 kali sehari  2. Kurangkan makanan bergula / Jumpa doktor gigi" }
        ]
      },

      ma: {
        subject: "Matematik (Mathematics)",
        topic: "Unit 1: Nombor Hingga 10 000 (Membundar & Membanding Nombor)",
        learningStandard: "SP 1.4.1 Membundarkan nombor bulat hingga puluh, ratus dan ribu terdekat",
        read: {
          title: "Teknik Membundar Nombor StarBlox",
          text: "Untuk membundarkan sebarang nombor, tengok digit di sebelah kanan nilai tempat yang dikehendaki! Jika digit sebelah kanan ialah 0, 1, 2, 3, atau 4 (nombor miskin), kekalkan digit sasaran. Jika digit itu 5, 6, 7, 8, atau 9 (nombor kaya), TAMBAH 1 kepada digit sasaran! Contohnya, 4 672 dibundarkan kepada ratus terdekat menjadi 4 700 kerana digit puluh ialah 7 (kaya).",
          vocabulary: [
            { word: "Membundar", meaning: "Mencari nilai anggaran terdekat (puluh, ratus, ribu)" },
            { word: "Tertib Menaik", meaning: "Susunan nombor daripada nilai terkecil ke terbesar" },
            { word: "Tertib Menurun", meaning: "Susunan nombor daripada nilai terbesar ke terkecil" }
          ]
        },
        write: {
          taskType: "math_calculation",
          instruction: "Bundarkan nombor berikut dengan teliti.",
          prompt: "Bundarkan 5 438 kepada ratus terdekat.",
          question: "Pilih jawapan yang betul:",
          options: ["5 400", "5 500", "5 440", "5 000"],
          correctAnswer: "5 400",
          traceWord: "5400 Bundar",
          explanation: "Digit di rumah puluh ialah 3 (kurang daripada 5), maka digit ratus kekal 4 -> 5 400."
        },
        speak: {
          prompt: "Lima ribu empat ratus tiga puluh lapan dibundarkan kepada ratus terdekat menjadi lima ribu empat ratus.",
          targetSpeech: "Lima ribu empat ratus tiga puluh lapan dibundarkan kepada ratus terdekat menjadi lima ribu empat ratus",
          tips: "Sebut nombor bundaran dengan jelas."
        },
        worksheetQuestions: [
          { q: "Bundarkan 3 862 kepada ribu terdekat:", a: "4 000" },
          { q: "Susun nombor berikut dalam tertib menaik: 4 120, 4 012, 4 201", a: "4 012, 4 120, 4 201" },
          { q: "Manakah nombor yang lebih besar? 6 781 atau 6 871?", a: "6 871" }
        ]
      }
    },

    {
      dayId: 3,
      themeTitle: "Hari Ketiga: Makanan Seimbang & Nutrisi (Roblox Bakery & K-Pop Cafe)",
      kpopTheme: "K-Pop Idol Meal Prep & Energy Boost",
      dateLabel: "Day 3 - Term Focus",
      
      bm: {
        subject: "Bahasa Melayu",
        topic: "Tema 2: Kesihatan - Makanan Berkhasiat Badan Sihat",
        learningStandard: "SP 5.1.3 Memahami dan membina ayat menggunakan Kata Adjektif (sifat/warna/bentuk)",
        read: {
          title: "Menu Sarapan Sihat",
          text: "Untuk membesar dengan cergas dan pintar, kita perlu mengambil makanan yang seimbang. Puan Aini menyediakan sandwich roti gandum yang segar. Dia meletakkan daun salad yang hijau, tomato yang merah ranum, dan hirisan telur rebus yang lazat. Perkataan seperti 'segar', 'hijau', 'merah', dan 'lazat' ialah Kata Adjektif yang menerangkan sifat atau keadaan kata nama.",
          vocabulary: [
            { word: "lazat", meaning: "enak dan sedap rasanya" },
            { word: "ranum", meaning: "masak elok (mengenai buah-buahan)" },
            { word: "Kata Adjektif", meaning: "kata yang menerangkan sifat atau keadaan sesuatu benda" }
          ]
        },
        write: {
          taskType: "fill_and_trace",
          instruction: "Pilih Kata Adjektif yang paling sesuai.",
          prompt: "Buah epal di atas meja itu berwarna _______ dan rasanya sangat manis.",
          question: "Pilih jawapan yang betul:",
          options: ["merah", "berlari", "di", "mereka"],
          correctAnswer: "merah",
          traceWord: "Epal Merah Manis",
          explanation: "'Merah' menerangkan sifat warna, manakala 'manis' menerangkan sifat rasa."
        },
        speak: {
          prompt: "Sayur-sayuran dan buah-buahan segar sangat baik untuk kesihatan tubuh badan kita.",
          targetSpeech: "Sayur-sayuran dan buah-buahan segar sangat baik untuk kesihatan tubuh badan kita",
          tips: "Ucapkan dengan intonasi yakin dan jelas."
        },
        worksheetQuestions: [
          { q: "Senaraikan DUA Kata Adjektif daripada petikan:", a: "segar / hijau / merah / lazat" },
          { q: "Isi tempat kosong dengan kata adjektif yang sesuai: Air sirap itu sangat (manis / tinggi).", a: "manis" },
          { q: "Bina satu ayat menggunakan kata adjektif 'sihat':", a: "Contoh: Makanan seimbang menjadikan tubuh kita sihat." }
        ]
      },

      bc: {
        subject: "华文 (Bahasa Cina)",
        topic: "第七单元：舌尖上的美味《竹筒饭》",
        learningStandard: "BC SJKC 2.1.1 认识本土特色美食, 5.3.1 量词的正确运用",
        read: {
          title: "课文朗读：马来传统美食竹筒饭",
          text: "竹筒饭是马来同胞在开斋节不可缺少的传统美食。制作竹筒饭时，先把新鲜的香蕉叶卷成圆筒状放进竹筒里，然后倒入洗干净的糯米和浓郁的椰浆。放在炭火旁慢慢烘烤几个小时后，竹筒饭散发出一阵阵扑鼻的香味，令人垂涎三尺！",
          pinyin: "Zhútǒng fàn shì Mǎlái tóngbāo zài Kāizhāi Jié bùkě quēshǎo de chuántǒng měishí...",
          vocabulary: [
            { word: "浓郁", meaning: "nóngyù - 香气或味道很浓" },
            { word: "垂涎三尺", meaning: "chuíxián sānchǐ - 形容极其嘴馋想吃" },
            { word: "传统", meaning: "chuántǒng - 世代相传的风俗习惯" }
          ]
        },
        write: {
          taskType: "hanzi_trace",
          character: "糯",
          pinyin: "nuò",
          strokeCount: 20,
          radicals: "米 (米字旁)",
          phrase: "糯米 (nuò mǐ)",
          instruction: "练习写'糯'字，部首是米字旁，右边是'需'。",
          question: "选出最适合的量词：一（  ）竹筒饭",
          options: ["节 (jié)", "条 (tiáo)", "头 (tóu)", "张 (zhāng)"],
          correctAnswer: "节 (jié)",
          explanation: "竹子是一节一节的，所以通常说‘一节竹筒饭’。"
        },
        speak: {
          prompt: "竹筒饭散发出一阵阵浓郁诱人的香味。",
          targetSpeech: "竹筒饭散发出一阵阵浓郁诱人的香味",
          pinyinPrompt: "Zhútǒng fàn sànfā chū yī zhènzhèn nóngyù yòurén de xiāngwèi.",
          tips: "注意‘浓郁’(nóngyù) 的抑扬顿挫。"
        },
        worksheetQuestions: [
          { q: "制作竹筒饭的主要材料包括哪些？", a: "糯米、椰浆、香蕉叶和竹筒。" },
          { q: "选词填空：一（  ）香蕉叶 / 一（  ）筷子", a: "一片香蕉叶，一双筷子" },
          { q: "写出成语‘垂涎三尺’的意思：", a: "形容嘴馋想要吃，或者极其喜爱。" }
        ]
      },

      bi: {
        subject: "English",
        topic: "Module 6: Food, please! (Countable & Uncountable, Some/Any)",
        learningStandard: "Get Smart Plus 3 - Quantifiers: some/any; Would you like...?",
        read: {
          title: "Roblox Boba Cafe & Snack Bar",
          text: "Welcome to the K-Pop Boba Cafe! What would you like to order today? We have got some delicious strawberry milk tea, some fluffy pancakes, and some crispy potato chips. We haven't got any chocolate ice cream left. Would you like some honey pancakes? Yes, please! They smell wonderful. Don't forget, we use 'some' in positive sentences and 'any' in negative sentences and questions!",
          vocabulary: [
            { word: "countable", meaning: "boleh dikira (apples, pancakes)" },
            { word: "uncountable", meaning: "tidak boleh dikira (milk, water, rice, tea)" },
            { word: "some / any", meaning: "beberapa / sedikit (some = positif, any = negatif/soalan)" }
          ]
        },
        write: {
          taskType: "grammar_quiz",
          instruction: "Choose 'some' or 'any' to complete the sentence.",
          prompt: "There isn't _______ sugar left in the jar.",
          question: "Which word correctly completes the sentence?",
          options: ["any", "some", "a", "an"],
          correctAnswer: "any",
          traceWord: "Isn't Any Sugar",
          explanation: "Use 'any' in negative sentences (isn't / haven't got)."
        },
        speak: {
          prompt: "Would you like some sweet strawberries and a cup of warm tea?",
          targetSpeech: "Would you like some sweet strawberries and a cup of warm tea",
          tips: "Use a polite rising intonation at the end of the question!"
        },
        worksheetQuestions: [
          { q: "Fill in: There are (some / any) __________ fresh apples in the basket.", a: "some" },
          { q: "Fill in: Have you got (some / any) __________ milk?", a: "any" },
          { q: "Classify into Countable or Uncountable: (Rice, Egg)", a: "Rice = Uncountable, Egg = Countable" }
        ]
      },

      sc: {
        subject: "Sains (Science)",
        topic: "Unit 3: Manusia - Kelas Makanan & Pencernaan",
        learningStandard: "SP 3.2.1 Mengelas makanan mengikut kelas makanan; SP 3.3.1 Memerihalkan proses pencernaan",
        read: {
          title: "Piramid Makanan & Urutan Pencernaan",
          text: "Tubuh kita memerlukan 7 kelas makanan: Karbohidrat (nasi, roti - beri tenaga), Protein (ayam, ikan, telur - tumbesaran & baiki tisu), Lemak (minyak, mentega - memanaskan badan), Vitamin & Mineral (sayur & buah - cegah penyakit), Pelawas (cegah sembelit), dan Air. Apabila kita makan, makanan melalui urutan pencernaan: Mulut -> Esofagus -> Perut -> Usus Kecil -> Usus Besar -> Dubur!",
          vocabulary: [
            { word: "Pencernaan", meaning: "Proses menghancurkan makanan kepada cebisan kecil supaya dapat diserap" },
            { word: "Esofagus", meaning: "Salur sempit yang menghubungkan mulut ke perut" },
            { word: "Pelawas", meaning: "Serat makanan yang melancarkan pembuangan air besar" }
          ]
        },
        write: {
          taskType: "concept_match",
          instruction: "Susun laluan makanan semasa proses pencernaan.",
          prompt: "Selepas perut, makanan yang dicerna akan bergerak ke mana?",
          question: "Pilih organ pencernaan seterusnya:",
          options: ["Usus Kecil", "Mulut", "Dubur", "Jantung"],
          correctAnswer: "Usus Kecil",
          traceWord: "Perut Ke Usus Kecil",
          explanation: "Makanan bergerak dari Mulut -> Esofagus -> Perut -> Usus Kecil -> Usus Besar -> Dubur."
        },
        speak: {
          prompt: "Urutan pencernaan makanan bermula dari mulut, esofagus, perut, usus kecil, usus besar dan dubur.",
          targetSpeech: "Urutan pencernaan makanan bermula dari mulut esofagus perut usus kecil usus besar dan dubur",
          tips: "Sebut urutan organ pencernaan satu demi satu dengan lancar."
        },
        worksheetQuestions: [
          { q: "Apakah fungsi utama makanan kelas Karbohidrat?", a: "Membekalkan tenaga kepada tubuh badan." },
          { q: "Berikan DUA contoh makanan yang kaya dengan Protein:", a: "Ikan / Ayam / Telur / Daging / Susu" },
          { q: "Lengkapkan urutan pencernaan: Mulut -> __________ -> Perut -> Usus Kecil", a: "Esofagus" }
        ]
      },

      ma: {
        subject: "Matematik (Mathematics)",
        topic: "Unit 2: Operasi Asas (Tambah & Tolak Hingga 10 000)",
        learningStandard: "SP 2.1.1 Menambah hingga tiga nombor dengan mengumpul semula; SP 2.2.1 Menolak hingga 10 000",
        read: {
          title: "Cabaran Bintang Bloxburg: Tambah & Tolak",
          text: "Untuk membina pentas konsert K-Pop di Bloxburg, kita memerlukan blok binaan! Pada pusingan pertama, Lisa mengumpul 2 450 blok. Pada pusingan kedua, dia mengumpul 3 780 blok lagi. Berapakah jumlah blok yang dikumpulnya? Kita tambah mengikut bentuk lazim: 2 450 + 3 780 = 6 230 blok! Pastikan apabila hasil tambah di rumah puluh atau ratus melebihi 9, kita KUMPUL SEMULA ke rumah sebelah kiri!",
          vocabulary: [
            { word: "Bentuk Lazim", meaning: "Kaedah menulis pengiraan secara menegak mengikut nilai tempat" },
            { word: "Kumpul Semula", meaning: "Membawa nilai lebih (carry forward) ke nilai tempat lebih tinggi" },
            { word: "Beza / Baki", meaning: "Hasil tolak antara dua nombor" }
          ]
        },
        write: {
          taskType: "math_calculation",
          instruction: "Selesaikan operasi tambah berikut dengan betul.",
          prompt: "Kira: 3 645 + 1 829 = ?",
          question: "Pilih jawapan yang tepat:",
          options: ["5 474", "4 474", "5 464", "5 574"],
          correctAnswer: "5 474",
          traceWord: "5474 Tambah Tepat",
          explanation: "5+9=14 (tulis 4, bawa 1); 1+4+2=7; 6+8=14 (tulis 4, bawa 1); 1+3+1=5 -> 5 474."
        },
        speak: {
          prompt: "Tiga ribu enam ratus empat puluh lima tambah seribu lapan ratus dua puluh sembilan sama dengan lima ribu empat ratus tujuh puluh empat.",
          targetSpeech: "Tiga ribu enam ratus empat puluh lima tambah seribu lapan ratus dua puluh sembilan sama dengan lima ribu empat ratus tujuh puluh empat",
          tips: "Sebut nombor dalam ayat matematik yang jelas."
        },
        worksheetQuestions: [
          { q: "Selesaikan: 4 520 + 2 390 = ", a: "6 910" },
          { q: "Cari beza antara 8 000 dengan 3 450:", a: "4 550" },
          { q: "Sebuah kedai ada 5 600 tiket konsert. Sebanyak 3 250 tiket telah dijual. Berapakah baki tiket?", a: "5 600 - 3 250 = 2 350 tiket" }
        ]
      }
    },

    {
      dayId: 4,
      themeTitle: "Hari Keempat: Flora & Fauna (Roblox Pet Sanctuary & K-Pop Zoo)",
      kpopTheme: "Adopt Me Safari - Animal Classification",
      dateLabel: "Day 4 - Term Focus",
      
      bm: {
        subject: "Bahasa Melayu",
        topic: "Tema 8: Pertanian dan Penternakan (Haiwan Peliharaan & Ternakan)",
        learningStandard: "SP 5.1.4 Memahami dan membina ayat menggunakan Kata Tugas (Kata Hubung)",
        read: {
          title: "Lawatan ke Ladang Ternakan Pak Seman",
          text: "Pada musim cuti sekolah, Azim melawat ke ladang ternakan datuknya. Di sana terdapat lembu, kambing dan ayam. Azim rajin membantu datuknya memberi makanan kepada ternakan manakala adiknya mengutip telur ayam di reban. Datuk Azim memuji sikap mereka kerana sentiasa bekerjasama. Perkataan 'dan', 'manakala', 'kerana', dan 'tetapi' ialah Kata Hubung yang mencantumkan dua atau lebih ayat tunggal menjadi ayat majmuk.",
          vocabulary: [
            { word: "manakala", meaning: "kata hubung yang menunjukkan perbezaan antara dua perkara" },
            { word: "reban", meaning: "kandang atau kurungan untuk ayam dan itik" },
            { word: "Ayat Majmuk", meaning: "ayat yang dibina daripada gabungan dua atau lebih ayat tunggal" }
          ]
        },
        write: {
          taskType: "fill_and_trace",
          instruction: "Pilih Kata Hubung yang betul untuk mencantumkan ayat.",
          prompt: "Mira suka melukis gambar kucing _______ adiknya suka bermain Roblox.",
          question: "Pilih kata hubung yang paling sesuai:",
          options: ["manakala", "atau", "supaya", "hingga"],
          correctAnswer: "manakala",
          traceWord: "Manakala Kata Hubung",
          explanation: "'Manakala' digunakan untuk membandingkan dua perbuatan yang berbeza."
        },
        speak: {
          prompt: "Kami bekerjasama membersihkan kandang arnab supaya haiwan peliharaan sentiasa sihat dan bersih.",
          targetSpeech: "Kami bekerjasama membersihkan kandang arnab supaya haiwan peliharaan sentiasa sihat dan bersih",
          tips: "Sebutan jelas untuk 'kandang arnab' dan 'supaya'."
        },
        worksheetQuestions: [
          { q: "Gabungkan dua ayat ini guna kata hubung 'kerana': (Adik menangis. / Adik terjatuh basikal.)", a: "Adik menangis kerana terjatuh basikal." },
          { q: "Senaraikan DUA kata hubung daripada petikan:", a: "dan / manakala / kerana" },
          { q: "Bina satu ayat majmuk menggunakan kata hubung 'tetapi':", a: "Contoh: Baju itu cantik tetapi sangat mahal." }
        ]
      },

      bc: {
        subject: "华文 (Bahasa Cina)",
        topic: "第三单元：小动物的智慧《鸟儿筑巢》",
        learningStandard: "BC SJKC 2.1.1 观察大自然与理解课文, 5.4.1 关联词语（一边……一边……）",
        read: {
          title: "课文朗读：巧夺天工的鸟巢",
          text: "大自然里的小动物充满生存的智慧。春天到了，喜鹊和燕子忙着用嘴叼来树枝、泥土和细软的干草，在大树上筑起坚固又温暖的鸟巢。小鸟一边忙碌地飞翔，一边欢快地啼叫。鸟巢就像摇篮一样，为即将出生的鸟宝宝遮风挡雨，真是奇妙极了！",
          pinyin: "Dà zìrán lǐ de xiǎo dòngwù chōngmǎn shēngcún de zhìhuì...",
          vocabulary: [
            { word: "筑巢", meaning: "zhùcháo - 鸟类做窝建造家园" },
            { word: "坚固", meaning: "jiāngù - 结实牢固，不易被毁" },
            { word: "遮风挡雨", meaning: "zhē fēng dǎng yǔ - 遮挡风雨，提供保护" }
          ]
        },
        write: {
          taskType: "hanzi_trace",
          character: "巢",
          pinyin: "cháo",
          strokeCount: 11,
          radicals: "巛 (三拐儿)",
          phrase: "鸟巢 (niǎo cháo)",
          instruction: "在写字板上练习'巢'字，上面有三个拐折，下方是木字底。",
          question: "用关联词‘一边……一边……’填空：小歌手在舞台上（  ）唱歌，（  ）跳舞。",
          options: ["一边……一边……", "不但……而且……", "因为……所以……", "虽然……但是……"],
          correctAnswer: "一边……一边……",
          explanation: "‘一边……一边……’表示两个动作同时进行。"
        },
        speak: {
          prompt: "小燕子一边飞翔，一边欢快地在空中唱歌。",
          targetSpeech: "小燕子一边飞翔一边欢快地在空中唱歌",
          pinyinPrompt: "Xiǎo yànzi yībiān fēixiáng, yībiān huānkuài de zài kōngzhōng chànggē.",
          tips: "读出轻快活泼的语气！"
        },
        worksheetQuestions: [
          { q: "鸟儿用哪些材料筑巢？", a: "树枝、泥土和细软的干草。" },
          { q: "用‘一边……一边……’写一个句子：", a: "示例：姐姐一边听音乐，一边画画。" },
          { q: "写出‘坚固’的反义词：", a: "松软 / 脆弱 / 破烂" }
        ]
      },

      bi: {
        subject: "English",
        topic: "Module 10: The world around us (Comparative Adjectives)",
        learningStandard: "Get Smart Plus 3 - Grammar: Comparatives (-er than, more than)",
        read: {
          title: "Roblox Adopt Me Pet Safari!",
          text: "Look at all the cute animals in the safari obby! A cheetah is fast, but which animal is faster? A cheetah is faster than a lion. A blue whale is much bigger than an elephant! An elephant is heavier than a horse. The giraffe is taller than the zebra. When we compare two things, we usually add '-er' to short adjectives and use 'than'!",
          vocabulary: [
            { word: "faster than", meaning: "lebih laju daripada / 比……快" },
            { word: "taller than", meaning: "lebih tinggi daripada / 比……高" },
            { word: "heavier than", meaning: "lebih berat daripada (heavy -> heavier)" }
          ]
        },
        write: {
          taskType: "grammar_quiz",
          instruction: "Change the adjective into comparative form.",
          prompt: "A giraffe has a long neck. It is _______ than a horse.",
          question: "Choose the correct comparative form of 'tall':",
          options: ["taller", "tallest", "more tall", "as tall"],
          correctAnswer: "taller",
          traceWord: "Taller Than",
          explanation: "Comparative form of 'tall' is 'taller' (add -er + than)."
        },
        speak: {
          prompt: "The cheetah is faster than the lion, and the giraffe is taller than the horse.",
          targetSpeech: "The cheetah is faster than the lion and the giraffe is taller than the horse",
          tips: "Remember to pronounce the '-er' at the end of comparative words clearly."
        },
        worksheetQuestions: [
          { q: "Write the comparative form of 'fast': ________________", a: "faster" },
          { q: "Write the comparative form of 'big': ________________", a: "bigger" },
          { q: "Complete the sentence: An elephant is (big) __________ than a tiger.", a: "bigger" }
        ]
      },

      sc: {
        subject: "Sains (Science)",
        topic: "Unit 4: Haiwan - Tabiat Pemakanan & Kegigian Haiwan",
        learningStandard: "SP 4.1.1 Mengelaskan haiwan mengikut tabiat pemakanan; SP 4.1.2 Mengenal pasti kegigian haiwan",
        read: {
          title: "Herbivor, Karnivor & Omnivor",
          text: "Berdasarkan tabiat pemakanannya, haiwan dikelaskan kepada tiga kumpulan! 1. HERBIVOR: Haiwan yang makan tumbuhan sahaja (contoh: arnab, lembu, kuda). Mereka mempunyai gigi kacip yang kuat untuk memotong rumput dan gigi geraham yang besar untuk melumatkan tumbuhan. 2. KARNIVOR: Haiwan yang makan haiwan lain sahaja (contoh: harimau, singa, helang). Mereka mempunyai gigi taring yang sangat tajam untuk mengoyak daging. 3. OMNIVOR: Haiwan yang makan tumbuhan dan haiwan lain (contoh: monyet, ayam, beruang). Mereka mempunyai ketiga-tiga jenis gigi!",
          vocabulary: [
            { word: "Herbivor", meaning: "Haiwan pemakan tumbuhan sahaja" },
            { word: "Karnivor", meaning: "Haiwan pemakan daging sahaja" },
            { word: "Omnivor", meaning: "Haiwan pemakan tumbuhan dan haiwan lain" }
          ]
        },
        write: {
          taskType: "concept_match",
          instruction: "Tentukan kumpulan pemakanan bagi haiwan berikut.",
          prompt: "Harimau memburu rusa dan makan daging. Harimau tergolong dalam kumpulan:",
          question: "Pilih tabiat pemakanan harimau:",
          options: ["Karnivor", "Herbivor", "Omnivor", "Pengurai"],
          correctAnswer: "Karnivor",
          traceWord: "Karnivor Harimau",
          explanation: "Haiwan yang hanya makan daging dipanggil karnivor dan mempunyai gigi taring yang tajam."
        },
        speak: {
          prompt: "Herbivor makan tumbuhan, karnivor makan daging, dan omnivor makan kedua-duanya.",
          targetSpeech: "Herbivor makan tumbuhan karnivor makan daging dan omnivor makan kedua-duanya",
          tips: "Pastikan sebutan istilah sains betul dan tepat."
        },
        worksheetQuestions: [
          { q: "Kelaskan haiwan berikut kepada Herbivor / Karnivor / Omnivor: (Arnab, Singa, Monyet)", a: "Arnab = Herbivor, Singa = Karnivor, Monyet = Omnivor" },
          { q: "Apakah jenis gigi yang paling dominan dan tajam pada haiwan karnivor?", a: "Gigi Taring" },
          { q: "Mengapakah lembu memerlukan gigi geraham yang besar dan lebar?", a: "Untuk melumatkan dan menghancurkan rumput serta tumbuhan berserat." }
        ]
      },

      ma: {
        subject: "Matematik (Mathematics)",
        topic: "Unit 2: Operasi Asas (Darab & Bahagi Hingga 10 000)",
        learningStandard: "SP 2.3.1 Mendarab sebarang nombor hingga empat digit dengan satu digit; SP 2.4.1 Membahagi nombor",
        read: {
          title: "Roblox Gem Multiplier: Darab & Bahagi!",
          text: "Operasi darab ialah penambahan berulang, manakala operasi bahagi ialah penolakan berulang atau perkongsian sama rata! Contohnya, Jennie membeli 4 kotak aksesori avatar Roblox. Setiap kotak mengandungi 235 butang berlian. Berapakah jumlah berlian yang dimilikinya? Kita kira secara bentuk lazim: 235 × 4 = 940 berlian! Untuk bahagi pula, 940 ÷ 4 = 235!",
          vocabulary: [
            { word: "Operasi Darab", meaning: "Penambahan berulang bagi nombor yang sama" },
            { word: "Operasi Bahagi", meaning: "Pengagihan sama rata atau penolakan berturut-turut" },
            { word: "Baki", meaning: "Nombor yang tertinggal selepas pembahagian tidak tepat" }
          ]
        },
        write: {
          taskType: "math_calculation",
          instruction: "Selesaikan operasi darab berikut dengan tepat.",
          prompt: "Kira: 142 × 5 = ?",
          question: "Pilih hasil darab yang betul:",
          options: ["710", "610", "705", "720"],
          correctAnswer: "710",
          traceWord: "710 Darab Tepat",
          explanation: "2×5=10 (tulis 0 bawa 1); 4×5=20+1=21 (tulis 1 bawa 2); 1×5=5+2=7 -> 710."
        },
        speak: {
          prompt: "Satu ratus empat puluh dua darab lima sama dengan tujuh ratus sepuluh.",
          targetSpeech: "Satu ratus empat puluh dua darab lima sama dengan tujuh ratus sepuluh",
          tips: "Sebut nombor darab dan jawapannya dengan mantap."
        },
        worksheetQuestions: [
          { q: "Kira hasil darab: 320 × 6 = ", a: "1 920" },
          { q: "Kira hasil bahagi: 480 ÷ 4 = ", a: "120" },
          { q: "Ada 36 biji epal diagihkan sama banyak kepada 6 orang murid. Berapakah biji epal seorang murid dapat?", a: "36 ÷ 6 = 6 biji epal" }
        ]
      }
    },

    {
      dayId: 5,
      themeTitle: "Hari Kelima: Sains Alam & Pecahan Bintang (Roblox Astro Lab)",
      kpopTheme: "Galaxy Concert Stage - Stars, Space & Fractions",
      dateLabel: "Day 5 - Term Focus",
      
      bm: {
        subject: "Bahasa Melayu",
        topic: "Tema 7: Sains, Teknologi dan Inovasi (Ciptaan Pintar)",
        learningStandard: "SP 5.2.1 Memahami dan menggunakan Kata Berimbuhan Awalan (meN-, peN-, ber-)",
        read: {
          title: "Robot Pintar Pembersih Rumah",
          text: "Encik Faris membeli sebuah robot vakum pintar. Robot ini berfungsi secara automatik untuk membersihkan habuk di lantai rumah. Ayah menekan butang kawalan, lalu robot itu mula bergerak ke setiap penjuru bilik. Perkataan 'membersihkan', 'menekan', dan 'bergerak' mempunyai imbuhan awalan yang mengubah fungsi dan maksud kata dasar.",
          vocabulary: [
            { word: "automatik", meaning: "bergerak atau berfungsi dengan sendiri tanpa perlu kawalan manual" },
            { word: "Kata Dasar", meaning: "kata asal sebelum menerima sebarang imbuhan (contoh: bersih, tekan)" },
            { word: "Imbuhan Awalan", meaning: "imbuhan yang diletakkan di hadapan kata dasar seperti meN- atau ber-" }
          ]
        },
        write: {
          taskType: "fill_and_trace",
          instruction: "Lengkapkan ayat dengan kata berimbuhan awalan yang betul.",
          prompt: "Kakak sedang _______ kek cawan coklat di dapur.",
          question: "Pilih perkataan berimbuhan yang betul:",
          options: ["membakar", "terbakar", "pembakar", "berbakar"],
          correctAnswer: "membakar",
          traceWord: "Membakar Kek Enak",
          explanation: "Kata dasar 'bakar' menerima imbuhan meN- menjadi 'membakar' (melakukan perbuatan)."
        },
        speak: {
          prompt: "Teknologi moden memudahkan urusan harian dan menjimatkan masa kita semua.",
          targetSpeech: "Teknologi moden memudahkan urusan harian dan menjimatkan masa kita semua",
          tips: "Sebut 'teknologi' dan 'menjimatkan' dengan sebutan baku."
        },
        worksheetQuestions: [
          { q: "Apakah kata dasar bagi perkataan 'menyapu'?", a: "sapu" },
          { q: "Beri imbuhan awalan 'ber-' kepada kata dasar 'main':", a: "bermain" },
          { q: "Bina satu ayat menggunakan perkataan 'membantu':", a: "Contoh: Saya suka membantu ibu mengemas bilik tidur." }
        ]
      },

      bc: {
        subject: "华文 (Bahasa Cina)",
        topic: "第八单元：科技改变世界《奇妙的太空》",
        learningStandard: "BC SJKC 2.1.1 科技词汇积累, 5.2.1 形近字与同音字辨析",
        read: {
          title: "课文朗读：小小宇航员的太空梦",
          text: "晴朗的夜空浩瀚无边，闪烁着无数耀眼的星星。科技的飞速发展，让人类能够建造太空飞船和人造卫星，飞向遥远神秘的外太空。我国首位宇航员谢赫·穆扎法尔博士曾经进入国际空间站，在太空中进行了许多奇妙的科学实验，激励着无数少年儿童勇于探索科学奥秘！",
          pinyin: "Qínglǎng de yèkōng hàohàn wúbiān, shǎnshuò zhe wúshù yàoyǎn de xīngxīng...",
          vocabulary: [
            { word: "浩瀚", meaning: "hàohàn - 广大辽阔无边际" },
            { word: "宇航员", meaning: "yǔhángyuán - 驾驶或乘坐航天器进入太空的人" },
            { word: "探索", meaning: "tànsuǒ - 多方寻求答案与真理" }
          ]
        },
        write: {
          taskType: "hanzi_trace",
          character: "宇",
          pinyin: "yǔ",
          strokeCount: 6,
          radicals: "宀 (宝盖头)",
          phrase: "宇宙 (yǔ zhòu)",
          instruction: "在写字板上练习'宇'字，宝盖头下面是一个'于'字。",
          question: "辨析形近字：下列哪个字是‘宇宙’的‘宙’？",
          options: ["宙 (zhòu)", "由 (yóu)", "田 (tián)", "甲 (jiǎ)"],
          correctAnswer: "宙 (zhòu)",
          explanation: "‘宙’字上面有宝盖头，下面是由字，指古往今来的时间。"
        },
        speak: {
          prompt: "浩瀚的宇宙中闪烁着无数美丽的星星，等待我们去探索。",
          targetSpeech: "浩瀚的宇宙中闪烁着无数美丽的星星等待我们去探索",
          pinyinPrompt: "Hàohàn de yǔzhòu zhōng shǎnshuò zhe wúshù měilì de xīngxīng, děngdài wǒmen qù tànsuǒ.",
          tips: "语气宏亮而富有憧憬！"
        },
        worksheetQuestions: [
          { q: "写出‘宇’和‘宙’的共同偏旁部首：", a: "宀 (宝盖头)" },
          { q: "选字填空：【探 / 深】（  ）索宇宙，水池很（  ）", a: "探索宇宙，水池很深" },
          { q: "用‘浩瀚’造句：", a: "示例：浩瀚的大海里生活着各种各样奇妙的生物。" }
        ]
      },

      bi: {
        subject: "English",
        topic: "Module 5: My new house & Prepositions of Place",
        learningStandard: "Get Smart Plus 3 - Prepositions: in front of, behind, next to, between; There is/There are",
        read: {
          title: "Touring my Dream Roblox Mansion!",
          text: "Welcome to my new Bloxburg house! In the living room, there is a big pink sofa in front of the TV. The gaming computer is next to the bookcase. Look upstairs! There are two cozy bedrooms and a balcony. My fluffy Roblox puppy is sleeping behind the door! Between the desk and the wardrobe, there is a tall shiny mirror. Do you like my new house?",
          vocabulary: [
            { word: "in front of", meaning: "di hadapan / 在……前面" },
            { word: "behind", meaning: "di belakang / 在……后面" },
            { word: "between", meaning: "di antara dua benda / 在……之间" }
          ]
        },
        write: {
          taskType: "grammar_quiz",
          instruction: "Choose the correct preposition of place.",
          prompt: "The cat is hiding _______ the door, so nobody can see it.",
          question: "Which preposition fits best?",
          options: ["behind", "on", "in", "under"],
          correctAnswer: "behind",
          traceWord: "Behind The Door",
          explanation: "If you cannot see it, the cat is hiding behind the door."
        },
        speak: {
          prompt: "There is a fluffy kitten behind the door and a pretty lamp on the desk.",
          targetSpeech: "There is a fluffy kitten behind the door and a pretty lamp on the desk",
          tips: "Speak with enthusiasm and rhythm."
        },
        worksheetQuestions: [
          { q: "Fill in: There (is / are) __________ three chairs in the kitchen.", a: "are" },
          { q: "Fill in: The ball is (between / in front of) __________ the two boxes.", a: "between" },
          { q: "Write one sentence about your bedroom using 'There is':", a: "e.g., There is a soft pillow on my bed." }
        ]
      },

      sc: {
        subject: "Sains (Science)",
        topic: "Unit 9: Sistem Suria - Ahli Sistem Suria & Planet Kita",
        learningStandard: "SP 9.1.1 Menyenaraikan ahli Sistem Suria; SP 9.1.2 Menyatakan urutan lapan buah planet",
        read: {
          title: "Pengembaraan di Sistem Suria",
          text: "Sistem Suria kita terletak di dalam Galaksi Bima Sakti. Pusat bagi Sistem Suria ialah MATAHARI yang membekalkan cahaya dan haba. Terdapat 8 buah planet yang beredar mengelilingi Matahari mengikut orbit masing-masing: Utarid (paling dekat), Zuhrah (paling panas), Bumi (satu-satunya planet berpenghuni), Marikh (planet merah), Musytari (planet paling besar), Zuhal (planet bergelang indah), Uranus, dan Neptun (paling jauh dan sangat sejuk)! Ahli lain termasuklah Asteroid, Meteoroid dan Komet.",
          vocabulary: [
            { word: "Orbit", meaning: "Laluan berbentuk elips tempat planet beredar mengelilingi Matahari" },
            { word: "Musytari", meaning: "Planet yang paling besar dalam Sistem Suria" },
            { word: "Utarid", meaning: "Planet paling dekat dengan Matahari" }
          ]
        },
        write: {
          taskType: "concept_match",
          instruction: "Jawab soalan tentang ciri-ciri planet dalam Sistem Suria.",
          prompt: "Apakah planet yang paling besar dalam Sistem Suria?",
          question: "Pilih planet yang betul:",
          options: ["Musytari", "Bumi", "Marikh", "Zuhrah"],
          correctAnswer: "Musytari",
          traceWord: "Musytari Paling Besar",
          explanation: "Musytari ialah gergasi gas dan merupakan planet terbesar dalam Sistem Suria kita."
        },
        speak: {
          prompt: "Lapan buah planet ialah Utarid, Zuhrah, Bumi, Marikh, Musytari, Zuhal, Uranus dan Neptun.",
          targetSpeech: "Lapan buah planet ialah Utarid Zuhrah Bumi Marikh Musytari Zuhal Uranus dan Neptun",
          tips: "Sebut urutan kelapan-lapan planet mengikut susunan jarak dari Matahari."
        },
        worksheetQuestions: [
          { q: "Apakah pusat bagi Sistem Suria?", a: "Matahari" },
          { q: "Namakan planet yang mempunyai gelang yang sangat cantik:", a: "Zuhal" },
          { q: "Nyatakan planet ketiga dari Matahari yang menjadi tempat tinggal kita:", a: "Bumi" }
        ]
      },

      ma: {
        subject: "Matematik (Mathematics)",
        topic: "Unit 3: Pecahan, Perpuluhan & Peratus",
        learningStandard: "SP 3.1.1 Mengenal pasti pecahan wajar dan pecahan setara; SP 3.2.1 Menukar pecahan perseratus kepada perpuluhan",
        read: {
          title: "Kek K-Pop & Pecahan Lazat!",
          text: "Untuk meraikan kejayaan konsert, Lisa memotong sebiji kek strawberi kepada 8 bahagian yang sama besar. Jika dia makan 2 bahagian, pecahan kek yang dimakannya ialah 2/8. Kita boleh mempermudahkan pecahan ini dengan membahagi pengangka dan penyebut dengan 2: 2/8 = 1/4! Maka, 2/8 dan 1/4 ialah pecahan setara. Jika sesuatu pecahan mempunyai penyebut 100, seperti 35/100, ia bersamaan dengan perpuluhan 0.35 dan peratusan 35%!",
          vocabulary: [
            { word: "Pengangka", meaning: "Nombor di bahagian atas pecahan (numerator)" },
            { word: "Penyebut", meaning: "Nombor di bahagian bawah pecahan (denominator)" },
            { word: "Pecahan Setara", meaning: "Pecahan berlainan yang mempunyai nilai yang sama (contoh: 1/2 = 2/4)" }
          ]
        },
        write: {
          taskType: "math_calculation",
          instruction: "Permudahkan pecahan wajar berikut ke bentuk termudah.",
          prompt: "Permudahkan pecahan 4/8 ke bentuk termudah.",
          question: "Pilih jawapan yang betul:",
          options: ["1/2", "2/4", "1/4", "3/4"],
          correctAnswer: "1/2",
          traceWord: "1/2 Bentuk Termudah",
          explanation: "Bahagikan pengangka 4 dan penyebut 8 dengan 4: 4÷4=1, 8÷4=2, jadi jawapannya ialah 1/2."
        },
        speak: {
          prompt: "Empat perlapan bersamaan dengan satu perdua dalam bentuk pecahan termudah.",
          targetSpeech: "Empat perlapan bersamaan dengan satu perdua dalam bentuk pecahan termudah",
          tips: "Sebut pecahan dengan jelas: pengangka dahulu kemudian penyebut."
        },
        worksheetQuestions: [
          { q: "Tuliskan 45/100 dalam bentuk perpuluhan:", a: "0.45" },
          { q: "Tuliskan 75% dalam bentuk pecahan perseratus:", a: "75/100" },
          { q: "Adakah 1/3 setara dengan 2/6? (Ya / Tidak):", a: "Ya (kerana 1×2 / 3×2 = 2/6)" }
        ]
      }
    }
  ],

  // Roblox & K-Pop Avatar Gear Shop items
  shopItems: [
    { id: "hat_kpop_lightstick", name: "Neon Heart Lightstick", category: "accessory", price: 100, icon: "💖", desc: "Shines bright on the K-Pop concert stage!" },
    { id: "hat_roblox_visor", name: "StarBlox Gaming Visor", category: "hat", price: 150, icon: "👑", desc: "Cyberpunk visor with holographic HUD." },
    { id: "pet_neon_unicorn", name: "Adopt Me Neon Unicorn", category: "pet", price: 300, icon: "🦄", desc: "Spreads rainbow sparkles as you study." },
    { id: "pet_kpop_hamster", name: "Chibi Idol Hamster", category: "pet", price: 200, icon: "🐹", desc: "Bounces to the rhythm of K-Pop beats!" },
    { id: "wings_fairy_neon", name: "Roblox Fairy Wings", category: "wings", price: 400, icon: "🪽", desc: "Glide through the obby obstacle courses." },
    { id: "mic_sparkle_gold", name: "Golden Stage Mic", category: "handheld", price: 250, icon: "🎤", desc: "Boosts voice speaking confidence by 100%!" }
  ],

  // Collectible K-Pop Photocards Gacha (Unlocks on daily completion)
  photocards: [
    { id: "card_1", name: "Jennie: Grammar Queen", rank: "SSR Holographic", group: "StarBlox Idols", imageColor: "#ff77a9", quote: "Grammar is my superpower!", power: "Bahasa Melayu +50 XP" },
    { id: "card_2", name: "Hanni: Hanzi Artist", rank: "SSR Rainbow", group: "StarBlox Idols", imageColor: "#a29bfe", quote: "Every stroke of Chinese character tells a story!", power: "华文 +50 XP" },
    { id: "card_3", name: "Lisa: Polyglot Dancer", rank: "UR Ultra Rare", group: "StarBlox Idols", imageColor: "#ffeaa7", quote: "Speak English with confidence on world stages!", power: "English +50 XP" },
    { id: "card_4", name: "Chae-young: Astro Scientist", rank: "SSR Galaxy", group: "StarBlox Idols", imageColor: "#74b9ff", quote: "Look up to the planets and wonder!", power: "Sains +50 XP" },
    { id: "card_5", name: "Minji: Math Speedster", rank: "UR Diamond", group: "StarBlox Idols", imageColor: "#55efc4", quote: "Numbers are like puzzles waiting to be solved!", power: "Matematik +50 XP" },
    { id: "card_6", name: "StarBlox Roblox Champion", rank: "Secret Mythic", group: "Roblox x K-Pop", imageColor: "#fd79a8", quote: "Completed all Year 3 KSSR challenges!", power: "Super Star +100 XP" }
  ]
};

// Export to window
if (typeof window !== "undefined") {
  window.CURRICULUM_DATABASE = CURRICULUM_DATABASE;
}
