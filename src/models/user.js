import mongoose from "mongoose";
import bcrypt from 'bcrypt';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, {timestamps: true});

userSchema.pre('save', function () {
    const salt = bcrypt.genSaltSync(9);
    this.password = bcrypt.hashSync(this.password, salt);
});


const User = mongoose.model('User', userSchema);

export default User;