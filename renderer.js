const { shell } = require('electron')
const openBrowserBtn = document.getElementById('openBrowserBtn')

openBrowserBtn.addEventListener('click', () => {
    shell.openExternal('https://www.google.com')
})
