export const checkTouchDevice = () =>
    !!navigator.maxTouchPoints || 'ontouchstart' in document.documentElement
