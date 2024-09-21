import type { Metadata } from "next";
import styles from "../app/globals.module.scss";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Teste Dev Júnior - Legaplan",
  description: "Teste técnico para a vaga de dev júnior da Legaplan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={styles.global}>
      <body className={styles.body}>
        <Header />
        {children}
      </body>
    </html>
  );
}
