import { useState } from "react"

const App = () => {


  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task !== "") {
      setTasks([...tasks, task])
      setTask("");
      console.log(tasks);
    }
  }
  const deleteTasks = (index) => {
    console.log(index);
    let tempArray = [...tasks];
    tempArray.splice(index, 1); // Remove one element at the specified index
    setTasks(tempArray);
  }


  return (
    <div className="flex flex-col items-center">

      <h1 className=" text-black text-4xl m-20 font-bold ">
        My Todo App    </h1>

      <div className=" p-6">
        <input className="m-10 p-3 rounded-md bg-slate-100" type="text" placeholder=" create a new todo" value={task} onChange={(e) => {
          setTask(e.target.value);
        }} />
        <button onClick={addTask} className="p-3 bg-green-500 text-center ml-20 rounded-md text-white hover:bg-lime-700 font-bold">Add Task</button>
      </div>
      <div className=" ">
        {tasks?.length > 0 ? (
          <ul className="">
            {
              tasks.map((task, index) => (
                <li className=" flex justify-between items-center gap-52 mb-5" key={index}>
                  <span className="">{task}</span>

                  <button className=" bg-red-700 rounded-md p-2 text-white hover:bg-red-950" onClick={() => { deleteTasks(index) }}>
                    Delete Task
                  </button>

                </li>
              ))
            }
          </ul>
        ) : (<div>
          No Tasks Yet!
        </div>)}
      </div>

    </div>
  )
}
export default App