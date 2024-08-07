/**
 * Removes the comments from the given text based on the provided markers.
 *
 * @param {string} text - The input text containing comments.
 * @param {string[]} markers - The markers used to identify comments.
 * @returns {string} - The text with comments removed.
 */
function solution(text, markers) {
    return text.split('\n').map(line => {
        for (let marker of markers) {
            let index = line.indexOf(marker);
            if (index !== -1) {
                line = line.slice(0, index).trim();
            }
        }
        return line;
    }).join('\n');
}