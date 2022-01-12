import { createContext, createSignal, JSX, useContext } from "solid-js";

export interface TaskProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TaskContext = createContext([])

export function TaskProvider(props: TaskProviderProps) {
  const [tasks, setTasks] = createSignal([
    {
      id: '1',
      title: 'Go To the gym',
      date: '12-20-21',
      status: false
    }
  ]),
    store = [
      tasks,
      setTasks
    ]


  return (
    <TaskContext.Provider value={store}>
      {props.children}
    </TaskContext.Provider>
  )
}



