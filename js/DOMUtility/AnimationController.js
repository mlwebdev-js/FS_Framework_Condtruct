import { MyCustomElement } from './MyCustomElement.js';

class AnimationController {
    constructor() {
        this.customElement = document.querySelector('my-custom-element');
    }

    triggerAnimation() {
        if (this.customElement) {
            this.customElement.animate();
        }
    }
}

export { AnimationController };
