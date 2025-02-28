import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselImage from "./CarouselImage";

export default function Images() {
  return (
    <Carousel className="mx-20">
      <CarouselContent>
        <CarouselItem className="md:basis-auto flex justify-center">
          <CarouselImage src="/img/img1.jpg" />
        </CarouselItem>
        <CarouselItem className="md:basis-auto flex justify-center">
          <CarouselImage src="/img/img2.jpg" />
        </CarouselItem>
        <CarouselItem className="md:basis-auto flex justify-center">
          <CarouselImage src="/img/img3.jpg" />
        </CarouselItem>
        <CarouselItem className="md:basis-auto flex justify-center">
          <CarouselImage src="/img/img4.jpg" />
        </CarouselItem>
        <CarouselItem className="md:basis-auto flex justify-center">
          <CarouselImage src="/img/img5.jpg" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
