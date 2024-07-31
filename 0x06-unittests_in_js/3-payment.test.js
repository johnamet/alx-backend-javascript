const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
    let spy;

    beforeEach(function() {
        spy = sinon.spy(Utils, 'calculateNumber');
    });

    afterEach(function() {
        spy.restore();
    });

    it('should call calculateNumber with SUM and correct arguments', function() {
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledOnceWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct total', function() {
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(logSpy.calledOnceWith('The total is: 120')).to.be.true;
        logSpy.restore();
    });
});

