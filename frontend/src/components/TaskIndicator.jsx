import React from 'react';
import { NavLink } from 'react-router-dom';

function TaskIndicator() {
    return ( 
        <div className=' flex-grow rounded-md'>
            <nav>
                <ul className='flex gap-3 justify-between p-3 bg-slate-400 rounded-full shadow-2xl'>
                    <li>
                        <NavLink to="/">All Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/active">Active</NavLink>
                    </li>
                    <li>
                        <NavLink to="/completed">Completed</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
     );
}

export default TaskIndicator;