
import React from 'react';

interface TaskCardProps {
  status: string;
  title: string;
  subtext: string;
  comments: number;
}

const TaskCard: React.FC<TaskCardProps> = ({ status, title, subtext, comments }) => {

    const statusColor =
    status === 'To do'
      ? 'text-yellow-500 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900'
      : status === 'In Progress'
      ? 'text-blue-500 bg-blue-100 dark:text-blue-400 dark:bg-blue-900'
      : 'text-green-500 bg-green-100 dark:text-green-400 dark:bg-green-900';

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 transition duration-300 ease-in-out">
      <span className={`text-sm font-semibold p-1 ${statusColor} rounded-sm`}>
        {status}
      </span>
      <h3 className="font-bold text-lg mt-2 text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400">{subtext}</p>

      <div className="flex mt-2 space-x-2">
        <img
          src="https://via.placeholder.com/24"
          className="rounded-full w-6 h-6"
          alt="user"
        />
      </div>

      <div className="mt-2 text-gray-400 dark:text-gray-500 text-sm">
        {comments} comments
      </div>
    </div>
  );
};

export default TaskCard;
