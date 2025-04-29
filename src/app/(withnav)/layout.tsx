import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/header";

export default function NavigationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
