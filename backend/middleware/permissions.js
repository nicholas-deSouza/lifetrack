
const Exercise = require("../models/exercise");
const { BadRequestError, ForbiddenError } = require("../utils/errors");

// const authedUserOwnsExercise = async (req, res, next) => {
//     try {
//         const {user} = res.locals
//         const {exerciseId} = req.params
//         const post = await Exercise.lookupExerciseById(exerciseId)


//         if (post.userEmail !== user.email){
//             throw new ForbiddenError("User not allowed to change exercise info")
//         }
//     }
// }   catch(err) {
//     return next(err)
//     }
// }
 
// module.exports = {
//     authedUserOwnsExercise
// }

