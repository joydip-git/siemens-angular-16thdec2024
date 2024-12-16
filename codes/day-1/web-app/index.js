function called() {
    console.log('welcome to JS')
    //window.document.write('welcome to JS')
    var pEle = document.createElement('p')
    pEle.innerText = 'welcome to JS'
    document.body.appendChild(pEle)

    var header = document.getElementById('mainHeader')
    header.innerText = 'Welcome to DOM API'
}

window.addEventListener(
    'DOMContentLoaded', called)