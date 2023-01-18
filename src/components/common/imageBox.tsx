import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';

interface ImageBoxProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

const ImageBox = ({ src, alt, width, height }: ImageBoxProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => loadingRef.current?.remove()}
      />
      <div className="loading" ref={loadingRef} />
    </>
  );
};

export default ImageBox;
