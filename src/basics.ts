// Typescriptの基礎知識

// <-- 基本アノテーション
let testNumber: number = 1
const testString: string = 'Hello world'
const testBoolean: boolean = true
// -->

// <-- 変数の初期化
let initNumber: number
initNumber = 1
// -->

// <-- 型「String」は型「Number」に割り当てられません。
// testNumber = 'Hello World'
// -->


// <-- 変数の型は、定義によって推論されます
const inferredVar = 1
console.log(`The variable inferredVar is a number ==> ${inferredVar}`)
// -->

// <-- Anyアノテーション
let testAny: any = 'Test'
// Any変数では、他のタイプの変数を変更することができます。
testAny = true
console.log(`The variable testAny who was a String become a ${testAny} Boolean`)
// -->

// <-- Arrayアノテーション
const testArrayNb: number[] = [1, 2, 3]
const testArrayAny: any[] = [1, 'Hello world', true]
// -->

// <-- Arrayで「String」型の引数は「Number」型のパラメータに割り当てられません。
// const testArray2: number[] = [1, 2, 3, 'Hello world']
// testArray.push('true')
// -->

// <-- Tupleアノテーション
const testTuple: [number, string, boolean] = [1, 'Hello world', true]
// -->

// <-- Tuple Arrayアノテーション
let testTupleArray: [number, string, boolean][]
testTupleArray = [
    [1, 'Welcome', true],
    [2, 'to my', true],
    [3, 'Github', true],
]
// -->

// <-- Unionアノテーション
let testUnion: number | string = 1
testUnion = 'Hello'
// -->

// <-- Enumアノテーション
enum testEnumNumber {
    firstEnum,
    secondEnum,
    thirdEnum
}
console.log(`The value of firstEnum is: ${testEnumNumber.firstEnum}`)
console.log(`The value of firstEnum is: ${testEnumNumber.secondEnum}`)
console.log(`The value of firstEnum is: ${testEnumNumber.thirdEnum}`)

enum testEnumChangeNb {
    firstEnum = 1,
    secondEnum,
    thirdEnum
}

console.log(`The value of firstEnum is: ${testEnumChangeNb.firstEnum}`)
console.log(`The value of firstEnum is: ${testEnumChangeNb.secondEnum}`)
console.log(`The value of firstEnum is: ${testEnumChangeNb.thirdEnum}`)

enum testEnumString {
    firstEnum = 'Welcome',
    secondEnum = 'to my',
    thirdEnum = 'Github'
}

console.log(`The value of firstEnum is: ${testEnumString.firstEnum}`)
console.log(`The value of firstEnum is: ${testEnumString.secondEnum}`)
console.log(`The value of firstEnum is: ${testEnumString.thirdEnum}`)
// -->

// <-- Objectsアノテーション
const testObjectsTypeIn: {
    myNumber: number,
    myString: string,
    myBoolean: boolean
} = {
    myNumber: 1,
    myString: 'Hello world',
    myBoolean: true
}
console.log(`My testObjectsTypeIn is : ${JSON.stringify(testObjectsTypeIn)}`)

type ObjectType = {
    myNumber: number,
    myString: string,
    myBoolean: boolean
}
const testObjectsTypeOut: ObjectType = {
    myNumber: 2,
    myString: 'Welcome to my Github',
    myBoolean: false
}
console.log(`My testObjectsTypeOut is : ${JSON.stringify(testObjectsTypeOut)}`)
// -->

// <-- Type Assertionアノテーション
const varToAssert: any = 1
const testAssertion1 = <number>varToAssert
const testAssertion2 = varToAssert as number
// -->