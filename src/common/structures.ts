// This is so we can cast function parameters as functions (for callbacks)
export interface fn {
    (name: string): string;
}