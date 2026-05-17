type DurationLanguage = 'en' | 'pt-br';

interface DateParts {
  year: number;
  month: number;
  day: number;
}

const getDateParts = (date: string, includeEndDate = false): DateParts => {
  const [year, month, day] = date.split('-').map(Number);
  const parsedDate = new Date(year, month - 1, day);

  if (includeEndDate) {
    parsedDate.setDate(parsedDate.getDate() + 1);
  }

  return {
    year: parsedDate.getFullYear(),
    month: parsedDate.getMonth(),
    day: parsedDate.getDate(),
  };
};

const getCurrentDateParts = (): DateParts => {
  const currentDate = new Date();

  return {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth(),
    day: currentDate.getDate(),
  };
};

const getCompletedMonths = (startDate: string, endDate?: string): number => {
  const start = getDateParts(startDate);
  const end = endDate ? getDateParts(endDate, true) : getCurrentDateParts();

  let months = (end.year - start.year) * 12 + (end.month - start.month);

  if (end.day < start.day) {
    months -= 1;
  }

  return Math.max(months, 0);
};

export const formatExperienceDuration = (
  startDate: string,
  endDate: string | undefined,
  language: DurationLanguage,
): string => {
  const completedMonths = getCompletedMonths(startDate, endDate);
  const isPortuguese = language === 'pt-br';

  if (completedMonths < 12) {
    const monthLabel = completedMonths === 1
      ? isPortuguese ? 'mês' : 'month'
      : isPortuguese ? 'meses' : 'months';

    return `${completedMonths} ${monthLabel}`;
  }

  const years = Math.floor(completedMonths / 12);
  const yearLabel = years === 1
    ? isPortuguese ? 'ano' : 'year'
    : isPortuguese ? 'anos' : 'years';

  return `${years} ${yearLabel}`;
};
