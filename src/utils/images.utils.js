import * as fs from fs
import path from path

/**
 * Convert file at given path to Base64
 * @param {string} filePath - Absolute or relative path to the file
 * @returns {string} - Base64 encoded string
 */
export function fileToBase64(filePath) {
    try {
        const absolutePath = path.resolve(filePath);
        const fileBuffer = fs.readFileSync(absolutePath);
        return fileBuffer.toString('base64');
    } catch (error) {
        console.error(`Failed to convert file to Base64: ${error.message}`);
        return null;
    }
}