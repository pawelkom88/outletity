import Carousel from "components/UI/carousel/Carousel";
import CategoryCard from "components/UI/category-card/CategoryCard";
import "./Home.scss";

import {categories} from "utilities/images";

export default function Home() {
  return (
    <>
      <Carousel />
      <section>
        <h2 className="heading">Shop by category</h2>
        <div className="categories-container">
          {categories.map(img => (
            <CategoryCard
              key={img.id}
              desc={img.desc}
              content={img.title}
              src={img.src}
              path={img.path}
            />
          ))}
        </div>
      </section>
    </>
  );
}
