let amigo = {
    nome:'José',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p //this é uma referencia ao objeto 
    }
}

amigo.engordar(1)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)