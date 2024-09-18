import ChildComponent from '@/core/component/child.component.js'
import RenderService from '@/core/services/render.service.js';
import styles from './<FTName>.module.scss'
import template from './<FTName>.template.html'

export class <FTName | pascalcase>  extends ChildComponent{
	render(){
		this.element = RenderService.htmlToElement(template, [], styles)
		return this.element
	}
}