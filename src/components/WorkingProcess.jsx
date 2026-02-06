import { useState } from "react";
import { COLORS } from "../styles/colors";

const steps = [
  {
    id: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives.",
  },
  {
    id: "02",
    title: "Research and Strategy Development",
    description:
      "We conduct in-depth research and develop a tailored strategy.",
  },
  {
    id: "03",
    title: "Implementation",
    description: "We execute the strategy using industry best practices.",
  },
  {
    id: "04",
    title: "Monitoring and Optimization",
    description: "We continuously monitor performance and optimize campaigns.",
  },
];

export default function WorkingProcess() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-8 py-24">
      <div className="flex items-center gap-4 mb-14">
        <span
          className="px-3 py-1 text-sm font-medium rounded-full"
          style={{ backgroundColor: COLORS.primary }}
        >
          Our Working Process
        </span>
        <p className="text-sm max-w-md" style={{ color: COLORS.grayText }}>
          Step-by-step guide to achieving your business goals
        </p>
      </div>

      <div className="space-y-6 max-w-3xl">
        {steps.map((step, index) => {
          const isOpen = index === openIndex;

          return (
            <div
              key={step.id}
              className="p-8 rounded-3xl cursor-pointer transition-all"
              style={{
                backgroundColor: isOpen ? COLORS.primary : "#F3F3F3",
              }}
              onClick={() => setOpenIndex(index)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-2xl font-bold">{step.id}</span>
                  <h3 className="text-lg font-bold">{step.title}</h3>
                </div>

                <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
              </div>

              {isOpen && (
                <p className="mt-4 text-sm max-w-xl">{step.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
