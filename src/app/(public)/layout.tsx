// import Header from "@/components/common/Header";
// import Footer from "@/components/common/Footer";
// import { ToastProvider } from "@/components/common/Toast";

// export default function PublicLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <ToastProvider>
//       <Header />
//       <main id="main-content">{children}</main>
//       <Footer />
//     </ToastProvider>
//   );
// }
"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ToastProvider } from "@/components/common/Toast";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <ToastProvider>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </ToastProvider>
  );
}