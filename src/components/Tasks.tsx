import { Component, For, JSX, Show, useContext } from "solid-js";
import { TaskContext } from "../models/TaskContext";

export function Tasks(): JSX.Element | JSX.Element[] {
  const [tasks, setTasks] = useContext(TaskContext)
  const toggleStatus = () => setTasks(tasks().map(t => ({...t, status: !t.status})));

  return (
    <ul class="list-none list-inside my-7 text-xl">
      <For each={tasks()} fallback={<p>There are no tasks found</p>}>
        {(task) =>
          <li >
            <span class="block space-x-2">
              <input type="checkbox" checked={task.status} onChange={toggleStatus} />
              <Show when={task.status} fallback={<label class="font-bold">{task.title}</label>}>
                <label class="font-bold line-through">{task.title}</label>
              </Show>
            </span>
            <span class="text-gray-500 ml-7 text-base">at {task.date}</span>
          </li>}
      </For>
    </ul>
  )
}

export default Tasks