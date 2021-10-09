//<-- Classesアノテーション
class myClassNoInterface {
    private myNumber: number // プライベート識別子
    protected myString: string // 保護された識別子
    myBoolean: boolean

    constructor(myNumber: number, myString: string, myBoolean: boolean) {
        this.myNumber = myNumber
        this.myString = myString
        this.myBoolean = myBoolean
    }

    myInformation() {
        return `${this.myString}, It's ${this.myBoolean} there is not just ${this.myNumber} way to code`
    }
}

const testClassNoInterface = new myClassNoInterface(1, 'Hello world', true)
console.log(testClassNoInterface)
console.log(testClassNoInterface.myInformation())

interface ClassInterface {
    myNumber: number,
    myString: string,
    myBoolean: boolean,
    myInformation(): string
}

class myClassWithInterface implements ClassInterface {
    myNumber: number // プライベート識別子
    myString: string // 保護された識別子
    myBoolean: boolean

    constructor(myNumber: number, myString: string, myBoolean: boolean) {
        this.myNumber = myNumber
        this.myString = myString
        this.myBoolean = myBoolean
    }

    myInformation() {
        return `${this.myString}, It's ${this.myBoolean} there is not just ${this.myNumber} way to code`
    }
}

const testClassWithInterface = new myClassNoInterface(1, 'Hello world', true)
console.log(testClassWithInterface)
console.log(testClassNoInterface.myInformation())

// プロパティ'myNumber'はプライベートで、クラス'myClass'内でのみアクセス可能です。
// testClass.myNumber = 2

// プロパティ'myString'は保護されており、クラス'myClass'とそのサブクラス内でのみアクセス可能です。
// testClass.myString = 'Hello you'
// -->

//<-- SubClassesアノテーション
class extendClass extends myClassWithInterface {
    greet: string

    constructor(myNumber: number, myString: string, myBoolean: boolean, greet: string) {
        super(myNumber, myString, myBoolean)
        this.greet = greet

    }
}
const extendedClass = new extendClass(3, 'You know', false, 'Hello again')

console.log(extendedClass)
console.log(extendedClass.myInformation())
// -->

//<-- Genericsアノテーション
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

const stringArray = getArray<string>(['This is', 'an', 'array'])
const numberArray = getArray<number>([1, 2, 3])


console.log(stringArray)
console.log(`with ${numberArray} items`)
// -->