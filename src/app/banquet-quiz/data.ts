import type { BanquetQuizAnswerType, BanquetQuizType } from './types';

type _DataOptionType = string | [string];

type _DataType = [string, _DataOptionType[]];

const __DATA: _DataType[] = [
  [
    'From whom did "Since You (the Heaven) made Zhou Yu, why did You make Zhuge Liang too?" come?',
    ['Zhuge Liang', 'Sima Yi', 'Cao Cao', ['Zhou Yu']],
  ],
  ["In which way did Zhou Yu defeat Cao's army?", ['Flood', ['Fire Attack']]],
  ['Liu Bei is the lord of which faction?', [['Shu'], 'Wei', 'Wu']],
  ['Lu Bu once considered Dong Zhuo as?', ['Foster Son', ['Foster Father'], 'Blood Brother', 'Sworn Brother']],
  ['The Romance of the Three Kingdoms is the story of which country?', [['China'], 'Japan', 'Korea', 'Vietnan']],
  ['To get rid of the eunuchs, who did He Jin order to lead troops into Luoyang?', ['Lu Bu', 'Liu Bei', ['Dong Zhuo'], 'Sun Quan']],
  ['To whom did Liu Bei pay three visits?', [['Zhuge Liang'], 'Sima Yi', 'Lu Su', 'Guo Jia']],
  ['To whom does the idiom "start a solo run" refer?', ['Ma Chao', 'Hua Xiong', 'Lu Bu', ['Guan Yu']]],
  ['Sun Quan is the lord of which faction?', ['Shu', 'Wei', ['Wu']]],
  [
    'Under whom did Zhang Liao serve after Lu Bu died in the Romance of the Three Kingdoms?',
    ['Liu Bei', 'Yuan Shao', 'Sun Quan', ['Cao Cao']],
  ],
  ['What did Zhuge Liang invented to deliver supplies?', ['Zhuge Crossbow', 'Kongming Lantern', ['Wooden Ox'], 'Bun']],
  ['What does Zhang Fei like to drink in the Romance of the Three Kingdoms?', [['Wine'], 'Tea', 'Water', 'Porridge']],
  ["What kind of horse is Lu Bu's mount?", [['Red Hare'], 'Hex Mark', 'Yellow-hoofed Thunder', 'White Jade Lion']],
  ["What kind of weapon did Xiahou Dun's eye wound by?", ['Blade', 'Spear', ['Arrow'], 'Halberd']],
  ['What kind of weapon does Liu Bei use?', [['Twin Swords'], 'Blade', 'Halberd', 'Broadax']],
  ["What's Zhuge Liang known as?", [['Crouching Dragon'], 'Fledging Phoenix', 'Mastermind', 'Vicious Advisor']],
  ["What's the surname of Wei's lord?", ['Sima', ['Cao'], 'Liu', 'Sun']],
  ["What's the weapon of Sun Shangxiang?", ['Blade', ['Bow'], 'Twin Swords', 'Halberd']],
  ["What's the weapon of Xu Huang?", [['Broadax'], 'Blade', 'Twin Swords', 'Halberd']],
  ["What's the weapon of Zhang Fei?", [['Snake Lance'], 'Blade', 'Halberd', 'Broadax']],
  ['Where did Cao Cao set fire on and win the Battle of Guandu?', ['Red Cliffs', 'Xinye', ['Wuchao'], 'Hulu Valley']],
  ['Where did Liu Bei, Guan Yu, and Zhang Fei swear brotherhood?', ['Altar', ['Peach Garden'], 'Desert', 'Imperial Palace']],
  ['Where did the Battle of Red Cliffs take place?', ['Guandu', 'Wan City', 'Quyang', ['Red Cliffs']]],
  ['Where did the Oath of the Peach Gargen happen?', ['Xuzhou', 'Luoyang', ['Zhuo County'], 'Fan City']],
  ['Which advisor served under Cao Cao?', ['Lu Su', ['Guo Jia'], 'Zhuge Liang', 'Zhang Zhao']],
  ['Which country did the author of the Romance of the Three Kingdoms come from?', [['China'], 'Japan', 'Korea', 'America']],
  ['Which officer holds axes in both hands?', ['Xu Huang', ['Hua Xiong'], 'Liu Bei', 'Zhang Fei']],
  ['Who acted on Self-Torture Ruse with Zhou Yu in the Battle of Red Cliffs?', [['Huang Gai'], 'Gan Ning', 'Lu Su', 'Xiahou Dun']],
  ['Who defeated Yuan Shao at the Battle of Guandu?', ['Liu Bei', ['Cao Cao'], 'Guan Yu', 'Sun Quan']],
  ['Who did Cao Cao send to convince Guan Yu to surrender?', ['Zhang He', ['Zhang Liao'], 'Yu Jin', 'Xiahou Dun']],
  ["Who didn't participate in the combat - Three Heroes VS Lu Bu?", [['Yuan Shu'], 'Liu Bei', 'Guan Yu', 'Zhang Fei']],
  ['Who directed the construction of Bronze Sparrow Terrace?', [['Cao Cao'], 'Lui Bei', 'Yuan Shao', 'Sun Quan']],
  ['Who first got the Imperial Seal out of the well in the palace?', ['Yuan Shu', 'Yuan Shao', 'Cao Cao', ['Sun Jian']]],
  [
    'Who fought and died for Cao Cao in the battle against Zhang Xiu in Wan City?',
    ['Guan Yu', ['Dian Wei'], 'Zhang Liao', 'Cao Ren'],
  ],
  ['Who had the control over the emperor to oppress the warlords?', ['Liu Bei', 'Yuan Shao', ['Cao Cao'], 'Sun Quan']],
  ['Who invented the Zhuge Crossbow?', [['Zhuge Liang'], 'Liu Bei', 'Sima Yi', 'Pang Tong']],
  ['Who is Da Qiao married to?', [['Sun Ce'], 'Zhou Yu', 'Sun Quan', 'Sun Jian']],
  [
    "Who is depicted as \"eight spans tall, had a head of a panther's and huge round eyes, a swallow's jowls and a tiger's beard, a voice like thunder and a stance of a dashing horse\"?",
    ['Yan Liang', 'Xiahou Dun', ['Zhang Fei'], 'Lu Bu'],
  ],
  ['Who is Fledgling Phoenix referring to?', ['Zhuge Liang', 'Diaochan', 'Sun Shangxiang', ['Pang Tong']]],
  ['Who is known as the Saint of War in the Romance of the Three Kingdoms?', [['Guan Yu'], 'Zhang Fei', 'Zhang Liao', 'Dian Wei']],
  [
    'Who is known as a treacherous villain in times of peace and an aspirant in times of chaos?',
    ['Liu Bei', ['Cao Cao'], 'Sun Quan', 'Yuan Shao'],
  ],
  [
    'Who is not among the Five Elite Generals in the Romance of the Three Kingdoms?',
    ['Zhang Liao', ['Wen Chou'], 'Yue Jin', 'Xu Huang'],
  ],
  [
    'Who is not among the Five Tiger Generals in the Romance of the Three Kingdoms?',
    ['Guan Yu', 'Zhang Fei', 'Ma Chao', ['Lu Meng']],
  ],
  ['Who is Sun Shangxiang married to?', [['Liu Bei'], 'Zhuge Liang', 'Guan Yu', 'Cao Cao']],
  ['Who is the boss of the Yellow Turban Army?', [['Zhang Jiao'], 'Yuan Shu', 'Zhang Fei', 'Guan Yu']],
  ['Who is the Chief of the coalition against Dong Zhuo?', [['Yuan Shao'], 'Liu Bei', 'Cao Cao', 'Lu Bu']],
  ['Who is the husband of Huang Yueying?', ['Liu Bei', ['Zhuge Liang'], 'Pang Tong', 'Cao Cao']],
  ['Who is the tiger of Jiangdong?', ['Sun Ce', ['Sun Jian'], 'Zhang Liao', 'Zhou Yu']],
  [
    'Who is the woman that Lu Bu and Dong Zhuo fell in love with at the same time?',
    [['Diaochan'], 'Xiao Qiao', 'Da Qiao', 'Cai Wenji'],
  ],
  ['Who is Xiao Qiao married to?', ['Sun Ce', ['Zhou Yu'], 'Zhou Cang', 'Sun Jian']],
  ["Who lived in Cao's camp but with his heart in the Han camp?", ['Liu Bei', 'Zhang Fei', ['Guan Yu'], 'Zhuge Liang']],
  ['Who once held the post of Prime Minister?', [['Cao Cao'], 'Zhou Yu', 'Yu Jin', 'Sun Quan']],
  ['Who used Seven Stars Blade to assassinate Dong Zhuo?', ['Liu Bei', ['Cao Cao'], 'Lu Bu', 'Zhang Liao']],
  [
    'Who was captured and released seven times by Zhuge Liang in the Three Kingdoms?',
    ['Xiahou Dun', 'Sima Yi', 'Cao Cao', ['Meng Huo']],
  ],
  ['Who was the infant that Zhao Yun saved in Changbanpo?', ['Liu Bei', ['Liu Shan'], 'Liu Che', 'Liu Xiu']],
  ['Whom did Guan Yu release at Huarong Trail?', ['Lui Bei', ['Cao Cao'], 'Sun Quan', 'Yuan Shao']],
  ['Whom did Lu Bu hold a grudge against because of Diaochan?', ['Cao Cao', 'Wang Yun', ['Dong Zhuo'], 'Liu Bei']],
  ['Whose attendant is Zhou Cang?', ['Zhang Jiao', ['Guan Yu'], 'Pan Feng', 'Zhang Fei']],
  [
    "Whose quote is it that I'd rather betray the world than let the world betray me?",
    ['Liu Bei', ['Cao Cao'], 'Lu Bu', 'Yuan Shao'],
  ],
  ['Whose subordinate is Zhou Yu?', ['Liu Bei', ['Sun Quan'], 'Cao Cao', 'Yuan Shao']],
  ['Whose weapon is Azure Dragon Blade?', ['Zhou Yu', ['Guan Yu'], 'Sima Yi', 'Sun Quan']],
  [
    'Whose younger sister is Sun Shangxiang in the Romance of the Three Kingdoms?',
    ['Sun Jian', ['Sun Quan'], 'Zhou Yu', 'Sun Liang'],
  ],
  ['Xiahou Dun was hit in which eye by a stray arrow?', [['Left Eye'], 'Right Eye']],
  ['Yan Liang and When Chou are serving under whom?', [['Yuan Shao'], 'Liu Bei', 'Pan Feng', 'Cao Cao']],
];

const optionMapper = (option: _DataOptionType): BanquetQuizAnswerType =>
  typeof option === 'string' ? { label: option } : { label: option[0], answer: true };

const _BANQUET_QUIZ: BanquetQuizType[] = __DATA.map<BanquetQuizType>((data) => {
  const [question, dataOptions] = data;
  const options = dataOptions.map<BanquetQuizAnswerType>(optionMapper);
  return { question, options };
});

export const BANQUET_QUIZ: BanquetQuizType[] = [..._BANQUET_QUIZ] as const;
