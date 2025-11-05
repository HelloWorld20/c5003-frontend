// const path = require('node:path');
// const express = require('express');
import path from 'node:path';
import express from 'express';

const app = express();
const port = 9527;

app.get('*', express.static(path.resolve('./dist')));
// app.get('*', req => {
//   console.log('req', req);
// });

app.listen(port, () => {
  console.log(`run at http://localhost:${port}`);
});
