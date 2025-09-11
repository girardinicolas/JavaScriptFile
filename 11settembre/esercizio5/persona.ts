export class Persona {
    nome: string;
  
    constructor(nome: string) {
      this.nome = nome;
    }
  
    saluta(): void {
      console.log(`Ciao, sono ${this.nome}!`);
    }
  }
  
  // Creazione istanza e invocazione metodo
  const persona = new Persona('Mario');
  persona.saluta();
  