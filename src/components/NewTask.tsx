import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusIcon } from '@heroicons/react/outline';

const NewTaskModal = () => {
  const [open, setOpen] = useState(false);
  const [taskName, setTaskName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [assignee, setAssignee] = useState('');

  const handleAddTask = () => {
    console.log({ taskName, startDate, endDate, assignee });
    setOpen(false);
  };

  return (
    <div>
      <button 
        onClick={() => setOpen(true)} 
        className="flex items-center space-x-2 border border-gray-300 px-4 py-2 rounded text-gray-600 dark:text-gray-300 dark:border-gray-600 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition"
      >
        <PlusIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        <span>New Task</span>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button style={{ display: 'none' }} />
        </DialogTrigger>
        
        <DialogContent className="max-w-lg p-6 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-gray-800 dark:text-gray-100">Add New Task</DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Task Name</label>
              <input 
                type="text" 
                className="mt-1 px-2 py-2 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Start Date</label>
                <input 
                  type="date" 
                  className="mt-1 px-2 py-2 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">End Date</label>
                <input 
                  type="date" 
                  className="mt-1 px-2 py-2 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Assignee</label>
              <input 
                type="text" 
                className="mt-1 px-2 py-2 block w-full border-gray-300 dark:border-gray-700 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm dark:bg-gray-700 dark:text-gray-200"
                value={assignee}
                onChange={(e) => setAssignee(e.target.value)}
                placeholder="Enter assignee name"
              />
            </div>
          </div>

          <DialogFooter className="space-x-2 mt-6">
            <DialogClose asChild>
              <button className="px-4 py-2 bg-gray-200 dark:bg-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500">Cancel</button>
            </DialogClose>
            <button 
              onClick={handleAddTask} 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400"
            >
              Add Task
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewTaskModal;
