
function addParticipant(event) {
    event.preventDefault();
    const nameInputElt = document.getElementById('nameInput')
    const participantName = nameInputElt.value.trim();
    console.log("test")
    if(participantName === ""){
        alert("le Nom est obligatioire !!");
        return;
    }    
    const participantElt = `<li>${participantName}</li>   `;
    const participantListElt = document.getElementById("participantList");
    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;
    nameInputElt.value = "";  
    
    
}
const addNameformElt = document.getElementById("addNameForm");
addNameformElt.addEventListener('submit', addParticipant);