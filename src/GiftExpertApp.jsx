import { useState } from "react";
import {AddCategory, GifGrid} from "./Components";

const GiftExpertApp = () => {
  const [categories, setcategories] = useState([
    "One Punch"
  ]);

  const handleAdd = (item) => {
    const groupCategories = categories.filter(
      (category) => category.toLowerCase() === item.toLowerCase()
    );

    if (groupCategories.length > 0) return;

    setcategories([item, ...categories]);
  };

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory onNewItem={handleAdd} />
      <hr />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GiftExpertApp;
