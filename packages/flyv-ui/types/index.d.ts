declare module '*.md' {
    const content: {[className: string]: string};
    export = content;
}