var supertest = require('supertest');
var request = require('supertest');
var expect = require('chai').expect;

var app = require('../../index');

describe('GET /', function () {
    it('should be html document', function (done) {
        request(app)
            .get('/')
            .end(function (req, res) {
                expect(res.header).to.have.any.keys('content-type');
                expect(res.header['content-type']).to.be.match(/text\/html/);
                done();
            })
    });

    it('should contain bundle script', function (done) {
        request(app)
            .get('/')
            .end(function (req, res) {
                expect(res.text).to.match(/bundle.js/);
                done();
            })
    });

    it('should return HTTP 200', function (done) {
        request(app)
            .get('/')
            .end(function (req, res) {
                expect(res.status).to.be.equal(200);
                done();
            })
    });
})

describe('GET /foo/bar', function () {
    it('should return 200 for every url', function (done) {
        request(app)
            .get('/')
            .end(function (req, res) {
                expect(res.status).to.be.equal(200);
                done();
            })
    });
})
