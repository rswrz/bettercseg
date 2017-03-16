// select all Peers
[].forEach.call(
document.querySelectorAll("#peerListFrame.listControlMouseOver input[id^='peerList_']:not([checked])"),
function(node){ node.click(); });
