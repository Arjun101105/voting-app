const result_button = document.getElementById('results-btn')

result_button.addEventListener('click', async(e)=>{
    e.preventDefault()
    try{
        const response = await fetch('http://localhost:5000/api/admin/add', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }

        })
        const data = await response.json()
    }catch(e){
        alert('Server error')
    }
})