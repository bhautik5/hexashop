import Link from "next/link";
import Image from "next/image";
import { Star, ShoppingCart, Eye } from "lucide-react";
import { mensTrandingProducts } from "@/constants/data";
import "./HomeTranding.scss";

const HomeTranding = () => {
  return (
    <section className="home-tranding">
      <div className="container">
        <div className="home-tranding__wrapper">
          <div className="home-tranding__top">
            <h2>{`Men's Latest`}</h2>
            <span>
              Details to details is what makes Hexashop different from the other
              themes.
            </span>
          </div>
          <div className="home-tranding__bottom">
            <div className="home-tranding__row">
              {mensTrandingProducts?.map((item) => (
                <div className="home-tranding__item" key={item.id}>
                  <div className="home-tranding__thumb">
                    <div className="home-tranding__hover-content">
                      <ul>
                        <li>
                          <Link className="home-tranding__hover-li" href="#">
                            <Eye />
                          </Link>
                        </li>
                        <li>
                          <Link className="home-tranding__hover-li" href="#">
                            <ShoppingCart />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <Image
                      src={item.img}
                      alt=""
                      width={350}
                      height={369}
                      sizes="100vw"
                    />
                  </div>
                  <div class="home-tranding__down-content">
                    <div className="home-tranding__down-wrapper">
                      <div className="home-tranding__name-container">
                        <h4>{item.name}</h4>
                        <ul class="home-tranding__stars">
                          <li>
                            <Star
                              className="home-tranding__star-icon"
                              size={14}
                            />
                          </li>
                          <li>
                            <Star
                              className="home-tranding__star-icon"
                              size={14}
                            />
                          </li>
                          <li>
                            <Star
                              className="home-tranding__star-icon"
                              size={14}
                            />
                          </li>
                          <li>
                            <Star
                              className="home-tranding__star-icon"
                              size={14}
                            />
                          </li>
                          <li>
                            <Star
                              className="home-tranding__star-icon"
                              size={14}
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="home-tranding__price-container">
                        <span>{item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeTranding;
