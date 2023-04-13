import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import styled, { css } from 'styled-components';
import colors from '../../assets/colors';
import { useThemeContext } from '../../contexts/theme.context';

interface ImageBoxProps {
  src: string | StaticImageData;
  alt: string;
  $islogo?: boolean;
}
const ImageLoader = ({ src }: { src: string }) => {
  const imageSrc = `${src}`;
  return imageSrc;
};

const ImageBox = ({ src, alt, ...props }: ImageBoxProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const themeName = useThemeContext();
  return (
    <ImageBoxBlock className="image_box">
      <Img
        loader={ImageLoader}
        src={src ? src : ''}
        alt={alt}
        layout="fill"
        onLoadingComplete={() => setLoading(false)}
        {...props}
      />
      <ClipLoader
        color={themeName === 'dark' ? colors.red[1] : colors.blue[1]}
        loading={loading}
        size={50}
      />
    </ImageBoxBlock>
  );
};

const Img = styled(Image)`
  min-width: 120px;
  height: auto !important;
  position: relative !important;
  ${(props: ImageBoxProps) =>
    props.$islogo &&
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
