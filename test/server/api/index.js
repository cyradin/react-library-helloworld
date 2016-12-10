var request = require('supertest');
var expect = require('chai').expect;
var app = require('../../../index');

describe('GET /api/foo/bar', function () {
    it('should return 404', function (done) {
        request(app)
            .get('/api/foo/bar')
            .end(function (req, res) {
                expect(res.status).to.be.equal(404);
                done();
            })
    });
    it('should have a json content-type', function (done) {
        request(app)
            .get('/api/foo/bar')
            .end(function (req, res) {
                expect(res.header).to.have.any.keys('content-type');
                expect(res.header['content-type']).to.match(/application\/json/);
                done();
            })
    });
    it('should have a json error message', function (done) {
        request(app)
            .get('/api/foo/bar')
            .expect({
                success: false,
                error: {
                    code: "404",
                    message: "Not Found"
                }
            }, done)
    });
})

require('./v1');