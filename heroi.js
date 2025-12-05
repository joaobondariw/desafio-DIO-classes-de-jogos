const readline = require("readline");

// Classe do herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;

            case "guerreiro":
                ataque = "espada";
                break;

            case "monge":
                ataque = "artes marciais";
                break;

            case "ninja":
                ataque = "shuriken";
                break;

            default:
                ataque = "um ataque desconhecido";
                break;
        }

        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Interface para ler entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Perguntas ao usuário
rl.question("Digite o nome do herói: ", function (nome) {
    rl.question("Digite a idade do herói: ", function (idade) {
        rl.question("Digite o tipo do herói (mago, guerreiro, monge, ninja): ", function (tipo) {

            const heroi = new Heroi(nome, idade, tipo);

            console.log("\n--- Resultado ---");
            heroi.atacar();

            rl.close();
        });
    });
});
