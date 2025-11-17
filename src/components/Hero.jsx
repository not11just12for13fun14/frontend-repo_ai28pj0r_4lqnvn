import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 h-full flex items-end">
        <div className="mx-auto max-w-7xl w-full px-6 pb-16">
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.35em] text-xs text-white/80 mb-4">Photography • Creative Studio</p>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl leading-[0.95] text-white drop-shadow-sm">
              Minimal Stories in Light
            </h1>
            <p className="mt-6 text-white/85 max-w-lg">
              Contemporary wedding and editorial photography capturing honest emotion with a minimalist, modern aesthetic.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#portfolio" className="inline-flex items-center rounded-full bg-white text-black px-5 py-2.5 hover:bg-white/90 transition">View Portfolio</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-black/70 text-white px-5 py-2.5 backdrop-blur hover:bg-black/80 transition">Book a Shoot</a>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </section>
  )
}
