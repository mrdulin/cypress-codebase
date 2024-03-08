/// <reference types="Cypress" />

function once(cb: Function) {
  return () => cb();
}

describe('unittesting', () => {
  it('should only call function once', () => {
    let called = 0;
    const callMe = once(() => called++);
    callMe();
    callMe();
    expect(called).to.equal(2);
  });
});
