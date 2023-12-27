import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("detail"));
    setdata(userData);
  }, []);

  const addCart = (v) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || []
    cartItems.push(v);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
  return (
    <>
      <div className="row">
        {data?.map((val, ind) => (
          <div className="col-md-3" key={ind}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{val.product}</h5>
                <p className="card-text">{val.price}</p>
                <button className="btn btn-primary" onClick={() => addCart(val)}>Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
