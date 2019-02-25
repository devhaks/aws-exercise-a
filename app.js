const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('CodeDeploy로 배포된 AWS exercise의 4 번째 A project 버전입니다.');
});

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get('/health', (req, res) => {
  res.sendStatus(200);
});
