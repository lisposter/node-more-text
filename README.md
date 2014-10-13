# more-text
[![NPM version](https://img.shields.io/npm/v/more-text.svg?style=flat)](https://www.npmjs.org/package/more-text)
[![Build status](https://img.shields.io/travis/lisposter/node-more-text.svg?style=flat)](https://travis-ci.org/lisposter/node-more-text)

[more text](http://more.handlino.com/api) for node

## Installation

```bash
$ npm install more-text
```

## Example
```js
moreText(2, [1, 5], function(err, data) {
    console.log(data)
});
```
`data` may looks like:

```js
{ sentences: [ '什麼？', '天下無敵。' ] }
```


## Usage
```js
moreText(n, limit, callback)
```

* `n`: how many sentences you need.
* `limit`(array/string/number):  limit the words number of each sentence.
    * if array has two elements, all the sentences' word number will between first element and the second element.
    * if there is only one element, it indicate the maxium number of words.
    * you can also pass an string or number to assign the limit:
        * `1`
        * `'1,10'`
        * `'5'`
* `callback(err, result)`: callback will be passed two arguments:
    * `err`: error cataching
    * `result`: the response

## License

MIT © [Leigh Zhu](#)
