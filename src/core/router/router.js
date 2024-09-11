import { NotFound } from '@/components/screens/not-found/not-found_component';
import { ROUTES } from './routes_data';
import { Layout } from '@/components/layout/layout_component';

export class Router {
	layoutInstance = null;
	constructor() {
		this.routes = ROUTES;
		this.currentRoute = null;
		this.handleRouteChange();
	}
	getCurrentPath() {
		return window.location.pathname; // Получаем url текущей страницы
	}
	handleRouteChange() {
		const path = this.getCurrentPath() || '/';
		let route = this.routes.find((route) => route.path === path);

		if (!route) {
			route = {
				component: NotFound,
			};
		}
		this.currentRoute = route;
		this.render();
	}
	render() {
		const component = new this.currentRoute.component();

		if (!this.layoutInstance) {
			this.layoutInstance = new Layout({
				router: this,
				children: component.render(),
			});
			document.getElementById('app').innerHTML = this.Layout;
		} else {
			document.querySelector('main').innerHTML = component.render();
		}
	}
}
