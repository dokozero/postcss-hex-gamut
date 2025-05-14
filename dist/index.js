import { HEX_GAMUT_REGEX } from './constants.js';
import getColorCode from './helpers/getColorCode/getColorCode.js';
export default () => {
    return {
        postcssPlugin: 'postcss-hex-gamut',
        Declaration(decl) {
            if (!decl.value.includes('#'))
                return;
            decl.value = decl.value.replace(HEX_GAMUT_REGEX, getColorCode);
        }
    };
};
export const postcss = true;
