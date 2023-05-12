const express = require('express')
const app = express()
const PORT = 8000

app.listen(process.env.PORT || PORT, () => {
    console.log('Server running on port 8000')
})

const rappers = {
    '21 savage': {
        'age' : 29,
        'birthname' : 'Shéyaa Bin Abraham-Joseph',
        'birthLocation' : 'London, England'
    },

    'chance the rapper' : {
        'age' : 29,
        'birthname' : 'Chancellor Bennet',
        'birthLocation' : 'Chicago, Illinois'
    },

    'dylan' : {
        'age' : 29,
        'birthname' : 'Dylan',
        'birthLocation' : 'Dylan'
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request, response) => {
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }
    else {
        response.json(rappers['dylan'])
    }
    
})

