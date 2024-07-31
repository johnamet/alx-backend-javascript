const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', function() {
    let stub;

    beforeEach(function() {
        stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    });

    afterEach(function() {
        stub.restore();
    });

    it('should call calculateNumber and return 10', function() {
        const total = sendPaymentRequestToApi(100, 20);
        expect(total).to.equal(10);
        expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    });

    it('should log the correct total', function() {
        const logSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(logSpy.calledOnceWith('The total is: 10')).to.be.true;
        logSpy.restore();
    });
});

