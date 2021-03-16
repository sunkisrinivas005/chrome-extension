console.log("testing..........");



chrome.runtime.onMessage.addListener(gotMessage);


function gotMessage(message, sender, sendResponse){
  console.log("message", message, sendResponse)
let sid = localStorage.getItem("sid");
  sendResponse({sid:sid, message:"success"})
}




// chrome.runtime.onConnect.addListener((port) => {
//     port.onMessage.addListener((msg) => {
//       if (msg.function == 'html') {
//         port.postMessage({ html: document.documentElement.outerHTML, description: document.querySelector("meta[name=\'description\']").getAttribute('content'), title: document.title });
//       }
//     });
//   });


// chrome.tabs.onActivated.addListener(tab => {
//     //   console.log(tab, 'dadad')
//       chrome.tabs.get(tab.tabId, current_tab => {
//         chrome.tabs.sendMessage(tab.tabId, {greeting: "hello", sid: localStorage.getItem("sid")}, function(response) {
//             console.log(response.farewell);
//           });
//         // console.log(current_tab, window, 'current......');
//         // chrome.tabs.executeScript(null, {file:'./background.js'})
//         // chrome.storage.sync.get('sid', function(data) {
//         //   console.log(data, "sid.....")
//         // })
//         // console.log(document, "document...................")
//       })
    
//     })