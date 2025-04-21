export default function AccentBehindAvatar() {
  return (
    <div
      className="absolute flex flex-1 flex-grow h-full -inset-1 blur-2xl rounded-full bg-gradient-to-tr from-orange-400/20 via-purple-500/10 to-transparent animate-pulse z-[-1]"
      aria-hidden="true"
    />
  );
}
