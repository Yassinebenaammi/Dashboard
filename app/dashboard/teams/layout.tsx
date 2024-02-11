

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full rounded-lg mt-3">
        {children}
    </div>
  );
}
