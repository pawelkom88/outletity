import Button from "../button/Button";
import {sortByCategory, sortByTitle} from "utilities/helpers";

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
      <Button
        content="Mens"
        id="dark-background"
        onClick={() => {
          setFilteredProducts(sortByCategory(products, "men's clothing"));
          setTitle("men's clothing");
        }}
      />
      <Button
        content="Womens"
        id="dark-background"
        onClick={() => {
          setFilteredProducts(sortByCategory(products, "women's clothing"));
          setTitle("women's clothing");
        }}
      />
      <Button
        content="Jewelery"
        id="dark-background"
        onClick={() => {
          setFilteredProducts(sortByCategory(products, "jewelery"));
          setTitle("jewelery");
        }}
      />
      <Button
        content="Electronics"
        id="dark-background"
        onClick={() => {
          setFilteredProducts(sortByCategory(products, "electronics"));
          setTitle("electronics");
        }}
      />
    </>
  );
}
