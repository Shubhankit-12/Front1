import { Sparkles } from "lucide-react";
import { COLORS } from "../styles/colors";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6">
      
      <div className="flex items-center gap-2">
        <Sparkles size={28} color={COLORS.dark} />
        <span className="text-2xl font-bold">Positivus</span>
      </div>

      <ul className="hidden md:flex gap-6 text-sm">
        <li>About</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
      </ul>

      <button
        className="px-6 py-2 rounded-full border"
        style={{ borderColor: COLORS.dark }}
      >
        Request a quote
      </button>
    </nav>
  );
};

export default Navbar;
