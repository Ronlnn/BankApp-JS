import { BaseScreen } from '@/core/component/base.screen.component.js';
import renderService from '@/core/services/render.service.js';
import styles from './home.module.scss';
console.log(styles);
import template from './home.template.html';
console.log(template);

import { $R } from '@/core/rquery/rquery.lib.js';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}

	render() {
		const element = renderService.htmlToElement(template, [], styles);

		// $R(element).find('h1').css('background-color', 'red');
		return element;
	}
}
//TODO: Add Append method
