import {useParams} from "react-router-dom";
import Button from "components/UI/button/Button";
import "./Product.scss";

export default function Product({data}) {
  const {id} = useParams();

  let filteredProduct;

  // type coercion
  if (data && id) {
    filteredProduct = data.filter(product => product.id == id);
  }

  return (
    <section>
      {filteredProduct &&
        filteredProduct.map(product => {
          return (
            <div key={product.id} className="product-container">
              <div className="product-img">
                <img src={product.image} alt="Product" />
              </div>
              <article className="product-content">
                <header>
                  <h2 className="product-title">{product.title}</h2>
                </header>
                <p className="product-desc">{product.description}</p>

                <div className="product-price">
                  <div className="price">
                    <span>£{product.price}</span>
                    <span>Now: £{product.price - 1}</span>
                  </div>
                  <span className="discount">SAVE 30 %</span>
                </div>

                <div className="size-guide">
                  <span className="size">8</span>
                  <span className="size">10</span>
                  <span className="size">12</span>
                  <span className="size">14</span>
                  <span className="size">16</span>
                </div>
                <Button content="Add to basket" className="background" />
              </article>
            </div>
          );
        })}
    </section>
  );
}
