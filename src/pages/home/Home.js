import Carousel from "components/carousel/Carousel";
import Heading from "components/heading/Heading";

export default function Home() {
  return (
    <>
      <Carousel />
      <section>
        <Heading content={"Shop by category"} />
      <div className="categories-container">
        
      </div>
      </section>
    </>
  );
}
