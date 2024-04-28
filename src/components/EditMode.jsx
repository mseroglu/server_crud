
const EditMode = ({todo, handleUpdate, setIsEdit}) => {
  return (
    <form onSubmit={handleUpdate} className='d-flex gap-2 justify-content-center my-4'>
      <select defaultValue={todo.status} className='form-select w-50 shadow'>
        <option value="important">Önemli</option>
        <option value="daily">Günlük</option>
        <option value="job">İş</option>
      </select>
      <input type='text' defaultValue={todo.title} className='form-control shadow' />
      <button className="btn btn-primary shadow">Onayla</button>
      <button onClick={() => setIsEdit(false)} type="button" className="btn btn-secondary shadow">İptal</button>
    </form>
  )
}

export default EditMode
