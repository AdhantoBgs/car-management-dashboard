import bcrypt from "bcryptjs";

const salt = 10;

function encryptPassword(pass: string) {
    return new Promise((resolve, reject) => {
        bcrypt.hash(pass, salt, (err, passEncrypted) => {
            if(err) {
                reject(err);
                return;
            }

            resolve(passEncrypted);
        })
    })
};

module.exports = encryptPassword;