'use client';

import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.svg";
import styles from "./styles.module.scss";
import { useModal } from "@/myContextr";

export const Header = () => {
  const { isModalOpen, isModalDeleteOpen } = useModal();

  const date = new Date();

  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  };

  const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
  
  const capitalizedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

  return (
    <header className={`${styles.container} ${isModalOpen || isModalDeleteOpen ? styles.blur : ""}`}>
      <Link href="/">
        <Image
          width={150}
          height={36}
          src={logo}
          alt="logo focalpoint"
        />
      </Link>
      <h1>Bem-vindo de volta, Card</h1>
      <p>{capitalizedDate}</p> {/* Exibir a data formatada e capitalizada */}
    </header>
  );
};

