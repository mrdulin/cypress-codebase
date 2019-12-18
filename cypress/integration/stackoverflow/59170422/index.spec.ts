/// <reference types="Cypress" />

import { publish, pubnub } from './';

describe('59170422', () => {
  it('should pass', () => {
    const logSpy = cy.spy(console, 'log');
    const addListenerStub = cy.stub();
    const publishStub = cy.stub().resolves({});
    const subscribeStub = cy.stub();
    Object.defineProperty(pubnub, 'addListener', { value: addListenerStub });
    Object.defineProperty(pubnub, 'publish', { value: publishStub });
    Object.defineProperty(pubnub, 'subscribe', { value: subscribeStub });
    publish();
    addListenerStub.yieldTo('status', { category: 'PNConnectedCategory' });
    expect(addListenerStub).to.have.been.calledOnce;
    expect(publishStub).to.have.been.calledOnce;
    publishStub.yield(200, 'haha');
    expect(logSpy).to.have.been.calledWith(200, 'haha');
    addListenerStub.yieldTo('message', { message: { title: 'I am title', description: 'I am description' } });
    expect(logSpy).to.have.been.calledWith('I am title');
    expect(logSpy).to.have.been.calledWith('I am description');
  });
});
