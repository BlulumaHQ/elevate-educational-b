import waveBg from "@/assets/wave-bg.jpg";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function WaveSection({ children, className = "" }: Props) {
  return (
    <section
      className={`relative bg-ivory ${className}`}
      style={{
        backgroundImage: `url(${waveBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </section>
  );
}
