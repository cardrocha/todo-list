import Image from "next/image";
import Link from "next/link";
import logo from "../../img/logo.svg"
import styles from "./styles.module.scss"

export const Header = () => {
  return (
    <header className={styles.container}>
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
