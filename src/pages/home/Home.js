import useMatchMedia from "hooks/useMatchMedia";
import Carousel from "components/UI/carousel/Carousel";
import CategoryCard from "components/UI/category-card/CategoryCard";
import "./Home.scss";
import {categories} from "utilities/helpers";

export default function Home() {
  const {matches} = useMatchMedia("(max-width: 450px)");

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
              src={matches ? img.srcMobile : img.src}
              path={`/Products${img.path}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}
