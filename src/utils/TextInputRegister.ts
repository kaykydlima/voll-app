const sections = [
  {
    id: 1,
    title: "Insira alguns dados básicos",
    input: [
      {
        id: 1,
        label: "Nome",
        placeholder: "Digite seu nome completo",
      },
      {
        id: 2,
        label: "Email",
        placeholder: "Digite seu email",
      },
    ],
  },
  {
    id: 2,
    title: "Adicione mais alguns dados",
    input: [
      {
        id: 1,
        label: "CEP",
        placeholder: "Digite seu CEP",
      },
    ],
  },
  {
    id: 3,
    title: "Para finalizar, quais são os seus planos?",
    checkbox: [
      {
        id: 1,
        value: "SulAmerica",
      },
      {
        id: 2,
        value: "Amil",
      },
    ],
  },
]

export default sections
