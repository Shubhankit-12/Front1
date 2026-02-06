import { COLORS } from "../styles/colors";
const Services = () => {
  return (
    <section className="px-8 py-24">
      <div className="flex items-center gap-4 mb-14">
        <span
          className="px-3 py-1 text-sm font-medium rounded-full"
          style={{ backgroundColor: COLORS.primary }}
        >
          Services
        </span>
        <p className="text-sm" style={{ color: COLORS.grayText }}>
          At our digital marketing agency, we offer a range of services
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div
          className="p-10 rounded-3xl"
          style={{ backgroundColor: COLORS.primary }}
        >
          <h3 className="text-2xl font-bold mb-6">
            Search engine optimization
          </h3>
          <span className="font-medium underline">Learn more</span>
        </div>

        <div
          className="p-10 rounded-3xl text-white"
          style={{ backgroundColor: COLORS.dark }}
        >
          <h3 className="text-2xl font-bold mb-6">Pay per click advertising</h3>
          <span className="font-medium underline">Learn more</span>
        </div>
      </div>
    </section>
  );
};

export default Services;
