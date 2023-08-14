const cardapio = [
  {
    codigo: "cafe",
    descricao: "Café",
    extra: false,
    codigoExtra: null,
    valor: 300,
  },
  {
    codigo: "chantily",
    descricao: "Chantily (extra do Café)",
    extra: true,
    codigoExtra: "cafe",
    valor: 150,
  },
  {
    codigo: "suco",
    descricao: "Suco Natural",
    extra: false,
    codigoExtra: null,
    valor: 620,
  },
  {
    codigo: "sanduiche",
    descricao: "Sanduíche",
    extra: false,
    codigoExtra: null,
    valor: 650,
  },
  {
    codigo: "queijo",
    descricao: "Queijo (extra do Sanduíche)",
    extra: true,
    codigoExtra: "sanduiche",
    valor: 200,
  },
  {
    codigo: "salgado",
    descricao: "Salgado",
    extra: false,
    codigoExtra: null,
    valor: 725,
  },
  {
    codigo: "combo1",
    descricao: "1 Suco e 1 Sanduíche",
    extra: false,
    codigoExtra: null,
    valor: 950,
  },
  {
    codigo: "combo2",
    descricao: "1 Café e 1 Sanduíche",
    extra: false,
    codigoExtra: null,
    valor: 750,
  },
];

export { cardapio };
