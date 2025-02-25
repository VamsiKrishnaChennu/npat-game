const { pgConnection } = require("../config/pg.connection")

const modelCreation = async () => {
    [
        'players',
        'game',
        'solo_game',
        'group_game'
    ].forEach(model_file => {
        let createModel = require(`./${model_file}.model.pg`);
        createModel(pgConnection);
    });
};
modelCreation();