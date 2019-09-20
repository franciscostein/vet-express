import React from 'react';
import { Footer } from 'mui-layout';

import styles from './Footer.module.css';

const FooterLayout = () => (
    <div className={styles.footer}>
        <Footer>
            GOTTA STICKY THIS SHIT TO THE BOTTOM!!! Vet Express &copy; 2019.
        </Footer>
    </div>
);

export default FooterLayout;