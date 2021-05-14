import "@/assets/css/common.css"
import gaoxiao from '@/assets/image/效率.jpeg'
import print from './lib/print'
// import { square, cube } from './lib/math'

if (module.hot) {
    module.hot.accept('./lib/print', function() {
        console.log('Accepting the updated printMe module!');
        print();
    })
}


function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    //文字
    element.innerHTML = "Hello WebPack!"
    //图片
    let image = new Image()
    image.src = gaoxiao
    console.log(1111)
    console.log(1111)
    console.log(1111)
    console.log(1111)
    console.log(1111)
    //button
    btn.innerHTML = '点击这里，然后查看 console！'
    btn.addEventListener('click',() => {
        print()
        let square = () => import(/* webpackChunkName: "math" */'./lib/math')
        console.log(square().then(res => {
            console.log(res)
        }))
    },false)

    element.appendChild(btn);
    element.appendChild(image)

    return element;
}

document.body.appendChild(component());