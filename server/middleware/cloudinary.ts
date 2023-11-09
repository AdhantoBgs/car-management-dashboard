const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'dqlnqil8f', 
    api_key: '975199468996337', 
    api_secret: 'RPDTD6pBbKZXFDzNKmgCveCuacc',
    secure: true
});

module.exports = cloudinary;