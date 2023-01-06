const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const {promisify} = require('util');

// Variável que armazena as informações do arquivo no banco de dados
const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    createdAll:{
        type: Date,
        default: Date.now
    }
});


PostSchema.pre('save', function() {
    if(!this.url){
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
});


PostSchema.pre("remove", function() {
    if (process.env.STORAGE_TYPE === "storage") {
      return s3
        .deleteObject({
          Bucket: process.env.BUCKET_NAME,
          Key: this.key
        })
        .promise()
        .then(response => {
          console.log(response.status);
        })
        .catch(response => {
          console.log(response.status);
        });
    } else {
      return promisify(fs.unlink)(
        path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
      );
    }
  });

module.exports = mongoose.model("Post", PostSchema);