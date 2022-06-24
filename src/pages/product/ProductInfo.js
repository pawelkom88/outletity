import {useParams} from "react-router-dom";
import Loader from "components/UI/loader/Loader";
import SizeGuide from "components/UI/size-guide/SizeGuide";
import Button from "components/UI/button/Button";
import "./ProductInfo.scss";
import ErrorModal from "components/UI/modals/error-modal/ErrorModal";

export default function ProductInfo({data, error, loading}) {
  const {id} = useParams();

  let filteredProduct;

  // type coercion
  if (data && id) {
    filteredProduct = data.filter(product => product.id == id);
  }

  return (
    <section>
      {error && <ErrorModal error={error} />}
      {loading && <Loader />}

      {filteredProduct &&
        filteredProduct.map(product => {
          console.log(product)
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
                    <span>Now: £{product.price}</span>
                  </div>
                  <span className="discount">SAVE 30 %</span>
                </div>
                <SizeGuide product={product} />
                <Button content="Add to basket" id="dark-background" />
              </article>
            </div>
          );
        })}
    </section>
  );
}
