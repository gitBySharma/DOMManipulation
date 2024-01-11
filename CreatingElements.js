const para = document.createElement('h3');
const paraText = document.createTextNode("Buy high quality organic fruits online");
para.appendChild(paraText);

const divs = document.getElementsByTagName("div");
const firstDiv = divs[0];
firstDiv.appendChild(para);

const fontType = document.getElementsByTagName("h3");
fontType[0].style.fontStyle = "italic";

const paragraph = document.createElement('p');
const paragraphText = document.createTextNode("Total fruits: 4");
paragraph.appendChild(paragraphText);
const secondDiv = divs[1];
secondDiv.appendChild(paragraph);
paragraph.id = "fruits-total";