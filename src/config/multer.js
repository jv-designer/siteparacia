const multer = require ('multer');
const path = require('path');
const crypto = require('crypto'); 
const multerS3 = require('multer-s3');
const { S3Client } = require('@aws-sdk/client-s3');
const s3 = new S3Client();


//Armazenamento local do arquivo
const storageTypes = {
    local: multer.diskStorage({
        destination: (req, file, cb) => {
          cb(null, path.resolve(__dirname, "..", "..", "tmp", "uploads"));
        },
    filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, file.key);
        });
    }
}),

// Armazenamento na amazon S3 do arquivo. 
    storage: multerS3({
        s3: s3,
        
        bucket: 'uploaddearquivoscia',
        acl: 'public-read',
        key: (req, file, cb) =>{
            crypto.randomBytes(16, (err, hash) =>{
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            });
        }
    }),
};


// EXporta as informações dos arquivos do upload
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: storageTypes["storage"],
    limits: {
        fileSize: 2 * 1024 * 1024, 
    },

    fileFilter: (req, file,cb) =>{
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png',
            'image/gif',
            'application/pdf'
        ];
        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('invalid file type'));
        }

    },
};
