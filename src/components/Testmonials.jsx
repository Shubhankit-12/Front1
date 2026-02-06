import { COLORS } from "../styles/colors";
import { useState, useEffect } from "react";
const Testmonials = () => {
  const testimonials = [
    {
      name: "Samar Ahuja",
      role: "Marketing Director",
      text: "Working with Positivus has been a game changer for our business.",
    },
    {
      name: "Shushant bajapai",
      role: "Founder",
      text: "Their strategic approach and execution exceeded expectations.",
    },
    {
      name: "Sahil Sharma",
      role: "CEO",
      text: "Professional team with outstanding results.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="px-8 py-28 text-white"
      style={{ backgroundColor: COLORS.dark }}
    >
      <div className="flex items-center gap-4 mb-14">
        <span
          className="px-3 py-1 text-sm font-medium rounded-full"
          style={{ backgroundColor: COLORS.primary, color: COLORS.dark }}
        >
          Testimonials
        </span>
      </div>

      <div className="max-w-3xl">
        <div
          className="p-10 rounded-3xl"
          style={{ backgroundColor: COLORS.cardDark }}
        >
          <p className="text-lg mb-8">“{testimonials[index].text}”</p>

          <h4 className="font-bold">{testimonials[index].name}</h4>
          <span className="text-sm" style={{ color: COLORS.grayText }}>
            {testimonials[index].role}
          </span>
        </div>

        <div className="flex gap-3 mt-6">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: i === index ? COLORS.primary : "#555",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testmonials;
