import src1 from '@/assets/img/class1.jpg'
import src2 from '@/assets/img/class2.jpg'
import src3 from '@/assets/img/class3.jpg'

const arr = [src1, src2, src3];

const srcs = [];
for (const src of arr) {
    srcs.push({
        link: src,
        src: src
    })
}

export { srcs };