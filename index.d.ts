declare module "TeX-to-CHTML" {

    interface options {
        width?: number,
        ex?: number,
        em?: number,
        fontURL?: string
    }

    export default function TeXToCHTML(str: string, opts?: options): string;
}