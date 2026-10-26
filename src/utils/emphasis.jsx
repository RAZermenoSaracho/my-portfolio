import { createElement, Fragment } from 'react';

// Renders "**word**" markers with the given wrapper element (plain React text otherwise).
export default function emphasize(text, Wrap) {
    return (text ?? '').split(/\*\*(.+?)\*\*/).map((part, i) =>
        i % 2 ? createElement(Wrap, { key: i }, part) : <Fragment key={i}>{part}</Fragment>
    );
}

// "Ricardo Arturo Zermeño Saracho" -> "Ricardo Zermeño" (first + paternal surname), as the logo and footer show it.
export function shortName(name) {
    const w = (name ?? '').split(/\s+/).filter(Boolean);
    return w.length >= 3 ? `${w[0]} ${w[w.length - 2]}` : w.join(' ');
}
