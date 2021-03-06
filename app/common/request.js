'use strict'

import queryString from 'query-string';
import _ from 'lodash';
import config from './config';
import Mock from 'mockjs';

const request = {};

request.get = (url, params)=>{
    if (params) {
        url += '?' + queryString.stringify(params);
    }

    return (
        fetch(url)
            .then((response)=> response.json())
            .then((response)=> Mock.mock(response))
    );
}

request.post = (url, body)=>{
    const options = _.extend(config.header, {
        body: JSON.stringify(body)
    })

    return (
        fetch(url, options)
            .then((response)=> response.json())
            .then((response)=> Mock.mock(response))
    );
}

export default request;

