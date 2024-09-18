import { BaseScreen } from '@/core/component/base.screen.component.js';
import RenderService from '@/core/services/render.service.js';
import styles from './home.module.scss';
import template from './home.template.html';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}
	render() {
		const element = RenderService.htmlToElement(template, [], styles);
		debugger
		return element.outerHTML;
	}
}
