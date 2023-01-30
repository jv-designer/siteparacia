/*Este script exporta um objeto contendo configurações para o middleware multer, que é usado para lidar com uploads de arquivos.

A primeira linha importa o módulo path, que é usado para trabalhar com caminhos de arquivos.

A segunda linha importa o módulo crypto, que é usado para gerar um hash aleatório de 8 bytes para prefixar o nome original do arquivo.

A terceira linha importa o módulo multer, que é o middleware que lida com uploads de arquivos.

O objeto module.exports contém várias propriedades:

dest: especifica o diretório de destino para os arquivos enviados. Neste caso, é um diretório chamado "uploads" no diretório pai do diretório atual.
storage: especifica o mecanismo de armazenamento para o multer. Neste caso, está usando o armazenamento em disco e especifica um destino onde armazenará o arquivo e geração de nome de arquivo.
limits: especifica um limite de tamanho de arquivo de 2MB.
fileFilter: especifica uma função que só permite certos tipos de arquivo (JPEG, PNG, GIF e PJPEG) e rejeita outros.
Esta configuração pode ser usada em um arquivo de rotas para lidar com uploads de arquivos.



*/

const path = require("path");
const crypto = require("crypto");
const multer = require("multer");
const multerS3 = require("multer-s3");
const aws = require("aws-sdk");

const storegeType = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    fileName: (req, file, cb) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new aws.S3(),
    bucket: "test",
    acl: "public-read",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, cb) => {
      crypto.randomBytes(8, (err, hash) => {
        if (err) cb(err);

        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
};

module.exports = {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
  storage: storegeType["local"],
  limits: {
    fileSize: 2 * 1024 * 1024,
  },
  fileFilter: (req, file, cb) => {
    const alloadMimetype = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/pjpeg",
    ];
    if (alloadMimetype.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Invalid file type"));
    }
  },
};
