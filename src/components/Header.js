import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
import runScript from "../scripts/script";
import { useLogout } from "../hooks/useLogout";
function Header({ onClickCart, cartItem }) {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const totalPrice = cartItem.reduce((sum, obj) => obj.price + sum, 0);
  const handleClick = () => {
    logout();
  };
  runScript();
  return (
    <>
      <nav className="navbar">
        <ul className="leftNav">
          <Link to={"/home"}>
            <img
              className="logo"
              width={45}
              height={45}
              src="/img/logoStump.png"
              alt="logo"
            />
          </Link>

          <div className="leftnavLi">
            <li>React Pen V.2</li>
            <li className="lefnavLiText">Shop of the best shoes</li>
          </div>
        </ul>
        <ul className="rightNav" id="menu">
          <div className="rightNavLeft">
            <li>
              <img
                onClick={onClickCart}
                className="cartSvg"
                width={25}
                height={25}
                src="/img/cart.svg"
                alt="cart"
              />
            </li>
            <p>{totalPrice}$</p>
            <Link to="/fav">
              <li>
                <img
                  className="favImg"
                  width={25}
                  height={25}
                  src="/img/favourite.svg"
                  alt="fav"
                />
              </li>
            </Link>
          </div>
          <div className="rightNavRight">
            {user && (
              <div className="LogOutPlate">
                <span>{user.email}</span>
                <Link to={"/orders"}>
                  <button>Orders</button>
                </Link>
                <button onClick={handleClick}>Log out</button>
              </div>
            )}
            {!user && (
              <div className="authPlate">
                <Link to={"/signup"}>
                  {" "}
                  <li>
                    <button>Sign up</button>
                  </li>
                </Link>
                <Link to={"/login"}>
                  <li>
                    <button className="login">Login</button>
                  </li>
                </Link>
              </div>
            )}
          </div>
        </ul>
        <div className="Burger">
          <button className="navbar_burger" id="burgerr">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <div className="Border"></div>
    </>
  );
}

export default Header;
