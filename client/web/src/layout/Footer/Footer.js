import React from 'react';
import { Footer } from 'mui-layout';

import styles from './Footer.module.css';

const FooterLayout = () => (
    <div className={styles.footer}>
        <Footer>
            Vet Express &copy; 2019.
        </Footer>
    </div>
);

export default FooterLayout;