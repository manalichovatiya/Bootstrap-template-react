import React from 'react'
import Swal from 'sweetalert2';

const Product = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const productCart = () => {
    Swal.fire({
      title: 'Purchase Confirmation',
      text: `Are you sure you want to buy?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, Buy it!',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Thank You!',
          text: 'Your purchase is successful!',
          icon: 'success',
        });
      } else {
        Swal.fire('Cancelled', 'Your purchase has been cancelled', 'info');
      }
    });
  }

  return (
    <div>
      <h1>Products in Cart</h1>
      <div className="row">
        {cartItems?.map((val, ind) => (
          <div className="col-md-3" key={ind}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{val.product}</h5>
                <p className="card-text">{val.price}</p>
                <button className="btn btn-primary" onClick={() => productCart(val)}>Buy now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product