// https://open.neis.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=OPEN18620200826103326268120&infSeq=2

const express = require("express")
const app = express()
const path = require("path")
// const KEY = "5b42ca6fe36941fb83140960e480ba21"
// const PORT = 3000

require('dotenv').config();

app.use(express.static('public'));

app.get("/", (req, res) => {
    console.log(__dirname)
    const filePath = path.join(__dirname, 'templates', 'index.html')
    res.sendFile(filePath);
})
app.post("/get/timetable", (req, res) => {
    const current = new Date();
    let timetable = [];

    const yyyyDDMM = `${current.getFullYear().toString().padStart(4, '0')}${String(current.getMonth() + 1).padStart(2, '0')}${current.getDay().toString().padStart(2, '0')}`
    const url = `https://open.neis.go.kr/hub/hisTimetable?SD_SCHUL_CODE=7530560&ATPT_OFCDC_SC_CODE=J10&GRADE=1&CLASS_NM=6&Type=json&TI_FROM_YMD=${yyyyDDMM}&TI_TO_YMD=${yyyyDDMM}&key=${process.env.KEY}`;

    fetch(url).then((response) => response.json()).then((data) => {
        data['hisTimetable'][1]['row'].forEach(ele => {
            // console.log(ele.PERIO, ele.ITRT_CNTNT)
            timetable.push(ele.ITRT_CNTNT)
        });
        return res.json(timetable)
    })
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})
