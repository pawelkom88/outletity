import {useState} from "react";
import Input from "../input/Input";
import "./SearchBar.scss";

export default function SearchBar() {
  const [userInput, setUserInput] = useState();

  return (
    <Input
      labelFor="Search bar"
      id="Search bar"
      for="Search bar"
      name="Search bar"
      className="search-input"
      type="search"
      placeholder="Search product"
      ariaLabel="Search"
      value={userInput}
      onChange={e => setUserInput(e.target.value)}
    />
  );
}
