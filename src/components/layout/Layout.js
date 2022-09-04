import PropTypes from 'prop-types';

import styles from './Layout.module.css';

const Layout = ({ leftColumn, rightColumn }) => (
    <main className={styles.main}>
        <section className={styles.sectionLeft}>
            <div className={styles.container}>
                {leftColumn}
            </div>
        </section>
        <section className={styles.sectionRight}>
            <div className={styles.containerCenter}>
                {rightColumn}
            </div>
        </section>
    </main>
)

export default Layout;

Layout.propTypes = {
    leftColumn: PropTypes.arrayOf(PropTypes.node).isRequired,
    rightColumn: PropTypes.node.isRequired
}

