interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar = ({ current, total }: ProgressBarProps) => {
  return (
    <div className="flex gap-2 justify-center mb-8">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`h-1 rounded-full transition-all duration-300 ${
            index < current
              ? 'bg-[hsl(var(--progress-active))] w-16'
              : 'bg-[hsl(var(--progress-inactive))] w-16'
          }`}
          role="progressbar"
          aria-valuenow={current}
          aria-valuemin={0}
          aria-valuemax={total}
        />
      ))}
    </div>
  );
};

export default ProgressBar;
