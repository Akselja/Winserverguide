// buttons
const next = document.querySelector(".next");
const previous = document.querySelector(".previous");

// sections
const sections = document.querySelectorAll(".sections");

// quiz buttons
const activateQuiz = document.querySelector("#quiz");
const activateQuizBG = document.querySelector(".quizBackground");

// section name array
const sectionNames = ["Del 1: Server VM Setup", "Del 2: Windows Setup", "Del 3: Begynn Serverkonfig", "Del 4: DNS og AD DS", "Del 5: DHCP Server", "Del 6: Klientmaskin", "Del 7: IIS og FTP Server", "Del 8: FTP Tilkobling", "Quiz: Hva har du lært?"];

// default starting page number
let pageNum = 0;

// next page
next.addEventListener("click", () => {
    if(pageNum >= 7) {
        // activate quiz on last button push
        pageNum = 7;
        activateQuiz.classList.add("quizSelected");
        activateQuizBG.classList.add("quizSelected");
    } else {
        // change page
        pageNum++;
        sections[pageNum - 1].classList.remove("sectionSelected");
        sections[pageNum].classList.add("sectionSelected");

        // change button text
        next.textContent = `Neste Seksjon [${sectionNames[pageNum + 1]}] >`;

        // scroll to top
        scrollTo(0, 0);

        // remove previous button if first page
        if(pageNum <= 0) {
            previous.classList.add("hide");
        } else {
            previous.classList.remove("hide");
        }

    }
    
})

previous.addEventListener("click", () => {
    if(pageNum <= 0){
        // limit page number
        console.log("no sections to go back to");
        pageNum = 0;
    } else {
        // change page
        pageNum--;
        sections[pageNum + 1].classList.remove("sectionSelected");
        sections[pageNum].classList.add("sectionSelected");

        // change button text
        next.textContent = `Neste Seksjon [${sectionNames[pageNum + 1]}] >`;

        // scroll to top
        scrollTo(0, 0);

        // replace previous button if first page
        if(pageNum <= 0) {
            previous.classList.add("hide");
        } else {
            previous.classList.remove("hide");
        }
    }
    
})


// sidebarButtons
const sidebarButton = document.querySelector(".sectionButton");

// sidebar
const sidebar = document.querySelector(".sectionSidebar");

// boolean tracking if the sidebar is active or not
let sidebarActive = false;

// toggle sidebar
sidebarButton.addEventListener("click", () => {
    if(!sidebarActive) {
        sidebar.classList.add("sidebarSelected");
    } else {
        sidebar.classList.add("sidebarRemoveAnimation");
        setTimeout(() => {
            sidebar.classList.remove("sidebarSelected");
            sidebar.classList.remove("sidebarRemoveAnimation");
        }, 390);
    }
    sidebarActive = !sidebarActive;
})

// gets main element and makes it clickable to remove the sidebar
const main = document.querySelector("main");
main.addEventListener("click", () => {
    sidebar.classList.add("sidebarRemoveAnimation");
    setTimeout(() => {
        sidebar.classList.remove("sidebarSelected");
        sidebar.classList.remove("sidebarRemoveAnimation");
    }, 390);
    sidebarActive = false;
})


// change section through sidebar
sidebar.addEventListener("click", e => {
    if(e.target.classList.contains("sidebarButton")) {
        sections[pageNum].classList.remove("sectionSelected");
        switch (e.target.classList[1]) {
            case "btn1":
                pageNum = 0;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn2":
                pageNum = 1;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn3":
                pageNum = 2;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn4":
                pageNum = 3;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn5":
                pageNum = 4;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn6":
                pageNum = 5;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn7":
                pageNum = 6;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            case "btn8":
                pageNum = 7;
                sections[pageNum].classList.add("sectionSelected");
                scrollTo(0, 0);
                break;
            default:
                console.log("death");
                break;
        }
        // change button text
        next.textContent = `Neste Seksjon [${sectionNames[pageNum + 1]}] >`;

        // remove previous button if first page
        if(pageNum <= 0) {
            previous.classList.add("hide");
        } else {
            previous.classList.remove("hide");
        }
    }
    
})