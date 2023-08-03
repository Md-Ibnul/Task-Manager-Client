import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const FormModal = ({ closeModal, isOpen, fetchAllTask }) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("https://task-manager-server-zeta.vercel.app/allTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          reset();
          toast.success('Successfully toasted!');
          fetchAllTask();
        }
      });
  };
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Task
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                      <span className="label-text">Task Name</span>
                    </label>
                    <input
                      className="w-full border h-10 px-4 mb-3"
                      {...register("taskName", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text">Task Description</span>
                    </label>
                    <input
                      className="w-full border h-10 px-4 mb-3"
                      {...register("taskDescription", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text">Task Date</span>
                    </label>
                    <input
                      type="date"
                      className="w-full border h-10 px-4 mb-3"
                      {...register("taskDate", { required: true })}
                    />
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}

                    <label className="label">
                      <span className="label-text">Task Status</span>
                    </label>
                    <select className="w-full border h-10 px-4 mb-3" {...register("status", { required: true })}>
                        <option value="Not-start">Not Start</option>
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Complete">Complete</option>
                    </select>
                    {errors.exampleRequired && (
                      <span>This field is required</span>
                    )}
                    <div className="mt-4 flex justify-between">
                    <input  type="submit" value="Add" onClick={closeModal} className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2" />
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FormModal;
