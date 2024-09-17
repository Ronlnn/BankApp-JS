import {BaseScreen} from '@/core/component/base_screen_component.js'


export class Home  extends BaseScreen{
    constructor(){
        super({title: 'Home'})
    }
    render() {
        return '<p color: white>Home</p>';
    }
}
