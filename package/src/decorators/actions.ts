
export function withActions<T extends HTMLElement>(el: T) {
    return Object.assign(el, {
        show(mode: string = "") { el.style.display = mode; },
        hide() { el.style.display = "none"; },
        toggle(mode: string = "") { el.style.display = el.style.display === "none" ? mode : "none"; },
        insertIn<T extends HTMLElement>(query: string | T) {
            const e = typeof query === "string" ? document.querySelector(query) : query;
            if (!e) return;
            e.appendChild(el);
        }
    });
}