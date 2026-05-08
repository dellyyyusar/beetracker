import { format, formatDistanceToNow, differenceInMinutes, differenceInDays } from 'date-fns';
import { id } from 'date-fns/locale';

export function formatDate(date: string | Date): string {
  return format(new Date(date), 'dd MMM yyyy', { locale: id });
}

export function formatTime(date: string | Date): string {
  return format(new Date(date), 'HH:mm', { locale: id });
}

export function formatDateTime(date: string | Date): string {
  return format(new Date(date), 'dd MMM yyyy, HH:mm', { locale: id });
}

export function timeAgo(date: string | Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: id });
}

export function calculateAge(birthDate: string | Date): string {
  const birth = new Date(birthDate);
  const now = new Date();
  const days = differenceInDays(now, birth);

  if (days < 30) return `${days} hari`;
  const months = Math.floor(days / 30);
  if (months < 24) return `${months} bulan ${days % 30} hari`;
  const years = Math.floor(months / 12);
  return `${years} tahun ${months % 12} bulan`;
}

export function calculateDuration(start: string | Date, end?: string | Date | null): string {
  if (!end) return 'Sedang berlangsung';
  const mins = differenceInMinutes(new Date(end), new Date(start));
  if (mins < 60) return `${mins} menit`;
  const hours = Math.floor(mins / 60);
  return `${hours} jam ${mins % 60} menit`;
}

export function getActivityLabel(type: string): string {
  const labels: Record<string, string> = {
    nursing: 'Menyusui',
    formula: 'Susu Formula',
    sleep: 'Tidur',
    diaper: 'Ganti Popok',
    solid: 'MPASI',
    growth: 'Pertumbuhan',
  };
  return labels[type] || type;
}

export function getActivityIcon(type: string): string {
  const icons: Record<string, string> = {
    nursing: '🍼',
    formula: '🍶',
    sleep: '💤',
    diaper: '🚼',
    solid: '🥣',
    growth: '📏',
  };
  return icons[type] || '📝';
}

export function getActivityColor(type: string): string {
  const colors: Record<string, string> = {
    nursing: 'bg-blush',
    formula: 'bg-blue-100',
    sleep: 'bg-lavender',
    diaper: 'bg-yellow-100',
    solid: 'bg-mint',
    growth: 'bg-purple-100',
  };
  return colors[type] || 'bg-gray-100';
}

export function getDiaperTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    wet: 'Pipis',
    dirty: 'Pup',
    both: 'Keduanya',
  };
  return labels[type] || type;
}

export function formatVolume(ml: number): string {
  return `${ml} ml`;
}

export function formatWeight(kg: number): string {
  return `${kg} kg`;
}

export function formatHeight(cm: number): string {
  return `${cm} cm`;
}

export function formatDuration(mins: number): string {
  if (mins < 60) return `${mins} menit`;
  const hours = Math.floor(mins / 60);
  return `${hours}j ${mins % 60}m`;
}