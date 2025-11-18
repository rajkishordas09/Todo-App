
function TodoItem({name,dueDate}){
    return(
        <>
        <div className="container text-center">
  <div className="row">
    <div className="col">
      {name}
    </div>
    <div className="col">
      {dueDate}
    </div>
    <div className="col">
      <button type="button" className="btn btn-danger">Danger</button>
    </div>
  </div>
</div>
        </>
    )
}
export default TodoItem