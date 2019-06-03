enum BEM {
    ELEMENT = '__',
    MODIFIER = '_'
}

export const join = (name: string, element?: string, modifier?: string) => {
    if (!element) {
        return `flyv-${name}`
    } else if (modifier) {
        return `flyv-${name}${BEM.ELEMENT}${element}${BEM.MODIFIER}${modifier}`
    } else {
        return `flyv-${name}${BEM.ELEMENT}${element}`
    }
}

export const prefixBem = (name: string) => (element?: string, modifier?: string) => join(name, element, modifier);