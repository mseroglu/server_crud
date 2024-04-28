import React, { useState } from 'react'
import ContentMode from './ContentMode'
import axios from 'axios'
import { toast } from 'react-toastify'
import EditMode from './EditMode'

const ListItem = ({ todo, allTodos, setTodos }) => {
  const [isEdit, setIsEdit] = useState(false)
  // silme işlemi
  function handleDelete(){
    axios.delete(`http://localhost:3051/todos/${todo.id}`)
    .then(() => {
      toast.warning("Silme başarılı")
      //const filtered = allTodos.filter((item) => item.id !== todo.id)
      setTodos( prev => prev.filter( item => item.id !== todo.id))
    })
    .catch(err => {
      toast.error("Silme başarısız!")
      console.log(err)
  })
  }
  // güncelleme onaylanınca çalışır
  function handleUpdate(e){
    e.preventDefault()
    const status = e.target[0].value
    const title = e.target[1].value

    axios.patch(`http://localhost:3051/todos/${todo.id}`, {title, status})
    .then(()=>{
      // 1 nevcut todonun title ve status değerlerini güncelle
      const updated = {...todo, title, status}
      // 2 Dizideki eski todonun yerine yenisini koyuyoruz
      const newTodos = allTodos.map((item) => item.id === updated.id ? updated : item) 
      // 3 state i güncelliyoruz     
      setTodos(newTodos)
      // 4 düzenleme modundam çıkmak için isEdit i false yapıyoruz
      setIsEdit(false)
      // 5 Uyarı veriyoruz
      toast.warning("Update başarılı")    
    })   
    .catch((err) => {
      console.log(err)
      toast.error("İşlem başarısız!")
    }
    )

    
  }
  return (
    <li className='list-group-item relative p-2 d-flex justify-content-between align-items-center gap-3'>
      {
        isEdit ? <EditMode todo={todo} handleUpdate={handleUpdate} setIsEdit={setIsEdit} /> : <ContentMode todo={todo} handleDelete={handleDelete} setIsEdit={setIsEdit} />
      }
    </li>
  )
}

export default ListItem
