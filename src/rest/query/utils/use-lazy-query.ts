import { useCallback, useEffect, useRef, useState } from 'react';
import {
  DefinedInitialDataOptions,
  QueryKey,
  useQuery,
} from '@tanstack/react-query';

interface LazyQueryOptions<P, D> extends Omit<DefinedInitialDataOptions<unknown, Error, unknown, QueryKey>, 'queryFn'> {
  queryFn: (props: P) => Promise<D>; 
}

export const useLazyQuery = <P, D>({ queryFn, ...queryOptions }: LazyQueryOptions<P, D>) => {
  const [enabled, setEnabled] = useState(false);
  const [props, setProps] = useState<P | null>(null);
  const pendingRequestRef = useRef<((value: D) => void) | null>(null);

  const { isLoading, data, refetch, ...restParams } = useQuery({
    ...queryOptions,
    queryFn: () => props && queryFn(props),
    enabled,
  });

  const handleEnabled = useCallback((props: P) => {
    if (pendingRequestRef.current) return;
    
    return new Promise<D>((resolve) => {
      pendingRequestRef.current = resolve;
      setProps(props);
      setEnabled(true);
      refetch();
    }
  )}, []);

  useEffect(() => {
    if (!isLoading && enabled) {
      setEnabled(false);
      setProps(null);
    }
  }, [isLoading, enabled]);

  useEffect(() => {
    if (data && pendingRequestRef.current) {
      pendingRequestRef.current(data as D);
      pendingRequestRef.current = null;
    }
  }, [data]);

  return [
    handleEnabled,
    { isLoading, data, refetch, ...restParams }
  ] satisfies [typeof handleEnabled, ReturnType<typeof useQuery>];
}
