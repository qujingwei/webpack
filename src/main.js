import "@/assets/css/common.css"

import gaoxiao from '@/assets/image/效率.jpeg'

function component() {
    let element = document.createElement('div');
    element.innerHTML = "Hello WebPack!"

    let image = new Image()
    image.src = gaoxiao
    element.appendChild(image)

    return element;
}

document.body.appendChild(component());