const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true , "Name is Required"]
    },
    email : {
        type : String,
        required : [true , "Email is Required"],
        unique : [true, "Please Enter Unique"]
    },
    password : {
        type : String,
        required : [true, "Password is Required"]
    },
    bio : {
        type : String,
        default : ""
    },
    profile_pic : {
        type : String,
        default : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAywMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABAUBAgMGB//EADQQAQACAQIDBwEGBQUAAAAAAAABAgMEEQUhMRITMkFRYXGRIkJSYoGxFCMzocEVJFNygv/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD6WAAAAAAAAMJOl0mTUTvE9mvnaQR/l0x6fLk8GO0x8LnBo8ODnWu9/wAUpAKP+A1HXup+sNL6XPWPtYrfpG6/Aea225T5MPQ5dPizRtkpE/vCt1WgvirNsczevv1gEEYZAAAAAAAAAAAAAAAPMZpWb3ikec7Ak6HS/wARft2/px1911WsVr2axEQ0wYow4q46xHKHQAAAAAAFXxLRxWJzYo2/FH+Vd8PSTETExMbxKh1eHuM1qeXWPgHEAAAAAAAAAAAAABL4XTt6refuxuiLHg/iyz7QC0AAAAAAAAV3GKR2aZPOJ2WKHxWP9r/6gFMAAAAAAAAAAAAAAncJv2ct6z96EF00+Xuc1b+k8/gHoRiJiYiY6TG8MgAAAAAAIHFr7YK087Sn77KXiebvdR2Y8NOX6+YIgAAAAAAAAAAAAAAALPhmq3juLzzjw+6yea6TvHWFpouIRMRj1HKfK3r8gsRiJiY3iYmPWGQAAAQ9XrseGJrTa+Ty2nlANtfqYwY5ivPJPKIUkzMzMzO8tsmS2S82v1nq1AAAAAAAAAAAAAAAAAGa1tadqVm0+0JOPh+ov1rFP+0g5YdTlw/07zt6SmU4paI+3j7XvE7M14VM+PLH6VdK8LxR4r3kGI4pT/it9WluKdexh+su3+mYPOb/AFYnheDym/1BAy6zPm3ibbV9IhHlaW4VX7uWY+YcMnDM0eGa2/XYEIdMuDLin+ZSY93P45/AAAAAAAAAAAAAAJei0U5/t5N64/3BHw4cma22Os29Z9Flg4bSu1stu1PpHROx0rjpFccRWI8mwNaY60jakRWPaGwAAAAAAAxtG23l6I2fQYcsbxHYt61SgFFqdHlwTvMdqv4oR3pZ222mOSs1vD4nfJp495qCtD55T6AAAAAAAAN8GKc2WuOv3p+gJPD9J39u3eP5df7riIiIiIiOTXFSuOkUrG0Q3AAAAAAAAAAAAAABW8S0m8d9jrzjxQq3pp5xtPRRa7B3GaYiPsTzqCOAAAAAAsuEYvHltH5aq1faKnd6XFX8u4O4AAAAAAAAAAAAAAACJxPF3mntaOtOaWxesWpas9JjaQeb+OgWia2tWetZ2kAAAAAejp4K/AA2AAAAAAAAAAAAAAAAAB5/V8tTlj80uQAAA//Z"
    }
}) 

const userModel = mongoose.model("instagram-clone-project",userSchema);

module.exports = userModel;