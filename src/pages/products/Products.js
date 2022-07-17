import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import useFetch from "hooks/useFetch";
import ProductCard from "components/UI/product-card/ProductCard";
import Loader from "components/UI/loader/Loader";
import SortBy from "components/UI/sort-options/SortBy";
import SortByCategory from "components/UI/sort-by-category/SortByCategory";
import {Toaster} from "react-hot-toast";
import "./Products.scss";

export default function Products() {
  const {data: products, loading} = useFetch("https://fakestoreapi.com/products/");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [title, setTitle] = useState("");
  const {category} = useParams();

  useEffect(() => {
    if (products) {
      setFilteredProducts(products);
    }
  }, [products]);

  useEffect(() => {
    if (products && category) {
      setFilteredProducts(products.filter(product => product.category == category));
      setTitle(category);
    }
  }, [products, category]);

  const numberOfItems =
    filteredProducts &&
    (filteredProducts.length > 1
      ? `${filteredProducts.length} products`
      : `${filteredProducts.length} product`);

  return (
    <section>
      {loading && <Loader />}
      {products && (
        <>
          <h2 className="heading">{title.toUpperCase()}</h2>
          <div className="category-sortable-panel">
            <div className="panel-options">
              <SortByCategory
                setTitle={setTitle}
                products={products}
                setFilteredProducts={setFilteredProducts}
              />
            </div>
            <span className="product-quantity">{numberOfItems}</span>
            <SortBy products={products} setFilteredProducts={setFilteredProducts} />
          </div>
          <div className="category-products">
            {filteredProducts &&
              filteredProducts.map(product => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </div>
          <Toaster position="top-center" />
        </>
      )}
    </section>
  );
}
