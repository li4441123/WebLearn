# offset与style区别

## offset
* offset可以得到任意样式表中的样式值
* offset系列获得的数值是没有单位的
* offsetWidth包含padding+border+width
* ofsetWidth等属性是只读属性，只能获取不能赋值
* 所以，我们想要获取元素大小位置，用offset更合适

## style
* style只能得到行内样式表中的样式值
* style.width获得的是带有单位的字符串
* style.width获得不包含padding和border的值
* style.width是可读写属性，可以获取也可以赋值
* 所以，我们想要给元素更改值，则需要用style改变