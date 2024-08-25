import React from 'react'
import TaskShow from './TaskShow'

function TaskList({ tasks }) {
    console.log({tasks})
    return (
        <div className='taskListe'>
            {
                tasks.map((data,index) => {
                    return <TaskShow tasks={data} key={index}/>
                })
            }
        </div>
    )
}

export default TaskList