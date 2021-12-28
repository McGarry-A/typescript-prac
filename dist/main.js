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
