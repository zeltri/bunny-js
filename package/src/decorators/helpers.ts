export function withHelpers<T extends HTMLElement>(el: T) {
    return Object.assign(el, {
        on(event: keyof HTMLElementEventMap, handler: EventListener) {
            el.addEventListener(event, handler);
            return el;
        },
        text(value: string) {
            el.textContent = value;
            return el;
        },
        link(value: string, href: string, attr: Record<string, string>) {
            const a = document.createElement("a");
            a.href = href;
            a.textContent = value;

            for (const k in attr) {
                a.setAttribute(k, attr[k]);
            }

            return el;
        },
        attr(key: string, value?: string): string | null {
            if (!value) return el.getAttribute(key);

            el.setAttribute(key, value);

            return value;
        }
    });
}
