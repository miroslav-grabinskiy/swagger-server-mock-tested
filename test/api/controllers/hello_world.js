var should = require('should');
var request = require('supertest');
var server = require('../../../app');

describe('controllers', function() {

  describe('hello_world', function() {

    describe('/hello', function() {
      let id;

      it('should return an array', function(done) {

        request(server)
          .get('/hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            done();
          });
      });

      it('should save', function(done) {

        request(server)
          .post('/hello')
          .send({ name: 'Scott'})
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            id = res.body._id;
            delete res.body._id;
            delete res.body.__v;

            res.body.should.eql({
              name: 'Scott'
            });

            done();
          });
      });


      it('should exist created element', function(done) {

        request(server)
          .get('/hello')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200)
          .end(function(err, res) {
            should.not.exist(err);

            const list = res.body;
            const hasId = list.some(element => element._id === id);

            hasId.should.be.true();

            done();
          });
      });
    });

  });

});
