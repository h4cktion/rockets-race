type RocketProgressProps = {
  rocketProgress: number;
  rocketExploded: boolean;
};

const RocketProgress = ({
  rocketProgress,
  rocketExploded,
}: RocketProgressProps) => {
  return (
    <div className="relative flex flex-col items-center w-1/2">
      <div
        className="transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(${-rocketProgress * 5}%)`,
          willChange: "transform",
        }}
      >
        <p className="text-6xl -rotate-45">🚀</p>
      </div>
      <p className="text-white font-bold mt-2">
        {rocketExploded ? "💥 Exploded" : `${rocketProgress}%`}
      </p>
    </div>
  );
};

export default RocketProgress;
