import Image from "next/image";
import leftBannerImg from "@/assets/images/left-banner-image.jpg";
import rightBannerImg1 from "@/assets/images/baner-right-image-01.jpg";
import rightBannerImg2 from "@/assets/images/baner-right-image-02.jpg";
import rightBannerImg3 from "@/assets/images/baner-right-image-03.jpg";
import rightBannerImg4 from "@/assets/images/baner-right-image-04.jpg";

import "./HeroHome.scss";

const HeroHome = () => {
  return (
    <section className="hero-home">
      <div className="container">
        <div className="hero-home__wrapper">
          <div className="hero-home__row">
            <div className="hero-home__col-lg-6">
              <div className="hero-home__left-content">
                <div className="hero-home__thumb">
                  <div class="hero-home__inner-content">
                    <h4>We Are Hexashop</h4>
                    <span>Lorem ipsum dolor sit amet</span>
                    <div class="hero_home__btn-wrapper">
                      <button className="main-border-button">
                        Purchase Now!
                      </button>
                    </div>
                  </div>
                  <Image
                    src={leftBannerImg}
                    alt="image"
                    className="hero-home__banner-image"
                    width={550}
                    height={550}
                  />
                </div>
              </div>
            </div>
            <div className="hero-home__col-lg-6">
              <div className="hero-home__right-content">
                <div className="hero-home__row">
                  <div className="hero-home__col-lg-6">
                    <div className="hero-home__right-img-wrapper">
                      <div className="hero-home__thumb">
                        <div class="hero-home__inner-content">
                          <h4>Women</h4>
                          <span>Best Clothes For Women</span>
                        </div>
                        <div class="hero-home__hover-content">
                          <div class="inner">
                            <h4>Women</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="hero_home__btn-wrapper">
                              <button className="main-border-button">
                                Discover More
                              </button>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={rightBannerImg1}
                          alt="image"
                          className="hero-home__banner-image"
                          width={550}
                          height={550}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hero-home__col-lg-6">
                    <div className="hero-home__right-img-wrapper">
                      <div className="hero-home__thumb">
                        <div class="hero-home__inner-content">
                          <h4>Men</h4>
                          <span>Best Clothes For Men</span>
                        </div>
                        <div class="hero-home__hover-content">
                          <div class="inner">
                            <h4>Men</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="hero_home__btn-wrapper">
                              <button className="main-border-button">
                                Discover More
                              </button>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={rightBannerImg2}
                          alt="image"
                          className="hero-home__banner-image"
                          width={550}
                          height={550}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hero-home__col-lg-6">
                    <div className="hero-home__right-img-wrapper">
                      <div className="hero-home__thumb">
                        <div class="hero-home__inner-content">
                          <h4>Kids</h4>
                          <span>Best Clothes For Kids</span>
                        </div>
                        <div class="hero-home__hover-content">
                          <div class="inner">
                            <h4>Kids</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="hero-home__btn-wrapper">
                              <button className="main-border-button">
                                Discover More
                              </button>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={rightBannerImg3}
                          alt="image"
                          className="hero-home__banner-image"
                          width={550}
                          height={550}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="hero-home__col-lg-6">
                    <div className="hero-home__right-img-wrapper">
                      <div className="hero-home__thumb">
                        <div class="hero-home__inner-content">
                          <h4>Accessories</h4>
                          <span>Best Trend Accessories</span>
                        </div>
                        <div class="hero-home__hover-content">
                          <div class="inner">
                            <h4>Accessories</h4>
                            <p>
                              Lorem ipsum dolor sit amet, conservisii ctetur
                              adipiscing elit incid.
                            </p>
                            <div class="hero_home__btn-wrapper">
                              <button className="main-border-button">
                                Discover More
                              </button>
                            </div>
                          </div>
                        </div>
                        <Image
                          src={rightBannerImg4}
                          alt="image"
                          className="hero-home__banner-image"
                          width={550}
                          height={550}
                        />
                      </div>
                    </div>
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

export default HeroHome;
