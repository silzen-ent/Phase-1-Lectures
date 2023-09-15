document.addEventListener("DOMContentLoaded", ()=> {

    //Fetch Requests
    // fetch("http://localhost:3000/books")
    // .then(response => response.json())
    // .then(books => books.forEach(renderBookCard))

    //Fetch one resource
    // fetch('http://localhost:3000/stores/1')
    // .then(response => response.json())
    // .then(store => {
    //     //hoisting this function
    //     renderHeader(store)
    //     renderFooter(store)
    // })

    function fetchResource(url){
        return fetch(url)
        .then(response => response.json())
    }

    fetchResource('http://localhost:3000/stores/2')
    .then(store => {
        console.log(store)
        renderHeader(store)
        renderFooter(store)
    })
    .catch(e => console.log(e))

    fetchResource('http://localhost:3000/books')
    .then(books => books.forEach(renderBookCard))
    .catch(e => console.error(e))


    function renderHeader(store){
        console.log(store)
        return document.querySelector('h1').textContent = store.name
    }
    
    function renderFooter(store){
        const footerDivs = document.querySelectorAll('footer div')
        console.log(footerDivs)
        footerDivs[0].textContent = store.name
        footerDivs[1].textContent = store.address
        footerDivs[2].textContent = store.hours
        return footerDivs
    }

    function handleDelete(cardData,event){
        event.preventDefault()
        fetch(`http://localhost:3000/books/${cardData.id}`, {
            method: "DELETE",
            headers: {"Content-Type": "application/json"},
        })
        .then(res => res.json())
        .then(event.target.parentElement.remove())
    }

    function handleUpdate(cardData, event){
        event.preventDefault()

        const obj = {
            inventory: event.target.value
        }

        fetch(`http://localhost:3000/books/${cardData.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(res => res.json())
        .catch(e => console.log(e))
    }

    const renderBookCard = (cardData) => {
        console.log(cardData)
        const li = document.createElement('li')
        const h3 = document.createElement("h3")
        const pAuthor = document.createElement('p')
        const pPrice = document.createElement('p')
        const image = document.createElement('img')
        const btn = document.createElement('button')
        const pInventory = document.createElement('input')
        h3.textContent = cardData.title
        pAuthor.textContent = cardData.author
        pPrice.textContent = `$ ${cardData.price}`
        pInventory.type = "number"
        pInventory.value = cardData.inventory
        btn.textContent = "Delete"
        image.src = cardData.imageUrl
        li.className = 'list-li'
        li.append(h3, pAuthor, pPrice, image, btn, pInventory)
        document.querySelector('#book-list').append(li)
        btn.addEventListener('click', (e) => handleDelete(cardData, e))
        pInventory.addEventListener("change", (e)=> handleUpdate(cardData, e))
    }
    
    function handleForm(e){
        e.preventDefault()
        const book = {
            title: e.target.title.value,
            author: e.target.author.value,
            price: e.target.price.value,
            imageUrl: e.target.imageUrl.value,
            inventory: e.target.inventory.value,
            reviews: []
        }

        fetch("http://localhost:3000/books", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({book})
            })
            .then(res => res.json())
            //another way to send the returned response to renderBookCard
            // .then(data => renderBookCard(data))
            .then(renderBookCard)
            .catch(e => console.log(e))
    }

    document.querySelector("#book-form").addEventListener("submit", handleForm)
    
    
})
