import useAuthContext from "hooks/useAuthContext";
import {useRef} from "react";
import {useNavigate} from "react-router-dom";
import {notifyUser} from "utilities/helpers";
import toast, {Toaster} from "react-hot-toast";
import "./SearchBar.scss";

export default function SearchBar({products}) {
  const navigate = useNavigate();
  const {user} = useAuthContext();
  const searchRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchRef.current.value) {
      return;
    }

    navigate("/Search", {state: {searchInput: searchRef.current.value, products}});

    // clear input
    searchRef.current.value = "";
  }

  function handleNotify(e) {
    e.preventDefault();
    notifyUser(toast.error, "Login to search products");
  }

  return (
    <>
      {user && (
        <form className="search-form" onSubmit={user ? handleSubmit : handleNotify}>
          <label htmlFor="Search bar">
            <input
              id="Search bar"
              name="Search bar"
              className="search-input"
              type="search"
              placeholder="Search product"
              aria-label="Search"
              ref={searchRef}
            />
          </label>
          <Toaster />
        </form>
      )}
    </>
  );
}
