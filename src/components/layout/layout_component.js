export class Layout {
	//Принимаем наши чилдрены))
	constructor({ router, children }) {
		this.children = children;
		this.router = router;
	}

	render() {
		const headerHTMl = <header>Header</header>;

		return `
		${headerHTML}
		<main>
		${this.children}
		</main>	`;
	}
}
