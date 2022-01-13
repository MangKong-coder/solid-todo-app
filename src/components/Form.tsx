import { Component, useContext } from "solid-js";
import { TaskContext, useTasks } from "../models/TaskContext";

const Form: Component = () => {
  const {tasks, mutate} = useTasks()
  let id = 1;
  let title;
  let date;
  const addTask = (title, date) => mutate([...tasks(), {id: ++id, title, date, status: false}])
  return (
    <div class="block">
      <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="title" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Title
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex justify-center rounded-md shadow-sm">
              <input ref={title} type="text" name="title" id="title" autocomplete="title" class="flex-1 justify-center block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300" placeholder="Title" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
        <div class="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label for="date" class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
            Date
          </label>
          <div class="mt-1 sm:mt-0 sm:col-span-2">
            <div class="max-w-lg flex justify-center rounded-md shadow-sm">
              <input ref={date} type="text" name="date" id="date" autocomplete="date" class="flex-1 justify-center block w-full focus:ring-indigo-500 focus:border-indigo-500 min-w-0 rounded-md sm:text-sm border-gray-300" placeholder="Date" />
            </div>
          </div>
        </div>
      </div>

      <button type="submit" onClick={e => {addTask(title.value, date.value); title.value = ''; date.value = '';}} class=" mt-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Save
      </button>
    </div>
  )
}

export default Form