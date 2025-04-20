type Props = {
  onClose: () => void;
};
export default function MobileMenu({ onClose }: Props) {
  return (
    <aside className="fixed inset-0 z-50 bg-black text-white flex flex-col justify-between px-6 py-8">
      {/* Top Section (Links + CTA) */}
      <div className="space-y-6">
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="text-2xl">
            +
          </button>
          <button onClick={onClose} className="text-2xl">
            ☰
          </button>
        </div>

        <nav className="mt-10 space-y-4 text-xl font-light">
          <a href="#" className="block">
            Home
          </a>
          <a href="#" className="block">
            Proyectos
          </a>
          <a href="#" className="block">
            Servicios
          </a>
          <a href="#" className="block text-estudio-orange font-semibold">
            Cotiza tu Proyecto
          </a>
          <a href="#" className="block">
            Iniciar Sesión
          </a>
        </nav>
      </div>

      {/* Bottom Social Links */}
      <div className="text-xs uppercase space-y-1 tracking-wide">
        <p className="text-white">Síguenos en</p>
        <a href="#" className="hover:text-estudio-orange transition">
          Linkedin <span className="inline-block">↗</span>
        </a>
        <a href="#" className="hover:text-estudio-orange transition">
          Instagram <span className="inline-block">↗</span>
        </a>
      </div>
    </aside>
  );
}
