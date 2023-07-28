import React from "react";

function Orders({ order }) {
  return (
    <div className="Order">
      <h1>You Orders</h1>
      <div className="Cards">
        {order.map((item, index) => (
          <div className="Card">
            <img
              className="CardImg"
              src={item.imageUrl}
              width={133}
              height={112}
              alt="CardItem"
            />
            <button className="favBtn"></button>
            <p className="CardTitle">{item.title}</p>
            <div className="CardBottom">
              <div className="CardBottomLeft">
                <p className="price">Price:</p>
                <p className="price2">{item.price}$</p>
              </div>
              <div className="CardBottomRight"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
