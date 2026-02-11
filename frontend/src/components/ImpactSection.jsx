export default function ImpactSection() {
  const impactStats = [
    {
      icon: "🌍",
      value: "2.5M kg",
      label: "Food Waste Prevented",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: "💰",
      value: "$12M",
      label: "Money Saved",
      color: "from-amber-500 to-orange-400",
    },
    {
      icon: "👥",
      value: "500K+",
      label: "Active Users",
      color: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <section id="impact" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Our Impact
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
            FlavorSense AI is on a mission to reduce food waste by helping people
            make the most of their ingredients. Every recipe discovered is a step
            toward a more sustainable future.
          </p>
        </div>

        {/* Impact stats */}
        <div className="grid gap-6 sm:grid-cols-3">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className={`glass-strong animate-scale-in rounded-2xl border border-emerald-100/50 p-8 text-center shadow-lg delay-${(index + 1) * 100}`}
            >
              <div className="mb-4 text-5xl">{stat.icon}</div>
              <div
                className={`mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-4xl font-bold text-transparent`}
              >
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-lg text-slate-600">
            Join thousands of home cooks making smarter, more sustainable food
            choices
          </p>
        </div>
      </div>
    </section>
  );
}
