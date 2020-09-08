declare module "tex-to-chtml" {

    interface options {
        width?: number,
        ex?: number,
        em?: number,
        fontURL?: string
    }

    export default function TeXToCHTML(str: string, opts?: options): string;
}