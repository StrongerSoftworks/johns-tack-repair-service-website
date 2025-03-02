import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselImage from "./CarouselImage";

export default function Images() {
  const images = [
    {
      src: "/img/img2.jpg",
      alt: "",
    },
    {
      src: "/img/img1.jpg",
      alt: "",
    },
    {
      src: "/img/img3.jpg",
      alt: "",
    },
    {
      src: "/img/img4.jpg",
      alt: "",
    },
    {
      src: "/img/img5.jpg",
      alt: "",
    },
  ];

  return (
    <Carousel className="mx-24">
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className="md:basis-auto flex justify-center">
            <CarouselImage {...image} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
