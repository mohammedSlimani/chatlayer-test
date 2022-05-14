/**
 * Escape the characters that might cause a problem for the regex
 * @param expression
 * @returns {*}
 */
const makeSafeForRegex = (expression) => {
    return expression.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Replaces the values delimited with the ones provided in the session object
 * @param {string} value
 * @param {object} session
 * @param {object} options
 * @param {string} options.rightDelimiter
 * @param {string} options.leftDelimiter
 * @returns {string}
 */
const interpolate = (value, session = {}, options = {}) => {
    if(!options.leftDelimiter || !options.rightDelimiter) {
        throw new Error('Should provide left and right delimiters')
    }

    options.leftDelimiter = makeSafeForRegex(options.leftDelimiter)
    options.rightDelimiter = makeSafeForRegex(options.rightDelimiter)

    // match a string that starts with the left delimiter, ends with right delimiter, but doesnt contain the rightDelimiter
    const re = new RegExp(options.leftDelimiter + `([^${options.rightDelimiter}]+)` + options.rightDelimiter, 'g')

    return value.replace(re, (...args) => {
        // we get the second catching group, since we start counting from 0 the second catching group is 1
        return session[args[1]] || '' // if what we matched doesnt exist in the session object, return an empty string instead
    })
};

module.exports = { interpolate }