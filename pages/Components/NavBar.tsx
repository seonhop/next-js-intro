import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/NavBar.module.css";

export default function NavBar() {
	const router = useRouter();
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<span className={router.pathname === "/" ? "active" : ""}>Home</span>
			</Link>
			<Link href="/about">
				<span className={router.pathname === "/about" ? "active" : ""}>
					About
				</span>
			</Link>
			<style jsx>{`
				nav {
					background-color: tomato;
				}
				a {
					text-decoration: none;
				}
				.active {
					color: blue;
				}
			`}</style>
		</nav>
	);
}
