import { useEffect } from 'react';

export const useMountEffect = (func) => useEffect(func, []);
