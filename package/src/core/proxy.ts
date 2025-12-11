import { enhanceElement } from "@/decorators/all";
import type { DynamicProxy } from "@/core/types";
import { BunnyElement } from "@/core/element";
import { htmlTagNames } from "@/utils/tags";

export const BunnyJS = new Proxy(BunnyElement, {
    get(_, prop) {
        return (props: Record<string, string> = {}) => {
            if (prop === "select") {
                return (selector: string) => {
                    const found = document.querySelector(selector);
                    return found ? enhanceElement(found as HTMLElement) : null;
                };
            }

            if (prop === "selectAll") {
                return (selector: string) => {
                    const found = Array.from(document.querySelectorAll<HTMLElement>(selector));
                    return found.map(e => enhanceElement(e));
                };
            }

            if (!htmlTagNames.includes(String(prop))) {
                throw new Error(`Invalid html tag: ${String(prop)}`);
            }

            const el = document.createElement(prop as keyof HTMLElementTagNameMap);

            for (const k in props) el.setAttribute(k, props[k]);

            return enhanceElement(el);
        };
    }
}) as DynamicProxy<typeof BunnyElement>;