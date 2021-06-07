const empresa = "PASSAREDO";
const totalVoosDomesticos = db.voos.find({
  $and: [{ "empresa.nome": empresa }, { natureza: "Doméstica" }] }).count();

db.resumoVoos.insertOne({ empresa, totalVoosDomesticos });

db.resumoVoos.find({}, { _id: 0 });
