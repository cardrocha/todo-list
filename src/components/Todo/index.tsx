"use client";

import { useState, useEffect } from "react";
import { useModal } from "@/myContextr";
import { Button } from "../Button";
import styles from "./styles.module.scss";
import Image from "next/image";
import iconTrash from "../../img/trash.svg";

interface Task {
  id: number;
  task: string;
  completed: boolean;
}

export const Todo = () => {
  const [isClient, setIsClient] = useState(false);
  
  const {
    isModalOpen,
    setIsModalOpen,
    isModalDeleteOpen,
    setIsModalDeleteOpen,
  } = useModal();
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [taskTemp, setTaskTemp] = useState<string>("");  
  const [tasks, setTasks] = useState<Task[]>(() => {

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("task");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("task");
    if (stored) {
      setTasks(JSON.parse(stored));
    }
  }, []);

  const addTask = () => {
    if (taskTemp.trim() === "") return;

    const newTask: Task = {
      id: tasks.length + 1,
      task: taskTemp,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks)); 
    setTaskTemp("");
    setIsModalOpen(false);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks)); 
    setIsModalDeleteOpen(false);
  };

  const checkTask = (id: number) => {
    const updatedTasks = tasks.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTasks(updatedTasks);
    localStorage.setItem("task", JSON.stringify(updatedTasks)); 
  };

  return (
    <>
      <div
        className={
          isModalOpen || isModalDeleteOpen
            ? `${styles.container} ${styles.blurBackground}`
            : styles.container
        }
      >
        <div>
          <p>Suas tarefas de hoje</p>
          <ul className={styles.task}>
            {isClient && tasks
              .filter((task) => !task.completed)
              .map((task) => (
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => checkTask(task.id)}
                  />
                  <span>{task.task}</span>
                  <Image
                    onClick={() => {
                      setIsModalDeleteOpen(true);
                      setTaskToDelete(task.id);
                    }}
                    src={iconTrash}
                    width={24}
                    height={24}
                    alt="icon trash"
                  />
                </li>
              ))}
            <p className={styles.task}>Tarefas finalizadas</p>
            <ul>
              {isClient && tasks
                .filter((task) => task.completed)
                .map((task) => (
                  <li key={task.id} className={styles.completedTask}>
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => checkTask(task.id)}
                    />
                    <span>{task.task}</span>
                    <Image
                      onClick={() => {
                        setIsModalDeleteOpen(true);
                        setTaskToDelete(task.id);
                      }}
                      src={iconTrash}
                      width={24}
                      height={24}
                      alt="icon trash"
                    />
                  </li>
                ))}
            </ul>
          </ul>
        </div>
        <Button
          onClick={() => setIsModalOpen(!isModalOpen)}
          className={styles.button}
        >
          Adicionar nova tarefa
        </Button>
      </div>

      <div
        style={{ display: isModalOpen ? "block" : "none" }}
        className={styles.containerModal}
      >
        <div className={styles.containerContent}>
          <h2>Nova Tarefa</h2>
          <form className={styles.containeForm} onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}>
            <label htmlFor="task">Título</label>
            <input
              type="text"
              name="task"
              id="task"
              value={taskTemp}
              onChange={(e) => setTaskTemp(e.target.value)}
            />
          </form>
          <div className={styles.containerButton}>
            <Button
              onClick={() => setIsModalOpen(false)}
              className={styles.buttonCancel}
            >
              Cancelar
            </Button>
            <Button
              onClick={addTask}
              className={styles.buttonAdd}
              type="submit"
            >
              Adicionar
            </Button>
          </div>
        </div>
      </div>

      <div
        style={{ display: isModalDeleteOpen ? "block" : "none" }}
        className={styles.containerModalDelete}
      >
        <div className={styles.containerContent}>
          <h2>Deletar Tarefa</h2>
          <p>Tem certeza que você deseja deletar essa tarefa?</p>
          <div className={styles.containerButton}>
            <Button
              onClick={() => setIsModalDeleteOpen(false)}
              className={styles.buttonCancel}
            >
              Cancelar
            </Button>
            <Button
              onClick={() => taskToDelete !== null && deleteTask(taskToDelete)}
              className={styles.buttonDelete}
              type="submit"
            >
              Deletar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

