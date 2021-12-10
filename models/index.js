const User = require('./user')
const Workout = require ('./exercise')
const Exercise = require('./exercise')


User.hasMany(Workout,{
    foreignKey: 'workoutId',
    onDelete: 'CASCADE',
})

Workout.hasMany(Exercise,{
    foreignKey: 'exerciseId',
    
})



module.exports = {User, Workout, Exercise}