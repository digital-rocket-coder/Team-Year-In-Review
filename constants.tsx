import React from 'react';
import { 
  Smartphone, 
  Globe, 
  Users, 
  TrendingUp,
  FlaskConical,
  Map,
  Smile,
  Zap,
  Layout,
  Clock,
  CreditCard,
  ShieldCheck,
  AlertTriangle,
  GraduationCap,
  Mic,
  PiggyBank,
  Coffee,
  Bug,
  Award,
  Terminal,
  Activity
} from 'lucide-react';
import { StatItem, ThemeColor } from './types';

// GLOBAL CONFIG
export const APP_CONFIG = {
  year: '2025',
  appName: 'TEAM_CORE',
  reportName: 'REPORT_2025.LOG',
  heroTitle: 'Итоги Года',
  heroStatus: 'System Update Complete'
};

// 🔥 HIGHLIGHTS (Из твоего списка + топ)
export const HIGHLIGHTS_STATS: StatItem[] = [
  {
    id: 'rank-ib',
    label: 'Markswebb Rank',
    value: '#3',
    subValue: 'Top 3',
    icon: <Globe className="w-6 h-6" />,
    color: ThemeColor.GOLD,
    type: 'rank'
  },
  {
    id: 'bugs',
    label: 'Багов отловлено',
    value: '14 000',
    icon: <Bug className="w-6 h-6" />,
    color: ThemeColor.PINK,
    type: 'default'
  },
  {
    id: 'builds',
    label: 'Сборок выпущено',
    value: '9 500',
    icon: <Terminal className="w-6 h-6" />,
    color: ThemeColor.BLUE,
    type: 'default'
  },
  {
    id: 'crash-free',
    label: 'Crash Free',
    value: '99.99%',
    icon: <Activity className="w-6 h-6" />,
    color: ThemeColor.GREEN,
    type: 'default'
  },
  {
    id: 'awards',
    label: 'Наград получено',
    value: 4,
    icon: <Award className="w-6 h-6" />,
    color: ThemeColor.GOLD,
    type: 'rank'
  },
  {
    id: 'interviews',
    label: 'Собеседований',
    value: '400+',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.PURPLE,
    type: 'default'
  },
  {
    id: 'web-releases',
    label: 'Релизов сайта',
    value: 57,
    icon: <Globe className="w-6 h-6" />,
    color: ThemeColor.BLUE,
    type: 'default'
  }
];

// 🚀 Продукт и разработки
export const PRODUCT_STATS: StatItem[] = [
  {
    id: 'new-features',
    label: 'Запущено новых фич',
    value: 'XX',
    icon: <Zap className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'scenarios',
    label: 'Улучшено сценариев',
    value: 'XX',
    icon: <Map className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'ux-research',
    label: 'UX-исследований',
    value: 'XX',
    icon: <FlaskConical className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'design-system',
    label: 'Обновлений DS',
    value: 'XX',
    icon: <Layout className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'ab-tests',
    label: 'A/B-тестов',
    value: 'XX',
    icon: <FlaskConical className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'release-cycle',
    label: 'Cycle Time (дни)',
    value: 'XX',
    icon: <Clock className="w-6 h-6" />,
    color: ThemeColor.WHITE
  }
];

// 👥 Клиенты и использование
export const USAGE_STATS: StatItem[] = [
  {
    id: 'mau-peak',
    label: 'MAU (Пик)',
    value: 'XX',
    subValue: 'млн',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'operations',
    label: 'Операций в ДБО',
    value: 'XX',
    subValue: 'млн',
    icon: <CreditCard className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'digital-products',
    label: 'Открыто продуктов',
    value: 'XX',
    icon: <Smartphone className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'digital-share',
    label: 'Доля продаж',
    value: 'XX',
    subValue: '%',
    icon: <TrendingUp className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'devices',
    label: 'Активных устройств',
    value: 'XX',
    icon: <Smartphone className="w-6 h-6" />,
    color: ThemeColor.WHITE
  }
];

// 📈 Качество и надёжность
export const QUALITY_STATS: StatItem[] = [
  {
    id: 'csi-avg',
    label: 'Средний CSI',
    value: 'XX',
    maxValue: 5,
    icon: <Smile className="w-6 h-6" />,
    color: ThemeColor.GREEN,
    type: 'scale'
  },
  {
    id: 'support-calls',
    label: 'Снижение обращений',
    value: '-XX%',
    icon: <TrendingUp className="w-6 h-6 rotate-180" />, // Arrow down visually
    color: ThemeColor.BLUE
  },
  {
    id: 'app-speed',
    label: 'Ускорение запуска',
    value: 'xXX',
    icon: <Zap className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'incidents',
    label: 'Инциденты P1/P2',
    value: 'XX',
    icon: <AlertTriangle className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'mttr',
    label: 'MTTR (мин)',
    value: 'XX',
    icon: <Clock className="w-6 h-6" />,
    color: ThemeColor.WHITE
  }
];

// 🧠 Команда и культура
export const TEAM_STATS: StatItem[] = [
  {
    id: 'team-size',
    label: 'Размер команды',
    value: 'XX',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'training',
    label: 'Внутренних обучений',
    value: 'XX',
    icon: <GraduationCap className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'conferences',
    label: 'Спикеров',
    value: 'XX',
    icon: <Mic className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'certs',
    label: 'Сертификаций',
    value: 'XX',
    icon: <Award className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'strat-sessions',
    label: 'Стратсессий',
    value: 'XX',
    icon: <Map className="w-6 h-6" />,
    color: ThemeColor.GREEN
  }
];

// 💰 Бизнес-эффект
export const BUSINESS_STATS: StatItem[] = [
  {
    id: 'sales-growth',
    label: 'Рост продаж',
    value: '+XX%',
    icon: <TrendingUp className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'automation-save',
    label: 'Экономия (авто)',
    value: 'XX',
    subValue: 'млн ₽',
    icon: <PiggyBank className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'digital-clients-growth',
    label: 'Рост доли клиентов',
    value: '+XX',
    subValue: 'п.п.',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'feature-income',
    label: 'Доход от фич',
    value: 'XX',
    subValue: 'млн ₽',
    icon: <CreditCard className="w-6 h-6" />,
    color: ThemeColor.GOLD
  }
];

// 😄 Живые и мемные
export const FUN_STATS: StatItem[] = [
  {
    id: 'agreed',
    label: 'Сказали «согласовано»',
    value: '1 535',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'redo',
    label: 'Услышали «переделать»',
    value: '23 453',
    icon: <AlertTriangle className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'workdays',
    label: 'Рабочих будней',
    value: 247,
    icon: <Clock className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'meetings',
    label: 'Часов на встречах',
    value: '210k',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'coffee',
    label: 'Литров кофе',
    value: 'XX',
    icon: <Coffee className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'deadlines',
    label: 'Пережили дедлайнов',
    value: 'XX',
    icon: <Activity className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'prod-fix',
    label: 'Чинили прод',
    value: 'XX',
    icon: <Terminal className="w-6 h-6" />,
    color: ThemeColor.WHITE
  }
];

// Unused chart data placeholders
export const RELEASES_DATA = [];
export const FEEDBACK_DATA = [];

// Aggregated list for AI generation
export const ALL_STATS = [
  ...HIGHLIGHTS_STATS, 
  ...PRODUCT_STATS, 
  ...USAGE_STATS, 
  ...QUALITY_STATS, 
  ...TEAM_STATS, 
  ...BUSINESS_STATS,
  ...FUN_STATS
];