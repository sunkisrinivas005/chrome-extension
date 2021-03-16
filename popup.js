
let getUrl = document.getElementById("GetURL");

let sid = "";


let regex = /(?:\d+FOF\d+)/i;

getUrl.addEventListener("click", () =>{
    chrome.tabs.query({ active: true, currentWindow: true }, getTabsInfo);
    function getTabsInfo(tab){
        let message = {
            id : "sid"
        }
        chrome.tabs.sendMessage(tab[0].id, message , function(res) {
            console.log(res, "res.......");
            let getId = document.getElementById("url");
            getId.innerHTML = res.sid ? res.sid : "no sid found";
            sid = res && res.sid ? res.sid  : "" ;
          });
    }
})

let getText = document.getElementById("getText");


getText.addEventListener("click", () => {
    let selectedtext = document.getElementById("selectedtext");
    if(sid === "not found"){
        selectedtext.innerHTML = "sid is not found."
    }
    else if(sid && sid.length){
            selectedtext.innerHTML = regex.test(sid) ? "sid is valid" : "sid is not valid"
    }else {
        selectedtext.innerHTML = "first load sid after verify"
    }
})
