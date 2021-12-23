//  number 赋给类型 Number，反之不然
let num: number;

let Num: Number;

Num = num; // ok

num = Num; // ts(2322)


