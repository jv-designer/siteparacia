// constando módulo mongoose
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

// criando uma schema com as informações dos user
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    required: true,
  },
  files: {
    type: Array,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

UserSchema.pre("save", async function (next) {
  const has = await bcryptjs.hash(this.password, 10);
  this.password = has;
  next();
});

// criando modelo
const User = mongoose.model("User", UserSchema);

// exportando modelo
module.exports = User;
