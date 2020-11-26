var count = function (arr) {
  return "这里有" + arr.length + "11";
};
var pi = 3.14;

// 声明被引用的方法和属性
module.exports.count = count;
module.exports.pi = pi;
