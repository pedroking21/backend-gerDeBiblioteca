/**
 * Classe que representa um aluno.
 */
export class Aluno {

    /* Atributos */
    /* Identificador do aluno */
    private idAluno: number = 0;
    private raAluno: string = "";
    private nome: string;
    private sobrenome: string;
    private dataNascimento: Date;
    private endereco: string;
    private email: string;
    private celular: string;

    /* Construtor da classe Aluno */
    constructor(
        nome: string,
        sobrenome: string,
        dataNascimento: Date,
        endereco: string,
        email: string,
        celular: string
    ) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.email = email;
        this.celular = celular;
    }

    /* Métodos get e set */
    public getIdAluno(): number {
        return this.idAluno;
    }

    public setIdAluno(idAluno: number): void {
        this.idAluno = idAluno;
    }

     
     public getRaAluno(): string {
        return this.raAluno;
    }


    public setRaAluno(raAluno: string): void {
        this.raAluno = raAluno;
    }


    /**
     * Retorna o nome do aluno.
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do aluno.
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna o sobrenome do aluno.*/
    public getSobrenome(): string {
        return this.sobrenome;
    }

    /**
     * Define o sobrenome do aluno.*/
    public setSobrenome(sobrenome: string): void {
        this.sobrenome = sobrenome;
    }

    /**
  * Retorna a data de nascimento do aluno.  */
    public getDataNascimento(): Date {
        return this.dataNascimento;
    }

    /**
     * Define a data de nascimento do aluno.*/
    public setDataNascimento(dataNascimento: Date): void {
        this.dataNascimento = dataNascimento;
    }

    /**
     * Retorna o endereço.
     */
    public getEndereco(): string {
        return this.endereco;
    }

    /**
     * Define o endereço.
     */
    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }

    /**
     * Retorna o email.
     */
    public getEmail(): string {
        return this.email;
    }

    /**
     * Define o email.
     */
    public setEmail(email: string): void {
        this.email = email;
    }

    /**
     * Retorna o número de celular.
     */
    public getCelular(): string {
        return this.celular;
    }

    /**
     * Define o número de celular.
     */
    public setCelular(celular: string): void {
        this.celular = celular;
    }
}