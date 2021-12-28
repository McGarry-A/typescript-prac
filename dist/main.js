// Variables
// let hello: string = "world";
// Functions 
// const getFullName = (name: string, sirname: string): string => {
//     return `${name} ${sirname}`
// }
// getFullName("Ahmed","McGarry")
// Objects 
// const user: {name: string, age: number} = {
//     name: "Ahmed",
//     age: 25
// };
// const user2: {name: string, age?: number} = {
//     name: "Jack",
// };
// Objects can be done better by using interfaces
// interface userInterface {
//     name: string,
//     age?: number,
//     getMessage(): string define functions and return value
// }
// const user: userInterface = {
//     name: "ahmed",
//     age: 24,
//     getMessage() {
//         return `hello ${name}`
//     }
// }
// const user2: userInterface = {
//     name: "jack",
//     getMessage() {
//         return `hello ${name}`
//     }
// }
// Union types
// interface userInterface {
//     name: string
//     surname: string
// }
// let chapterName: string | number = 1;
// let errorMessage: string | null = null; 
// let user: userInterface | null = null;
// Type aliases
// type ID = string
// type PopularTag = string
// interface userInterface {
//     id: ID;
//     name: string
//     age: number
// }
// let user: ID = "user-one"
// const popularTags: PopularTag[] = ['dragon', 'coffee']
// Combining unions and type aliases
// type MaybePopularTag = PopularTag | null
// const dragonsTag: MaybePopularTag = 'dragon'
// void is undefined or null
// const doSomething = (): void => {}
// avoid using type any as it turns off typescript checks 
// const doSomething = (): never => {
//     throw 'never';
// }
// a function that returns never is a function that will never end 
// We can not assign unknown directly into other types
// let vAny: any = 10
// let vUnknown: unknown = 10
// let s1: string = vAny
// let s2: string = vUnknown as string
// Type assertion -- want to convert one type to another
// console.log(vAny.foo())
// console.log(vUnknown.foo())
// let pageNumber: string = "1"
// let numericPageNumber: number = (pageNumber as unknown) as number
