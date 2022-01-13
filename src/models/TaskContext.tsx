import { Accessor, createContext, createSignal, JSX, Setter, useContext } from "solid-js";

export interface Task {
  id: number;
  title: string;
  date: string;
  isCompleted?: boolean;
}

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Go To the gym',
    date: '12-20-21',
    isCompleted: false
  }
]
export interface TaskProviderProps {
  children: JSX.Element | JSX.Element[];
}

interface TaskStore {
  tasks: Accessor<Task[]>;
  mutate: Setter<Task[]>
}

export const TaskContext = createContext<TaskStore>()

export function TaskProvider(props: TaskProviderProps) {
  const [tasks, setTasks] = createSignal<Task[]>(INITIAL_TASKS),
    store: TaskStore = {
      tasks: tasks,
      mutate: setTasks
}


  return (
    <TaskContext.Provider value={store}>
      {props.children}
    </TaskContext.Provider>
  )
}

export function useTasks(): TaskStore {
  return useContext(TaskContext)
}



