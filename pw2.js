function createPassword(PassLength) {
    const Lenght = parseInt(PassLength)
   	const Charecters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let Password = "";
    for (var i = 0, n = Charecters.length; i < Lenght; ++i) { Password += Charecters.charAt(Math.floor(Math.random() * n)); }
    // console.log(Password)
    return Password;
}

createPassword(18)