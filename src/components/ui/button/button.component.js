import {ChildComponent} from '@/core/component/child.component.js'
import {RenderService} from '@/core/services/render.service.js';
import styles from './button.module.scss'
import template from './button.template.html'

export class Button  extends ChildComponent{
	render(){
		this.element = RenderService.htmlToElement(template, [], styles)
		return this.element
	}
}