const express = require('express');
const app = express();
const port = 1337;

app.get('/', (req, res) => {
  res.send('CodeDeploy로 배포된 AWS exercise의 첫 번째 A project 버전입니다.');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});
