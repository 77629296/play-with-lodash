import assert from 'assert';
import assocIndexOf from '../src/.internal/05-assocIndexOf';

// 找出指定的 `key` 在二维数组中的索引值。
describe('assocIndexOf', function() {  
  var array = [
    ['keyString', 'valueString'],
    ['keyArray', []],
    ['keyObject', {}]
  ];            

  it('`_.assocIndexOf` 1', function() {
    assert.strictEqual(assocIndexOf(array, 'keyString'), 0);
  });

  it('`_.assocIndexOf` 2', function() {
    assert.strictEqual(assocIndexOf(array, 'keyObject'), 2);
  });
});