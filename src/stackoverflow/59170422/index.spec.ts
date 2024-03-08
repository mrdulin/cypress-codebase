/// <reference types="Cypress" />

import { publish, pubnub } from './';

describe('59170422', () => {
  it('should pass', () => {
    const logSpy = cy.spy(console, 'log');
    const addListenerStub = cy.stub(pubnub, 'addListener');
    const publishStub = cy.stub(pubnub, 'publish').resolves({});
    const subscribeStub = cy.stub(pubnub, 'subscribe');
    publish();
    addListenerStub.yieldTo('status', { category: 'PNConnectedCategory' });
    expect(addListenerStub).to.have.been.calledOnce;
    expect(publishStub).to.have.been.calledOnce;
    expect(subscribeStub).to.have.been.calledOnce;
    publishStub.yield(200, 'haha');
    expect(logSpy).to.have.been.calledWith(200, 'haha');
    addListenerStub.yieldTo('message', { message: { title: 'I am title', description: 'I am description' } });
    expect(logSpy).to.have.been.calledWith('I am title');
    expect(logSpy).to.have.been.calledWith('I am description');
  });
});
