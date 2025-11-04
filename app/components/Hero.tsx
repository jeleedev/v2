import AnimatedFolder from "./AnimatedFolder";

export default function Hero() {
  return (
    <section>
      <div className="w-full h-screen">
        <div>
          <div>Hero Text</div>
          <div>
            <AnimatedFolder />
            <AnimatedFolder />
            <AnimatedFolder />
          </div>
        </div>
        <div className="absolute bottom-0">하단</div>
      </div>
    </section>
  );
}
