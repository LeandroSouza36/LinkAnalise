// Exemplo usando Node.js e MySQL

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'seu-host',
  user: 'seu-usuario',
  password: 'sua-senha',
  database: 'seu-banco-de-dados'
});

connection.connect();

// Exemplo de consulta
connection.query('SELECT * FROM sua_tabela', (error, results, fields) => {
  if (error) throw error;
  console.log('Resultados:', results);
});

connection.end();

// funcão quando a pagina é carregada
function acaoAoAbrirPagina() {
let analise = 0;
analise = analise + 1;
console.log(analise)
}