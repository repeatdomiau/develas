let sem1 = 'vermelho'

let nomes = []
let emails = []

nomes[0] = 'pessoa 1'
emails[0] = 'email 1'

nomes[1] = 'pessoa 2'
emails[1] = 'email 2'

contatos = [
    ['nome1', 'email1'],
    ['nome2', 'email2']
]

class Pessoa{
    #nome

    constructor(nome){
        this.#nome = nome;
    }

    setNome(nome){
        this.#nome = nome;
    }

    getNome(){
        return this.#nome;
    }
}

class Semaforo{

    #estado

    constructor(){
        this.#estado = 'vermelho'
    }

    mudarEstado(){
        if(this.#estado === 'vermelho') this.#estado = 'verde'
        else if(this.#estado === 'amarelo') this.#estado = 'vermelho'
        else if (this.#estado === 'verde') this.#estado = 'amarelo'
        else throw new Error('Algo deu muito errado com esse semáforo')
    }

    getEstado(){
        return this.#estado.toUpperCase()
    }
}

class Contato{
    constructor(nome, email){
        this.nome = nome
        this.email = email
    }
}

class Agenda{
    constructor(){
        this.contatos = new Array()
    }

    addContato(contato){
        if(!contato) throw Error('addContato espera um contato')
        if(!contato instanceof Contato) throw Error('addContato espera um Contato')
        this.contatos.push(contato)
    }
}

const agenda = new Agenda();
agenda.contatos.push(new Contato('nome1', 'email1'))
agenda.contatos.push(new Contato('nome2', 'email2'))
agenda.contatos.push({nome : 'nome3', tel : 'email3'})
