// type Author = {
//     firstName: string,
//     lastName: string
// }
// let val:unknown;
// const val6: Record<string, any> = val; // Will throw error
// const val7: any[] = val; // Will throw error
// const val8: (...args: any[]) => void = val; // Will throw error
// let myname: unknown = "Zia";
// console.log((myname as string).length);
// console.log((<string> myname).length)
// const enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
;
var colorName = Color1['2']; //Not allowed with const enums
console.log(colorName);
// const enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);
// enum Color2 {Red = 1, Green = 2, Blue = 4};//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
