function checaIdade(idade) {
    return new Promise(function(resolve, reject) {
        setTimeout(2000);
        if(idade >= 18) {
            resolve();
        }
        else {
            reject();
        }
    });
}

checaIdade(13)
    .then(function() {
        console.log("Maior que 18");
    })
    .catch(function() {
        console.log("Menor que 18");
    });