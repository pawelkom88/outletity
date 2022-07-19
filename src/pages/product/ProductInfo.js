import {useLocation} from "react-router-dom";
import Carousel from "react-grid-carousel";
import Product from "components/product/Product";
import {Link} from "react-router-dom";

export default function ProductInfo() {
  const location = useLocation();
  const {products, product} = location.state || {};

  return (
    <section>
      {product && <Product key={product.id} product={product} />}
      <div style={{marginTop: "8rem"}}>
        <Carousel cols={5} rows={1} gap={0} loop>
          {products &&
            products
              .sort(() => 0.5 - Math.random())
              .map(product => {
                return (
                  <Carousel.Item key={product.id}>
                    <Link state={{product, products}} to={`/ProductInfo/${product.id}`}>
                      <img style={{height: "80%"}} width="35%" alt="product" src={product.image} />
                    </Link>
                  </Carousel.Item>
                );
              })}
        </Carousel>
      </div>
    </section>
  );
}
