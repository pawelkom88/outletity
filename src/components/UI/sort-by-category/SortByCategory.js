import Button from "../button/Button";
import {sortByCategory, sortByTitle, categories} from "utilities/helpers";

export default function SortByCategory({products, setFilteredProducts, setTitle}) {
  return (
    <>
      <Button
        content="All"
        id="dark-background"
        onClick={() => {
          setFilteredProducts(sortByTitle(products));
          setTitle("All");
        }}
      />
      {categories.map(({id, title, desc}) => {
        return (
          <Button
            key={id}
            content={title}
            id="dark-background"
            onClick={() => {
              setFilteredProducts(sortByCategory(products, desc.toLowerCase()));
              setTitle(desc.toLowerCase());
            }}
          />
        );
      })}
    </>
  );
}
