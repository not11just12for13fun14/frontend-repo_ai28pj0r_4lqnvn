export default function Portfolio() {
  const items = [
    { id: 1, title: 'Sienna & Theo', tag: 'Wedding' },
    { id: 2, title: 'Quiet Mornings', tag: 'Lifestyle' },
    { id: 3, title: 'Glass & Steel', tag: 'Editorial' },
    { id: 4, title: 'Coastal Air', tag: 'Travel' },
    { id: 5, title: 'Studio Forms', tag: 'Portrait' },
    { id: 6, title: 'Bare Light', tag: 'Minimal' },
  ]

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-serif text-3xl md:text-5xl">Selected Work</h2>
          <a href="#contact" className="hidden md:inline-flex rounded-full bg-black text-white px-5 py-2.5 hover:bg-gray-900">Book a Shoot</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <a key={item.id} href="#" className="group">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-white shadow-sm">
                <div className="h-full w-full bg-gradient-to-tr from-gray-100 to-gray-200 group-hover:scale-[1.02] transition-transform" />
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="font-medium">{item.title}</span>
                <span className="text-xs uppercase tracking-widest text-gray-500">{item.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
