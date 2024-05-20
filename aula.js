class hero{
	constructor(nome,idade,tipo,ataque){
    this.nome = nome
    this.idade = idade
    this.tipo = tipo
    this.ataque = ataque
    }
    escrever(){
    console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    
    }
}
let exibir = new hero("King",17,"Mago","Magia")
exibir.escrever()
