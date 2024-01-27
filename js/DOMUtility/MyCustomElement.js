class MyCustomElement extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.setAttribute('class', 'wrapper');
        wrapper.textContent = 'Hello, this is MyCustomElement!';

        const style = document.createElement('style');
        style.textContent = `
            .wrapper {
                padding: 10px;
                background-color: lightblue;
                border: 1px solid #ddd;
                border-radius: 8px;
                text-align: center;
                transition: transform 0.5s ease;
            }

            .animate {
                transform: scale(1.2);
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
    }

    animate() {
        const wrapper = this.shadowRoot.querySelector('.wrapper');
        wrapper.classList.add('animate');

        setTimeout(() => {
            wrapper.classList.remove('animate');
        }, 1000); // Remove the animation class after 1 second
    }
}

customElements.define('my-custom-element', MyCustomElement);
export { MyCustomElement };
