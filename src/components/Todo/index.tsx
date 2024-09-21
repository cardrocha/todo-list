import { Button } from "../Button";
import styles from "./styles.module.scss";
export const Todo = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p>Suas tarefas de hoje</p>
        </div>
        <Button>Adcionar nova tarefa</Button>
      </div>
      <div>
        <h2>Nova Tarefa</h2>
        <label htmlFor="">Titulo</label>
        <input type="text" name="task" id="" />
      </div>
    </>
  );
};
