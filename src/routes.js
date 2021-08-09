import ImageInTextView from "./components/ImageInTextView/ImageInTextView";
import CarouselIndicatorView from "./components/CarouselIndicatorView/CarouselIndicatorView";
import ProgressBarView from "./components/ProgressBarView/ProgressBarView";

const routes = [
  {
    url: "/progress-bar",
    name: "Progress bar",
    component: ProgressBarView,
  },
  {
    url: "/image-reveal-hide",
    name: "Image in text",
    component: ImageInTextView,
  },
  {
    url: "/carousel-indicator",
    name: "Carousel indicator",
    component: CarouselIndicatorView,
  },
];

export default routes;
