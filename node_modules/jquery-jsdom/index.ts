import { JSDOM } from 'jsdom'
import jQueryFactory from 'jquery';

// Patch with jsDOM window mock
const jsWindow = new JSDOM("").window;
const $ = jQueryFactory(jsWindow, true);

// Export
export default $;
module.exports = $;