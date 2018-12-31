import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
export const checkFileSize = (file) => {
    if (file.files[0]) {
      const { size } = file.files[0];
      if (size > 1500000) {
        file.value = '';
        return false;
      }
      return true;
    }
    return null; // if no file
}

/**
 * Gets image file and uploads to cloudinary
 *
 * @param {string} id - id of the DOM element that holds the image
 * @returns {Promise} returns a promise which inturn returns the image cloudinary link
 */
const imageUploader = async (id) => {
    try {
        const fileData = new FormData();
        const imageFile = document.getElementById(id).files[0];

        const cldNme = 'rovilay';
        if (imageFile) {
            fileData.append('file', imageFile);
            fileData.append('upload_preset', 'book_shelf');
            const url = `https://api.cloudinary.com/v1_1/${cldNme}/image/upload`;
            const response = await axios.post(url, fileData, {
                headers: {
                'content-type': 'application/json; charset=utf-8',
                },
            });
            return response;
        } else {
            throw Error('image file not found');
        }
          
    } catch (error) {
        return error;
    }
};

export default imageUploader;
