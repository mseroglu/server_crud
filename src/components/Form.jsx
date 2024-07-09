import React from 'react';
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { toast } from 'react-toastify';

const Form = ({ setTodos }) => {
  function handleSubmit(e) {
    e.preventDefault()
    const title = e.target[0].value
    if (!title) {
      toast.info("Lütfen başlık alanınını boş bırakmayınız..")
      return
    }
    const status = e.target[1].value

    const newTodo = {
      "id": uuidv4(),
      title,
      status,
      date: new Date().toLocaleDateString()
    }
    axios.post("http://localhost:3051/todos/", newTodo)
      .then(() => {
        toast.success("Kayıt Başarılı")
        setTodos((prev) => [...prev, newTodo])
      })
      .catch(err => toast.error("Üzgünüm, kayıt başarısız!"));
  }

  return (
    <form onSubmit={handleSubmit} className='d-flex gap-2 justify-content-center my-4'>
      <input type='text' className='form-control shadow' />
      <select className='form-select w-50 shadow'>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <button className="btn btn-primary shadow">Gönder</button>
    </form>
  )
}

export default Form
