
const EditMode = ({ todo, handleUpdate, setIsEdit, i }) => {
  return (
    <tr>
      <th scope="row">{i + 1}</th>
      <td colspan="4">
        <form onSubmit={handleUpdate} className='d-flex gap-2 justify-content-center me-5 '>
          <select defaultValue={todo.status} className='form-select w-25 shadow'>
            <option value="important">Önemli</option>
            <option value="daily">Günlük</option>
            <option value="job">İş</option>
          </select>
          <input type='text' defaultValue={todo.title} className='form-control shadow w-50' />
          <input type="text" defaultValue={todo.date} disabled/>
          <div className="w-25 d-flex gap-2">
            <button className="btn btn-primary shadow">Onayla</button>
            <button onClick={() => setIsEdit(false)} type="button" className="btn btn-secondary shadow">İptal</button>
          </div>
        </form>
      </td>

    </tr>
  )
}

export default EditMode
