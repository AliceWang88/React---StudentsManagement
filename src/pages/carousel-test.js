import React,{useRef} from 'react'
import { Carousel,Button } from 'antd';
import { srcs } from '@/services/bannar'

export default function CarouselTest() {
    const ref = useRef();

    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const nodeImgs = srcs.map(it => (
        <div key={it.link}>
            <a href={it.link}>
                <img src={it.src} />
            </a>
        </div>
    ))

    return (
        <div style={{
            width: 281,
            margin: '50px auto'
        }}>
            <Carousel
                ref={ref}
                afterChange={current=>console.log(current)}
                autoplay={true}
                beforeChange={(from,to)=>console.log(from,to)}
            >
                {nodeImgs}
            </Carousel>
            <Button onClick={()=>{ref.current.goTo(0, false)}}>切换到第1张</Button>
            <Button onClick={()=>{ref.current.next()}}>切换到下一张</Button>
            <Button onClick={()=>{ref.current.prev()}}>切换到上一张</Button>
        </div>
    )
}
