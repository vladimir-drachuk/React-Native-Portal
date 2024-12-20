import { FC, ComponentProps } from 'react';
import { AntDesign } from '@expo/vector-icons';

const icons = {
  'close-circle-outline': { component: AntDesign, name: 'closecircleo' },
}

interface IconTypeProps {
  component: typeof AntDesign;
  name: string;
}

export interface IconProps extends Omit<ComponentProps<IconTypeProps['component']>, 'name'>{
  type: keyof typeof icons; 
}

export const Icon: FC<IconProps> = ({ type, ...props }) => {
  const { component: IconComponent, name: componentName } = icons[type];

  return (
    <IconComponent
      {...props}
      name={componentName as ComponentProps<typeof IconComponent>['name']}
    />
  )
};
