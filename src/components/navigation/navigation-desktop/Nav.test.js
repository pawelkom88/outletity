import {render, screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import {categories} from "utilities/helpers";
import {BrowserRouter} from "react-router-dom";
import AuthContextProvider from "context/AuthContext";
import Nav from "./Nav";

describe("Nav component should", () => {
  test("render 4 list items", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <Nav />
        </AuthContextProvider>
      </BrowserRouter>
    );
    const li = screen.getAllByRole("listitem");
    expect(li.length).toBe(categories.length);
  });

  test("contain href attribute equal to path in categories array", () => {
    render(
      <BrowserRouter>
        <AuthContextProvider>
          <Nav />
        </AuthContextProvider>
      </BrowserRouter>
    );
    const linkEl = screen.getAllByRole("link");
    for (let i = 0; i < categories.length; i++) {
      expect(linkEl[i]).toHaveAttribute("href", `/Products${categories[i].path}`);
    }
  });
});
