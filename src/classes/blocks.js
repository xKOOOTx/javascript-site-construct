import {colSm, css, row} from "../utiles";

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHtml() {
        throw new Error('Метод toHtml должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'h1', styles} = this.options
        return row(colSm(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {imageStyles: is, alt = '', styles} = this.options
        return row((`<img src="${this.value}" alt="${alt}" style="${css(is)}" />`), css(styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }
    toHtml() {
        const {tag = 'p'} = this.options
        const html = `<${tag}>${this.value.map(colSm).join('')}</${tag}>`
        return row(html, css(this.options.styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'p'} = this.options
        return row(colSm(`<${tag}>${this.value}</${tag}>`), css(this.options.styles))
    }
}

export class MainBlock extends Block {
    constructor(value, options) {
        super(value, options);
    }

    toHtml() {
        const {tag = 'p'} = this.options
        return row(colSm(`<${tag}>${this.value}</${tag}>`), css(this.options.styles))
    }
}