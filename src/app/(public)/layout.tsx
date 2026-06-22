import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ToastProvider } from "@/components/common/Toast";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ToastProvider>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </ToastProvider>
  );
}
