import React, { useState, useEffect } from "react";

const TaskBody = () => {
   
   let [allDone, setAlldone] = useState(() => {
      let newobj = JSON.parse(localStorage.getItem("tasks"));
      for(let key in newobj) {
         console.log(newobj[key])
         if(newobj[key].completed === false) {
            return false;
         }
      }
      return true;
   });

   console.log(allDone);

   //if 0 is used to initialize countTask intead of local storage's task on reloading you will get maidan saaf
   const [countTask, setCountTask] = useState(() => {
      const storedTasks = localStorage.getItem("tasks");
      const parsedTasks = storedTasks ? JSON.parse(storedTasks) : {};
      return Object.keys(parsedTasks).length;
   });

   const [text, setText] = useState("");

   const [tasks, setTasks] = useState(() => {
      const storedTasks = localStorage.getItem("tasks");
      return storedTasks ? JSON.parse(storedTasks) : {};
   });

   const [showPending, setShowPending] = useState(false);

   useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));
   }, [tasks]);

   const handleUpdate = (event) => {
      setText(event.target.value);
   };

   const handleAddTask = () => {
      if (text.trim() != "") {
         const newTask = {
            id: countTask,
            text: text,
            completed: false
         };

         setTasks((prevTasks) => ({
            ...prevTasks,
            [`task${countTask}`]: newTask
         }));

         setCountTask(countTask + 1);
         setText("");
      }
   };

   const handleRemoveTask = (taskId) => {
      const updatedTasks = { ...tasks };
      delete updatedTasks[taskId];
      setTasks(updatedTasks);
   };

   const handleToggleComplete = (taskId) => {
      const updatedTasks = { ...tasks };
      updatedTasks[taskId].completed = !updatedTasks[taskId].completed;
      setTasks(updatedTasks);
   };

   const handleTogglePending = () => {
      setShowPending(!showPending);
   };

   return (
      <div className="bg-blue-50 w-[100vw] h-[100vh] p-5">
         <h1 className="mx-[40%] mb-10 mt-5 text-2xl font-bold w-[50vw]">Task Management App</h1>

         <div className="mx-[25%] w-[50vw] my-5 flex flex-row bg-blue-300 border border-blue-400 rounded-full justify-between">
            <input id="inputid" placeholder="Enter your Task" className="text-sm font-semibold rounded-2xl px-5 cursor-text w-[90%] py-1 bg-white m-3" value={text} type="text" onChange={handleUpdate} />
            <button className="text-black border border-blue-400 m-3 rounded-2xl px-2 w-[5%] py-1 bg-white font-semibold hover:bg-red-100" onClick={handleAddTask}>+</button>
         </div>

         <div className={
            countTask >= 6 ? "mx-[25%] w-[50vw] max-h-[300px] my-5 p-5 overflow-y-scroll bg-blue-300 border border-blue-400 rounded-lg"
            : "mx-[25%] w-[50vw] max-h-[300px] my-5 p-5 bg-blue-300 border border-blue-400 rounded-lg"
         }>
            {countTask === 0 ? (
               <h1 className="font-semibold text-white">No Task Added</h1>
            ) : (
               <div>
                  <h1 className="mx-1 w-[20%] text-center my-4 px-2 py-1 text-black bg-white border border-blue-400 text-sm font-semibold">Added Tasks :</h1>
                  <ul>
                     {Object.keys(tasks).map((key) => {
                        const task = tasks[key];
                        if (showPending && task.completed) return null;
                        return (
                           <div className="flex flex-row justify-between" key={key}>
                              <li className="px-2 w-[70%] py-1 text-sm bg-white border border-blue-400 m-1 rounded-xl text-black whitespace-normal break-words">{task.text}</li>
                              <input className="w-[20px] mt-3 h-[20px]" type="checkbox" checked={task.completed} onChange={() => handleToggleComplete(key)} />
                              <button className="w-[30px] mt-2 h-[30px] bg-white border border-blue-400 m-1 rounded-full text-black hover:bg-red-100" onClick={() => handleRemoveTask(key)}>x</button>
                           </div>
                        );
                     })}
                  </ul>
               </div>
            )}
         </div>
         <div className="mx-[25%] w-[50vw] flex flex-row justify-between bg-blue-300 border border-blue-400 rounded-full">
            <button className="text-black border border-blue-400 text-sm m-3 rounded-2xl px-2 w-[20%] py-1 bg-white font-semibold hover:bg-red-100" onClick={() => {
               setTasks({});
               setCountTask(0);
               localStorage.clear();
            }}>Clear all</button>
            <div>
               <button className="text-black border border-blue-400 m-3 rounded-2xl px-4 text-sm py-1 bg-white font-semibold hover:bg-red-100" onClick={handleTogglePending}>{showPending ? "Show All" : "Show Pending"}</button>
            </div>
         </div>
      </div>
   );
};

export default TaskBody;
