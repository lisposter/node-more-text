'use strict';

var http = require('http');
var querystring = require('querystring');

function moreText(n, limit, callback) {
    n = n || 1;

    callback = Array.prototype.slice.call(arguments, -1)[0];

    if (typeof callback !== 'function') {
        throw new Error('no callback function');
    }

    if (Object.prototype.toString.call(limit) === '[object Array]') {
        limit = limit.join(',');
    }

    var options = {
        hostname: 'more.handlino.com',
        port: 80,
        path: '/sentences.json?' + querystring.stringify({
            n: n,
            limit: limit
        }),
        method: 'GET'
    };

    var req = http.request(options, function(res) {
        var chunks = [];

        res.on('data', function(chunk) {
            chunks.push(chunk);
        });

        res.on('end', function() {
            var sentences = Buffer.concat(chunks).toString('utf8');
            callback(null, JSON.parse(sentences));
        });

    });

    req.on('error', function(err) {
        callback(err);
    });

    req.end();
}

module.exports = exports.moreText = moreText;
