import ContentLoader from "react-content-loader";
import React from "react";
function Card({
  _id,
  title,
  price,
  imageUrl,
  onPlus,
  onFav,
  isItemFav,
  isItemAdded,
  isLoading,
}) {
  const onClickPlus = () => {
    onPlus({ _id, title, price, imageUrl });
  };
  const onClickFav = () => {
    onFav({ _id, title, price, imageUrl });
  };
  return (
    <div className="Card">
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={180}
          height={300}
          viewBox="0 0 180 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="25" y="0" rx="9" ry="9" width="150" height="91" />
          <rect x="58" y="18" rx="3" ry="3" width="88" height="6" />
          <rect x="25" y="131" rx="6" ry="6" width="93" height="15" />
          <rect x="25" y="107" rx="6" ry="6" width="150" height="15" />
          <rect x="25" y="166" rx="8" ry="8" width="80" height="24" />
          <rect x="145" y="159" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <img
            className="CardImg"
            src={imageUrl}
            width={133}
            height={112}
            alt="CardItem"
          />
          <button className="favBtn">
            <img
              onClick={onClickFav}
              src={
                isItemFav(_id) ? "/img/heart-like.svg" : "/img/favourite.svg"
              }
              width={26}
              height={26}
              alt="FavBtn"
            />
          </button>
          <p className="CardTitle">{title}</p>
          <div className="CardBottom">
            <div className="CardBottomLeft">
              <p className="price">Price:</p>
              <p className="price2">{price}$</p>
            </div>
            <div className="CardBottomRight">
              <button onClick={onClickPlus}>
                <img
                  src={
                    isItemAdded(_id)
                      ? "/img/btn-checked.svg"
                      : "/img/btn-plus.svg"
                  }
                  alt="BTNplus"
                />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
