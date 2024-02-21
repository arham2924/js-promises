async function postsbyuser(completed) {
    const promise = await fetch("https://jsonplaceholder.typicode.com/todos")
    
    const result = await promise.json()

    
    const posts = result.filter(element => element.completed === false).slice(0, 6)
        
    console.log(posts)
    

    
}


postsbyuser(6)