import {BaseScreen} from '@/core/component/base_screen_component.js'



export class NotFound  extends BaseScreen {
   constructor(){
    super({title: '404'})
   }
    render() {
        return '<h1>NotFound</h1>';
    }
}
