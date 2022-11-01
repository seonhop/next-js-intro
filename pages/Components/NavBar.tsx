import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
	const router = useRouter();
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<span className={`${styles.active} ${styles.link}`}>Home</span>
			</Link>
			<Link href="/about">
				<span className={[styles.active, styles.link].join(" ")}>About</span>
			</Link>
		</nav>
	);
}
