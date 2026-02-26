// R1
// Comparação de status dos personagens Marvel

const personagem = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "raios repulsores",
    armaSecundaria: "",
    velocidade: 85, // de 0 a 100
    forca: 80, // de 0 aa 100
    resistencia: 90, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagem1 = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo americano",
    armaSecundaria: "",
    velocidade: 85, // de 0 a 100
    forca: 75, // de 0 aa 100
    resistencia: 80, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagem2 = {
    nome: "Thor Odinson",
    codinome: "Thor, o Deus do Trovão",
    armaPrincipal: "Mjölnir",
    armaSecundaria: "",
    velocidade: 85, // de 0 a 100
    forca: 95, // de 0 aa 100
    resistencia: 80, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagem3 = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Punhos",
    armaSecundaria: "",
    velocidade: 85, // de 0 a 100
    forca: 95, // de 0 aa 100
    resistencia: 90, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagem4 = {
    nome: "	Thanos",
    codinome: "Thanos",
    armaPrincipal: "Manopla do infinito",  
    armaSecundaria: "",
    velocidade: 80, // de 0 a 100     
    forca: 100, // de 0 aa 100
    resistencia: 95, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagem5 = {
    nome: "	Clinton Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e flecha",  
    armaSecundaria: "",
    velocidade: 40, // de 0 a 100     
    forca: 35, // de 0 aa 100
    resistencia: 30, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagem6 = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Bastões",
    armaSecundaria: "Pistolas",
    velocidade: 60, // de 0 a 100
    forca: 55, // de 0 aa 100
    resistencia: 40, // de 0 a 100
    descricao: function (){
        return "Nome do personagem: " + this.nome + "\n"
            + "Codinome do personagem: " + this.codinome + "\n"
            + "Arma principal: " + this.armaPrincipal + "\n"
            + "Arma secundária: " + this.armaSecundaria + "\n"
            + "Nível de força: " + this.forca + "\n"
            + "Nível de velocidade: " + this.velocidade + "\n"
            + "Nível de resistência: " + this.resistencia
    }
}

const personagens = [personagem, personagem1, personagem2, personagem3, personagem4, personagem5, personagem6]

personagens.forEach(p => {
    p.poderTotal = p.forca + p.velocidade + p.resistencia;
});

personagens.sort((a, b) => b.poderTotal - a.poderTotal);
// DC>Mrvl_XD
console.log("Ranking de poder:");
personagens.forEach(p => {
    console.log(p.codinome + " - " + p.poderTotal);
});
