import React from 'react'
import styles from "./index.css"

Modal.defaultProps = { 
    bg: "rgba(0,0,0,.5)"
};

export default function Modal(props) {

    return (
        <div  className={styles.modal} style={{
            background: props.bg
        }}>
            <div className={styles["modal-center"]}>
                {props.children}
            </div>
        </div>
    )
}
