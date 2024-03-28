function addingEventListener() {
    

    
    const btn = document.getElementById('button')
    btn.addEventListener('click', () => {
        btn.textContent = "clicked"
        alert('Button was clicked')
    })
    
    
    
}

