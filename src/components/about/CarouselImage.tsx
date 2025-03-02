import ImageProxy from "../ImageProxy";

export default function CarouselImage({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <ImageProxy
      options={{ format: "webp", height: 384 }}
      {...props}
      className={`${props.className} h-36 sm:h-48 lg:h-96 w-auto`}
    />
  );
}
