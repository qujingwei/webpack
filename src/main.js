import "@/assets/css/common.css"
import gaoxiao from '@/assets/image/效率.jpeg'
import print from './lib/print'


function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    //文字
    element.innerHTML = "Hello WebPack!"
    //图片
    let image = new Image()
    image.src = gaoxiao

    //button
    btn.innerHTML = '点击这里，然后查看 console！'
    btn.addEventListener('click',print,false)

    element.appendChild(btn);
    element.appendChild(image)

    return element;
}

document.body.appendChild(component());