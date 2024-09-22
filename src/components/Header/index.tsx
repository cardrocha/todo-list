'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.svg"
import styles from "./styles.module.scss"
import { useModal } from "@/myContextr";

export const Header = () => {
  const { isModalOpen } = useModal();

  return (
    <header className={`${styles.container} ${isModalOpen ? styles.blur : ""}`}>
      <Link href="/">
        <Image
          width={150}
          height={36}
          src={logo}
          alt="logo focalpoint"
        />
      </Link>
      <h1>Bem-vindo de volta, Card</h1>
      <p>Segunda, 01 de dezembro de 2025</p>
    </header>
  );
};
