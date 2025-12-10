import { withActions } from "./actions";
import { withHelpers } from "./helpers";
import { withStyles } from "./styles";
import type { BunnyExtendedElement } from "../core/types";

export function enhanceElement<T extends HTMLElement>(el: T): BunnyExtendedElement {
    return (withStyles(withHelpers(withActions(el))) as unknown) as BunnyExtendedElement;
}
