import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cartPrice, setCartPrice] = useState(0);

  const item = JSON.parse(localStorage.getItem("item"));

   function total () {
    let sum = 0;
    for (let i in item) {
      sum += item[i].price;
    }
    setCartPrice(sum);
  };

  useEffect(() => {
    total();
  }, [item]);

  const Items = item.map((el) => (
    <div key={el.id}>{`${el.item}: ${el.price}`} <Del id = {el.id} /></div>
  ));

  return (
    <div>
      <div>{Items}</div>
      <div>Total: ${cartPrice}</div>
    </div>
  );
}

function Del({id}) {
  return (
      <button
          onClick = {()=> {
              const item = JSON.parse(localStorage.getItem('item'));
              let cartList=item.filter(i => i.id !== id);
              window.localStorage.setItem('item',JSON.stringify(cartList));
          }}
      >Delete</button>
  )
}
