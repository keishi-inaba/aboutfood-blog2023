import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>AboutFood</h1>
        <p>食べ物を知ろう</p>
      </Link>
    </header>
  );
}
