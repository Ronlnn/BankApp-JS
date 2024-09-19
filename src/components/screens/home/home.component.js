import { BaseScreen } from '@/core/component/base.screen.component.js';
import RenderService from '@/core/services/render.service.js';
import styles from './home.module.scss';
import template from './home.template.html';

import { $R } from '@/core/rquery/rquery.lib.js';

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' });
	}
	render() {
		const element = RenderService.htmlToElement(template, [], styles);

		$R(element).find('h1').css('background-color', 'red');
		return element.outerHTML;
	}
}
//TODO: Add Append method