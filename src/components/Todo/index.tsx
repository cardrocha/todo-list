"use client";

import { useModal } from "@/myContextr";
import { Button } from "../Button";
import styles from "./styles.module.scss";

export const Todo = () => {
  const { isModalOpen, setIsModalOpen } = useModal();

  return (
    <>
      <div
        className={
          isModalOpen
            ? `${styles.container} ${styles.blurBackground}`
            : styles.container
        }
      >
        <div>
          <p>Suas tarefas de hoje</p>
        </div>
        <Button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className={styles.button}
        >
          Adcionar nova tarefa
        </Button>
      </div>

      <div
        style={{ display: isModalOpen ? "block" : "none" }}
        className={styles.containerModal}
      >
        <div className={styles.containerContent}>
          <h2>Nova Tarefa</h2>
          <form className={styles.containeForm}>
            <label htmlFor="task">Titulo</label>
            <input type="text" name="task" id="task" />
          </form>
          <div className={styles.containerButton}>
            <Button onClick={() => setIsModalOpen(!isModalOpen)} className={styles.buttonCancel}>Cancelar</Button>
            <Button className={styles.buttonAdd} type="submit">
              Adcionar
            </Button>
          </div>
        </div>
      </div>

      <div style={{ display: "none" }} className={styles.containerModalDelete}>
        <div className={styles.containerContentDelete}>
          <h2>Deletar Tarefa</h2>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={styles.containerButton}>
            <Button className={styles.buttonCancel}>Cancelar</Button>
            <Button className={styles.buttonDelete} type="submit">
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
