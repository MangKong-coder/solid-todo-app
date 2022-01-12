import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { TaskProvider } from './models/TaskContext';

render(() => <TaskProvider><App /></TaskProvider>, document.getElementById('root') as HTMLElement);
