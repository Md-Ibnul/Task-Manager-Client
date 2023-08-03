import { useEffect } from "react";
import { useState } from "react";
import TaskCard from "./TaskCard";
import FormModal from "./FormModal";
import { toast } from "react-hot-toast";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  let [isOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true)
  }
  function closeModal() {
    setIsOpen(false)
  }

  const fetchAllTask = () => {
    fetch("https://task-manager-server-zeta.vercel.app/allTasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }

  useEffect(() => {
    fetchAllTask()
  }, []);

  const handleDelete = (_id) => {
    fetch(`https://task-manager-server-zeta.vercel.app/allTasks/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
            toast.success("Deleted Successfully");
            fetchAllTask()
        }
        })
};

  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="grid md:grid-cols-4 gap-4">
          {tasks.map((task) => (
            <TaskCard key={task._id} task={task} handleDelete={handleDelete} />
          ))}
          <div className="flex items-center justify-center text-white font-bold">
          <button type="button"
          onClick={openModal} className="px-6 py-3 bg-sky-400">Add New Task</button>
          </div>
        </div>
        <FormModal 
        isOpen={isOpen}
        closeModal={closeModal}
        fetchAllTask={fetchAllTask}
        onClose={() => setIsOpen(false)}
        />
    </div>
  );
};

export default Tasks;
