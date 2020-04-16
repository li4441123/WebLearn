function Animation(obj, distance, callback) {

    // 1.解决了多次重复调用事件加速度多次执行,每次点击都会清楚之前的定时器，然后才会开启新的定时器，保证只有一个定时器再走
    clearInterval(obj.time);
    // 2.解决了定时器名称重复,给不同的元素记录不同的计时器 obj.time ，不用声明多个var，节省内存空间
    obj.time = setInterval(function () {
        var setp = (distance - obj.offsetLeft) / 10; //缓动核心公式，放在定时器内部，每次执行，便会重新计算offsetleft值，每次逐渐减小，达到缓动效果
        setp = setp > 0 ? Math.ceil(setp) : Math.floor(setp);
        if (obj.offsetLeft == distance) {
            clearInterval(obj.time);
            if (callback) {
                //调用函数加小括号
                callback();
            }
        } else {
            obj.style.left = obj.offsetLeft + setp + 'px';
        }
    }, 15)
}