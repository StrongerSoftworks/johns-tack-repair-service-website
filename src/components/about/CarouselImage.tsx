export default function CarouselImage({
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      className={`${props.className} h-36 sm:h-48 lg:h-96 w-auto`}
    />
  );
}
