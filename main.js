let raqamlar=(e)=>{
    let demo = document.querySelector(".demo")
    demo.innerHTML += e.target.innerHTML
}

let delfunck = ()=>{
    let demo = document.querySelector(".demo")
    let arr = demo.innerHTML.split("")
    arr.pop()
    let natija = arr.join('')
    demo.innerHTML = natija
}

let btnas = ()=>{
    let demo = document.querySelector(".demo")
    demo.innerHTML = ""
}

let amallar = (e)=>{
    let demo = document.querySelector(".demo")
    demo.innerHTML += e.target.innerHTML
}

let equal = () =>{
    let demo = document.querySelector(".demo")
    demo.innerHTML = eval(demo.innerHTML)
}