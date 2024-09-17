import { getTitle } from '../../config/seo_config';

export class BaseScreen {
    constructor({title}) {
        document.title = getTitle(title);
    }
    render() {
        throw new Error('Render method must be implemented in the child class');
    }
}

export default BaseScreen;
