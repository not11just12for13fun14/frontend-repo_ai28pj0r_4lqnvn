export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <p className="font-serif text-xl">Solène Studio</p>
            <p className="text-gray-600 mt-2">Minimal photography for modern romantics.</p>
          </div>
          <div className="text-gray-600">
            <p>Based in Paris • Available worldwide</p>
            <p className="mt-1">hello@solene.studio</p>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} Solène Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
