import { useRouter } from 'next/router';
import Anchor from '../Anchor';
import styles from './Layout.module.css';

export default function Layout({ children, navData }) {
  const router = useRouter();

  return (
    <div className='wrapper'>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          {navData.map((item, index) => (
            <li className={styles.li} key={index}>
              <Anchor
                href={item.link}
                className={`${styles.a} ${
                  router.asPath === item.link ? styles.active : ''
                }`}
              >
                {item.name}
              </Anchor>
            </li>
          ))}
        </ul>
      </nav>
      <main>{children}</main>
     
    </div>
  );
}
