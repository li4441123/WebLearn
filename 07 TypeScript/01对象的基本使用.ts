// 类型注解
interface Ijay {
  name: string;
  age: number;
  address: string;
  seyhi: () => string;
}

// 创建接口来作为对象的类型注解，类似契约。创建对象是可使用此接口
let jay: Ijay = {
  name: "周杰伦",
  age: 36,
  address: "TaiWan",
  seyhi: function () {
    return "hello";
  },
};

// 修改对象的值，同样要符合类型注解里的类型
jay.name = "周董";
jay.age = 19;
jay.address = "台北";

// 打印
console.log(jay.name, jay.age, jay.address, jay.seyhi());
