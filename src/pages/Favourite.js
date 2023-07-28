import Card from "../components/Card";
import React from "react";
import { Link } from "react-router-dom";
function Favourite({ fav, isItemFav, isItemAdded, addToFav, addToCart }) {
  return (
    <>
      {fav.length > 0 ? (
        <>
          <div className="Cards">
            {fav.map((item, index) => (
              <Card
                key={index}
                onPlus={(item) => addToCart(item)}
                onFav={(item) => addToFav(item)}
                isItemAdded={isItemAdded}
                isItemFav={isItemFav}
                _id={item._id}
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="AddtionalBlock">
          <img width={70} height={70} src="/img/faceCry.png" alt="faceCry" />
          <h4>You dont have favourite items</h4>
          <h6>Put some items in favorited</h6>
          <Link to={"/home"}>
            {" "}
            <button className="DrawerGreenButton">Back</button>
          </Link>
        </div>
      )}
    </>
  );
}

export default Favourite;
