import { BaseScreen } from '@/core/component/base.screen.component.js';
import RenderService from '@/core/services/render.service.js';
import styles from './home.module.scss';
import template from './home.template.html';
import {RQuery} from '@/core/rquery/rquery.lib.js'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}
	render() {
		const element = RenderService.htmlToElement(template, [], styles);
		const test = RQuery.$R().find('template'); // Поиск элемента с классом .test
		if (test) {
			console.log('GOOD');
		} else {
			console.log('BAD');
		}
		return element.outerHTML;
	}

}
