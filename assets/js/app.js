
function addParticipant(event) {
    event.preventDefault();
    const nameInputElt = document.getElementById('nameInput')
    const participantName = nameInputElt.value.trim();
    if (participantName === "") {
        alert("le Nom est obligatioire !!");
        return;
    }
    const participantElt = `<li class="participant">${participantName}<span class="degage">"X"</span></li>`;
    const participantListElt = document.getElementById("participantList");
    participantListElt.innerHTML = participantListElt.innerHTML + participantElt;
    nameInputElt.value = "";


}
const addNameformElt = document.getElementById("addNameForm");
addNameformElt.addEventListener('submit', addParticipant);

function supprimer(event) {
    var elementClick = event.target;
    if (elementClick.classList.contains("degage")) {
        elementClick.parentNode.remove()
    }

}
const testElt = document.getElementById("participantList")

testElt.addEventListener("click", supprimer);


function shuffleArray(array) {
    /*  */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        /* Je prend un chifrre au hasard basé sur la valeur actuelle de l'index, Math random au hasard puis math floor pour avoir un chiffre rond */
        
        /* je crée un variable temporaire dans laquelle je mets lindex actuel */
        const temp = array[i];
        /* je remplace la valeur de lindex actuel par lindex numéroté précedemment par le math floor et le math random */
        array[i] = array[j];
        /* swap de [i] par [j] */
        array[j] = temp;
        /* La valeur temp deviens la valeur de l'index "j" */
    }
}
/**
 * 
 * @param {*} participants 
 * @param {*} numberGroups 
 */
function generateGroups(participants, numberGroups) {
    const sorted = participants
    /*  .map((participant) => ({ participant, sort: Math.random() }))
     .sort((a, b) => a.sort - b.sort)
     .map((participant) => participant.participant)*/
    /* je mets au dessus en commentaires l'ancienne version; ensuite j'appel ma nouvelle fonction */
    shuffleArray(participants)
    /* Et paf ça fait des chocapic ! */
    const groupsArr = [];
    for (let i = 0; i < numberGroups; i++) {
        groupsArr.push([])
    }
    var groupsArrIndex = 0;
    while (sorted.length > 0) {
        groupsArr[groupsArrIndex].push(sorted.pop())
        groupsArrIndex++
        if (groupsArrIndex >= groupsArr.length) {
            groupsArrIndex = 0;
        }

    }

    const groupeListElt = document.getElementById("groupList")

    groupeListElt.innerHtml = "";

    for (let groupIndex = 0; groupIndex < groupsArr.length; groupIndex++) {
        let groupElt = `
    <div class="card bg-light mb-3" style="max-width: 20rem;">
    <div class="card-header">Groupe ${groupIndex + 1}</div>
    <div class="card-body">
    <ul>`;

        for (let participantIndex = 0; participantIndex < groupsArr[groupIndex].length; participantIndex++) {
            groupElt += `<li>${groupsArr[groupIndex][participantIndex]}</li>`;
        }

        groupElt += `
            </ul>
        </div>
    </div>`;

        groupeListElt.innerHTML += groupElt;


    }
}

const generateForm = document.getElementById("generateGroup")
generateForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const numberGroups = parseInt(document.getElementById('groupeNumber').value);

    const participantElt = document.querySelectorAll(".participant")
    const participantsElt = [];
    participantElt.forEach(element => participantsElt.push(element.textContent));
    console.log(participantsElt)

    if (Number.isNaN < 1) {
        alert("Le nombre de groupes doit être supérieur à 1");
        return;
    }
    if (numberGroups > participantsElt.length) {
        alert("Le nombre de groupes doit être inférieur ou égal au nombre de participants")
    }
    if (numberGroups < 1) {
        alert("Le nombre de groupes doit être supérieur à 1")
    }

    generateGroups(participantsElt, numberGroups)
})
