export default function Persona({ persona }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex gap-x-2 items-center">
          <span className="text-sm uppercase tracking-wider px-3 py-1 font-semibold bg-primary text-black rounded-full">
            {persona.badge}
          </span>
          <span className="text-sm font-medium">Badge by AI</span>
        </div>
        <h3 className="text-2xl font-bold mb-2">{persona.title}</h3>
        <p className="leading-relaxed">{persona.description}</p>
      </div>
    </div>
  );
}
