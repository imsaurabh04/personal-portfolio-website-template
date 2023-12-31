const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

const opentab = (tabname)=> {
    for(let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// to handling open and close menu for small screens

const sidemenu = document.getElementById("sidemenu");

const openmenu = ()=> {
    sidemenu.style.right = "0";
}

const closemenu = ()=> {
    sidemenu.style.right = "-200px";
}
