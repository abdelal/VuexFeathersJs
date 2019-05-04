import feathers from '@feathersjs/feathers'
import auth from '@feathersjs/authentication-client'
import rest from '@feathersjs/rest-client';

const restClient = rest("http://localhost:3030")



const feathersClient = feathers()
    .configure(restClient.fetch(window.fetch))
    .configure(auth({ storage: window.localStorage }))

export default feathersClient