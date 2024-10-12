<<<<<<< HEAD
import mongoose, { Document, Schema, Model } from "mongoose";

// Define an interface for the user model
export interface IUserModel extends Document {
    username: string;
    email: string;
    password: string;
    isVerified:boolean;
    avatar: string; // Optional property for the avatar
    verifyToken:string,
    verifyTokenExpiry:Date,
    forgotPasswordToken:string,
    forgotPasswordExpiry:Date,
  }

const UserSchema:Schema = new Schema({
    username:{
        type:String,
        required:[true ,"Please add an Username"],
        unique:true
    },
    email:{
        type:String,
        required:[true , "Please provide a email"],
    },
    password:{
    type:String,
    required:[true,"Please Provide a password"],
    minlength:7
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String,
    },
    verifyToken:String,
    verifyTokenExpiry:Date,
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,

},{timestamps:true})
// according to the datatypes i have given
export const UserModel: Model<IUserModel> = mongoose.models.User||mongoose.model<IUserModel>("User", UserSchema);

// Export the model
=======
import mongoose, { Document, Schema, Model } from "mongoose";

// Define an interface for the user model
export interface IUserModel extends Document {
    username: string;
    email: string;
    password: string;
    isVerified:boolean;
    avatar?: string; // Optional property for the avatar
    verifyToken:string,
    verifyTokenExpiry:Date,
    forgotPasswordToken:string,
    forgotPasswordExpiry:Date,
  }

const UserSchema:Schema = new Schema({
    username:{
        type:String,
        required:[true ,"Please add an Username"],
        unique:true
    },
    email:{
        type:String,
        required:[true , "Please provide a email"],
    },
    password:{
    type:String,
    required:[true,"Please Provide a password"],
    minlength:7
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    avatar:{
        type:String,
    },
    verifyToken:String,
    verifyTokenExpiry:Date,
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date,

},{timestamps:true})
// according to the datatypes i have given
export const UserModel: Model<IUserModel> = mongoose.models.User||mongoose.model<IUserModel>("User", UserSchema);

// Export the model
>>>>>>> bccb9a0efa33673745379d2cccc70d1a1fe9c232
export default UserModel;