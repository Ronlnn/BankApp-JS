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
		
		for(const element of allElements){
			const elementTagName  = element.tagName.toLowerCase()
			if(componentTagPattern.test(elementTagName)){
				const componentName = elementTagName
					.replace(componentTagPattern, '')
					.replace(/-/g, '' )

			}
		}
}

export default new RenderService();
