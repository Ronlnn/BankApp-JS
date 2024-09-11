import { NotFound } from '@/components/screens/not-found/not-found_component';
import { ROUTES } from './routes_data';

export class Router {
	constructor() {
		this.routes = ROUTES;
		this.currentRoute = null;
		this.handleRouteChange();
	}
	getCurrentPath() {
		return window.location.pathname; // Получаем url текущей страницы
	}
	handleRouteChange() {
		const path = this.getCurrentPath() || '/'
		let  route  = this .routes.find(route => route.path  === path)

		if(!route){
			route = {
				component: NotFound
			}
		}
		this.currentRoute = route
		this.render()
	}
	render(){
		const component =  new this.currentRoute.component()
		document.getElementById('app').innerHTML = component.render()
	}
}
