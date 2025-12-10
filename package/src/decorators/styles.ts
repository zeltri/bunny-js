type MarginAndPaddingType = string | [string, string] | [string, string, string, string];

export function withStyles<T extends HTMLElement>(el: T) {
    return Object.assign(el, {
        bg(color: string) {
            el.style.background = color;
            return el;
        },
        color(color: string) {
            el.style.color = color;
            return el;
        },
        font(font: string) {
            el.style.font = font;
            return el;
        },
        spacing(margin?: MarginAndPaddingType, padding?: MarginAndPaddingType) {

            if (margin !== undefined) {
                if (typeof margin === 'string') {
                    el.style.margin = margin;
                } else if (Array.isArray(margin) && margin.length === 2) {
                    el.style.margin = `${margin[0]} ${margin[1]}`;
                } else if (Array.isArray(margin) && margin.length === 4) {
                    el.style.margin = margin.join(' ');
                }
            }
            if (padding !== undefined) {
                if (typeof padding === 'string') {
                    el.style.padding = padding;
                } else if (Array.isArray(padding) && padding.length === 2) {
                    el.style.padding = `${padding[0]} ${padding[1]}`;
                } else if (Array.isArray(padding) && padding.length === 4) {
                    el.style.padding = padding.join(' ');
                }
            }
            return el;
        }
    });
}
