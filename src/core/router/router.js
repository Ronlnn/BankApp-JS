import { NotFound } from '@/components/screens/not-found/not-found_component';
import { ROUTES } from './routes_data';
import { Layout } from '@/components/layout/layout_component';

export class Router {
    layout = null;
    routes = ROUTES;
    currentRoute = null;
    constructor() {
        window.addEventListener('popstate', () => {
            this.handleRouteChange();
        });
        this.handleRouteChange();
        this.handleLinks();
    }
    handleLinks() {
        document.addEventListener('click', (event) => {
            const target = event.target.closest('a');
            if (target) {
                event.preventDefault();
                this.navigate(target.href);
            }
        });
    }

    getCurrentPath() {
        return window.location.pathname; // Получаем url текущей страницы
    }
    navigate(path) {
        if (path !== this.getCurrentPath()) {
            window.history.pushState({}, '', path);
            this.handleRouteChange();
        }
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
        if (!this.layout) {
            this.layout = new Layout({
                router: this,
                children: component.render(),
            });
            document.getElementById('app').innerHTML = this.layout.render();
        } else {
            document.querySelector('main').innerHTML = component.render();
        }
    } 
}
