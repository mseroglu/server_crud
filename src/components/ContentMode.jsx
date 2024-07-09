import React from 'react'

const ContentMode = ({ todo, handleDelete, setIsEdit, i }) => {
  return (    

      <tr>
        <th scope="row">{i+1}</th>
        <td>{todo.status}</td>
        <td>{todo.title}</td>
        <td>{todo.date}</td>
        <td>
          <div className='btn-group gap-2'>
            <button className='btn btn-sml btn-warning' onClick={() => setIsEdit(true)}>Düzenle</button>
            <button className='btn btn-sml btn-danger' onClick={handleDelete}>Sil</button>
          </div>
        </td>
      </tr>

    
  )
}

export default ContentMode

