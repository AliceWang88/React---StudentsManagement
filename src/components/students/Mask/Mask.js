import React from 'react'
import './mask.css'

export default function Mask(props) {


    return (
        <div 
        className="mask" 
        style={{
            background: props.bg,
        }}
            // onClick={ e => {
            //     if (e.target.className === 'mask') {
            //         props.onClose();
            //     }
            // }}
        >
            <div className="center">
                {props.children}
            </div>
        </div>
    )
}

Mask.defaultProps = {
    bg: 'rgba(0,0,0,.5)'
}
