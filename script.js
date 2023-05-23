const body = document.querySelector("body"),
      modeToggle = body.querySelector(".mode-toggle");
      sidebar = body.querySelector("nav");
      sidebarToggle = body.querySelector(".sidebar-toggle");

let getMode = localStorage.getItem("mode");
if(getMode && getMode ==="dark"){
    body.classList.toggle("dark");
}

let getStatus = localStorage.getItem("status");
if(getStatus && getStatus ==="close"){
    sidebar.classList.toggle("close");
}

modeToggle.addEventListener("click", () =>{
    body.classList.toggle("dark");
    if(body.classList.contains("dark")){
        localStorage.setItem("mode", "dark");
    }else{
        localStorage.setItem("mode", "light");
    }
});

sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    if(sidebar.classList.contains("close")){
        localStorage.setItem("status", "close");
    }else{
        localStorage.setItem("status", "open");
    }
})

function showAlert() {
    Swal.fire({
        title: '"경동대학교" 정류장 탑승 예정',
        text: '"양주역" 정류장에서 하차합니다. 하차를 도와주세요.',
        icon: 'success', // 성공, 에러, 경고 등의 아이콘
        confirmButtonText: '확인', // 확인 버튼 텍스트
    });
}

const clock = document.querySelector("#h1-clock")

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${min}:${sec}`;
    // return `${hours}:${min}:${sec}`;
}

getClock();
setInterval(getClock, 1000);

function addData() {
    var dataJoined = document.querySelector(".data.joined");
    var dataEmail = document.querySelector(".data.email");
    var dataType = document.querySelector(".data.type");

    var newDataList1 = document.createElement("span");
    newDataList1.classList.add("data-list");
    newDataList1.textContent = getClockNew();
    dataJoined.insertBefore(newDataList1, dataJoined.querySelector(".data-title").nextSibling);

    var newDataList2 = document.createElement("span");
    newDataList2.classList.add("data-list");
    newDataList2.textContent = "경동대학교";
    dataEmail.insertBefore(newDataList2, dataEmail.querySelector(".data-title").nextSibling);

    var newDataList3 = document.createElement("span");
    newDataList3.classList.add("data-list");
    newDataList3.textContent = "양주역";
    dataType.insertBefore(newDataList3, dataType.querySelector(".data-title").nextSibling);
}

function getClockNew() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${min}:${sec}`;
}



