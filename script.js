//O "Daniel", localizado na minha const atletas[2],
// pode mudar de lugar com os outros atletas.

const atletas = ["Rafael", "Manoel", "Daniel"];
function positions(firstPlace, secondPlace, lastPlace) {
  for (let i = 0; i < atletas.length; i++) {
    if ("Daniel" == atletas[2]) {
      atletas.splice(1, 2, "Daniel", "Manoel");
    } else if ("Daniel" == atletas[1]) {
      atletas.splice(0, 3, "Daniel", "Rafael", "Manoel");
    }

    return console.log(`${firstPlace + " " + atletas[0]} 
${secondPlace + " " + atletas[1]}
${lastPlace + " " + atletas[2]}`);
  }
}

positions("1ª - Colocado", "2ª - Colocado", "3ª - Colocado");
