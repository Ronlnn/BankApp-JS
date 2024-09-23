import {BaseScreen} from '@/core/component/base.screen.component.js'
import template from './not-found.template.html'
import styles from './not-found.module.scss'
import renderService from '@/core/services/render.service.js';
export class NotFound  extends BaseScreen {
   constructor(){
    super({title: '404'})
   }
    render() {
        const element = renderService.htmlToElement(template, [], styles);
        return element;
    }
}
