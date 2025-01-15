const express = require('express');
const path = require('path');

const app = express();

// تقديم الملفات من مجلد dist
app.use(express.static(path.join(__dirname, 'dist')));

// إعداد نقطة الدخول الرئيسية
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// تحديد رقم المنفذ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
