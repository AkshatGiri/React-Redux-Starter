import React from 'react';
import styles from './Skeletor.css';

const skeletor = ({ text }) => {
    return (
        <div className={styles.skeletor}>
            { text }
        </div>
    );
}

export default skeletor;