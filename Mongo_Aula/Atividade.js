use("Atividade")

db.people.insertMany(
    [
  {
    nome: "Ana Silva",
    telefone: "999912345",
    email: "ana.silva@gmail.com",
    cidade: "São Paulo",
    dataCadastro: new Date("2023-02-10")
  },
  {
    nome: "Bruno Costa",
    telefone: "41987654321",
    email: "bruno.costa@hotmail.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2022-11-05")
  },
  {
    nome: "Amanda Souza",
    telefone: "988776655",
    email: "amanda.souza@gmail.com",
    cidade: "Rio de Janeiro",
    dataCadastro: new Date("2024-01-15")
  },
  {
    nome: "Carlos Pereira",
    telefone: "41911223344",
    email: "carlos@empresa.com",
    cidade: "Curitiba",
    dataCadastro: new Date("2023-06-20")
  },
  {
    nome: "Daniel Rocha",
    telefone: "977665544",
    email: "daniel.rocha@gmail.com",
    cidade: "São Paulo",
    dataCadastro: new Date("2021-09-30")
  }
]
)

//busca 1
use("Atividade")
db.people.find({nome: /^A/i})

//busca 2
use("Atividade")
db.people.find({telefone: /^9/})
// busca 3
use("Atividade")
db.people.find({email: /gmail.com$/})

//busca 4
use("Atividade")
db.people.find({cidade: "São Paulo"})

//busca 5
use("Atividade")
db.people.find({dataCadastro: {$gte: ISODate("2023-01-01")}})

//update 1
use('Atividade')
db.people.updateOne(
  {_id:ObjectId("698328cc80387908fa4b3746")},
  {$set:{nome: "Bianca", email: "bianca.souza@gmail.com"}}
)
use("Atividade")
db.people.find()

//upDate 2
use("Atividade")
db.people.updateOne(
  {nome: "Bruno Costa"},
  {$set:{cidade:"Santos"}}
)

//update 3
use("Atividade")
db.people.updateMany(
  {telefone: /^41/},
  {$set: {cidade: "Curitiba"}}
)
//Deletar 1
use("Atividade")
db.people.deleteOne(
  {nome:"Daniel Rocha"}
);
//deletar 2
use("Atividade")
db.people.deleteMany( 
  {cidade:"Curitiba"}
);