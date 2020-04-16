# DOM重点核心（复习路径）

关于dom操作，是我们主要针对元素的操作，主要有创建、增、删、改、查、属性操作、事件操作

## 创建
* document.write( )
* innerHTML 
* document.createElement( )

## 增
* element.appendChild('element')  追加
* element.insertBefore('element', 位置) 再某元素之前添加

## 删
* element.removeChild('element')

## 改
主要修改DOM的元素属性，DOM元素的内容、属性、表单的值等
* 修改元素的属性：src、href、title等
* 修改普通元素内容：innerHTML、innerText
* 修改表单元素：value、type、disabled等
* 修改元素样式：style、className

## 查
主要获取查询的dom的元素
* DOM提供的API方法：getElementByld、getElementsByTagName 古老用法不太推荐
* H5提供的新方法：querySelector、querySelectorAll 提倡
* 利用节点操作获取元素：父（parentNode）、子（children）、兄（previousElementSibling、nextElementSibling）提倡

## 属性操作
主要针对于自定义属性。
* setAttribute：设置dom的属性值
* getAttribute：得到dom的属性值
* removeAttribute移除属性

## 事件操作
* onclick鼠标点击左键触发
* onmouseover鼠标经过触发
* onmouseout 鼠标离开触发
* onfocus获得鼠标焦点触发
* onblur失去鼠标焦点触发
* onmousemove鼠标移动触发
* onmouseup鼠标弹起触发
* onmousedown鼠标按下触发
