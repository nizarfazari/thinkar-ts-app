interface SpecItemProps {
    value: string;
    label: string;
  }
  
  function SpecItem({ value, label }: SpecItemProps) {
    return (
      <div className="text-center space-y-2">
        <div className="text-4xl md:text-5xl text-blue-400 font-bold">
          {value}
        </div>
        <div className="text-sm text-white/80">{label}</div>
      </div>
    );
  }
  
  export function Specs() {
    return (
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white/5 backdrop-blur-md backdrop-brightness-50 rounded-3xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <SpecItem value="640×480" label="Resolution" />
            <SpecItem value="38g" label="Weight" />
            <SpecItem value="2000" label="Nits Display" />
            <SpecItem value="8h" label="Stand By" />
          </div>
        </div>
      </section>
    );
  }
  