import {BaseScreen} from '@/core/component/base.screen.component.js'
import template from './auth.template.html'
import styles from './auth.module.scss'
import renderService from '@/core/services/render.service.js';
export class Auth  extends BaseScreen{
	constructor(){
		super({title: 'Auth'})
	}
	render() {
		const element = renderService.htmlToElement(template, [], styles);

		// $R(element).find('h1').css('background-color', 'red');
		return element;
	}
}
