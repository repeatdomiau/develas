class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  imprimir() {
    console.log("Pessoa(nome: " + this.nome + " idade: " + this.idade + ")");
  }
}

class Cidadao extends Pessoa {
  constructor(nome, idade, cpf) {
    super(nome, idade);
    this.cpf = cpf;
  }

  imprimir() {
    super.imprimir();
    console.log(`Cidadão(cpf: ${this.cpf})`);
  }
}

const p1 = new Pessoa("teste", 20);
p1.imprimir();

const cid1 = new Cidadao("teste 2", 21, "000.000.000-00");
cid1.imprimir();
//console.log(cid1.cpf);

console.log(p1 instanceof Pessoa);
console.log(cid1 instanceof Cidadao, cid1 instanceof Pessoa);
