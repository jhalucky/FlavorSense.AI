export default function IntelligenceModules() {
  const modules = [
    {
      icon: "🔍",
      title: "Advanced Filtering",
      description: "Multi-criteria filtering with dietary preferences and restrictions",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: "💊",
      title: "Nutritional Intelligence",
      description: "Real-time nutritional analysis and macro tracking",
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
    },
    {
      icon: "🧬",
      title: "Flavor Molecule Explorer",
      description: "Deep dive into chemical compounds and flavor profiles",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: "📈",
      title: "Optimization Engine",
      description: "Continuous learning to improve recommendations over time",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Intelligence Modules
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Specialized AI modules powering every aspect of flavor discovery
          </p>
        </div>

        {/* Module grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => (
            <div
              key={index}
              className={`glass-strong animate-scale-in rounded-2xl border border-emerald-100/50 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl delay-${(index + 1) * 100}`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${module.bgColor} text-2xl`}
              >
                {module.icon}
              </div>
              <h3 className={`mb-2 text-lg font-bold ${module.color}`}>
                {module.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {module.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
