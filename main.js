const cuadritos = document.getElementById('contenedor');
let numeroDeCuadros;
let px;

const createBlock = (sizeBlock) => {
  resetElements();
  cuadritos.style.width = `${sizeBlock}px`;
  cuadritos.style.height = `${sizeBlock}px`;
  px = sizeBlock;
}

const createSquares = (sizeSquares) => {
  resetElements();
  numeroDeCuadros = (px / sizeSquares);
  const reality = numeroDeCuadros * numeroDeCuadros;
  for(let i = 0; i < reality; i++) {
    console.log('divCreate');
    const divElement = document.createElement("div");
    cuadritos.appendChild(divElement);
    divElement.style.width = `${sizeSquares}px`;
    divElement.setAttribute("id", i);
    divElement.setAttribute("onclick", `paintSquare(${i})`);
  }
}

const resetElements = () => {
  cuadritos.innerHTML = '';
}

const paintSquare = (i) => {
  const square = document.getElementById(i);
  square.classList.toggle("color-black");
}
