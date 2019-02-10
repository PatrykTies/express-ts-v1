"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = (...a) => a.reduce((acc, val) => acc + val, 0);

// "start-server": "ts-node src/server.ts",
// "start": "nodemon -e ts -w ./src -x npm run start-server"
