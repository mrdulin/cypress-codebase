import React from 'react';
import { testApiSlice } from './testApi';
// import { MainContent } from './mainContent';

describe('Test component testing ', () => {
  it('useFetchDataFromRTKQ called without problem',  async () => {
    cy.stub(testApiSlice, 'useGetDataFromRTKQQuery').returns({ data: 'mockedData' });
    const { MainContent } = await import('./mainContent');
    cy.mount(<MainContent />);
    expect(testApiSlice.useGetDataFromRTKQQuery).to.be.called;
  });
});
