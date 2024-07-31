const request = require('supertest');
const sinon = require('sinon');
const app = require('./app');
const Utils = require('./utils');
const { expect } = require('chai');

describe('GET /payment', function() {
    let stub;

    beforeEach(function() {
        stub = sinon.stub(Utils, 'calculateNumber').returns(120);
    });

    afterEach(function() {
        stub.restore();
    });

    it('should respond with the total', async function() {
        const response = await request(app).get('/payment');
        expect(response.text).to.equal('The total is: 120');
    });

    it('should call calculateNumber with SUM and correct arguments', async function() {
        await request(app).get('/payment');
        expect(stub.calledOnceWith('SUM', 100, 20)).to.be.true;
    });
});

