import { Component, For, JSX, Show, useContext } from "solid-js";
import { TaskContext, Task, useTasks } from "../models/TaskContext";
import { HiOutlineTrash } from 'solid-icons/hi'

import composeClassnames from '../utils/composeClassnames'


export function Tasks(): JSX.Element | JSX.Element[] {
  const {tasks, mutate} = useTasks()

  const toggleStatus = (id) => {mutate(tasks().map((t) => (
    t.id !== id ? t : { ...t, isCompleted: !t.isCompleted }
  )));}

  function deleteTask(id) {
    mutate(tasks().filter(task => task.id !== id))
  }

    return (
    <ul class="list-none list-inside my-7 text-xl">
      <For each={tasks()} fallback={<p>There are no tasks found</p>}>
        {(task) =>
          <li >
            <span class="flex flex-row items-center space-x-2">
              <input type="checkbox" checked={task.isCompleted} onChange={[toggleStatus, task.id]} />
                <label class={
                  composeClassnames(
                    'font-bold',
                    task.isCompleted ? 'line-through' : ''
                  )
                }>{task.title}</label>
                <button onClick={[deleteTask, task.id]}>
                  <HiOutlineTrash />
                </button>
            </span>
            <span class="text-gray-500 ml-7 text-base">at {task.date}</span>
          </li>
        }
      </For>
    </ul>
  )
}

export default Tasks