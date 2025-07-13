// src/utils/dateUtils.ts
export function formatDateForCalendarOption(date: Date): string {
  const weekday = date.toLocaleDateString('en-GB', { weekday: 'long' });
  const dayMonth = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'long' });
  return `Choose ${weekday}, ${dayMonth}`;
}
