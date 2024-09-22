import type { Metadata } from "next";
import styles from "../app/global.module.scss";
import "./globals.scss";
import { Header } from "@/components/Header";
import { ModalProvider } from '../myContextr'

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
      <body>
        <ModalProvider>
          <Header />
          {children}
        </ModalProvider>
      </body>
    </html>
  );
}
