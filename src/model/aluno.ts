class Aluno {
    // Atributos privados que representam as características de um aluno
    private idAluno: number;
    private nome: string;
    private sobrenome: string;
    private dataNascimento: Date;
    private endereco: string;
    private email: string;
    private celular: string;
  
    // Construtor para inicializar os atributos
    constructor(idAluno: number, nome: string, sobrenome: string, dataNascimento: Date, endereco: string, email: string, celular: string) {
      this.idAluno = idAluno;
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.dataNascimento = dataNascimento;
      this.endereco = endereco;
      this.email = email;
      this.celular = celular;
    }
  
    // Getters e Setters para cada atributo privado
    public getIdAluno(): number {
      return this.idAluno;
    }
  
    public getNome(): string {
      return this.nome;
    }
  
    public getSobrenome(): string {
      return this.sobrenome;
    }
  
    public getDataNascimento(): Date {
      return this.dataNascimento;
    }
  
    public getEndereco(): string {
      return this.endereco;
    }
  
    public getEmail(): string {
      return this.email;
    }
  
    public getCelular(): string {
      return this.celular;
    }
    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    public setEmail(email: string): void {
        this.email = email;
    }

    public setCelular(celular: string): void {
        this.celular = celular;
    }
}
    