import { FC } from 'react';

import { Image, ImageProps } from '@/components/atomic/image';

import HiQoLogoSrc from '@/assets/images/hiqo-logo.png';

export const HiQoLogo: FC<Omit<ImageProps, 'source'>> = (props) => (
  <Image
    {...props}
    source={HiQoLogoSrc}
  />
)