interface SpecItemProps {
  value: string;
  label: string;
  showArrow?: boolean;
}

function SpecItem({ value, label }: SpecItemProps) {
  return (
    <div className="text-center space-y-2 grow">
      <div className="text-4xl md:text-5xl font-inter font-semibold  bg-gradient-to-r from-[#2697FF] to-[#FFFFFF]  bg-clip-text text-transparent py-1">
        {value}
      </div>
      <div className="text-[18px] font-inter text-[#F7F7F7]">{label}</div>
    </div>
  );
}

export function Specs() {
  const specs = [
    { value: "640×480", label: "Resolution" },
    { value: "38g", label: "Weight" },
    { value: "2000", label: "Nits Display" },
    { value: "8h", label: "Stand By" },
  ];

  return (
    <section className="container mx-auto pb-6">
      <div className="bg-specs rounded-3xl  py-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-6 grow">
              <SpecItem value={spec.value} label={spec.label} />
              {index < specs.length - 1 && (
                <img
                  src="/home/icons/arrow-up.svg"
                  alt="Arrow Up"
                  className="w-6 h-6 md:w-16 md:h-16"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
