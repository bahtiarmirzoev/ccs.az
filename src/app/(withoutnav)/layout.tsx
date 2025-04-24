export default function WithoutNavLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="min-h-screen p-6 bg-gray-50">{children}</main>;
}
