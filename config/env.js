config = {
    database: {

        //Local DB
        //name: 'mongodb://127.0.0.1:27017/gyanmitra19'

        //MLAB DB
        name: 'mongodb://gyanmitra19:gyanmitra19@ds241664.mlab.com:41664/gyanmitra19'

        //Server DB
        //name: 'mongodb://gyanmitra19:GyanMitra19@192.168.16.14/gyanmitra19'
    },
    application: {
        secret: 'secret',
        env: 'development'
    },
    pagination: {
        perPage: 10
    },
    payment :{
         key: 'AFqk4w',
         salt: 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDQB5hDQhkawze7s4dGtwYW1B0js4RoooRqW/WBl0IwTXZM8ct6QE9EdX2R72lNMFNynnukVz88V/HnDXAiZqvVkZjVzKGaWTU1PcHscI3vK85s00tzM/h+9xhdnPnHQk90r+WfYe3DwhS/y7QZMA4hrk3MnAEDHIfCR7OCpPLutd64kiwIGYdtVkYGVgYXqx4u12U4Ws2D4yZNBHlpsx3LQ03CCzLZlOWoGasELfHfh7mGTuEPqSvDdwTpOiwuOqKdl+/jMwrfKtEEU/zcNZhaLIdHFMuZ6g+5auMid8benMyJ54GWNq9Pve/cjMyVZaFv2DlqIFwgn9KzWsFT+YXZAgMBAAECggEBAMyE2vYs0p+UE4QO0Uz9fRgOe4Nw5xkzxbkHJYu9WI5Caa7l/OT4urWUSNqjpEQF4dSK6QW93OaHk8RTWs4HYKJ8HOT85FfpojzwtWmtkmz0BWLKLKBbFNBGP4cxYAO9Nn6Cu96BGY9ejKWvMCWfMBV+1u/0463aa8HeWiZz4n45OuXbWYa0O/T8KZQd8rBXm26e6jBaIeXztcTrX6uZypr2cWXs1XqLb0Zjw/buJbtdPdJ22ndzIMr2uaihhibRbkxJz0JXIl0aHIruOghHqGHJ2T+YJ3Ef9olH1OGYNDXAQmGPJ+w7M4BlKD7MMyOpv70GYSrIK6Nt9DTXKRxR0IECgYEA9QIxr4zMN6kRoRff7U8LxaiXxFA7XwtDy8a3wU8IQbZanG7oCM5sYlZMk9NfpbVVMCo4jNujMcEawNYdvBaayFo9GrWm/cWY4xfkq61rJiEGlx6St0zH1xKHGlDgWCmBxi3aeHL8mHJT9drVJlXY4a6JP2uzSMe/pgr+oE3+FCkCgYEA2Vy3OX8dAJVCnqD6HdQboDFe6iP2Zx/Tdrts415w79uD6PHY/XlmctbXTexbvQTPLlBkK0MABxa5ponDaANpBHTB983bn93WoM+K1gCWUpMX8rwwH4I7APZECR2y20bHVwJZTuDeifahKI2tU8GeShCI1IWE2pAsRHhZh9tfmjECgYAvq1idbkiBf9yVOj7wPhPtRisZH/8dM+Th7ezsqILTvjYM/6sXo4oE7AOEM3kFla1YbK6KAWXUFV0uLbqlUMSWvK/s1XEDKQHhFVIBcQFK7twIZQNotIChQNKWdSvhG1pLg7pg+wZYZs4dJJGaHtPOvRWpCDxeqbaJCNSXvfT0WQKBgQCqwcCbJbYGCDwu3C3BkykkvsRe0mO3ffQlOXaAZGf6tou5S415C48lNowsBjvHkWilbLhUmC0EZKDyKRXet5cfzg23e/xGagM7j+/00L9HHZFZuudfSXLK/axTMQaaZs8hFpJMejG5VowijLKWsuuEKdskgcPt5Acyvw0uwnMncQKBgBUtfvw390WC90Sm+iSZszsp4dZBgXCJPb5trhxotL7JMv5s6V5sraLV6E9AiDvtMSrzOPhbYV1UDyYcXIICuwQi2fkFZvgmM+qWdNaSZMyDG+6HG5gtqfhDOgePITtuwt07xoV4RD6KBjy6M/09m4eWGiRaOLPYNumvpOjmnU1b'
    }
    
}

module.exports = config;