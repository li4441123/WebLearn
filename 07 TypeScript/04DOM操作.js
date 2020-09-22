var cells = document.querySelectorAll('.cell');
var cornt = 'red';
// console.log(cells);
cells.forEach(function (item) {
    // console.log(item);
    var cell = item;
    //{once: true}使当前点击事件只触发一次
    cell.addEventListener('click', clickcell, { once: true });
    //点击事件的处理程序
    function clickcell() {
        console.log(this);
        this.style.color = cornt;
        cornt = cornt === 'red' ? 'yellow' : 'red';
    }
});
var Gender;
(function (Gender) {
    Gender[Gender["a"] = 3] = "a";
    Gender[Gender["b"] = 4] = "b";
    Gender[Gender["c"] = 100] = "c";
    Gender[Gender["d"] = 101] = "d";
})(Gender || (Gender = {}));
console.log(Gender.a);
