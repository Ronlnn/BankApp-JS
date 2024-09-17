import { BaseScreen } from '@/components/screens/base-screen/base_screen_component.js';

export class Home extends BaseScreen {
    constructor() {
        super('Home page');
    }
    render() {
        return '<p color: white>Home</p>';
    }
}

