const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: "dfzg6gkoh",
  api_key: "741581989754927",
  api_secret: "L-sHvL9R5__8OP-IdjX6fsSRGF8",
});
exports.uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    // upload the file on cloudinary;
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    return response;

    // file has been uploades successfully
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporary file as the upload operations got faild
    return null;
  }
};
