const tagColors: Record<string, string> = {
  history: "bg-amber-100 text-amber-800 border-amber-200",
  american: "bg-blue-100 text-blue-800 border-blue-200",
  crime: "bg-red-100 text-red-800 border-red-200",
  french: "bg-indigo-100 text-indigo-800 border-indigo-200",
  fiction: "bg-emerald-100 text-emerald-800 border-emerald-200",
  english: "bg-cyan-100 text-cyan-800 border-cyan-200",
  magical: "bg-fuchsia-100 text-fuchsia-800 border-fuchsia-200",
  mystery: "bg-violet-100 text-violet-800 border-violet-200",
  love: "bg-rose-100 text-rose-800 border-rose-200",
  classic: "bg-stone-100 text-stone-800 border-stone-200",
};

export function getTagColor(tag: string) {
  return (
    tagColors[tag.toLowerCase()] ?? "bg-gray-100 text-gray-700 border-gray-200"
  );
}
