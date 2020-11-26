let cells = document.querySelectorAll('.cell');
let cornt = 'red';
// console.log(cells);
cells.forEach(function (item) {
  // console.log(item);
  let cell = item as HTMLDivElement;
  //{once: true}使当前点击事件只触发一次
  cell.addEventListener('click', clickcell, { once: true });

  //点击事件的处理程序
  function clickcell() {
    console.log(this);
    this.style.color = cornt;
    cornt = cornt === 'red' ? 'yellow' : 'red';
  }
});

enum Gender {
  a = 3,
  b,
  c = 100,
  d
}
console.log(Gender.a);
