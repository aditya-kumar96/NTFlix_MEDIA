import { regexPattern } from "./strings";

export const checkValidData=(email,password)=>{
    const isEmailValid = regexPattern.email.test(email);
    const isPasswordValid  =regexPattern.password.test(password)

        if(!isEmailValid) return "Email Id is not valid"
        if(!isPasswordValid) return "Password is not valid"
    
    return null
}