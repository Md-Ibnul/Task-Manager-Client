import {HiOutlineUserCircle} from 'react-icons/hi'
import {LuSubtitles} from 'react-icons/lu'
import {GrArticle, GrStatusUnknown} from 'react-icons/gr'
import {BiCalendarAlt} from 'react-icons/bi'
import { toast } from 'react-hot-toast';

const TaskCard = ({task, handleDelete}) => {
    return (
        <div className="border flex flex-col justify-between">
            <div className='bg-slate-300'>
                <HiOutlineUserCircle className='w-full mx-auto h-36 py-6' />
            </div>
            <div className='my-5 ps-3'>
                <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-2'><LuSubtitles className='inline text-2xl'/> Title: </div> <div className='px-10 bg-slate-200'>{task.taskName}</div>
                </div>
                <div className='flex justify-between mb-4'>
                <div className='flex gap-2 me-2'><GrArticle className='inline text-2xl'/> <p className='inline'>Description:</p> </div> <div className='px-2 bg-slate-200'>{task.taskDescription}</div>
                </div>
                <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-2'><BiCalendarAlt className='inline text-2xl'/> Due Date: </div> <div className='px-10 bg-slate-200'>{task.taskDate}</div>
                </div>
                <div className='flex justify-between mb-4'>
                <div className='flex items-center gap-2'><GrStatusUnknown className='inline text-2xl'/> Status: </div> <div className='px-10 bg-slate-200'>{task.status}</div>
                </div>
            </div>
                <div className='w-full flex items-end'>
                    <button onClick={() => handleDelete(task._id)} className='bg-red-600 w-full py-3 text-white align-text-bottom font-bold'>Delete Task</button>
                </div>
        </div>
    );
};

export default TaskCard;