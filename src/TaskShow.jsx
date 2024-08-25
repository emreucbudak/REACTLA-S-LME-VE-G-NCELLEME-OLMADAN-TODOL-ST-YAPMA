import React from 'react'

function TaskShow({ tasks }) {
    return (
        <div>
            <div className='taskCard'>
                <h3>Görev Adı : </h3>
                <p>{tasks.name}</p>
                <h3>Görev Açıklaması</h3>
                <p>{tasks.title}</p>
                <button>Sil</button>
                <button>Güncelle</button>
            </div>
        </div>
    )
}

export default TaskShow