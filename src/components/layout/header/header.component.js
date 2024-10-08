import { ChildComponent } from '@/core/component/child.component.js';
import renderService from '@/core/services/render.service.js';
import styles from '@/components/layout/header/header.module.scss';
import template from './header.template.html';

export class Header extends ChildComponent {
	render() {
		this.element = renderService.htmlToElement(template, [], styles);
		return this.element;
	}
}
