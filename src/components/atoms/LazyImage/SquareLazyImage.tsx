import styled from "@emotion/styled";
import { useTheme } from "../../../hooks/useTheme";
interface LazyImageProps {
  alt: string;
  src: string;
  size?: number;
}

export const SquareLazyImage = ({ src, alt, size }: LazyImageProps) => {
  const { windowMode } = useTheme();

  const Image = styled.img`
    object-fit: cover;
  `;

  return (
    <Image
      loading="lazy"
      src={src}
      alt={alt}
      aria-placeholder="alt"
      width={(size ?? windowMode === "phone") ? 140 : 200}
      height={(size ?? windowMode === "phone") ? 140 : 200}
    />
  );
};
