'use strict'

const header = {
    method: 'POST',
    header: {
        'Accept': 'application/json',
        'Content-type': 'application/json'
    }
}

const api = {
    base:'http://rapapi.org/mockjs/21386/',
    creations: 'api/creations'
}

const config = {
    'header': header,
    'api': api
}

export default config;