export class Layout {
	//Принимаем наши чилдрены))
	constructor({ router, children }) {
		this.router = router;
		this.children = children;
	}

	render() {
		const headerHTMl = '<header>Header</header>';

		return `
		${headerHTMl}
		<main>
		${this.children}
		</main>	 
		`;
	}
}
