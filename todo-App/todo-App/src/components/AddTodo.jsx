import 'bootstrap/dist/css/bootstrap.min.css'

function AddTodo(){
    return(
        <>
<div className="container text-center">
  <div className="row">
    <div className="col">
     <input type='text' placeholder='write here' />
    </div>
    <div className="col">
      <input type='date'/>
    </div>
    <div className="col">
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  </div>
</div>

        </>
    )
}
export default AddTodo;