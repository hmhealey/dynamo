// Adapted from https://davidwalsh.name/javascript-debounce-function
export default function debounce<R>(func: (...args: any[]) => R, wait: number, immediate: boolean = false) {
    let timeout: number;

    return function() {
        const context = this;
        const args = arguments;

        const later = function() {
            timeout = null;

            if (!immediate) {
                func.apply(context, args);
            }
        };

        const callNow = immediate && !timeout;

        clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);

        if (callNow) {
            func.apply(context, args);
        }
    };
}
