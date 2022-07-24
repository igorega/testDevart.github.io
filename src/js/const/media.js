const style = getComputedStyle(document.body);

const XS = style.getPropertyValue('--XS');
const S = style.getPropertyValue('--S');
const M = style.getPropertyValue('--M');
const L = style.getPropertyValue('--L');
const XL = style.getPropertyValue('--XL');
const XXL = style.getPropertyValue('--XXL');

export const minWidthXS = window.matchMedia(`(min-width: ${XS}px)`);
export const minWidthS = window.matchMedia(`(min-width: ${S}px)`);
export const minWidthM = window.matchMedia(`(min-width: ${M}px)`);
export const minWidthL = window.matchMedia(`(min-width: ${L}px)`);
export const minWidthXL = window.matchMedia(`(min-width: ${XL}px)`);
export const minWidthXXL = window.matchMedia(`(min-width: ${XXL}px)`);
