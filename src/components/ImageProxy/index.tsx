export interface IImageProxyOptions {
  height?: number;
  width?: number;
  ratio?: string;
  mode?: string;
  format?: string;
  quality?: number;
}

export interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  options?: IImageProxyOptions;
}

const buildSrc = (
  baseUrl: string,
  src: string | undefined,
  options?: IImageProxyOptions,
  dpi: number = 1
) => {
  if (!src) return "";

  let imageUrl = `${baseUrl}?img=${encodeURIComponent(
    src.startsWith("http") ? src : window.location.origin + src
  )}`;

  if (options) {
    Object.entries(options).forEach(([key, value]) => {
      if (value !== undefined) {
        // Adjust width and height based on DPI
        if (key === "width" || key === "height") {
          const scaledValue = Math.round(value * dpi);
          imageUrl += `&${key}=${scaledValue}`;
        } else {
          imageUrl += `&${key}=${value}`;
        }
      }
    });
  }

  return imageUrl;
};

const ImageProxy = ({
  options,
  ...props
}: IImage & React.ImgHTMLAttributes<HTMLImageElement>) => {
  if (import.meta.env.VITE_IMAGE_PATH) {
    props.src = `${import.meta.env.VITE_IMAGE_PATH}${props.src}`;
  }

  const proxyBaseUrl = import.meta.env.VITE_IMAGE_PROXY_URL;
  if (!proxyBaseUrl) {
    return (
      <img
        {...props}
        className={`max-h-full max-w-full object-contain ${props.className}`}
        loading="lazy"
      />
    );
  }

  const fallback = buildSrc(proxyBaseUrl, props.src, {
    ...options,
    format: "jpg",
  });
  const src1x = buildSrc(proxyBaseUrl, props.src, options, 1);
  const src2x = buildSrc(proxyBaseUrl, props.src, options, 2);
  const src3x = buildSrc(proxyBaseUrl, props.src, options, 3);

  return (
    <img
      {...props}
      src={fallback}
      srcSet={`${src1x} 1x, ${src2x} 2x, ${src3x} 3x`}
      className={`max-h-full max-w-full object-contain ${props.className}`}
      loading="lazy"
    />
  );
};

export default ImageProxy;
