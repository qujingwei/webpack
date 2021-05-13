import {fn} from './test'

import _ from 'lodash';

console.log(
    _.join(['Another', 'module', 'loaded!'], ' ')
)

console.log(fn)
export default function printMe() {
    console.log('I get called from print.js!');
    console.log('I get called from print.js!');
}