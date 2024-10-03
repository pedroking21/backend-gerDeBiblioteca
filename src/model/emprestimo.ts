// Classe Emprestimo
class Emprestimo {
    // Atributos privados que representam as características de um empréstimo
    private idEmprestimo: number;
    private dataEmprestimo: Date;
    private dataDevolucao: Date;
    private statusEmprestimo: string;
    private aluno: Aluno; // Uma referência a um aluno
    private livro: Livro; // Uma referência a um livro
  
    // Construtor para inicializar os atributos
    constructor(idEmprestimo: number, dataEmprestimo: Date, dataDevolucao: Date, statusEmprestimo: string, aluno: Aluno, livro: Livro) {
      this.idEmprestimo = idEmprestimo;
      this.dataEmprestimo = dataEmprestimo;
      this.dataDevolucao = dataDevolucao;
      this.statusEmprestimo = statusEmprestimo;
      this.aluno = aluno;
      this.livro = livro;
    }
  
    // Getters e Setters para cada atributo privado
    public getIdEmprestimo(): number {
      return this.idEmprestimo;
    }
  
    public getDataEmprestimo(): Date {
      return this.dataEmprestimo;
    }
  
    public getDataDevolucao(): Date {
      return this.dataDevolucao;
    }
  
    public getStatusEmprestimo(): string {
      return this.statusEmprestimo;
    }
  
    public getAluno(): Aluno {
      return this.aluno;
    }
  
    public getLivro(): Livro {
      return this.livro;
    }
    
    public setIdEmprestimo(idEmprestimo: number): void {
        this.idEmprestimo = idEmprestimo;
    }

    public setDataEmprestimo(dataEmprestimo: Date): void {
        this.dataEmprestimo = dataEmprestimo;
    }

    public setDataDevolucao(dataDevolucao: Date): void {
        this.dataDevolucao = dataDevolucao;
    }

    public setStatusEmprestimo(statusEmprestimo: string): void {
        this.statusEmprestimo = statusEmprestimo;
    }

    public setAluno(aluno: Aluno): void {
        this.aluno = aluno;
    }

    public setLivro(livro: Livro): void {
        this.livro = livro;
    }
}
  
  