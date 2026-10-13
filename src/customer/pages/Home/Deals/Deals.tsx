import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DealCard from "./DealCard";
import { useAppSelector } from "../../../../Redux Toolkit/Store";
import type { Deal } from "../../../../types/dealTypes";

export default function DealSlider() {
const homePage = useAppSelector((store) => store.homePage);  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024, // Large screen
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // Tablet
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // Mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-5 lg:px-20">
      <div className="slide-container  ">
        <Slider {...settings}>
          {homePage.homePageData?.deals
            ?.filter(
              (deal: Deal, index: number, deals: Deal[]) =>
                index ===
                deals.findIndex(
                  (item: Deal) =>
                    item.category?.categoryId === deal.category?.categoryId,
                ),
            )
            .map((item: Deal) => (
              <div key={item.id} className="border">
                <DealCard deal={item} />
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}
