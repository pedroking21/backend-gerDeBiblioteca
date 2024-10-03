class Livro {
    // Atributos privados que representam as características de um livro
    private idLivro: number;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private statusLivro: string;
  
    // Construtor para inicializar os atributos
    constructor(idLivro: number, titulo: string, autor: string, editora: string, anoPublicacao: string, isbn: string, quantTotal: number, quantDisponivel: number, valorAquisicao: number, statusLivro: string) {
      this.idLivro = idLivro;
      this.titulo = titulo;
      this.autor = autor;
      this.editora = editora;
      this.anoPublicacao = anoPublicacao;
      this.isbn = isbn;
      this.quantTotal = quantTotal;
      this.quantDisponivel = quantDisponivel;
      this.valorAquisicao = valorAquisicao;
      this.statusLivro = statusLivro;
    }
  
    // Getters e Setters para cada atributo privado
    public getIdLivro(): number {
      return this.idLivro;
    }
  
    public getTitulo(): string {
      return this.titulo;
    }
  
    public getAutor(): string {
      return this.autor;
    }
  
    public getEditora(): string {
      return this.editora;
    }
  
    public getAnoPublicacao(): string {
      return this.anoPublicacao;
    }
  
    public getIsbn(): string {
      return this.isbn;
    }
  
    public getQuantTotal(): number {
      return this.quantTotal;
    }
  
    public getQuantDisponivel(): number {
      return this.quantDisponivel;
    }
  
    public getValorAquisicao(): number {
      return this.valorAquisicao;
    }
  
    public getStatusLivro(): string {
      return this.statusLivro;
    }
  }