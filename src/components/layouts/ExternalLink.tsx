import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import { FC, type ComponentProps } from 'react';
import { Platform } from 'react-native';

type Props = Omit<ComponentProps<typeof Link>, 'href'> & { href: string };

export const ExternalLink: FC<Props> = ({ href, ...rest }) => (
  <Link
    target="_blank"
    {...rest}
    href={href}
    onPress={async (event) => {
      if (Platform.OS !== 'web') {
        // Prevent the default behavior of linking to the default browser on native.
        event.preventDefault();
        // Open the link in an in-app browser.
        await openBrowserAsync(href);
      }
    }}
  />
);
