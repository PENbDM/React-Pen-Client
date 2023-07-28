import Header from "./components/Header";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Route, Routes, Navigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useState, useEffect } from "react";
import Favourite from "./pages/Favourite";
import { useAuthContext } from "./hooks/useAuthContext";
import Orders from "./pages/Orders";

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [fav, setFav] = useState([]);
  const [cartItem, setCartItems] = useState([]);
  const [order, setOrder] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const { user } = useAuthContext();
  useEffect(() => {
    const fetchData = async () => {
      // , {
      //   headers: {
      //     Authorization: `Bearer ${user.token}`,
      //   },
      await axios.get("/api/item").then((res) => {
        setItems(res.data);
      });
      await axios.get("/api/getcartItems").then((res) => {
        setCartItems(res.data);
      });
      await axios.get("/api/getfavItem").then((res) => {
        setFav(res.data);
      });
      setLoading(false);
    };
    fetchData();
    const fetchOrder = async () => {
      await axios
        .get("/api/getOrder", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        // here we send in headers user token, jwt token to back end.
        // after in back end they checking and bla bla
        .then((res) => {
          setOrder(res.data);
        });
    };
    if (user) {
      fetchOrder();
    } // you need PUT USER IN ARRAY BELLOW
  }, [user]);

  const addToCart = async (obj) => {
    try {
      if (cartItem.find((item) => item._id === obj._id)) {
        await axios.delete(`/api/delete/${obj._id}`);
        setCartItems((prev) => prev.filter((item) => item._id !== obj._id));
      } else {
        const { data } = await axios.post("/api/cartItem", obj);
        setCartItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("dont press button to much :)");
      console.log(error);
    }
  };
  const addToOrder = async (obj) => {
    try {
      const { data } = await axios.post("/api/setOrder", obj, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      await setOrder((prev) => [...prev, data]);
      await setCartItems([]);
      await axios.delete("/api/deleteAll");
      await axios
        .get("/api/getOrder", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setOrder(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const addToFav = async (obj) => {
    try {
      if (fav.find((item) => item._id === obj._id)) {
        await axios.delete(`/api/deletee/${obj._id}`);
        setFav((prev) => prev.filter((item) => item._id !== obj._id));
      } else {
        const { data } = await axios.post("/api/favItem", obj);
        setFav((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("dont press button to much :)");
      console.log(error);
    }
  };

  const removeItemCart = async (_id) => {
    await axios.delete(`/api/delete/${_id}`);
    setCartItems((prev) => prev.filter((item) => item._id !== _id));
  };

  const isItemAdded = (_id) => {
    return cartItem.some((obj) => obj._id === _id);
  };
  const isItemFav = (_id) => {
    return fav.some((obj) => obj._id === _id);
  };
  return (
    <div className="wrapper">
      <Header cartItem={cartItem} onClickCart={() => setCartOpen(true)} />
      {cartOpen ? (
        <Drawer
          addToOrder={addToOrder}
          onCloseCart={() => setCartOpen(false)}
          cartItem={cartItem}
          removeItemCart={removeItemCart}
        />
      ) : null}

      <Routes>
        <Route
          path="/home"
          element={
            <Home
              isLoading={isLoading}
              items={items}
              isItemFav={isItemFav}
              isItemAdded={isItemAdded}
              addToCart={addToCart}
              addToFav={addToFav}
            />
          }
        ></Route>
        <Route
          path="/fav"
          element={
            <Favourite
              fav={fav}
              isItemFav={isItemFav}
              isItemAdded={isItemAdded}
              addToCart={addToCart}
              addToFav={addToFav}
            />
          }
        ></Route>
        <Route
          path="/orders"
          element={user ? <Orders order={order} /> : <Navigate to="/home" />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/home"} />}
        />
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/orders"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
