import React from 'react';
import styles from './Box.module.css'

const Box = (props) => {
    const {boxColors} = props;

return (
    <div>
        {
            boxColors.map((color, index) =>
                <div key={index} className={styles.box} style={{
                    backgroundColor: color
                    }}>
                </div>
            )
        }
    </div>
    )
}
export default Box;