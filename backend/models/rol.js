const mongoose = require('mongoose')

export const ROLES = ["VENDEDOR", "ADMIN"];

const rolSch = mongoose.Schema(
  { x: String},
  {versionKey: false}
);

export default mongoose.model('rol', rolSch)
