import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import CarouselImage from "./CarouselImage";
import { useState } from "react";
import ImageProxy from "../ImageProxy";
import useSwipe from "@/hooks/useSwipe";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

export default function Images() {
  const swipeHandlers = useSwipe({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const images: React.ImgHTMLAttributes<HTMLImageElement>[] = [
    {
      src: "/img/img5.jpg",
      alt: "Canadian calvary bridles",
    },
    {
      src: "/img/img2.jpg",
      alt: "Custom belts",
    },
    {
      src: "/img/img1.jpg",
      alt: "Leather repair",
    },
    {
      src: "/img/img3.jpg",
      alt: "Knife sheaths",
    },
    {
      src: "/img/img4.jpg",
      alt: "Local workshop in Mount Brydges",
    },
  ];

  function handleCarouselItemClick(index: number) {
    setSelectedIndex(index);
  }

  function handleSwipeLeft() {
    if (selectedIndex != images.length - 1) {
      const newIndex = selectedIndex + 1;
      setSelectedIndex(newIndex);
    }
  }

  function handleSwipeRight() {
    if (selectedIndex != 0) {
      const newIndex = selectedIndex - 1;
      setSelectedIndex(newIndex);
    }
  }

  return (
    <>
      <Dialog>
        <Carousel className="mx-12 md:mx-24">
          <DialogTrigger>
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="md:basis-auto flex justify-center"
                  onClick={() => handleCarouselItemClick(index)}
                >
                  <CarouselImage {...image} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </DialogTrigger>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <DialogContent className="flex flex-col justify-center">
          <DialogHeader>
            <DialogTitle>John's Tack Repair Service</DialogTitle>
            <DialogDescription>{images[selectedIndex]?.alt}</DialogDescription>
          </DialogHeader>

          <ImageProxy
            {...swipeHandlers}
            options={{ format: "webp", height: 510 }}
            {...images[selectedIndex]}
            className="h-96 lg:h-[500px] w-auto"
          />

          <div className="flex flex-row">
            <Button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-gray-950 h-8 w-8 rounded-full"
              onClick={handleSwipeRight}
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>
            <Button
              className="ms-auto inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground text-gray-950 h-8 w-8 rounded-full"
              onClick={handleSwipeLeft}
            >
              <ArrowRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
