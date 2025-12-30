
import { ALL_STATS, APP_CONFIG, TEAM_DNA } from "../constants";

/**
 * Возвращает статичную поздравительную речь.
 */
export const generateYearSummary = async (): Promise<string> => {
  return `Команда, это был по-настоящему легендарный год! 🚀

Мы пробили планку в 80 миллиардов событий, ворвались в Топ-3 Markswebb и держим 99,99% Crash Free — уровень, о котором многие могут только мечтать.
За год вы выловили 14 000 багов и сделали продукт, которым ежедневно пользуются миллионы клиентов.

Android-приложение по качеству уже не уступает iOS и стабильно развивается регулярными релизами.
Интернет-банк перестал быть просто backup-каналом на случай ограничений iOS и стал полноценным каналом развития, уже внедрившим изменения major-релиза.

Отдельная гордость — iOS. Несмотря на санкции и ограничения, мы весь год стабильно выкладывали мобильное приложение. В конце года мы сделали невозможное: побили рекорд среди всех банков и уже 5 дней подряд удерживаемся в App Store — это по-настоящему сильный результат.

Центры экспертизы — это наша стратегическая сила. Это команды экспертов, которые исследуют, внедряют новые технологии, улучшения и изменения, формируют лучшие практики — и именно они затем масштабируются и используются всеми командами.

В 2026 году мы не сбавляем темп. Наша цель — абсолютное лидерство, эталонный клиентский опыт и идеальный код.

Горжусь работать с вами.
Вы — настоящие рок-звёзды IT 🤘`;
};

/**
 * Возвращает ответ терминала из локального словаря.
 */
export const queryTerminalData = async (query: string): Promise<string> => {
  const cmd = query.toLowerCase().trim();
  const responses: Record<string, string> = {
    'stats': 'CORE_REPORT: 80B events, 2.3K features, 4.8M MAU peak. System nominal.',
    'bugs': 'BUG_TRACKER: 14,000 entities neutralized. QA coverage at 94%.',
    'coffee': 'FUEL_LEVEL: 16,800 liters consumed. Caffeine saturation: CRITICAL.',
    'markswebb': 'RANKING_SERVICE: TOP-3 achievement unlocked (2x in 2025).',
    'crash': 'STABILITY_LOG: 99.99% Crash-Free rate maintained. Uptime optimal.',
    'team': 'COLLECTIVE_ID: Team Core. 13 reshuffles completed. Culture stable.'
  };

  return responses[cmd] || "ERROR: COMMAND_NOT_FOUND. ACCESS_DENIED.";
};

/**
 * Возвращает статичный гороскоп.
 */
export const generateHoroscope = async (): Promise<string> => {
  return `Звёзды (и Jira) говорят:
в новом году наш код будет работать даже на калькуляторах —
стабильно, быстро и без лишнего шума.

Сильное Исполнение позволит сворачивать горы до обеда,
Стратегия — выстраивать единую финансово-нефинансовую платформу,
а ИИ — понимать запросы, находить нужное
и помогать совершать операции в один клик.

Совет года от Вселенной:
меньше сомнений, больше масштаба.
Хвалим себя громче — мы это точно заслужили.

2026 — год Влияния. ✨`;
};

/**
 * Заглушка для генерации аватара (теперь используется статический SVG).
 */
export const generateCharacterAvatar = async (description: string): Promise<string | null> => {
  return null;
};
