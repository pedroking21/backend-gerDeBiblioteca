class Livro {
  // Atributos privados que representam as características de um livro
  private idLivro: number; // ID único do livro
  private titulo: string; // Título do livro
  private autor: string; // Autor do livro
  private editora: string; // Editora do livro
  private anoPublicacao: string; // Ano de publicação do livro
  private isbn: string; // ISBN do livro (número padrão internacional)
  private quantTotal: number; // Quantidade total de cópias do livro
  private quantDisponivel: number; // Quantidade de cópias disponíveis para empréstimo
  private valorAquisicao: number; // Valor de aquisição do livro
  private statusLivro: string; // Status do livro (ex: disponível, emprestado, reservado)

  // Construtor para inicializar os atributos do livro
  constructor(
      idLivro: number, // ID do livro recebido como parâmetro
      titulo: string, // Título do livro recebido como parâmetro
      autor: string, // Autor do livro recebido como parâmetro
      editora: string, // Editora do livro recebida como parâmetro
      anoPublicacao: string, // Ano de publicação recebido como parâmetro
      isbn: string, // ISBN do livro recebido como parâmetro
      quantTotal: number, // Quantidade total de cópias recebida como parâmetro
      quantDisponivel: number, // Quantidade disponível recebida como parâmetro
      valorAquisicao: number, // Valor de aquisição recebido como parâmetro
      statusLivro: string // Status do livro recebido como parâmetro
  ) {
      // Inicializa os atributos da classe com os valores recebidos
      this.idLivro = idLivro; // Atribui o ID do livro
      this.titulo = titulo; // Atribui o título do livro
      this.autor = autor; // Atribui o autor do livro
      this.editora = editora; // Atribui a editora do livro
      this.anoPublicacao = anoPublicacao; // Atribui o ano de publicação do livro
      this.isbn = isbn; // Atribui o ISBN do livro
      this.quantTotal = quantTotal; // Atribui a quantidade total de cópias do livro
      this.quantDisponivel = quantDisponivel; // Atribui a quantidade disponível do livro
      this.valorAquisicao = valorAquisicao; // Atribui o valor de aquisição do livro
      this.statusLivro = statusLivro; // Atribui o status do livro
  }

  // Métodos Getters para acessar os atributos privados

  public getIdLivro(): number {
      // Retorna o ID do livro
      return this.idLivro;
  }

  public getTitulo(): string {
      // Retorna o título do livro
      return this.titulo;
  }

  public getAutor(): string {
      // Retorna o autor do livro
      return this.autor;
  }

  public getEditora(): string {
      // Retorna a editora do livro
      return this.editora;
  }

  public getAnoPublicacao(): string {
      // Retorna o ano de publicação do livro
      return this.anoPublicacao;
  }

  public getIsbn(): string {
      // Retorna o ISBN do livro
      return this.isbn;
  }

  public getQuantTotal(): number {
      // Retorna a quantidade total de cópias do livro
      return this.quantTotal;
  }

  public getQuantDisponivel(): number {
      // Retorna a quantidade de cópias disponíveis do livro
      return this.quantDisponivel;
  }

  public getValorAquisicao(): number {
      // Retorna o valor de aquisição do livro
      return this.valorAquisicao;
  }

  public getStatusLivro(): string {
      // Retorna o status do livro
      return this.statusLivro;
  }
}
