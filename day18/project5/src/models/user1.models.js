const mongoose=require('mongoose');
mongoose.pluralize(null);
const UserSchema = mongoose.Schema({
    dname:{
        type:String,
        required:true
    },
    deptid:{
        type:String,
        required:true
    },
    is_active:  { type: Boolean, default: false },
    is_verified:  { type: Boolean, default: false },
    is_deleted:  { type: Boolean, default: false }
}, {
    timestamps: true
},);

module.exports = mongoose.model('Dept', UserSchema); 