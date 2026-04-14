export default function Background({ mouse }) {
  const x = mouse?.x ?? window.innerWidth / 2;
  const y = mouse?.y ?? window.innerHeight / 2;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Mouse Glow */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `radial-gradient(
            600px circle at ${x}px ${y}px,
            rgba(59,130,246,0.18),
            transparent 55%
          )`,
        }}
      />

      {/* Ambient Gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/20 via-purple-900/20 to-black" />
    </div>
  );
}
