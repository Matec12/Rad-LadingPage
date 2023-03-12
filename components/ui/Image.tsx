import React from 'react';

type ImageProps = {
  src: string;
} & React.ComponentProps<'img'>;

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ src, ...rest }) => {
    return <img src={src} {...rest} />;
  }
);

export default Image;
