import { CSS_COLOR_NAME_MAPPING, DEBUG } from '../../constants.js';
import convertHexToRgbDecimal from '../convertHexToRgbDecimal/convertHexToRgbDecimal.js';
export default function getColorCode(match, hex, gamutHexName) {
    const lowerCaseGamutHexName = gamutHexName.toLowerCase();
    const gamutCssColorName = CSS_COLOR_NAME_MAPPING[lowerCaseGamutHexName];
    // If gamut value is not in CSS_COLOR_NAME_MAPPING we get and undefined value.
    if (gamutCssColorName === undefined) {
        console.error(`Invalid gamut: '${gamutHexName}', supported gamuts are: ${Object.keys(CSS_COLOR_NAME_MAPPING).join(', ')}`);
        return match;
    }
    const rgbDecimal = convertHexToRgbDecimal(hex);
    const convertedColorCode = `color(${gamutCssColorName} ${rgbDecimal})`;
    if (DEBUG) {
        console.log(`PostCSS – converted: '${match}' to '${convertedColorCode}'`);
    }
    return convertedColorCode;
}
