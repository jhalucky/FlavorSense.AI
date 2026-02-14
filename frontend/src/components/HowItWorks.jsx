export default function HowItWorks() {
  const features = [
    {
      icon: "🕸️",
      title: "Ingredient Graph Mapping",
      description:
        "Advanced neural networks map ingredients into a multi-dimensional flavor space, identifying complementary combinations",
      gradient: "from-blue-500 to-cyan-400",
      shadowColor: "shadow-blue-200",
    },
    {
      icon: "⚡",
      title: "Smart Ranking System",
      description:
        "Real-time scoring engine evaluates thousands of recipes based on ingredient compatibility and flavor harmony",
      gradient: "from-amber-500 to-orange-400",
      shadowColor: "shadow-amber-200",
    },
  ];

  return (
    <section id="how-it-works" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            Three core AI systems working together to deliver intelligent recipe
            recommendations
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group glass-strong animate-fade-in-up rounded-2xl border border-emerald-100/50 p-8 shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl delay-${(index + 1) * 100}`}
            >
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} text-4xl shadow-lg ${feature.shadowColor} transition-transform group-hover:scale-110`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="leading-relaxed text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
