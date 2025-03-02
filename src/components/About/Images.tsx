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

export default function Images() {
  const [selectedImage, setSelectedImage] = useState<
    React.ImgHTMLAttributes<HTMLImageElement> | undefined
  >(undefined);
  const [dialogOpen, setDialogOpen] = useState(false);

  const images: React.ImgHTMLAttributes<HTMLImageElement>[] = [
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

  function handleCarouselItemClick(
    image: React.ImgHTMLAttributes<HTMLImageElement>
  ) {
    setDialogOpen(true);
    setSelectedImage(image);
  }

  return (
    <>
      <Carousel className="mx-24">
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem
              className="md:basis-auto flex justify-center"
              onClick={() => handleCarouselItemClick(image)}
            >
              <CarouselImage {...image} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Dialog open={dialogOpen}>
        <DialogContent className="flex flex-col justify-center">
          <DialogHeader>
            <DialogTitle>John's Tack Repair Service</DialogTitle>
            <DialogDescription>{selectedImage?.alt}</DialogDescription>
          </DialogHeader>
          <ImageProxy
            options={{ format: "webp", height: 510 }}
            {...selectedImage}
            className="h-96 lg:h-[500px] w-auto"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
