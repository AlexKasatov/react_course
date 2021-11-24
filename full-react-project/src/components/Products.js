import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useFetch from "../hooks/useFetch";
import Items from "./Items";

const Products = () => {
  const { get, loader } = useFetch();
  const [items, setItems] = useState([]);

  useEffect(() => {
    get("https://covid-shop-mcs.herokuapp.com/").then((data) => setItems(data));
  }, []);

  function handleDeleteProduct(id) {
      setItems(items.filter(item => item.id !== id))
  }

  return (
    <>
      {items &&
        
          <ItemList
            onDeleteProduct={handleDeleteProduct}
            items={items}
          ></ItemList>
        }
    </>
  );
};

export default Products;
