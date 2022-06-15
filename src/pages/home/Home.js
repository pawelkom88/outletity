import Carousel from "components/UI/carousel/Carousel";
import Card from "components/UI/card/Card";
import "./Home.scss";

import {categoriesImages} from "utilities/images";

export default function Home() {
  return (
    <>
      <Carousel />
      <section>
        <h2 className="heading">Shop by category</h2>
        <div className="categories-container">
          {categoriesImages.map(img => (
            <Card key={img.id} desc={img.desc} content={img.title} src={img.src} path={img.path} />
          ))}
        </div>
      </section>
    </>
  );
}
