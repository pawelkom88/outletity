import Input from "../input/Input";
import "./SearchBar.scss";

export default function SearchBar() {
  return (
    <Input
      id="Search bar"
      for="Search bar"
      name="Search bar"
      className="search-input"
      type="search"
      placeholder="Search product"
      ariaLabel="Search"
    />
  );
}
