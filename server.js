const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const workouts = {
    'chest': {
        'musclesWorked': 'chest',
        'workout1': 'Incline Bench Press',
        'sets': 3,
        'reps': 8
    },
    'bicep': {
        'musclesWorked': 'biceps',
        'workout1': 'Preacher Curls',
        'sets': 3,
        'reps': 8
    },
    'back': {
        'musclesWorked': 'back',
        'workout1': 'Lat Pulldown',
        'sets': 3,
        'reps': 8
    },
    'legs': {
        'musclesWorked': 'legs',
        'workout1': 'Bulgarian Split Squats',
        'sets': 3,
        'reps': 8
    },
    'tricep': {
        'musclesWorked': 'tricep',
        'workout1': 'Tricep Extension',
        'sets': 3,
        'reps': 8
    },
    'unknown': {
        'musclesWorked': 'unknown',
        'workout1': 'unknown',
        'sets': 0,
        'reps': 0
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
}) 

app.get('/workout/:bodyPart', (request, response) => {
    let bodyPart = request.params.bodyPart.toLowerCase()
    if(workouts[bodyPart]) {
        response.json(workouts[bodyPart].workout1)
    } else {
        response.json(workouts['unknown'])
    }
    response.json(workouts)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}, better go catch it!`)
})