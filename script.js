function verifyCheckin (){
    personName = document.getElementById ('name').value.toUpperCase();
    namesInTheList = ['LUIZA', 'MARIA', 'GUILHERME', 'WILLIAN', 'ERICK', 'KELVI', 'EDUARDA', 'ANDREIA', 'ARIEL', 'LENI', 'JOY', 'FERNANDA', 'ROGER', 'GABRIEL', 'BIA','BEATRIZ', 'ISABELA', 'KAROL', 'FERNANDA', 'ISA', 'TATIANE', 'WELTON','JULIA', 'GABRIELA', 'AMANDA', 'MANDY', 'RAFAELLA', 'CAMILA', 'DAVI', 'YAGO', 'RHYAN']

    if (namesInTheList.includes(personName)){
        document.getElementById('invitedChecking').innerText = 'You are invited!'
    }else {
        document.getElementById('invitedChecking').innerText = `Sorry, you're not invited!`
    }
}