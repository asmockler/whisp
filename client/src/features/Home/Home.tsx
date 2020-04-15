import React from 'react';
import {Link} from 'react-router-dom';

import * as styles from './Home.module.css';

export function Home() {
  return (
    <div className={styles.Container}>
      <h1>whisp</h1>

      <nav className={styles.LinkContainer}>
        <Link className={styles.Link} to="/notes">
          notes
        </Link>
      </nav>
    </div>
  );
}
