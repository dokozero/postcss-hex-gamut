import { RGB_DECIMAL_PRECISION } from '../../constants.js';
const formatDecimal = (n) => {
    return parseFloat(n.toFixed(RGB_DECIMAL_PRECISION)).toString();
};
// TODO - support 3 value HEX.
export default function convertHexToRgbDecimal(hex) {
    if (hex.length < 6 || hex.length > 8) {
        console.error(`Invalid value: ${hex}, only 6 to 8-digit hex colors are supported.`);
        return '';
    }
    let r = 0;
    let g = 0;
    let b = 0;
    let a = 0;
    let rgbDecimal = '';
    r = parseInt(hex.slice(0, 2), 16) / 255;
    g = parseInt(hex.slice(2, 4), 16) / 255;
    b = parseInt(hex.slice(4, 6), 16) / 255;
    if (hex.length === 8) {
        a = parseInt(hex.slice(6, 8), 16) / 255;
        rgbDecimal = `${formatDecimal(r)} ${formatDecimal(g)} ${formatDecimal(b)} / ${formatDecimal(a)}`;
    }
    else {
        rgbDecimal = `${formatDecimal(r)} ${formatDecimal(g)} ${formatDecimal(b)}`;
    }
    return rgbDecimal;
}
