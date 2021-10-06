const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];


// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const NameGenAutor = books.map((book) => {
  return `${book.name} - ${book.genre} - ${book.author.name}`;
})
// console.log(NameGenAutor);

// Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.
const AgeBooks = books.map((book) => {
  return {
    age : book.releaseYear - book.author.birthYear,
    author : book.author.name
  }
});

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const FicFans = books.filter((book) =>
  ((book.genre === 'Fantasia' || book.genre === 'Ficção Científica') ? book : '')
);
// console.log(FicFans);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.
const AutorFicFan = FicFans.map((FicFan) => FicFan.author.name);
// console.log(AutorFicFan.sort());

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const OldBooks = books.filter((book) => ((2021 - book.releaseYear > 60)));
const OldBooksName = OldBooks.map((book) => book.name);
console.log(OldBooksName);
