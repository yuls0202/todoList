const data = {
  globalCount: 5,
  list: [
    {
      idx: 1,
      content: "일어나기",
      doneYn: "Y",
    },
    {
      idx: 2,
      content: "밥먹기",
      doneYn: "N",
    },
    {
      idx: 3,
      content: "양치하기",
      doneYn: "N",
    },
    {
      idx: 4,
      content: "출근하기",
      doneYn: "N",
    },
    {
      idx: 5,
      content: "컴퓨터 켜기",
      doneYn: "N",
    },
  ],
};

if (localStorage.getItem("data") == undefined) {
  localStorage.setItem("data", JSON.stringify(data));
}
