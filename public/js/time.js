let beforeSchoolTimeSequence = [
    {
        id: "wakeup",
        from: "0630",
        to: "0720",
        name: "기상 및 인원점검"
    },
    {
        id: "breakfast",
        from: "0720",
        to: "0815",
        name: "아침식사"
    },
    {
        id: "morningProgram",
        from: "0815",
        to: "0850",
        name: "아침 프로그램"
    },
    {
        id: "prepareForLecture",
        from: "0850",
        to: "0900",
        name: "조회 및 수업준비"
    }
];
let schoolTimeSequence = [
    {
        id: "perio_1",
        from: "0900",
        to: "0950",
        name: "1교시"
    },
    {
        id: "rest",
        from: "0950",
        to: "1000",
        name: "쉬는시간"
    },
    {
        id: "perio_2",
        from: "1000",
        to: "1050",
        name: "2교시"
    },
    {
        id: "rest",
        from: "1050",
        to: "1100",
        name: "쉬는시간"
    },
    {
        id: "perio_3",
        from: "1100",
        to: "1150",
        name: "3교시"
    },
    {
        id: "rest",
        from: "1150",
        to: "1200",
        name: "쉬는시간"
    },
    {
        id: "perio_4",
        from: "1200",
        to: "1250",
        name: "4교시"
    },
    {
        id: "launch",
        from: "1250",
        to: "1350",
        name: "점심시간"
    },
    {
        id: "perio_5",
        from: "1350",
        to: "1440",
        name: "5교시"
    },
    {
        id: "rest",
        from: "1440",
        to: "1450",
        name: "쉬는시간"
    },
    {
        id: "perio_6",
        from: "1450",
        to: "1540",
        name: "6교시"
    },
    {
        id: "rest",
        from: "1540",
        to: "1550",
        name: "쉬는시간"
    },
    {
        id: "perio_7",
        from: "1550",
        to: "1640",
        name: "7교시"
    },
    {
        id: "afterSchoolPrepare",
        from: "1640",
        to: "1710",
        name: "종례, 청소 및 방과후 수업 준비"
    },
];

let afterSchoolTimeSequence = [
    {
        id: "afterSchool_1",
        from: "1710",
        to: "1750",
        name: "방과후 수업 1타임"
    },
    {
        id: "afterSchool_rest",
        from: "1750",
        to: "1755",
        name: "방과후 수업 쉬는 시간"
    },
    {
        id: "afterSchool_2",
        from: "1755",
        to: "1835",
        name: "방과후 수업 2타임"
    },
    {
        id: "dinner",
        from: "1830",
        to: "1950",
        name: "저녁식사"
    },
    {
        id: "selfStudy_1",
        from: "1950",
        to: "2110",
        name: "야자 1타임"
    },
    {
        id: "selfStudy_rest",
        from: "2110",
        to: "2130",
        name: "야자 쉬는시간"
    },
    {
        id: "selfStudy_2",
        from: "2130",
        to: "2250",
        name: "야자 2타임"
    },
    {
        id: "hakbonggwan",
        from: "2250",
        to: "2400",
        name: "생활관 생활 ㅎ"
    },
    {
        id: "sleeping",
        from: "0000",
        to: "0630",
        name: "잠"
    }
]

let timeSequence = beforeSchoolTimeSequence.concat(schoolTimeSequence, afterSchoolTimeSequence)

function getTimeFormat(now) {
    return now.getHours() * 100 + now.getMinutes()
}

function timeFormat2sec(time) {
    return Math.floor(time / 100) * 3600 + (time % 100) * 60
}
