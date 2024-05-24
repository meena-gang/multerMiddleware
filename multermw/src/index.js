const express = require('express');
const multer = require('multer');
const server = express();
const fs = require('fs');
const upload = multer({ dest: 'uploads/' })
const path = require('path')


server.get('/',(req,res) => {
    const filePath = path.join(__dirname, 'index.html');
    const form = fs.readFileSync(filePath,'utf-8');
    res.send(form);
})

server.post('/upload', upload.single('uploaded_file'), (req,res) => {
    console.log(req.file);
    console.log(req.body);
    res.status(200).send({"message" : 'File submitted successfully',
                            "imageUrl" : '../uploads/17c46f793b8ca83d99f6605617d3bea2'});
})

server.listen('3000',(req,res) => {
    console.log('Server is running on port 3000');
})