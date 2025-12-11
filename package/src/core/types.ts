type MarginAndPaddingType = string | [string, string] | [string, string, string, string];

export type BunnyExtendedElement = HTMLElement & {
    // Actions...
    show(mode?: string): void;
    hide(): void;
    toggle(mode?: string): void;
    insertIn(query: string): void;
    // Helpers...
    on(event: keyof HTMLElementEventMap, handler: EventListener): BunnyExtendedElement;
    text(value: string): BunnyExtendedElement;
    link(value: string, href: string, attrs: Record<string, string>): BunnyExtendedElement;
    attr(key: string, value?: string): string | null;
    // Styles...
    bg(color: string): BunnyExtendedElement;
    color(color: string): BunnyExtendedElement;
    font(color: string): BunnyExtendedElement;
    spacing(margin?: MarginAndPaddingType, padding?: MarginAndPaddingType): BunnyExtendedElement;
};

export type BunnyTagFunction = (props?: Record<string, string>) => BunnyExtendedElement;

export type DynamicProxy<T> = T & {
    [K in keyof HTMLElementTagNameMap]: BunnyTagFunction;
} & {
    select(selector: string): BunnyExtendedElement | undefined;
    selectAll(selector: string): BunnyExtendedElement[];
};