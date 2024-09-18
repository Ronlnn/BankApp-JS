class RenderService {
    /**
     * @param {string} html
     * @param {Array} components
     * @param {Object} [styles]
     * @return {HTMLElement}
     */
    htmlToElement(html, components = [], styles) {
        const template = document.createElement('template');
        template.innerHTML = html.trim();
        const element = template.content.firstChild;
        this.replaceComponentTags(element, components);
        return element;
    }

    /**
     * @param {HTMLElement} parentElement
     * @param {Array} components
     */
    replaceComponentTags(parentElement, components) {
        const componentTagPattern = /^component-/; // Регулярное выражение
        const allElements = parentElement.getElementsByTagName('*');
    }
}

export default new RenderService();
