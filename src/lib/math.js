import {fn} from './test'

console.log(fn)
export function square(x = {}) {
    console.log(11111)
    x.a = 1
    x.b = 2
    cube()
}

let obj = {}
export function cube(x) {
    console.log(22222)
    obj.a = 'abc'
    window.asdf = 43
    return x * x * x;
}

export class cla {
    constructor() {
        console.log(33333)
        console.log(33333)
    }
}