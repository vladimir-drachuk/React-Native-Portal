import { FC, ComponentProps } from 'react';
import { AntDesign } from '@expo/vector-icons';

const icons = {
  'close-circle-outline': { component: AntDesign, name: 'closecircleo' },
  'like': { component: AntDesign, name: 'heart' }
}

const sizes = {
  small: 16,
  medium: 24,
}

interface IconTypeProps {
  component: typeof AntDesign;
  name: string;
}

export type IconSize = 'small' | 'medium';

export interface IconProps extends Omit<ComponentProps<IconTypeProps['component']>, 'name' | 'size'>{
  type: keyof typeof icons;
  size?: IconSize | number;
}

export const Icon: FC<IconProps> = ({ type, size = 'medium', ...props }) => {
  const { component: IconComponent, name: componentName } = icons[type];

  const numberSize = typeof size === 'number' ? size : sizes[size] ?? sizes.medium;  

  return (
    <IconComponent
      {...props}
      size={numberSize}
      name={componentName as ComponentProps<typeof IconComponent>['name']}
    />
  )
};
