import { COLORS } from "../styles/colors";
import Pharmaceuticals from "../assets/Pharmaceuticals.jpg";
const Hero = () => {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-8 py-16 items-center">
      <div>
        <h1 className="text-5xl font-bold leading-tight">
          Navigating the digital landscape for success
        </h1>

        <p className="mt-6 max-w-lg" style={{ color: COLORS.grayText }}>
          Our digital marketing agency helps businesses grow and succeed online.
        </p>

        <button
          className="mt-8 px-8 py-4 rounded-full text-white"
          style={{ backgroundColor: COLORS.dark }}
        >
          Book a consultation
        </button>
      </div>

      <img src={Pharmaceuticals} alt="Hero" className="w-full" />
    </section>
  );
};

export default Hero;
