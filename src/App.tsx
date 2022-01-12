import { Component, createSignal, JSX } from 'solid-js';

import Button from './components/Button';
import Tasks from './components/Tasks';
import { TaskProvider } from './models/TaskContext';

const App: Component = (): JSX.Element => {
  const [isAdd, setIsAdd] = createSignal(false)
  const toggle = () => setIsAdd(!isAdd())
  return (
    <div class="container mx-auto mt-2">
      <div className="container mx-auto p-2 border-slate-400 border rounded-md max-w-prose">
        <h1 class="text-center text-3xl font-bold">To Do App</h1>
        <Button isAdd={isAdd()} toggle={toggle} />
        <Tasks />
      </div>
    </div>

  );
};

export default App;
