function verifyCheckin (){
    personName = document.getElementById ('name').value.toUpperCase();

    namesInTheList = ['MARIA', 'GUILHERME', 'ROGER',  'ISABELA', 'ANA', 'TATIANE', 'WELTON', 'RAFAELLA', 'CAMILA', 'DAVI', 'YAGO', 'RHYAN', 'MESSI']

    if (namesInTheList.includes(personName)){
        document.getElementById('invitedChecking').innerText = 'You are invited!'
        setTimeout(() => {
            document.getElementById('invitedChecking').innerText = 'Checking...'
          }, '2000') 
    }else {
        document.getElementById('invitedChecking').innerText = `Sorry, you're not invited!`
        setTimeout(() => {
            document.getElementById('invitedChecking').innerText = 'Checking...'
          }, '2000') 
    }
}