let body = document.querySelector('body')
let form = document.querySelector('.form')
let select = document.querySelector('.select')
let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('.progcess')
let res = document.querySelector('.res')
let uzi = document.querySelector('#uzi')
let span = document.querySelector('#span1')
let arrow = document.querySelector('#arrow')
let masha = document.querySelector('#masha')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let qiymat = inp1.value-inp2.value
    if(select.value == "ota"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Wrong year entered!'
        console.log('Wrong year entered!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Your father is '+ qiymat + ' years old'
            console.log('Wrong year entered!')
        }  
    }else if(select.value == "ona"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Wrong year entered!'
        console.log('Wrong year entered!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Your mother is '+ qiymat + ' years old'
            console.log('Onaning yoshi topildi!')
        }
    }else if(select.value == "aka"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Wrong year entered!'
        console.log('Wrong year entered!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Your brother is '+ qiymat + ' years old'
            console.log('Akaning yoshi topildi!')
        }
    }else if(select.value == "opa"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Wrong year entered!'
        console.log('Wrong year entered!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Your sister is '+ qiymat + ' years old'
            console.log('Opaning yoshi topildi!')
        }
    }else if(select.value == "qushni"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Wrong year entered!'
        console.log('Wrong year entered!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Your neighbour is '+ qiymat + ' years old'
            console.log('Qo`shnining yoshi topildi!')
        }
    }else if(select.value == "tanish"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        h2.textContent = 'Wrong year entered!'
        console.log('Wrong year entered!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'Your acquaintance is '+ qiymat + ' years old'
            console.log('Tanishning yoshi topildi!')
        }
    }
    else if(select.value == "uzi"){
        if(inp1.value<=inp2.value){
            let h2 = document.createElement('h2')
        res.append(h2)
        body.append(res)
        let ism = prompt('What is your name?')
        h2.textContent = ism.toUpperCase() + ' maybe you watch a cartoon!'
        masha.style.display = 'inline-block'
        form.style.display = 'none'
        console.log('He is watching a cartoon!')
        }
        else{
            let h2 = document.createElement('h2')
            res.append(h2)
            body.append(res)
            h2.textContent = 'You are '+ qiymat + ' years old'
            console.log('found his age')
        }
    }
})
let h2 = document.createElement('h2')
        res.append(h2)

let div = document.createElement('div')
        div.setAttribute('class', 'btn-wrap')
            
let newBtn1 = document.createElement('button')
        newBtn1.setAttribute('class', 'newbtn1')

let newBtn2 = document.createElement('button')
        newBtn2.setAttribute('class', 'newbtn2')
        


select.addEventListener('click', (e)=>{
    e.preventDefault()
    if(select.value == "uzi"){
        span.style.display = 'none'
        btn.style.display = 'none'
        
            h2.textContent = 'Don`t you know your age?'
            
            newBtn1.textContent = 'I don`t know'
            
            newBtn2.textContent = 'I know'
            div.append(newBtn1, newBtn2)
            body.append(res, div, div)
            
        }
    })
    newBtn1.addEventListener('click', ()=>{
        alert('Shame...!')
        span.style.display = 'flex'
            btn.style.display = 'inline-block'
            div.style.display = 'none'
            h2.remove()
    })

    newBtn2.addEventListener('click', ()=>{
        alert('This page has refreshed!')
        div.style.display = 'none'
        h2.remove()
        span.style.display = 'flex'
        btn.style.display = 'inline-block'
        window.location.reload()
    })


arrow.addEventListener('click', ()=>{
    window.location.reload()
})