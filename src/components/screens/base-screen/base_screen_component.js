export class BaseScreen {
    constructor(title) {
        this.title = title;
        this.changeTitle();
    }
    changeTitle() {
        if (typeof this.title === 'string' && this.title.trim() !== '') {
            document.title = this.title;
        } else {
            console.warn('Danger');
        }
    }

    render() {}
}
