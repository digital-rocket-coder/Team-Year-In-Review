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
  Activity,
  Layers,
  Calendar,
  ThumbsUp,
  MousePointer2
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

// 🔥 HIGHLIGHTS (Топ достижения)
export const HIGHLIGHTS_STATS: StatItem[] = [
  {
    id: 'rank-ib',
    label: 'Markswebb Rank',
    value: '#3',
    subValue: '2 раза',
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
    id: 'events-total',
    label: 'Событий за год',
    value: '80',
    subValue: 'млрд',
    icon: <Activity className="w-6 h-6" />,
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
    value: '2 300',
    icon: <Zap className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'scenarios',
    label: 'Улучшено сценариев',
    value: '34',
    icon: <Map className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'ux-research',
    label: 'UX-исследований',
    value: '30',
    icon: <FlaskConical className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'design-system',
    label: 'Компонентов DS',
    value: '109',
    subValue: 'Web+App',
    icon: <Layout className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'ab-tests',
    label: 'A/B-тестов',
    value: 'XX', // Оставляем, если данных нет, или можно скрыть
    icon: <FlaskConical className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'release-cycle',
    label: 'Lead Time (дни)',
    value: '19',
    icon: <Clock className="w-6 h-6" />,
    color: ThemeColor.WHITE
  }
];

// 👥 Клиенты и использование
export const USAGE_STATS: StatItem[] = [
  {
    id: 'mau-peak',
    label: 'MAU (Пик)',
    value: '4.86',
    subValue: 'млн',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'web-users',
    label: 'Юзеров на сайте',
    value: '39',
    subValue: 'млн',
    icon: <Globe className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'rustore',
    label: 'Оценок RuStore',
    value: '47.1',
    subValue: 'тыс',
    icon: <ThumbsUp className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'daily-clients',
    label: 'Заходили ежедневно',
    value: '1 050',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'devices',
    label: 'Вовлеченность',
    value: '33%',
    icon: <Smartphone className="w-6 h-6" />,
    color: ThemeColor.WHITE
  }
];

// 📈 Качество и надёжность
export const QUALITY_STATS: StatItem[] = [
  {
    id: 'csi-avg',
    label: 'Средний CSI',
    value: '4.24',
    maxValue: 5,
    icon: <Smile className="w-6 h-6" />,
    color: ThemeColor.GREEN,
    type: 'scale'
  },
  {
    id: 'support-calls',
    label: 'Снижение жалоб',
    value: '-5.5%',
    icon: <TrendingUp className="w-6 h-6 rotate-180" />, // Arrow down visually
    color: ThemeColor.BLUE
  },
  {
    id: 'app-speed',
    label: 'Ускорение запуска',
    value: '+25%',
    icon: <Zap className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'incidents',
    label: 'Сокращение ошибок',
    value: '↓ 2x',
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
    id: 'team-reshuffle',
    label: 'Пересобрали команд',
    value: '13',
    icon: <Layers className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'training',
    label: 'Внутренних обучений',
    value: '34',
    icon: <GraduationCap className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'dailies',
    label: 'Дейликов',
    value: '1 485',
    icon: <Calendar className="w-6 h-6" />,
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
    value: '1',
    icon: <Map className="w-6 h-6" />,
    color: ThemeColor.GREEN
  }
];

// 💰 Бизнес-эффект (Используем данные из блока Клиенты для заполнения)
export const BUSINESS_STATS: StatItem[] = [
  {
    id: 'digital-share',
    label: 'Доля продаж',
    value: '91.4%',
    icon: <TrendingUp className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'operations',
    label: 'Операций в ДБО',
    value: '507',
    subValue: 'млн',
    icon: <MousePointer2 className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'digital-products',
    label: 'Открыто продуктов',
    value: '6.8',
    subValue: 'млн',
    icon: <CreditCard className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'feature-income',
    label: 'Доход от фич',
    value: 'XX',
    subValue: 'млн ₽',
    icon: <PiggyBank className="w-6 h-6" />,
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
    value: '16 800',
    icon: <Coffee className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'deadlines',
    label: 'Пережили дедлайнов',
    value: '3 456',
    icon: <Activity className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'prod-fix',
    label: 'Чинили прод',
    value: '17',
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