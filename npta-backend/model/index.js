const { pgConnection } = require("../config/pg.connection")

const modelCreation = async () => {
    [
        'players',
    ].forEach(model_file => {
        let createModel = require(`./${model_file}.model.pg`);
        createModel(pgConnection);
    });
};
modelCreation();