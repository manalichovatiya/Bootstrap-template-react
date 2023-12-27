import React, { useEffect, useRef, useState } from 'react'
import Swal from 'sweetalert2'

const Dashboard = () => {
  const [dash, setdash] = useState()
  const [view, setview] = useState({})
  const [index, setindex] = useState()
  const product = useRef()
  const price = useRef()

  const arr = JSON.parse(localStorage.getItem("detail")) || [];
  //function for add data
  const addData = () => {
    if (!product.current.value || !price.current.value) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Please enter both product and price',
      });
      return;
    }
    const list = {
      product: product.current.value,
      price: price.current.value,
    }
    arr.push(list)
    localStorage.setItem("detail", JSON.stringify(arr));
    console.log(arr,"add data checking ");
    setdash(arr);
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Data added successfully!',
    });
  }
  // function for delete data
  const deleteData = (ind) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        arr.splice(ind, 1);
        localStorage.setItem('detail', JSON.stringify(arr));
        setdash(arr);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  };

  // function for update data
  const updateData = (val, ind) => {
    setindex(ind)
    setview(val)
  }
  const handle = (e) => {
    setview({ ...view, [e.target.name]: e.target.value })
  }
  const saveData = () => {
    console.log(view);
    arr.splice(index, 1, view);
    localStorage.setItem('detail', JSON.stringify(arr))
    setdash([...arr])
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: 'Data updated successfully!',
    });
  }
  useEffect(() => {
    setdash([...arr]);
  }, []);

  return (
    <>
      <div className="input-group mb-3 mt-3">
        <input type="text" className="form-control" placeholder="Enter product" ref={product} />
        <input type="number" className="form-control" placeholder="Enter product price" ref={price} />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button" onClick={addData}> Add </button>
        </div>
      </div>

      <div className="row">
        {dash?.map((val, ind) => (
          <div className="col-md-3" key={ind}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{val.product}</h5>
                <p className="card-text">{val.price}</p>
                <button className="btn btn-primary" onClick={() => deleteData(ind)}>Delete</button>
                <button type="button" class="btn btn-primary ml-3" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => updateData(val, ind)}>Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <input type="text" className="form-control" placeholder="Enter product" value={view.product} name="product" onChange={(e) => handle(e)} />
            <input type="number" className="form-control" placeholder="Enter product price" value={view.price} name='price' onChange={(e) => handle(e)} />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={saveData}>Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard