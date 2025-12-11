
export function withActions<T extends HTMLElement>(el: T) {
    return Object.assign(el, {
        show(mode: string = "") { el.style.display = mode; },
        hide() { el.style.display = "none"; },
        toggle(className: string | string[] = "") {
            const classes = typeof className == "string" ? className.split(" ") : className;
            classes.forEach(c => el.classList.toggle(c));
        },
        insertIn<T extends HTMLElement>(query: string | T) {
            const e = typeof query === "string" ? document.querySelector(query) : query;
            if (!e) return;
            e.appendChild(el);
        }
    });
}