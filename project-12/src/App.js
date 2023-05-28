import React, {useEffect, useState} from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from "./hooks/use-http";
import security from "./assets/config/security.json";

function App() {
    const [tasks, setTasks] = useState([]);
    const {isLoading, error, sendRequest: fetchTasks} = useHttp();

  useEffect(() => {
      const transformTasks = (tasksObj) => {
          const loadedTasks = [];

          for (const taskKey in tasksObj) {
              loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
          }

          setTasks(loadedTasks);
      };
      fetchTasks({
          url: security.tasksUrl
      }, transformTasks);
  }, [fetchTasks]);

  // (If useCallback is not used:-) Everytime a function is recreated, it's a brand-new object in memory. Therefore, useEffect would treat it as a new value, and it would re-execute the effect function


  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
      <React.Fragment>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
            items={tasks}
            loading={isLoading}
            error={error}
            onFetch={fetchTasks}
        />
      </React.Fragment>
  );
}

export default App;
