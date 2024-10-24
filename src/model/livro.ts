export class Livro {

    private idLivro: number = 0;
    private titulo: string;
    private autor: string;
    private editora: string;
    private anoPublicacao: string;
    private isbn: string;
    private quantTotal: number;
    private quantDisponivel: number;
    private valorAquisicao: number;
    private statusLivroEmprestado: string;

    // Construtor da classe Livro que inicializa os atributos com valores fornecidos
    constructor(
        titulo: string,               // Título do livro
        autor: string,                // Autor do livro
        editora: string,              // Editora responsável pela publicação
        anoPublicacao: string,        // Ano de publicação do livro
        isbn: string,                 // Código ISBN do livro
        quantTotal: number,           // Total de exemplares do livro
        quantDisponivel: number,      // Quantidade disponível para empréstimo
        valorAquisicao: number,       // Valor de aquisição do livro
        statusLivroEmprestado: string  // Status se o livro está emprestado
    ) {
        // Inicializa os atributos com os valores recebidos no construtor
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.anoPublicacao = anoPublicacao;
        this.isbn = isbn;
        this.quantTotal = quantTotal;
        this.quantDisponivel = quantDisponivel;
        this.valorAquisicao = valorAquisicao;
        this.statusLivroEmprestado = statusLivroEmprestado;
    }

    // Métodos para acessar e modificar os atributos do livro

    // Retorna o identificador do livro
    public getIdLivro(): number {
        return this.idLivro;
    }

    // Define um novo identificador para o livro
    public setIdLivro(idLivro: number): void {
        this.idLivro = idLivro;
    }

    // Retorna o título do livro
    public getTitulo(): string {
        return this.titulo;
    }

    // Define um novo título para o livro
    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    // Retorna o autor do livro
    public getAutor(): string {
        return this.autor;
    }

    // Define um novo autor para o livro
    public setAutor(autor: string): void {
        this.autor = autor;
    }

    // Retorna a editora do livro
    public getEditora(): string {
        return this.editora;
    }

    // Define uma nova editora para o livro
    public setEditora(editora: string): void {
        this.editora = editora;
    }

    // Retorna o ano de publicação do livro
    public getAnoPublicacao(): string {
        return this.anoPublicacao;
    }

    // Define um novo ano de publicação para o livro
    public setAnoPublicacao(anoPublicacao: string): void {
        this.anoPublicacao = anoPublicacao;
    }

    // Retorna o ISBN do livro
    public getIsbn(): string {
        return this.isbn;
    }

    // Define um novo ISBN para o livro
    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    // Retorna a quantidade total de exemplares do livro
    public getQuantTotal(): number {
        return this.quantTotal;
    }

    // Define uma nova quantidade total de exemplares para o livro
    public setQuantTotal(quantTotal: number): void {
        this.quantTotal = quantTotal;
    }

    // Retorna a quantidade disponível de exemplares para empréstimo
    public getQuantDisponivel(): number {
        return this.quantDisponivel;
    }

    // Define uma nova quantidade disponível de exemplares para o livro
    public setQuantDisponivel(quantDisponivel: number): void {
        this.quantDisponivel = quantDisponivel;
    }

    // Retorna o valor de aquisição do livro
    public getValorAquisicao(): number {
        return this.valorAquisicao;
    }

    // Define um novo valor de aquisição para o livro
    public setValorAquisicao(valorAquisicao: number): void {
        this.valorAquisicao = valorAquisicao;
    }

    // Retorna o status de empréstimo do livro (se está emprestado ou não)
    public getStatusLivroEmprestado(): string {
        return this.statusLivroEmprestado;
    }

    // Define o status de empréstimo do livro
    public setStatusLivroEmprestado(statusLivroEmprestado: string): void {
        this.statusLivroEmprestado = statusLivroEmprestado;
    }
}
