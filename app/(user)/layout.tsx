export default function ChatsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex-1 h-full w-full flex flex-col max-w-6xl mx-auto">
      {children}
    </div>
  );
}
