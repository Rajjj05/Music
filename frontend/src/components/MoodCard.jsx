export default function MoodCard({
  title,
  icon
}) {
  return (
    (<button
      className="p-4 bg-zinc-800/50 hover:bg-zinc-700/50 rounded-lg flex items-center gap-3 transition">
      {icon}
      <span className="font-medium">{title}</span>
    </button>)
  );
}

