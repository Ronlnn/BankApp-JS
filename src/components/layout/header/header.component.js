import { ChildComponent } from '@/core/component/child.component.js';
import RenderService from '@/core/services/render.service.js';
import styles from './header.module.scss';
import template from './header.template.html';

export class Header extends ChildComponent {
	render() {
		this.element = RenderService.htmlToElement(template, [], styles);
		return this.element;
	}
}
