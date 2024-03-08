import React from 'react';
import { testApiSlice } from './testApi';

const { useGetDataFromRTKQQuery } = testApiSlice;

export function MainContent() {
  const { data } = useGetDataFromRTKQQuery();

  return <pre>{JSON.stringify(data, null, 4)}</pre>;
}
