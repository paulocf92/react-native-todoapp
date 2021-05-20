import React, { useState } from 'react';

import { View, SafeAreaView } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleAddTask(newTaskTitle: string) {
    if (!newTaskTitle) return;

    const newTask = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    };

    setTasks([...tasks, newTask]);
  }

  function handleMarkTaskAsDone(id: number) {
    const newTasks = tasks.map(task =>
      task.id === id
        ? {
            ...task,
            done: !task.done,
          }
        : task
    );

    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: darkMode ? '#191622' : '#fff',
      }}
    >
      <Header darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} />

      <TodoInput darkMode={darkMode} addTask={handleAddTask} />

      <MyTasksList
        tasks={tasks}
        darkMode={darkMode}
        onPress={handleMarkTaskAsDone}
        onLongPress={handleRemoveTask}
      />
    </SafeAreaView>
  );
}
