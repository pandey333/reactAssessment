import React from "react";

export default function ShopHome() {
  const itemList = [
    { id: 1, item: "bag", price: 980 },
    { id: 2, item: "pen", price: 800 },
    { id: 3, item: "mobile", price: 10000 },
  ];

  const [item, setItem] = React.useState([]),
    addToCart = (e) => {
      const list = JSON.parse(localStorage.getItem("item"));
      const updatedList = [...list, e];
      window.localStorage.setItem("item", JSON.stringify(updatedList));
      setItem(updatedList);
    };

  return (
    <div>
      {itemList.map((e) => (
        <div>
          {`${e.item}: ${e.price}`}
          <button
            onClick={() => {
              addToCart(e);
            }}
          >
            add
          </button>
        </div>
      ))}
    </div>
  );
}
