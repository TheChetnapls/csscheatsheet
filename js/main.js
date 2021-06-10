
const jsDiv = document.createElement("div") //create new div

jsDiv.setAttribute("class", "box-js") //give new div an class

const jsH1 = document.createElement("h1") //make header
let jsH1Node = document.createTextNode("i hope this shit works")//give header text
jsH1.appendChild(jsH1Node)//add text to header
jsDiv.appendChild(jsH1)//add header to div

const jsP1 = document.createElement("p") //make the paragrah
let jsP1Node = document.createTextNode("lorem uapsd ha jawel jalkd j waeljlk jasldkj. Jlkajsdfkj lkj, asl klajkfjkd;lkadjf j j aldkjf ;ljkd;lak")
jsP1.appendChild(jsP1Node)
jsDiv.appendChild(jsP1)

const readMore = document.createElement("a")
readMore.className = 'button'
let readMoreNode = document.createTextNode('read more')
readMore.appendChild(readMoreNode)
readMore.href = "" //can't add href before appending the textnode
jsDiv.appendChild(readMore)

let containerDIV = document.querySelector('body .container')
let div2 = document.querySelector('.container .box-2')

//style
jsDiv.style.backgroundColor = "green"
jsDiv.style.marginTop = "25px"
jsDiv.style.marginBottom = "20px"
jsDiv.style.padding = "10px"
jsDiv.style.color = "white"
jsDiv.style.border = "5px darkmagenta solid"

jsH1.style.textDecoration = "underline"


containerDIV.insertBefore(jsDiv, div2)



