# mouseover 和 mouseenter的区别
* 当鼠标移动到元素上时就会触发mouseenter事件
* 类似mouseover，它们两者之间的差别是
* mouseover 鼠标经过自身盒子会触发，经过子盒子还会触发。mouseenter 只会经过自身盒子触发
* 之所以这样，就是因为mouseenter不会冒泡

* mouseover（鼠标经过） && mouseout（鼠标离开） -- 会冒泡
* mouseenter （鼠标经过） && mouseleave（鼠标离开） -- 不会冒泡