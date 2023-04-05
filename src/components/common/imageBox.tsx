import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styled, { css } from 'styled-components';
import colors from '../../assets/colors';
import { useThemeContext } from '../../contexts/theme.context';

interface ImageBoxProps {
  src: string | StaticImageData;
  alt: string;
  isLogo?: boolean;
}
const ImageLoader = ({ src }: { src: string }) => {
  const imageSrc = `${src}`;
  return imageSrc;
};

const ImageBox = ({ src, alt, isLogo }: ImageBoxProps) => {
  const loadingRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const themeName = useThemeContext();
  return (
    <ImageBoxBlock>
      <Img
        loader={ImageLoader}
        src={src ? src : ''}
        alt={alt}
        layout="fill"
        isLogo={isLogo}
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

const Img = styled(Image)`
  min-width: 120px;
  height: auto !important;
  position: relative !important;
  ${(props: ImageBoxProps) =>
    props.isLogo &&
    css`
      max-width: 150px;
    `}
`;

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
