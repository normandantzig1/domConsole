
function level_0() {
    // console.log("level 0 function loaded")
    // if (user === level_username && pass === level_password){
    //         window.location.assign("https://normandantzig1.github.io/webconsolepuzzle/demo-1.html?level=1") 
    //     }
    next_level()

}

function level_1(){
    let sub = document.getElementById("Submit")
    //sub.remove()
    //sub.style.display = "none"
    sub.hidden = true;
    
}

function level_2() {
    let meta = document.createElement("meta")
    meta.setAttribute("name", "readme")
    meta.setAttribute("content", "CV1DtqXWVFXTvM2F0k09SHz0YwRINYA9")

    document.getElementsByTagName("head")[0].appendChild(meta)
    
} 

function level_3(){
    

    fetch("lin_bin.json")
  .then( response => response.json())
  .then(json => {
    console.log(json);
    for (const item of json) {
    let element = document.createElement("div")
    element.setAttribute("id",item)
    element.setAttribute("class","invisible")
    document.getElementsByTagName("body")[0].appendChild(element)
    }
  }
  )

   
   let element = document.createElement("div")
    element.setAttribute("id","dash")
    element.setAttribute("password", "UmHadQclWmgdLOKQ3YNgjWxGoRMb5luK")
    document.getElementsByTagName("div")[65].appendChild(element)
    //add random elements or elements from Linux filesystem as nodes
}



function level_4(){
    //For anyone who sees this; god damn i+4 instead of i+=4 wasted 1.5 hr of my life
    //    for ( i = 0; i < s.length;  i+4) {

    let s = "pIwrPrtPN36QITSp3EQaw936yaFoFgAB"
    let l = []

    for ( i = 0; i < 32;  i+=4) {
        l.push(s.substring(i,i+4))
        
    }
    l.forEach(
        item => {
            let element = document.createElement("div")
            element.setAttribute("class","partial")
            element.setAttribute("contents", item)
            document.getElementsByTagName("body")[0].appendChild(element)
        }
    )
}


function level_5(){

    let sub = document.getElementById("Submit")
    sub.remove()
}

//Apply html and level setup to base html
function apply_level_setup(){
    switch (current_level){
        case 0:
            level_0()
            break;
        case 1:
            level_1()
            break;
        case 2:
            level_2()
            break;
        case 3:
            level_3()
            break;
        case 4:
            level_4()
            break;
        case 5:
            level_5()
            break;
        default:
            console.log("Something is wrong. You are probably not in a level \n Level URL format: [URL]?level=[number]")
    }
}