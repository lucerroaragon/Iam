const Menu = document.querySelector(".links");

BotonMenu.addEventListener("click", () => {
  Menu.classList.toggle("mostrarLista");
  BotonMenu.classList.toggle("rotarLista");
});

const MisHabilidades = [
  {
    idHablidad: 1,
    imagen: "https://www.w3.org/html/logo",
    Nombre: "Html",
  },
  {
    idHablidad: 2,
    imagen: "img/CSS.svg",
    Nombre: "CSS",
  },
  {
    idHablidad: 3,
    imagen: "img/JS.svg",
    Nombre: "JavaScript",
  },
  {
    idHablidad: 4,
    imagen: "img/Bootstrap.png",
    Nombre: "Bootstrap",
  },
  {
    idHablidad: 5,
    imagen: "img/SQL.svg",
    Nombre: "SQL Server",
  },
  {
    idHablidad: 6,
    imagen: "img/cSharp.svg",
    Nombre: "C#",
  },
  {
    idHablidad: 7,
    imagen: "img/NET-Framework.png",
    Nombre: ".Net Framework",
  },
  {
    idHablidad: 8,
    imagen: "img/cMas.png",
    Nombre: "C++",
  },
  {
    idHablidad: 9,
    imagen: "img/excel.svg",
    Nombre: "Excel",
  },
  {
    idHablidad: 10,
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Microsoft_Word_logo_%282013-2019%29.png?20131212130336",
    Nombre: "Word",
  },
];

const renderHabilidades = () => {
  const divHabilidades = document.querySelector(
    "#habilidades .ContHabilidades"
  );
  const HabilidadesData = MisHabilidades;
  let divGrupoHabilidad;
  HabilidadesData.forEach((habilidad, index) => {
    if (index % 4 == 0) {
      divGrupoHabilidad = document.createElement("div");
      divGrupoHabilidad.className = "grupoHabilidades";
      divHabilidades.appendChild(divGrupoHabilidad);
    }
    // div contenedor de cada Habilidad
    const divHabilidad = document.createElement("div");
    divHabilidad.classList = "caja";
    divHabilidad.innerHTML = `
		<img src=${habilidad.imagen}>
		<h2>${habilidad.Nombre}</h2>
		`;

    // agrego el div habilidad
    divGrupoHabilidad.appendChild(divHabilidad);
  });
};


