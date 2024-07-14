const { Schema, model } = require("mongoose");
const Joi = require("joi");

const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true, trim: true },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      required: true,
    },
    firstName: { type: String, trim: true },
    lastName: { type: String, trim: true },
    profilePicture: { type: String, trim: true },
  },
  { timestamps: true }
);

const validateUser = function (user) {
  const schema = Joi.object({
    username: Joi.string().min(5).max(20).required(),
    password: Joi.string().min(5).max(255).required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required(),
    role: Joi.string().valid("student", "teacher", "admin").required(),
    firstName: Joi.string().allow("", null),
    lastName: Joi.string().allow("", null),
    profilePicture: Joi.string().uri().allow("", null),
  });
  return schema.validate(user);
};

module.exports.User = model("User", userSchema);
module.exports.validateUser = validateUser;
