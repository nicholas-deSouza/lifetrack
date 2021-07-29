const bcrypt = require('bcrypt')

const pw = "pass"

bcrypt.hash(pw, 6, (err, hashedPw) => {
    console.log(`password is ${pw}`)
    console.log(`hashed password is ${hashedPw}`)
})