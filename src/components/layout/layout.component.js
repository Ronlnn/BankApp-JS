export class Layout {
    //Принимаем наши чилдрены))
    constructor({ router, children }) {
        this.router = router;
        this.children = children;
    }

    render() {
        const headerHTMl = `<header>
		Header
		<nav>
		<a href="/">Home</a>
		<a href="/auth">Authorization</a>
		</nav>
		</header>`;

        return `S
		${headerHTMl}
		<main>
		${this.children}
		</main>	 
		`;
    }
}
