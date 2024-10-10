// Classe Emprestimo
class Emprestimo {
  // Atributos privados que representam as características de um empréstimo
  private idEmprestimo: number; // ID único do empréstimo
  private dataEmprestimo: Date; // Data em que o empréstimo foi realizado
  private dataDevolucao: Date; // Data em que o livro deve ser devolvido
  private statusEmprestimo: string; // Status do empréstimo (ex: ativo, devolvido, atrasado)
  private aluno: Aluno; // Uma referência a um objeto Aluno associado ao empréstimo
  private livro: Livro; // Uma referência a um objeto Livro associado ao empréstimo

  // Construtor para inicializar os atributos do empréstimo
  constructor(
      idEmprestimo: number, // ID do empréstimo recebido como parâmetro
      dataEmprestimo: Date, // Data de empréstimo recebida como parâmetro
      dataDevolucao: Date, // Data de devolução recebida como parâmetro
      statusEmprestimo: string, // Status do empréstimo recebido como parâmetro
      aluno: Aluno, // Objeto Aluno associado ao empréstimo recebido como parâmetro
      livro: Livro // Objeto Livro associado ao empréstimo recebido como parâmetro
  ) {
      // Inicializa os atributos da classe com os valores recebidos
      this.idEmprestimo = idEmprestimo; // Atribui o ID do empréstimo
      this.dataEmprestimo = dataEmprestimo; // Atribui a data do empréstimo
      this.dataDevolucao = dataDevolucao; // Atribui a data de devolução
      this.statusEmprestimo = statusEmprestimo; // Atribui o status do empréstimo
      this.aluno = aluno; // Atribui o objeto Aluno
      this.livro = livro; // Atribui o objeto Livro
  }

  // Métodos Getters para acessar os atributos privados

  public getIdEmprestimo(): number {
      // Retorna o ID do empréstimo
      return this.idEmprestimo;
  }

  public getDataEmprestimo(): Date {
      // Retorna a data em que o empréstimo foi realizado
      return this.dataEmprestimo;
  }

  public getDataDevolucao(): Date {
      // Retorna a data de devolução do livro
      return this.dataDevolucao;
  }

  public getStatusEmprestimo(): string {
      // Retorna o status do empréstimo
      return this.statusEmprestimo;
  }

  public getAluno(): Aluno {
      // Retorna o objeto Aluno associado ao empréstimo
      return this.aluno;
  }

  public getLivro(): Livro {
      // Retorna o objeto Livro associado ao empréstimo
      return this.livro;
  }

  // Métodos Setters para modificar os atributos privados

  public setIdEmprestimo(idEmprestimo: number): void {
      // Atualiza o ID do empréstimo com o novo valor
      this.idEmprestimo = idEmprestimo;
  }

  public setDataEmprestimo(dataEmprestimo: Date): void {
      // Atualiza a data do empréstimo com o novo valor
      this.dataEmprestimo = dataEmprestimo;
  }

  public setDataDevolucao(dataDevolucao: Date): void {
      // Atualiza a data de devolução com o novo valor
      this.dataDevolucao = dataDevolucao;
  }

  public setStatusEmprestimo(statusEmprestimo: string): void {
      // Atualiza o status do empréstimo com o novo valor
      this.statusEmprestimo = statusEmprestimo;
  }

  public setAluno(aluno: Aluno): void {
      // Atualiza o objeto Aluno associado ao empréstimo
      this.aluno = aluno;
  }

  public setLivro(livro: Livro): void {
      // Atualiza o objeto Livro associado ao empréstimo
      this.livro = livro;
  }
}
