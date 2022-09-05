function genPassword(){
    const chars = '0123456789abcdefghjiklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const passwordlength = 100
    let password = ''
    // let randomnumber = Math.floor(Math.random() * chars.length)
    // console.log(randomnumber)

    // let cekSubstring = chars.substring(10,13)
    // console.log(cekSubstring)

    for(let i = 0; i < passwordlength; i++){
        let randomNumber = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNumber, randomNumber+1)
    }
    document.getElementById('password').value = password
}

function copyPassword(){
    const copyText = document.getElementById('password')
    copyText.select()
    copyText.setSelectionRange(0, 999)
    document.execCommand('copy')
    alert('password sudah di copy')
}