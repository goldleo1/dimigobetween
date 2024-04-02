
const timetableElement = document.getElementById('timetable')
const timetable2Element = document.getElementById('timetable2')
let lastTime;



function updateCurrentTime() {
    const now = new Date()
    now.getSeconds()
    const currentTime = getTimeFormat(new Date())
    let current = timeSequence.filter(e => parseInt(e.from) <= currentTime && parseInt(e.to) > currentTime)[0];

    if (current.name.includes('교시')) {
        const nowPeriod = parseInt(current.name) - 1;
        if (nowPeriod > 0 && timetableElement.children[nowPeriod - 1].classList.contains('now')) {
            timetableElement.children[nowPeriod - 1].classList.remove('now')
        }
        if (!timetableElement.children[nowPeriod].classList.contains('now')) timetableElement.children[nowPeriod].classList.add('now')

    }
    const timeLeft = timeFormat2sec(current.to) - timeFormat2sec(currentTime) - now.getSeconds();
    if (timeLeft != lastTime) {
        console.log(`${Math.floor(timeLeft / 60)}분 ${timeLeft % 60}초 남음`)
        lastTime = timeLeft
    }
}
function init() {
    fetch('/get/timetable', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => response.json()).then((datas) => {
        for (let i = 0; i < datas.length; i++) {
            const data = datas[i];
            console.log(data)

            const tr = document.createElement("tr")
            const th = document.createElement("th")
            const td = document.createElement("td")
            th.innerText = `${i + 1}교시`;
            td.innerText = data;
            tr.appendChild(th)
            tr.appendChild(td)
            timetableElement.appendChild(tr)
        }
        setInterval(updateCurrentTime, 200)
    })
    afterSchoolTimeSequence.forEach((data) => {
        console.log(data)

        const tr = document.createElement("tr")
        const th = document.createElement("th")
        th.innerText = data.name;
        // td.innerText = data;
        tr.appendChild(th)
        // tr.appendChild(td)
        timetable2Element.appendChild(tr)
    })

}
init()