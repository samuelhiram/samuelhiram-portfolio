type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export default function MobileMenu({ onClose, isOpen }: Props) {
  if (!isOpen) return null;

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "Proyectos", href: "#" },
    { label: "Servicios", href: "#" },
    { label: "Cotiza tu Proyecto", href: "#", highlight: true },
    { label: "Iniciar Sesión", href: "#" },
  ];

  const socialLinks = [
    { label: "Linkedin", href: "#" },
    { label: "Instagram", href: "#" },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black text-white flex flex-col p-6">
      {/* Header */}
      <div className="flex justify-end gap-4">
        <button onClick={onClose} className="text-2xl rotate-45">
          +
        </button>
      </div>

      {/* Navigation */}
      <nav className="mt-10 space-y-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`block text-xl ${
              item.highlight ? "text-orange-500 font-semibold" : "font-light"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto text-xs uppercase space-y-2 tracking-wide">
        <p>Síguenos en</p>
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="block hover:text-orange-500 transition"
          >
            {link.label} <span className="inline-block">↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
