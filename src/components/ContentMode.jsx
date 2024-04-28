import React from 'react'

const ContentMode = ({ todo, handleDelete, setIsEdit }) => {
  return (
    <>
      <span>{todo.status}</span> 
      <span>{todo.title}</span> 
      <span className='date'>{todo.date}</span>
      <div className='btn-group gap-2'>
        <button className='btn btn-sml btn-warning' onClick={() => setIsEdit(true)}>Düzenle</button>
        <button className='btn btn-sml btn-danger' onClick={handleDelete}>Sil</button>
      </div>
    </>
  )
}

export default ContentMode
