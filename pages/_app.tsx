import "../styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "./Components/NavBar";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NavBar />
			<Component {...pageProps} />
			<h1>Global</h1>
			<style jsx global>{`
				a {
					text-decoration: none;
				}
				h1 {
					color: tomato;
				}
			`}</style>
		</>
	);
}
