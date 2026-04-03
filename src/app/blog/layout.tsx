import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-[72px]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
