//O "Daniel", localizado na minha const atletas[2],
// pode mudar de lugar com os outros atletas.

function positions(firstPlace, secondPlace, lastPlace) {
  const atletas = [firstPlace, secondPlace, lastPlace];
  if ("Daniel" == atletas[2]) {
    atletas.splice(1, 2, lastPlace, secondPlace);
  } else if ("Daniel" == atletas[1]) {
    atletas.splice(0, 3, secondPlace, firstPlace, lastPlace);
  }
  return console.log(`1ª - Colocado ${atletas[0]}
2ª - Colocado ${atletas[1]}
3ª - Colocado ${atletas[2]}`);
}
positions("Rafael", "Manoel", "Daniel");
