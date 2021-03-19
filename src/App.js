import Header from './components/Header';
import AddTask from './components/AddTask';
import {useState, useEffect} from 'react';
import Tasks from './components/Tasks';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/About';

const App = () => {
  const [tasks, setTasks] = useState([])

  const [showAddTask, setShowAddTask] = useState(false)

  const [serverDownFlag, setServerDownFlag] = useState(false)

  useEffect(() => {
    const getTasks = async () => {
      try{
      const getTasksFromServer = await fetchTasks()
      setTasks(getTasksFromServer)
      }
      catch(e){
        alert('Server Down, Sorry for inconvenience, Please try after some time');
        setServerDownFlag({serverDownFlag : true});
      }
    }

    getTasks()

  }, [])

  //Fetch Tasks from mock server (json server) -- localhost:5000 (Fetch all tasks from server or backend)
  const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks')
      const data = await res.json()

      return data;
  }


  //Fetch Tasks from mock server (json server) -- localhost:5000 (Update Reminder section)
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data;
}

  // Delete Task - on X button click
  const deleteTask = async (id) => {
    //console.log('Delete ' + id);
    await fetch(`http://localhost:5000/tasks/${id}`
    , {
      method : 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !== id ))
  }
   
  //Toggle for reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = {...taskToToggle, reminder : !taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'PUT',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(updatedTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ?
    {...task, reminder : data.reminder} : task
    ))
  }

  // Add task
  const addTask = async (task) => {
    //console.log(task);
    /*const id = Math.floor(Math.random()* 10000) + 1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);*/
    const res = await fetch('http://localhost:5000/tasks', {
      method : 'POST',
      headers : {
        'Content-type' : 'application/json'
      },
      body : JSON.stringify(task)
    })

    const data = await res.json()
    setTasks([...tasks, data])
  }


  return (
    <Router>
        <div className="container">
          <Header
            onAdd={() => setShowAddTask(!showAddTask)}
            onAddTask={showAddTask}
            serverDown={serverDownFlag}
          />

          <Route
            path="/"
            exact
            render={(props) => (
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  "No task to show"
                )}
              </>
            )}
          />
          <Route path="/about" component={About} />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
