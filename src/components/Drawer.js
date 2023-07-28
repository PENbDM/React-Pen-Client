import { useState } from "react";
import Orders from "../pages/Orders";
import { Link } from "react-router-dom";
import { useAuthContext, user } from "../hooks/useAuthContext";
function Drawer({ onCloseCart, cartItem, removeItemCart, addToOrder }) {
  const totalPrice = cartItem.reduce((sum, obj) => obj.price + sum, 0);
  const { user } = useAuthContext();

  return (
    <>
      {cartItem >= 0 ? (
        <div className="overlay">
          <div className="Drawer">
            <div className="DrawerTop">
              <h3>Cart</h3>
              <button>
                <img
                  onClick={onCloseCart}
                  src="/img/btn-remove.svg"
                  alt="remove"
                  width={37}
                  height={37}
                />
              </button>
            </div>
            <div className="EmptyCart">
              <img src="/img/emptyCart.svg" alt="emptycart" />
              <p>Cart is empty</p>
              <span>Add at least one product, to make order</span>
              <button className="DrawerGreenButton" onClick={onCloseCart}>
                Back
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="overlay">
          <div className="Drawer">
            <div className="DrawerTop">
              <h3>Cart</h3>
              <button>
                <img
                  onClick={onCloseCart}
                  src="/img/btn-remove.svg"
                  alt="remove"
                  width={37}
                  height={37}
                />
              </button>
            </div>
            <div className="CardsDrawer">
              {cartItem.map((obj, index) => (
                <div key={index} className="CardDrawer">
                  <img
                    className="DrawerCardImg"
                    src={obj.imageUrl}
                    width={113}
                    height={92}
                    alt="CardItem"
                  />

                  <div className="DrawerTitle">
                    <p>{obj.title}</p>
                    <p>{obj.price}</p>
                  </div>
                  <button>
                    <img
                      onClick={() => removeItemCart(obj._id)}
                      width={37}
                      height={37}
                      src="/img/btn-remove.svg"
                      alt="btnRemove"
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="DrawerBottomBlock">
              <div className="DrawerBottom">
                <p>All Price:</p>
                <div className="DrawerBorder"></div>
                <p>{totalPrice}$ </p>
              </div>
              <div className="DrawerBottom">
                <p>Tax 5%:</p>
                <div className="DrawerBorder2"></div>
                <p> {(totalPrice / 100) * 5}</p>
              </div>
              {user ? (
                <Link to="/orders">
                  <button
                    onClick={() => addToOrder(cartItem)}
                    className="DrawerGreenButton"
                  >
                    Confirm Order
                  </button>
                </Link>
              ) : (
                <button
                  className="DrawerGreenButton"
                  onClick={() => alert("you have to be auth")}
                >
                  Confirm Order
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Drawer;
