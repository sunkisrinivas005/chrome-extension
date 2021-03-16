chrome.tabs.onActivated.addListener(tab => {

  console.log("testing....", tab)
  let msg = {
    text: "hekki"
  }
  // chrome.tabs.sendMessage(tab.tabId, msg);
  // chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  //   console.log(response, "response.....");
  // });
  
  // // (response) => {
  // //   handleMessagetoFrontend(response)
  // // }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs[0].id, "tabs...........")
    let message ={"greeting": "hello"}
    chrome.tabs.sendMessage(tabs[0].id, message , function(response) {
      console.log(response, "response.......");
      chrome.tabs.sendMessage(tabs[0].id, response , function(res) {
        console.log(res, "res.......");
      });
    });
     
  });
})

// console.log("background running...")


// chrome.browserAction.onClicked.addListener(buttonClicked);

// function buttonClicked(tab) {
//   console.log(".............", tab);
//   let msg = {
//     text: "hekki"
//   }
//   chrome.tabs.sendMessage(tab.id, msg ,(response) => {
//     handleMessagetoFrontend(response)
//   })
// }

// function handleMessagetoFrontend(data) {
//   let id = {
//     sid : data
//   }
//   chrome.tabs.sendMessage(tab.id, id)
// }