//
// let persone ={
//     name:'Maks',
//     come: true,
// };
//
// let p = new Promise((resolve,reject) =>{
//     if (persone.come){
//         return resolve('i come')
//     }else {
//         return reject('i dont come')
//     }
// }).then((response) =>{
//     console.log(response)
// }).catch((err) =>{
//     console.log(err)
// }).finally(() =>{
//     console.log('i work')
// })



// let p = new Promise((resolve,reject) =>{
//     if (persone.come){
//         return resolve('i come')
//     }else {
//         return reject('i dont come')
//     }
// }).then((response) =>{
//     console.log(response);
//     return 1
// }).then((response) =>{
//     console.log(response)
// });


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) =>response.json())
//     .then((response) =>{
//         console.log(response)
//     }).catch((err) =>{
//     console.log('error')
// })
//
// let row = document.querySelector('.row')
// let menu = document.querySelector('.menu')
//
//
// const getAllCategories = () =>{
//     fetch('https://api.escuelajs.co/api/v1/categories')
//         .then((responsive) => responsive.json())
//         .then((responsive) =>{
//             responsive.forEach((item) =>{
//                 menu.innerHTML += `<li class="menu__item">${item.name}</li>`
//             })
//             let menuItems = document.querySelectorAll('.menu__item')
//             Array.from(menuItems).forEach((item)=>{
//
//                 item.addEventListener('click',() =>{
//
//                 })
//             })
//         })
//
//
// }
// getAllCategories()
//
// const getAllProducts = () => {
//     fetch('https://api.escuelajs.co/api/v1/products')
//         .then((response) => response.json())
//         .then((response) => {
//             console.log(response)
//             response.forEach((item) => {
//                 row.innerHTML += `
//         <div class="card">
//         <h2 class="card__title">${item.title}</h2>
//         <img src="${item.images[0]}" alt="">
//         </div>
//
//         `
//             })
//         })
// }
//
// getAllProducts()




fetch('http://localhost:3000/users')
    .then((response) =>response.json())
    .then((response) =>console.log(response))

let createBtn = document.querySelector('.crate')

createBtn.addEventListener('click',()=>{

    let newUser = {
        name:'Tilek',
        age: 23
    }

    fetch('http://localhost:3000/users',{
        method:'POST',
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(newUser)
        }).then((response)=>response.json())
        .then((response) =>console.log(response))
})

let deleteBtn = document.querySelector('.delete')

deleteBtn.addEventListener('click',()=>{
    fetch('http://localhost:3000/users/4',{
        method :'DELETE'
    }).then((response)=>response.json())
        .then((response) =>console.log(response))
})


let changeBtn = document.querySelector('.change')

changeBtn.addEventListener('click',()=>{
    fetch('http://localhost:3000/users',{
        method :'PATCH',
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify({age:26})
    }).then((response)=>response.json())
        .then((response) =>console.log(response))
    }

)






