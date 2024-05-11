import React from 'react';
import styles from '../styles/404.module.css';

const NotFoundPage = () => {
    return (
        <main className={styles.body}>
            <div className={styles.content}>
                <h1 className={styles.h1}>404</h1>
                <p className={styles.p}>Not Found</p>
            </div>
        </main>
    );
};

export default NotFoundPage;