import Button from "../button/Button";
import {sortByTitle, sortByPrice} from "utilities/helpers";

export default function SortBy({products, setFilteredProducts}) {
  return (
    <div className="panel-options">
      <Button
        content="title"
        id="light-background"
        onClick={() => {
          setFilteredProducts(sortByTitle(products));
        }}
      />
      <Button
        size={1}
        content="price (cheapest)"
        id="light-background"
        onClick={() => setFilteredProducts(sortByPrice(products))}
      />
      <Button
        size={1}
        content="price (most expensive)"
        id="light-background"
        onClick={() => setFilteredProducts(sortByPrice(products, "desc"))}
      />
    </div>
  );
}
