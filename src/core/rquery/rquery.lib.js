// export class RQuery {
// 	constructor(context = document) {
// 		this.context = context;
// 	}

// 	// Метод find для поиска элементов
// 	find(selector) {
// 		if (selector.startsWith('#')) {
// 			return this.context.getElementById(selector.slice(1)) || null;
// 		}
// 		if (selector.startsWith('.')) {
// 			const elements = this.context.getElementsByClassName(
// 				selector.slice(1),
// 			);
// 			return elements.length ? elements : null;
// 		}
// 		const elements = this.context.getElementsByTagName(selector); // Поиск по тегу
// 		return elements.length ? elements : null;
// 	}

// 	// Статический метод $R для создания экземпляра
// 	static $R(context = document) {
// 		return new RQuery(context);
// 	}
// }
class RQuery {
	/**
	 * Create a new RQuery instance
	 * @param {string | HTMLElement} selector  - a CSS selector string or an HTMLElement
	 */
	constructor(selector) {
		if (typeof selector === 'string') {
			this.element = document.querySelector(selector);
			if (!this.element) {
				throw new Error(`Element ${selector} not found`);
			}
		} else if (selector instanceof HTMLElement) {
			this.element = selector;
		} else {
			throw new Error('Invalid selector type');
		}
	}
	/**
	 * Find the first element that matches the specified selector within the selected element
	 * @param {string} selector - a CSS selector string to search for within the selected element
	 * @returns {RQuery} a new RQuery instance for the found element
	 */
	find(selector) {
		const element = new RQuery(this.element.querySelector(selector));
		if (element) {
			return element;
		} else {
			throw new Error(`Element ${selector} not found`);
		}
	}
	/**
	 * Set the CSS style of the selected element
	 * @param {string} property -- The CSS property to set
	 * @param {string} value - The value to set for the CSS property
	 * @returns {RQuery} The current RQuery instance for changing
	 */
	// background-color(property) - red (value)
	css(property, value) {
		if (typeof property !== 'string' || typeof value !== 'string') {
			throw new Error('Property or Value must be strings!');
		}
		this.element.style[property] = value;
		return this;
	}
}
/**
 * Create a new RQuery instance for the given selector
 * @param {string | HTMLElement} selector - a CSS selector string or an HTMLElement
 * @returns {RQuery} a new RQuery instance for the given selector
 */
export function $R(selector) {
	return new RQuery(selector);
}
