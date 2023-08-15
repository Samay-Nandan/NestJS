import { Loader } from '@src/components';
import { lazy } from 'react';

export const lazily = (resolver: Promise<any>, name: string) => {
  return lazy(async () => {
    try {
      const resolved = await resolver;
      return { default: resolved[name] };
    } catch (error) {
      return { default: Loader };
    }
  });
};
