'use strict';
var moreText = require('../');
var should = require('should');

describe('moreText()', function() {
    it('it should return a object with sentences', function(done) {
        moreText(function(err, data) {
            data.sentences.should.not.be.empty;
            done();
        });
    });

    it('should accepts argument n', function(done) {
        moreText(5, function(err, data) {
            data.sentences.length.should.be.exactly(5);
            done();
        });
    });

    it('should accepts argument limit', function(done) {
        moreText(5, 10, function(err, data) {
            data.sentences.length.should.be.exactly(5);
            data.sentences.forEach(function (sentence) {
                sentence.length.should.be.below(11);
            });
            done();
        });
    });

    it('should accepts argument limit in range', function(done) {
        moreText(5, [5, 10], function(err, data) {
            data.sentences.length.should.be.exactly(5);
            data.sentences.forEach(function (sentence) {
                sentence.length.should.be.within(5, 10);
            });
            done();
        });
    });

    it('should accepts argument limit in string', function(done) {
        moreText(5, '5,10', function(err, data) {
            data.sentences.length.should.be.exactly(5);
            data.sentences.forEach(function (sentence) {
                sentence.length.should.be.within(5, 10);
            });
            done();
        });
    });

    it('should accepts argument limit in number', function(done) {
        moreText(5, 10, function(err, data) {
            data.sentences.length.should.be.exactly(5);
            data.sentences.forEach(function (sentence) {
                sentence.length.should.be.below(11);
            });
            done();
        });
    });
});
