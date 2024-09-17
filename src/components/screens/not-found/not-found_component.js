import { BaseScreen } from '@/components/screens/base-screen/base_screen_component.js';

export class NotFound extends BaseScreen {
    constructor() {
        super('404');
    }
    render() {
        return '<h1>NotFound</h1>';
    }
}
