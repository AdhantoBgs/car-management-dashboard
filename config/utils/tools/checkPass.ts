import bcrypt from "bcryptjs";

function checkPassword(passEncrypted: string, pass: string) {
    return new Promise((resolve, reject) => {
        bcrypt.compare(pass, passEncrypted, (err, isPasswordCorrect) => {
            if(err) {
                reject(err);
                return;
            }

            resolve(isPasswordCorrect);
        })
    })
}

module.exports = checkPassword;