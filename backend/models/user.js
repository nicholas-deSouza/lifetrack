// const bcrypt = require("bcrypt")
const db = require("../db")
// const { BCRYPT_WORK_FACTOR }= require("../config")
const { BadRequestError, UnauthorizedError } = require("../utils/errors");


class User {

    // static async makePublicUser(user){
    //     return{
    //         id: user.id,
    //         email: user.email,
    //         username: user.username,
    //         firstName: user.first_name,
    //         lastName: user.last_name,
    //         createdAt: user.date
    //     }
    // }

    static async login(credentials) {
        // user should submit their email and password
        // if any of these fields are missing, throw an error
    
        const requiredFields = ["email", "password"]
        requiredFields.forEach(field =>{
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        // lookup the user in the db by email
        const user = await User.fetchUserByEmail(credentials.email) 
        // if a user is found, compare the submitted password
        // with the password in the db
        // if there is a match, return the user
        if (user) {
            const isValid = await bcrypt.compare(credentials.password, user.password)
            if (isValid){
                return User.makePublicUser(user)
            }
        }
        // if any of this goes wrong, throw an error
        throw new UnauthorizedError("Invalid email/password/combo")
    }

    static async register(credentials) {
        // user should submit their email, pw, username,firstName, lastName
        // if any of these fields are missing, throw an error
        const requiredFields = ["email", "password", "username" , "first_name", "last_name"]
        requiredFields.forEach(field =>{
            if(!credentials.hasOwnProperty(field)) {
                throw new BadRequestError(`Missing ${field} in request body.`)
            }
        })

        if (credentials.email.indexOf("@") <= 0) {
            throw new BadRequestError("Invalid email.")
        }
        //
        // make sure no user already exists in the system with that email
        // if one does, throw an error
        const existingUser = await User.fetchUserByEmail(credentials.email)
        if (existingUser) {
            throw new BadRequestError(`Duplicate email: ${credentials.email} `)
        }
        // 
        // take the user password, and hash it

        const hashedPassword = await bcrypt.hash(credentials.password, BCRYPT_WORK_FACTOR)

        // take the users email, and lowercase it

        const lowercasedEmail = credentials.email.toLowerCase()
        //
        //create a new user in the db with all their info

        const results = await db.query(`
        
          INSERT INTO users(
            email,
            password,
            username,
            first_name,
            last_name
          )  
            VALUES ($1, $2, $3, $4, $5)    
            RETURNING id, email, username, first_name, last_name, date
        `,                  //hashed password 
        [lowercasedEmail, hashedPassword, credentials.username, credentials.first_name, credentials.last_name])
        //return the user

        const user = results.rows[0]

        return User.makePublicUser(user)
    }

    // static async fetchUserByEmail(email){
    //     if (!email){
    //         throw new BadRequestError("No email provided")
    //     }

    //     const query = `SELECT * FROM users WHERE email = $1` //query parameter 

    //     const result = await db.query(query, [email.toLowerCase()])

    //     const user = result.rows[0]
        
    //     return user

    // }
}


module.exports = User;