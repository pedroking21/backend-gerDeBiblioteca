class Aluno {
  // Atributos privados que representam as características de um aluno
  private idAluno: number; // ID único do aluno
  private nome: string; // Nome do aluno
  private sobrenome: string; // Sobrenome do aluno
  private dataNascimento: Date; // Data de nascimento do aluno
  private endereco: string; // Endereço do aluno
  private email: string; // E-mail do aluno
  private celular: string; // Número de celular do aluno

  // Construtor para inicializar os atributos do aluno
  constructor(
      idAluno: number, // ID do aluno recebido como parâmetro
      nome: string, // Nome do aluno recebido como parâmetro
      sobrenome: string, // Sobrenome do aluno recebido como parâmetro
      dataNascimento: Date, // Data de nascimento recebida como parâmetro
      endereco: string, // Endereço recebido como parâmetro
      email: string, // E-mail recebido como parâmetro
      celular: string // Número de celular recebido como parâmetro
  ) {
      // Inicializa os atributos da classe com os valores recebidos
      this.idAluno = idAluno; // Atribui o ID do aluno
      this.nome = nome; // Atribui o nome do aluno
      this.sobrenome = sobrenome; // Atribui o sobrenome do aluno
      this.dataNascimento = dataNascimento; // Atribui a data de nascimento do aluno
      this.endereco = endereco; // Atribui o endereço do aluno
      this.email = email; // Atribui o e-mail do aluno
      this.celular = celular; // Atribui o número de celular do aluno
  }

  // Métodos Getters para acessar os atributos privados

  public getIdAluno(): number {
      // Retorna o ID do aluno
      return this.idAluno;
  }

  public getNome(): string {
      // Retorna o nome do aluno
      return this.nome;
  }

  public getSobrenome(): string {
      // Retorna o sobrenome do aluno
      return this.sobrenome;
  }

  public getDataNascimento(): Date {
      // Retorna a data de nascimento do aluno
      return this.dataNascimento;
  }

  public getEndereco(): string {
      // Retorna o endereço do aluno
      return this.endereco;
  }

  public getEmail(): string {
      // Retorna o e-mail do aluno
      return this.email;
  }

  public getCelular(): string {
      // Retorna o número de celular do aluno
      return this.celular;
  }

  // Métodos Setters para modificar os atributos privados

  public setIdAluno(idAluno: number): void {
      // Atualiza o ID do aluno com o novo valor
      this.idAluno = idAluno;
  }

  public setNome(nome: string): void {
      // Atualiza o nome do aluno com o novo valor
      this.nome = nome;
  }

  public setSobrenome(sobrenome: string): void {
      // Atualiza o sobrenome do aluno com o novo valor
      this.sobrenome = sobrenome;
  }

  public setDataNascimento(dataNascimento: Date): void {
      // Atualiza a data de nascimento do aluno com o novo valor
      this.dataNascimento = dataNascimento;
  }

  public setEndereco(endereco: string): void {
      // Atualiza o endereço do aluno com o novo valor
      this.endereco = endereco;
  }

  public setEmail(email: string): void {
      // Atualiza o e-mail do aluno com o novo valor
      this.email = email;
  }

  public setCelular(celular: string): void {
      // Atualiza o número de celular do aluno com o novo valor
      this.celular = celular;
  }
}
