// <-- Functionsアノテーション
function returnNumber(x: number, y: number): number {
    return x + y
}
console.log(`1 + 2 = ${returnNumber(1, 2)}`)

function returnNothing (myMessage: boolean | string): void {
    console.log(myMessage)
}

returnNothing(true)
returnNothing('I return nothing')
// -->

// <-- Interfacesアノテーション
interface Interface1 {
    readonly myNumber: number,
    myString: string,
    myBoolean?: boolean //MyBooleanはオプションとなります。
}

const testInterface: Interface1 = {
    myNumber: 2,
    myString: 'Hello world',
}

testInterface.myString = 'Welcome to my Github';
console.log(`My testInterface become => ${Object.values(testInterface)}`)

// 「myNumber」は読み取り専用のプロパティであるため、代入できません。
// testInterface.myNumber = 3

interface FunctionInterface {
    (x: number, y: number): number
}

const add: FunctionInterface = (x: number, y: number): number => x + y
console.log(`1 + 2 = ${add(1, 2)}`)
// -->
