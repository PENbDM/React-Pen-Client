import Card from "../components/Card";
function Home({
  items,
  isItemAdded,
  addToCart,
  addToFav,
  isItemFav,
  isLoading,
}) {
  const renderItems = () => {
    return items.map((item, index) => (
      <Card
        isLoading={isLoading}
        key={index}
        isItemFav={isItemFav}
        isItemAdded={isItemAdded}
        onFav={(item) => addToFav(item)}
        onPlus={(item) => addToCart(item)}
        _id={item._id}
        items={items}
        title={item.title}
        price={item.price}
        imageUrl={item.imageUrl}
      />
    ));
  };

  return (
    <div>
      <div className="SearchBlock">
        <p>All shoes</p>
      </div>
      <div className="Cards">{renderItems()}</div>
    </div>
  );
}

export default Home;
