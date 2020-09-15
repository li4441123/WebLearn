// const是常量无法被重新赋值,不可写
const changliang: number = 0;

// 1、获取数组的长度
let arr1: string[] = ["北京", "上海", "成都", "杭州"];
console.log(arr1.length);

// 2、把一个或者多个元素添加到数组末尾
// push的返回值是添加之后的数组长度
var num: number = arr1.push("青岛");
console.log(arr1, num);

// 3、forEach遍历数组,索引为index，元素为item
arr1.forEach(function (item, index) {
  console.log(item);
});

//4、forEach练习
//判断数组里的数据有没有大于10的值（性能不好）
let arr2: number[] = [2, 3, 5, 76, 8, 9, 65];
let has: boolean = false;
arr2.forEach(function (item) {
  if (item > 10) {
    has = true;
  }
});
console.log(has);

//5、some对象和foreach类似
//遍历数组，查找是否有一个满足条件的元素（如果有，停止循环，后续不再执行）
let bool: boolean = arr2.some(function (item) {
  console.log(item);
  if (item > 10) {
    //已经找到满足条件的元素，返回true,停止循环
    return true;
  } else {
    //返回false，继续循环
    return false;
  }
});
console.log(bool);
