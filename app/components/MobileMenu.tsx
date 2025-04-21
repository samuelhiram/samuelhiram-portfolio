"use client";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export default function MobileMenu({ onClose, isOpen }: Props) {
  if (!isOpen) return null;

  const menuItems = [
    { label: "Inicio", href: "/" },
    { label: "Proyectos", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Cotiza tu Proyecto", href: "#", highlight: true },
    { label: "Iniciar Sesión", href: "#" },
  ];

  const socialLinks = [
    { label: "LinkedIn", href: "#" },
    { label: "GitHub", href: "#" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-xl text-neutral-900 dark:text-neutral-100 px-6 py-4 flex flex-col transition-all">
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-6xl font-light text-neutral-600 dark:text-neutral-400 hover:text-red-400 dark:hover:text-red-500 transition"
          aria-label="Cerrar menú"
        >
          ×
        </button>
      </div>

      <nav className="mt-10 space-y-5">
        {menuItems.map(({ label, href, highlight }) => (
          <a
            key={label}
            href={href}
            className={`block text-lg tracking-wide ${
              highlight
                ? " font-semibold"
                : "text-neutral-700 dark:text-neutral-300 font-medium hover:text-orange-400 dark:hover:text-orange-300"
            } transition`}
          >
            {label}
          </a>
        ))}
      </nav>

      <div className="flex justify-end mt-auto pt-10 text-xs uppercase tracking-widest space-y-3">
        <div className="flex flex-col gap-4 text-lg mb-8 mr-4">
          {socialLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="hover:text-orange-500 dark:hover:text-orange-400 transition"
            >
              {label} <span className="inline-block">↗</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
