import Image from "next/image";
import img3 from "@/assets/images/explore-image-3.png";
import img1 from "@/assets/images/explore-image-01.jpg";
import img2 from "@/assets/images/explore-image-02.jpg";
import "./Explore.scss";

const Explore = () => {
  return (
    <section className="explore">
      <div className="container">
        <div className="explore__wrapper">
          <div className="explore__main-container">
            <div className="explore__left">
              <h2>Explore Our Products</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolores est quasi similique in eius ipsa eaque ex consectetur
                exercitationem praesentium laborum accusamus mollitia eos, nobis
                vitae numquam, eligendi iure.
              </p>
              <div className="explore__left-quote">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
                </svg>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate sapiente blanditiis iusto deserunt eveniet adipisci
                fuga repudiandae laboriosam corrupti iure vitae facilis
                inventore, expedita atque sequi maxime quam porro repellat. Id
                sint
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolores est quasi similique in eius ipsa eaque ex consectetur
                exercitationem praesentium laborum accusamus mollitia eos, nobis
                vitae numquam, eligendi iure.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolores est quasi similique in eius ipsa eaque ex consectetur
                exercitationem praesentium laborum accusamus mollitia eos, nobis
                vitae numquam, eligendi iure.
              </p>
              <div className="explore__btn-wrapper">
                <button className="main-border-button-dark">
                  Discover More
                </button>
              </div>
            </div>
            <div className="explore__right">
              <div className="explore__right-container">
                <div className="explore__item">
                  <div class="explore__item-img-content">
                    <Image
                      src={img3}
                      className="explore__item-img"
                      width={263}
                      height={263}
                      sizes="100vw"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="explore__item">
                  <div class="explore__item-img-content">
                    <Image
                      src={img1}
                      className="explore__item-img"
                      width={263}
                      height={263}
                      sizes="100vw"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="explore__item">
                  <div class="explore__item-img-content">
                    <Image
                      src={img2}
                      className="explore__item-img"
                      width={263}
                      height={263}
                      sizes="100vw"
                      alt="image"
                    />
                  </div>
                </div>
                <div className="explore__item">
                  <div class="explore__item-img-content">
                    <Image
                      src={img3}
                      className="explore__item-img"
                      width={263}
                      height={263}
                      sizes="100vw"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
