import { sanitizeId } from '../../utils';
import { getOfficerIdByName } from './officers';

type OfficerBondData = Record<string, string>;
type DataType = Record<string, OfficerBondData>;

export const _DATA: DataType = {
  'Cai Wenji': { 'Xiao Qiao': 'Lady of Times', 'Xu You': 'Tragic Talent' },
  'Cao Cao': { 'Xiahou Dun': 'Siblings', 'Yuan Shu': 'Tomb Skeleton' },
  'Cao Ren': { 'Xu Huang': 'Concerted Efforts', 'Xu Shu': 'Eight Golden Tactics' },
  'Da Qiao': { 'Xiao Qiao': 'Two Qiaos of Wu', 'Xue Zong': 'Mutual Trust' },
  'Dian Wei': { 'Huang Zhong': 'Unmatched Valor', 'Jia Xu': 'Strength VS Tactic', 'Xiahou Dun': 'The Devoted' },
  'Diaochan': { 'Sun Jian': 'Beauty & Tiger', 'Dong Zhuo': 'Extravagant Orgy' },
  'Dong Zhuo': { 'Yuan Shao': 'Fellow Competitor', 'Hua Xiong': 'Brave Warrior' },
  'Gan Ning': { 'Sun Shangxiang': 'Air of Arrogance', 'Taishi Ci': 'Pride of Wu', 'Da Qiao': 'Warrior VS Beauty' },
  'Guan Yu': { 'Zhou Cang': 'Ardent Loyalty', 'Zhang Fei': 'Mutual Appreciation', 'Zhang Liao': 'Sworn Friend' },
  'Guo Jia': { 'Zhang Jiao': 'Proud VS Frustrated', 'Zhang He': 'Counselor & General' },
  'Hua Tuo': { 'Zhou Cang': 'Doctor VS Outlaw', 'Xue Zong': 'Faith Follower', 'Zhenji': 'Beauty VS Physician' },
  'Hua Xiong': { 'Dong Zhuo': 'Brave Warrior', 'Yan Liang': 'Fierce Warrior' },
  'Huang Gai': { 'Xue Zong': 'Mainstay of Wu' },
  'Huang Yueying': { 'Cai Wenji': 'Gifted Scholar', 'Yuan Shu': 'Able VS Vulgar', 'Zhenji': "Dragon's Descent" },
  'Huang Zhong': { 'Guan Yu': 'Five Tigers', 'Zhang Fei': 'Heroic Fighter', 'Taishi Ci': 'Mighty Marksman' },
  'Jia Xu': { 'Hua Tuo': 'Plot VS Benevolence', 'Dong Zhuo': 'Critic Posture', 'Hua Xiong': 'The Dedicated' },
  'Liu Bei': { 'Mi Fang': 'Intimacy' },
  'Lu Bu': { 'Diaochan': 'Educated & Bold', 'Hua Xiong': 'Valiant Warror', 'Zhang Liao': 'Fatuous & Wise' },
  'Lu Meng': { 'Gan Ning': 'Brave Charge', 'Cao Ren': 'Mandarins', 'Taishi Ci': 'Brave & Resourceful' },
  'Lu Xun': { 'Gan Ning': 'A State Pillar', 'Huang Zhong': 'Outstanding Wit', 'Sun Quan': 'Moral Integrity' },
  'Ma Chao': { 'Pang Tong': 'Schemer VS Fighter', 'Lu Meng': 'Courage & Resource', 'Zhao Yun': 'Peerless Hero' },
  'Mi Fang': { 'Liu Bei': 'Intimacy' },
  'Pang Tong': { 'Zhang Fei': 'Leiyang Case', 'Xu Shu': "Shuijing's Disciple" },
  'Sima Yi': { 'Guo Jia': 'Adviser of Wei', 'Jia Xu': 'Man of Ideas', 'Zhang He': 'Fall at Mumen' },
  'Sun Ce': { 'Zhou Yu': 'Jiangdong Pillars', 'Cao Cao': 'Rivaling Ambitions', 'Sun Quan': 'United Blood' },
  'Sun Jian': { 'Sun Shangxiang': 'Clan of Valor' },
  'Sun Quan': { 'Yuan Shu': 'Winner VS Loser', 'Huang Gai': 'Loyal Assistant' },
  'Sun Shangxiang': { 'Sun Jian': 'Clan of War', 'Da Qiao': 'Heroine of Wu' },
  'Taishi Ci': { 'Xiahou Dun': 'Wei & Wu Warrior', 'Sun Quan': 'Talent with Merits', 'Pang Tong': 'Bolts & Musket' },
  'Wen Chou': { 'Yan Liang': 'Officer in Hebei' },
  'Xiahou Dun': { 'Cao Ren': 'Wei Officers', 'Zhang He': 'Backbones of Wei' },
  'Xiao Qiao': { 'Da Qiao': 'Two Qiaos of Wu' },
  'Xu Huang': { 'Wen Chou': 'Cavalry Pioneer' },
  'Xu Shu': { 'Liu Bei': 'Great Pacifier', 'Cao Ren': 'Eigh Golden Tactics' },
  'Xu You': { 'Xu Huang': 'Fellow Official' },
  'Xue Zong': { 'Huang Gai': 'Mainstay of Wu' },
  'Yan Liang': { 'Xu Huang': 'Cavalry Pioneer' },
  'Yuan Shao': { 'Zhao Yun': 'Famous Scholar', 'Xu You': 'Fatuous Pair' },
  'Yuan Shu': { 'Yan Liang': 'Day Seizer', 'Zhang Fei': 'Marquis VS Fighter' },
  'Zhang Chunhua': { 'Cao Cao': 'Cruel Connection', 'Zhenji': 'Sparkling Souls', 'Sima Yi': 'Mutual Support' },
  'Zhang Fei': { 'Wen Chou': 'Intrepid Fighter', 'Zhao Yun': 'The Rejecter' },
  'Zhang He': { 'Yuan Shao': 'False Slander', 'Xu Huang': 'Man of Merits' },
  'Zhang Jiao': { 'Cao Cao': 'Overthrow of Han', 'Yuan Shao': 'Limited Outlook', 'Dong Zhuo': 'War Calamity' },
  'Zhang Liao': { 'Guan Yu': 'Sworn Friend', 'Zhang He': 'Vanguard of Wei', 'Hua Xiong': 'Big Difference' },
  'Zhao Yun': { 'Yuan Shao': 'Famous Scholar', 'Zhou Cang': 'Age of Heroes' },
  'Zhenji': { 'Diaochan': 'Incredible Beauty', 'Cai Wenji': 'Talented Lady', 'Cao Ren': 'Able Man of Chaos' },
  'Zhou Cang': { 'Zhao Yun': 'Utter Devotion', 'Mi Fang': 'Loyalist VS Traitor' },
  'Zhou Yu': { 'Pang Tong': 'Fire Stratagems', 'Lu Meng': 'Paragon of Virtue', 'Xiao Qiao': 'Perfect Harmony' },
  'Zhuge Liang': {
    'Huang Yueying': 'Intimate Couple',
    'Guo Jia': 'Stroke of Genius',
    'Xu Shu': 'Man of Wisdom',
    'Pang Tong': 'Dragon & Phoenix',
  },
  'Zuo Ci': { 'Zhang Jiao': 'Fortune Seer', 'Cao Cao': 'Smart Trick', 'Xu Shu': 'Surprise Tectics' },
};

type OfficerBond = {
  id: string;
  name: string;
  officerId: string;
  bondOfficerId: string;
};

const idByNames = (officerName: string, bondOfficerName: string): string =>
  sanitizeId(`officer-bond--${officerName}--${bondOfficerName}`);

export const OFFICER_BONDS = Object.entries(_DATA).reduce<OfficerBond[]>((bonds, officerBondInfo) => {
  const [officerName, officerBondData] = officerBondInfo;

  const officerId = getOfficerIdByName(officerName);

  return Object.entries(officerBondData).reduce<OfficerBond[]>((officerBonds, officerInfo) => {
    const [bondOfficerName, name] = officerInfo;
    return officerBonds.concat([
      {
        id: idByNames(officerName, bondOfficerName),
        name,
        officerId,
        bondOfficerId: getOfficerIdByName(bondOfficerName),
      } as const,
    ] as const);
  }, bonds);
}, []);

export const bondsByOfficerId = (id: string): OfficerBond[] =>
  OFFICER_BONDS.filter((bond) => bond.officerId === id || bond.bondOfficerId === id);
