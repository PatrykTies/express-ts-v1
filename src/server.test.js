"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
test('basic', () => {
    expect(server_1.sum()).toBe(0);
});
test('basic again', () => {
    expect(server_1.sum(1, 2)).toBe(3);
});
