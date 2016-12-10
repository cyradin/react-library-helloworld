var request = require('supertest');
var expect = require('chai').expect;
var app = require('../../../../index');

describe('POST /api/v1/auth/login', function () {
    it('should return 400 for requests with no data', function (done) {
        request(app)
            .post('/api/v1/auth/login')
            .expect(400, done)
    });

    it('should return 401 for requests with wrong data', function (done) {
        request(app)
            .post('/api/v1/auth/login')
            .type('json')
            .send(JSON.stringify({ username: 'foo', password: 'bar' }))
            .end(function (req, res) {
                expect(res.status).to.be.equal(401);
                done();
            })
    });

    it('should return HTTP 200 for authorized users', function (done) {
        /* TODO ADD TEST */
        request(app)
            .post('/api/v1/auth/login')
            .type('json')
            .send(JSON.stringify({ username: 'foo', password: 'bar' }))
            .end(function (req, res) {
                expect(res.status).to.be.equal(200);
                done();
            })
    });
})
/*
describe('POST /api/v1/auth/check', function () {
    it('should return HTTP 200', function (done) {
        request(app)
            .post('/api/v1/auth/check')
            .expect(200, done)
    });

    it('should return "authorized: false" for unauthorized users', function (done) {
        request(app)
            .post('/api/v1/auth/check')
            .expect({
                success: true,
                data: {
                    authorized: false
                }
            }, done)
    });

    it('should return "authorized: true" and new token for authorized users', function (done) {
        request(app)
            .post('/api/v1/auth/check')
            .expect({
                success: true,
                data: {
                    authorized: true,
                    authToken: /\w+/
                }
            }, done)
    });
})

describe('POST /api/v1/auth/logout', function () {
    it('should return 401 for unauthorized users', function (done) {
        request(app)
            .get('/')
            .expect(200, done)
    });

    it('should return HTTP 200 for authorized users', function (done) {
        request(app)
            .get('/')
            .expect(200, done)
    });
})
*/