const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello, world!");
});

app.get('/sound/:name', (req, res) => {
    const { name } = req.params;

    if (name === "dog") {
        res.json({ 'sound': '멍멍' });
    } else if (name === "cat") {
        res.json({ 'sound': '야웅' });
    } else if (name === "pig") {
        res.json({ 'sound': '꿀꿀' });
    } else {
        res.json({ 'sound': '알 수 없음' });
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);  // 수정: $ {port}를 ${port}로 변경
});
