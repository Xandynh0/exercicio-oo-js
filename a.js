// Classe abstrata
class Veiculo {
    constructor(marca, modelo) {
        if (new.target === Veiculo) {
            throw new Error("A classe Veiculo não pode ser instanciada diretamente.");
        }
        this.marca = marca;
        this.modelo = modelo;
    }

    exibirDetalhes() {
        throw new Error("O método exibirDetalhes() deve ser implementado nas subclasses.");
    }
}

// Subclasse 1
class Carro extends Veiculo {
    constructor(marca, modelo, numeroDePortas) {
        super(marca, modelo);
        this.numeroDePortas = numeroDePortas;
    }

    exibirDetalhes() {
        return `Carro: ${this.marca} ${this.modelo}, com ${this.numeroDePortas} portas.`;
    }
}

// Subclasse 2
class Moto extends Veiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    exibirDetalhes() {
        return `Moto: ${this.marca} ${this.modelo}, com ${this.cilindrada}cc.`;
    }
}

// Instâncias
const carro1 = new Carro("Toyota", "Corolla", 4);
const carro2 = new Carro("Honda", "Civic", 4);
const moto1 = new Moto("Yamaha", "MT-07", 689);

// Exibição dos detalhes
console.log(carro1.exibirDetalhes());
console.log(carro2.exibirDetalhes());
console.log(moto1.exibirDetalhes());
