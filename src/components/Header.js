import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a>
          <div>
            <img
              className={styles.logo_img}
              src="images/logo.png"
              alt="logo"
              style={{
                width: 90,
                height: 80,
              }}
            />
          </div>
        </a>
      </Link>

      <div className={styles.gnb}>
        <ul>
          <Link href="/">
            <a>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/movies">
            <a>
              <li>Movies</li>
            </a>
          </Link>
          <Link href="/admin">
            <a>
              <li>Admin</li>
            </a>
          </Link>
        </ul>
      </div>
    </div>
  );
}
