class Persona {
    constructor(nome) {
      this.nome = nome;
    }
  
    saluta() {
      console.log(`Ciao, sono ${this.nome}!`);
    }
  }
  
  // Creazione istanza e invocazione metodo
  const persona = new Persona('Mario');
  persona.saluta();
  