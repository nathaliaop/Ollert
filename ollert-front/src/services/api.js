export function loadLists() {
  return [
    { 
      title: 'Tarefas', 
      creatable: true,
      cards: [
        {
          id: 1,
          content: 'Criar o Ollert',
          labels: ['#7159c1']
        },
        {
          id: 2,
          content: 'Copiar a interface do Pipefy',
          labels: ['#7159c1']
        },
        {
          id: 3,
          content: 'Refazer o arquivo api com um objeto pra label já que vai ser uma tabela',
          labels: ['#7159c1']
        },
        {
          id: 4,
          content: 'Design com darkmode',
          labels: ['#54e1f7']
        },
        {
          id: 5,
          content: 'Separar temas com useContext ou provider do styled-components',
          labels: ['#54e1f7']
        },
      ]
    },
    { 
      title: 'Fazendo', 
      creatable: false,
      cards: [
        {
          id: 6,
          content: 'Aprender a tipar essas paradas pra tirar os erros',
          labels: []
        }
      ]
    },
    { 
      title: 'Concluído', 
      creatable: false,
      cards: [
        {
          id: 7,
          content: 'Ver se a natalia tá bem',
          labels: ['#7159c1']
        },
        {
          id: 8,
          content: 'Encher a natalia de mensagens fofas',
          labels: ['#54e1f7']
        },
        {
          id: 9,
          content: 'Estudar biblioteca de drag and drop',
          labels: [],
        }
      ]
    }
  ];
}