
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
  Activity,
  Layers,
  Calendar,
  ThumbsUp,
  MousePointer2,
  Timer,
  ShieldAlert,
  Coffee,
  Bug,
  Award,
  ZapOff,
  UserCheck,
  Target
} from 'lucide-react';
import { StatItem, ThemeColor } from './types';

// GLOBAL CONFIG
export const APP_CONFIG = {
  year: '2025',
  appName: 'TEAM_CORE',
  reportName: 'FINAL_RECAP_2025.LOG',
  heroTitle: 'Итоги Года',
  heroStatus: 'Mission Accomplished'
};

// 🔥 HIGHLIGHTS (Главные победы)
export const HIGHLIGHTS_STATS: StatItem[] = [
  {
    id: 'markswebb',
    label: 'Markswebb TOP-3',
    value: '2 раза',
    subValue: 'Признание рынка',
    icon: <Award className="w-6 h-6" />,
    color: ThemeColor.GOLD,
    type: 'rank',
    colSpan: 'col-span-1'
  },
  {
    id: 'events-total',
    label: 'Событий во всех каналах',
    value: '80 000 000 000',
    icon: <Activity className="w-6 h-6" />,
    color: ThemeColor.BLUE,
    colSpan: 'col-span-1 md:col-span-2'
  },
  {
    id: 'ios-survival',
    label: 'Продержались в AppStore',
    value: '> 7 дней',
    subValue: 'без удаления',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: ThemeColor.GREEN
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
    id: 'design-components',
    label: 'Компонентов (Дизайн)',
    value: '49',
    subValue: 'Web: 38 / Mobile: 22',
    icon: <Layout className="w-6 h-6" />,
    color: ThemeColor.PINK
  },
  {
    id: 'lead-time',
    label: 'Средний Lead Time',
    value: '19',
    subValue: 'дней до прода',
    icon: <Timer className="w-6 h-6" />,
    color: ThemeColor.GOLD
  }
];

// 👥 Клиенты и использование
export const USAGE_STATS: StatItem[] = [
  {
    id: 'mau-peak-high',
    label: 'MAU в пике года',
    value: '4,857 млн',
    subValue: 'Абсолютный рекорд',
    icon: <Users className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'engagement',
    label: 'Вовлеченность (Engagement)',
    value: '33%',
    icon: <TrendingUp className="w-6 h-6" />,
    color: ThemeColor.GREEN
  },
  {
    id: 'daily-clients',
    label: 'Заходили ежедневно весь год',
    value: '1 050',
    subValue: 'Лояльные клиенты',
    icon: <UserCheck className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'rustore',
    label: 'Оценок в RuStore',
    value: '47,1 тыс.',
    icon: <ThumbsUp className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'web-users',
    label: 'Пользователей на сайте',
    value: '39 млн',
    icon: <Globe className="w-6 h-6" />,
    color: ThemeColor.GREEN
  }
];

// 📉 Качество и надёжность
export const QUALITY_STATS: StatItem[] = [
  {
    id: 'csi-avg',
    label: 'Средний CSI за год',
    value: '4.24',
    maxValue: 5,
    icon: <Smile className="w-6 h-6" />,
    color: ThemeColor.GREEN,
    type: 'scale'
  },
  {
    id: 'complaints-reduction',
    label: 'Снижение жалоб',
    value: '5,5%',
    icon: <TrendingUp className="w-6 h-6 rotate-180" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'launch-speedup',
    label: 'Ускорили запуск приложения',
    value: 'на 25%',
    icon: <Zap className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'error-reduction',
    label: 'Сократили ошибки',
    value: 'в 2 раза',
    icon: <ShieldAlert className="w-6 h-6" />,
    color: ThemeColor.PINK
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
    id: 'strat-sessions',
    label: 'Стратегических сессий',
    value: '1',
    icon: <Target className="w-6 h-6" />,
    color: ThemeColor.GOLD
  },
  {
    id: 'dailies',
    label: 'Дейликов проведено',
    value: '1 485',
    icon: <Calendar className="w-6 h-6" />,
    color: ThemeColor.PINK
  }
];

// 💰 Бизнес-эффект
export const BUSINESS_STATS: StatItem[] = [
  {
    id: 'operations',
    label: 'Операций через ДБО',
    value: '507 000 000',
    icon: <MousePointer2 className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'digital-products',
    label: 'Открыто продуктов в цифре',
    value: '6 827 000',
    icon: <CreditCard className="w-6 h-6" />,
    color: ThemeColor.PURPLE
  },
  {
    id: 'digital-share',
    label: 'Доля цифровых продаж',
    value: '91,4%',
    icon: <TrendingUp className="w-6 h-6" />,
    color: ThemeColor.GREEN
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
    value: '247',
    icon: <Calendar className="w-6 h-6" />,
    color: ThemeColor.BLUE
  },
  {
    id: 'meetings-hours',
    label: 'Часов на встречах',
    value: '210 000',
    icon: <Clock className="w-6 h-6" />,
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
    id: 'prod-fixes',
    label: 'Ломали и чинили прод',
    value: '17 раз',
    icon: <ZapOff className="w-6 h-6" />,
    color: ThemeColor.PINK
  }
];

export const ALL_STATS = [
  ...HIGHLIGHTS_STATS, 
  ...PRODUCT_STATS, 
  ...USAGE_STATS, 
  ...QUALITY_STATS, 
  ...TEAM_STATS, 
  ...BUSINESS_STATS,
  ...FUN_STATS
];

// На основе бенчмарков топовых банковских приложений
export const RELEASES_DATA = [
  { name: 'Новые фичи', value: 42, fill: '#00f3ff' },
  { name: 'UI/UX Оптимизация', value: 18, fill: '#bc13fe' },
  { name: 'Безопасность', value: 15, fill: '#0aff00' },
  { name: 'Техдолг/Инфра', value: 15, fill: '#ff0055' },
  { name: 'Патчи и Фиксы', value: 10, fill: '#facc15' }
];

// На основе эффективности Agile-процессов Core Team
export const FEEDBACK_DATA = [
  { name: 'Анализ/Груминг', value: 98, fill: '#00f3ff' },
  { name: 'Sprint Dev', value: 87, fill: '#bc13fe' },
  { name: 'Авто-тесты QA', value: 94, fill: '#0aff00' },
  { name: 'Store Review', value: 96, fill: '#ff0055' },
  { name: 'Production SRE', value: 99, fill: '#facc15' }
];

// Team DNA exported for components and AI services
export const TEAM_DNA = {
  executing: { label: 'Исполнение', value: 68, color: 'bg-neon-blue text-neon-blue' },
  strategic: { label: 'Стратегия', value: 60, color: 'bg-neon-purple text-neon-purple' },
  relationship: { label: 'Отношения', value: 52, color: 'bg-neon-pink text-neon-pink' },
  influencing: { label: 'Влияние', value: 38, color: 'bg-yellow-500 text-yellow-500' }
};
