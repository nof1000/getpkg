/**
 * The fastest way get root-package
 *
 * @module getpkg
 * @author Denis Maslennikov <mrdenniska@gmail.com> (nofach.com)
 * @license MIT
 */

/** Dependencies */
const { readFileSync } = require('fs');
const { dirname } = require('path');

/**
 * Methods
 * @private
 */

/**
 * Returns the last parent of the object
 *
 * @param  {Object} obj - An object that contains parent
 * @return {Object}
 */
function getLastParent(obj) {
    const fn = (target) => {
        if (target.parent !== null) {
            return fn(target.parent);
        }

        return target;
    }

    return fn(obj);
}

/**
 * Implementation
 * @public
 */

/**
 * Returns the root-level package.json as an object
 *
 * @param {Object as Module} target
 * @return {Object}
 */
function getpkg() {
    const lastModule = getLastParent(module);
    const pathname = dirname(lastModule.filename);
    let package = null;

    try {
        package = readFileSync(`${pathname}/package.json`);
        return JSON.parse(package.toString());
    } catch(e) {
        return null;
    }
}

/** Exports */
module.exports = getpkg;
