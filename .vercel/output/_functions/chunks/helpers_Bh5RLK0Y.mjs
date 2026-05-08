import { format, differenceInDays } from 'date-fns';
import { id } from 'date-fns/locale';

function formatDate(date) {
  return format(new Date(date), "dd MMM yyyy", { locale: id });
}
function formatTime(date) {
  return format(new Date(date), "HH:mm", { locale: id });
}
function calculateAge(birthDate) {
  const birth = new Date(birthDate);
  const now = /* @__PURE__ */ new Date();
  const days = differenceInDays(now, birth);
  if (days < 30) return `${days} hari`;
  const months = Math.floor(days / 30);
  if (months < 24) return `${months} bulan ${days % 30} hari`;
  const years = Math.floor(months / 12);
  return `${years} tahun ${months % 12} bulan`;
}
function getActivityLabel(type) {
  const labels = {
    nursing: "Menyusui",
    formula: "Susu Formula",
    sleep: "Tidur",
    diaper: "Ganti Popok",
    solid: "MPASI",
    growth: "Pertumbuhan"
  };
  return labels[type] || type;
}
function getActivityIcon(type) {
  const icons = {
    nursing: "🍼",
    formula: "🍶",
    sleep: "💤",
    diaper: "🚼",
    solid: "🥣",
    growth: "📏"
  };
  return icons[type] || "📝";
}
function getActivityColor(type) {
  const colors = {
    nursing: "bg-blush",
    formula: "bg-blue-100",
    sleep: "bg-lavender",
    diaper: "bg-yellow-100",
    solid: "bg-mint",
    growth: "bg-purple-100"
  };
  return colors[type] || "bg-gray-100";
}
function formatDuration(mins) {
  if (mins < 60) return `${mins} menit`;
  const hours = Math.floor(mins / 60);
  return `${hours}j ${mins % 60}m`;
}

export { formatDuration as a, getActivityIcon as b, calculateAge as c, getActivityLabel as d, formatTime as e, formatDate as f, getActivityColor as g };
