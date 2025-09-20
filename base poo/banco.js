"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.banco = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
exports.banco = new typeorm_1.DataSource({
    type: "sqlite",
    database: __dirname + "/banco.sqlite",
    synchronize: true,
    logging: false,
    entities: [__dirname + "/entity/*.ts"],
});
