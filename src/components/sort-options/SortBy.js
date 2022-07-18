import Button from "../UI/button/Button";
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
        content="price (cheapest)"
        id="light-background"
        onClick={() => setFilteredProducts(sortByPrice(products))}
      />
      <Button
        content="price (most expensive)"
        id="light-background"
        onClick={() => setFilteredProducts(sortByPrice(products, "desc"))}
      />
    </div>
  );
}
