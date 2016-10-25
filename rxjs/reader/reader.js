const express = require('express');
const fs = require('fs');
const path = require('path');
const readPath = path.resolve(__dirname, './read.json');
const writePath = path.resolve(__dirname, './write.json');


let test = 'Hello';

const readWrite = () => {
  fs.readFile(readPath, (err, data) => {
    if (err) throw err;

    console.log(data.toString());
  });
};

module.exports = readWrite;