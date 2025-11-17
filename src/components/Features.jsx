export default function Features() {
  const features = [
    {
      title: 'Editorial Weddings',
      text: 'Elegant, timeless coverage with an artful, documentary approach.',
    },
    {
      title: 'Lifestyle Portraits',
      text: 'Minimal setups focusing on true personality and mood.',
    },
    {
      title: 'Brand Stories',
      text: 'Clean visual narratives for modern brands and creators.',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f) => (
            <div key={f.title} className="group">
              <div className="aspect-[4/3] rounded-2xl bg-gray-100 mb-5 overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-gray-50 to-gray-200 group-hover:scale-[1.02] transition-transform" />
              </div>
              <h3 className="font-serif text-2xl mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
