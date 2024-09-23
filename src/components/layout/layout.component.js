import renderService from '@/core/services/render.service.js';
import styles from './layout.module.scss';
import template from './layout.template.html';
import { $R } from '@/core/rquery/rquery.lib.js';
import { Header } from './header/header.component.js';
import { ChildComponent } from '@/core/component/child.component.js';

export class Layout extends ChildComponent {
	//Принимаем наши чилдрены))
	constructor({ router, children }) {
		super();
		this.router = router;
		this.children = children;
	}

	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		const mainElement = $R(this.element).find('main');
		const contentContainer = $R(this.element).find('#content');
		contentContainer.append(this.children);

		mainElement
			.before(new Header().render())
			.append(contentContainer.element);
		return this.element;
	}
}
