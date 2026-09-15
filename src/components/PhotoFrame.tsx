const DEFAULT_GRADIENT =
  "linear-gradient(135deg, #c17f5b 0%, #8a5a3c 55%, #2b241d 100%)";

export function PhotoFrame({
  src,
  className = "",
  gradient = DEFAULT_GRADIENT,
  overlay,
}: {
  src: string;
  className?: string;
  gradient?: string;
  overlay?: string;
}) {
  return (
    <div
      className={`bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `${overlay ? `${overlay}, ` : ""}url('${src}'), ${gradient}`,
      }}
    />
  );
}
