import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styled from 'styled-components';
import colors from '../../assets/colors';
import { useThemeContext } from '../../contexts/theme.context';

interface ImageBoxProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}
const ImageLoader = ({ src }: { src: string }) => {
  const imageSrc = `${src}`;
  return imageSrc;
};

const ImageBox = ({ src, alt, width, height }: ImageBoxProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const themeName = useThemeContext();
  return (
    <ImageBoxBlock>
      <Image
        loader={ImageLoader}
        src={src ? src : ''}
        alt={alt}
        width={width}
        height={height}
        onLoadingComplete={() => setLoading(false)}
      />
      <ClipLoader
        color={themeName === 'dark' ? colors.red[1] : colors.blue[1]}
        loading={loading}
        size={50}
        ref={loadingRef}
      />
    </ImageBoxBlock>
  );
};

const ImageBoxBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > span {
    position: absolute;
    border-color: ${({ theme }) => theme.mode.mainColor};
  }
`;

export default ImageBox;
