import { useCallback, useEffect, useState } from 'react';
import { DefinedInitialDataOptions, QueryKey, useQuery } from '@tanstack/react-query';

export const useLazyQuery = <T extends {}>(options: DefinedInitialDataOptions<unknown, Error, unknown, QueryKey>) => {
  const [enabled, setEnabled] = useState(false);
  const [props, setProps] = useState<T | null>(null);
  const { isLoading, ...restParams } = useQuery({
    ...options,
    queryFn: () => (options.queryFn as Function)?.(props),
    enabled,
  });

  const handleEnabled = useCallback((props: T) => {
    setProps(props);
    setEnabled(true), []
  }, []);

  useEffect(() => {
    if (!isLoading && enabled) {
      setEnabled(false);
      setProps(null);
    }
  }, [isLoading, enabled])

  return [handleEnabled, { isLoading, ...restParams }];
}