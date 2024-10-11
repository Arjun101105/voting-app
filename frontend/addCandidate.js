const candidateForm = document.getElementById('candidate-form')
// const candidateName = document.getElementById('candidate-name').value
// const candidateParty = document.getElementById('candidate-party').value


candidateForm.addEventListener('submit', async (e)=>{
    e.preventDefault()
    const name = document.getElementById('candidate-name').value
    const party = document.getElementById('candidate-party').value

    const token = localStorage.getItem('token')
    if (!token) {
        document.getElementById('addCand-msg').textContent = 'No token found. Please log in.';
        document.getElementById('addCand-msg').style.color = 'red';
        return;}
    
    try{
        const response = await fetch('http://localhost:5000/api/admin/add', {
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                name,
                party
            })

        })
        const data = await response.json()
        const messageDiv = document.getElementById('addCand-msg')
        if(response.ok){
            messageDiv.textContent = 'Candidate added successfully !'
            messageDiv.style.color = 'green'
        }else{
            messageDiv.textContent = data.msg || 'Failed to add candidate'
            messageDiv.style.color = 'red'
        }
    }catch(e){
        console.log(`Error: ${e}`);
        messageDiv.textContent = 'Server error'
    }
})