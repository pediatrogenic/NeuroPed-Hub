/* Base de dados das escalas do NeuroPed-Hub.
   Cada escala aponta para um arquivo .html em /escalas/.
   Adicione novas escalas apenas incluindo um novo objeto no array correspondente. */

const SCALES_DATA = [
  {
    category: "Autismo e Neurodesenvolvimento",
    items: [
      { title: "M-CHAT-R/F", file: "mchat-rf.html", desc: "Rastreamento de risco para Transtorno do Espectro Autista em crianças de 16 a 30 meses.", summary: "Avalia sinais precoces de risco para TEA por meio de perguntas aos pais." },
      { title: "CARS 2", file: "cars-2.html", desc: "Escala de classificação de autismo infantil, versão 2.", summary: "Avalia gravidade e características comportamentais do autismo." },
      { title: "ADOS-2", file: "ados-2.html", desc: "Protocolo de observação diagnóstica para autismo.", summary: "Observação estruturada de comunicação, interação social e comportamento." },
      { title: "SRS-2", file: "srs-2.html", desc: "Escala de Responsividade Social, segunda edição.", summary: "Mede traços e gravidade de dificuldades sociais associadas ao TEA." },
      { title: "SCQ", file: "scq.html", desc: "Questionário de Comunicação Social.", summary: "Triagem rápida para sintomas do espectro autista por relato parental." },
      { title: "ATEC", file: "atec.html", desc: "Checklist de Tratamento de Autismo.", summary: "Acompanha resposta a intervenções em fala, sociabilidade e comportamento." },
      { title: "Vineland-3", file: "vineland-3.html", desc: "Escala de Comportamento Adaptativo Vineland.", summary: "Avalia habilidades adaptativas de comunicação, vida diária e socialização." },
      { title: "Denver II", file: "denver-ii.html", desc: "Teste de Triagem de Desenvolvimento de Denver II.", summary: "Rastreia desenvolvimento motor, linguagem e social em crianças pequenas." },
      { title: "Bayley-III", file: "bayley-iii.html", desc: "Escalas Bayley de Desenvolvimento Infantil, 3ª edição.", summary: "Avalia desenvolvimento cognitivo, motor e de linguagem em bebês." },
      { title: "PEP-3", file: "pep-3.html", desc: "Perfil Psicoeducacional, 3ª edição.", summary: "Avalia habilidades e comportamentos de crianças com autismo." },
      { title: "GARS-3", file: "gars-3.html", desc: "Escala de Classificação de Autismo de Gilliam, 3ª edição.", summary: "Identifica e mede a gravidade de sintomas de autismo." },
      { title: "CASD", file: "casd.html", desc: "Diagnóstico de Espectro Autista da Infância.", summary: "Checklist diagnóstico rápido para sintomas de TEA." }
    ]
  },
  {
    category: "Comportamento e Sono",
    items: [
      { title: "SDQ", file: "sdq.html", desc: "Questionário de Capacidades e Dificuldades.", summary: "Rastreia problemas emocionais, comportamentais e de conduta." },
      { title: "CBCL", file: "cbcl.html", desc: "Inventário de Comportamentos da Infância e Adolescência.", summary: "Avalia amplo espectro de problemas comportamentais e emocionais." },
      { title: "Conners 3", file: "conners-3.html", desc: "Escala Conners de avaliação de TDAH, 3ª edição.", summary: "Mede sintomas de desatenção, hiperatividade e impulsividade." },
      { title: "SNAP-IV", file: "snap-iv.html", desc: "Questionário SNAP-IV para TDAH.", summary: "Rastreamento de sintomas de TDAH e oposição desafiadora." },
      { title: "Vanderbilt", file: "vanderbilt.html", desc: "Escala de Avaliação de TDAH de Vanderbilt.", summary: "Avalia sintomas de TDAH em contexto escolar e familiar." },
      { title: "BASC-3", file: "basc-3.html", desc: "Sistema de Avaliação Comportamental para Crianças, 3ª edição.", summary: "Avalia comportamento adaptativo e emocional em múltiplos contextos." },
      { title: "CSHQ", file: "cshq.html", desc: "Questionário de Hábitos de Sono Infantil.", summary: "Avalia distúrbios do sono e rotina de sono em crianças." },
      { title: "BISQ", file: "bisq.html", desc: "Questionário Breve de Sono Infantil.", summary: "Rastreia padrões de sono e despertares noturnos em bebês." },
      { title: "Escala de Sonolência de Epworth (Pediátrica)", file: "epworth-pediatrica.html", desc: "Avaliação de sonolência diurna excessiva.", summary: "Mede o grau de sonolência em situações do dia a dia." },
      { title: "PSQ", file: "psq.html", desc: "Questionário de Sono Pediátrico.", summary: "Triagem para distúrbios respiratórios do sono, como apneia." },
      { title: "ESS (Escala de Estresse Infantil)", file: "ess-infantil.html", desc: "Escala de Estresse Infantil.", summary: "Avalia sinais e sintomas de estresse em crianças." },
      { title: "Escala de Irritabilidade de Aberrant Behavior Checklist (ABC)", file: "abc-irritabilidade.html", desc: "Checklist de Comportamento Aberrante.", summary: "Avalia irritabilidade, letargia e hiperatividade comportamental." }
    ]
  },
  {
    category: "Paralisia Cerebral",
    items: [
      { title: "GMFCS", file: "gmfcs.html", desc: "Sistema de Classificação da Função Motora Grossa.", summary: "Classifica a gravidade do comprometimento motor grosso em 5 níveis." },
      { title: "MACS", file: "macs.html", desc: "Sistema de Classificação da Habilidade Manual.", summary: "Classifica a capacidade de manipulação de objetos com as mãos." },
      { title: "CFCS", file: "cfcs.html", desc: "Sistema de Classificação da Função Comunicativa.", summary: "Classifica a eficácia da comunicação diária da criança." },
      { title: "EDACS", file: "edacs.html", desc: "Sistema de Classificação da Habilidade de Comer e Beber.", summary: "Classifica segurança e eficiência na alimentação oral." },
      { title: "GMFM-88", file: "gmfm-88.html", desc: "Medida da Função Motora Grossa, versão 88 itens.", summary: "Avalia mudanças na função motora grossa ao longo do tempo." },
      { title: "GMFM-66", file: "gmfm-66.html", desc: "Medida da Função Motora Grossa, versão 66 itens.", summary: "Versão reduzida e validada para acompanhamento motor." },
      { title: "PEDI-CAT", file: "pedi-cat.html", desc: "Inventário Pediátrico de Avaliação de Incapacidade.", summary: "Avalia funcionalidade em mobilidade, autocuidado e atividades sociais." },
      { title: "Escala de Ashworth Modificada", file: "ashworth-modificada.html", desc: "Avaliação de espasticidade muscular.", summary: "Mede o grau de resistência ao movimento passivo por espasticidade." },
      { title: "Escala de Tardieu", file: "tardieu.html", desc: "Avaliação da espasticidade dinâmica.", summary: "Diferencia espasticidade de contratura fixa em diferentes velocidades." },
      { title: "WeeFIM", file: "weefim.html", desc: "Medida de Independência Funcional Infantil.", summary: "Avalia independência funcional em autocuidado, mobilidade e cognição." }
    ]
  },
  {
    category: "Linguagem e Aprendizagem",
    items: [
      { title: "ABFW", file: "abfw.html", desc: "Teste de Linguagem Infantil ABFW.", summary: "Avalia fonologia, vocabulário, fluência e pragmática da linguagem." },
      { title: "PLS-5", file: "pls-5.html", desc: "Escala de Linguagem Pré-Escolar, 5ª edição.", summary: "Avalia linguagem receptiva e expressiva em crianças pequenas." },
      { title: "TVIP", file: "tvip.html", desc: "Teste de Vocabulário por Imagens Peabody.", summary: "Mede vocabulário receptivo através de reconhecimento de imagens." },
      { title: "CELF-5", file: "celf-5.html", desc: "Avaliação Clínica de Fundamentos da Linguagem, 5ª edição.", summary: "Avalia habilidades de linguagem em diferentes domínios linguísticos." },
      { title: "Escala de Rutter para Dislexia", file: "rutter-dislexia.html", desc: "Rastreamento de dificuldades de leitura.", summary: "Identifica sinais sugestivos de transtorno específico de leitura." },
      { title: "Protocolo de Consciência Fonológica (CONFIAS)", file: "confias.html", desc: "Avaliação da Consciência Fonológica.", summary: "Avalia habilidades de segmentação e manipulação de sons da fala." }
    ]
  },
  {
    category: "Epilepsia e Neurologia Geral",
    items: [
      { title: "ILAE — Classificação de Crises", file: "ilae-classificacao.html", desc: "Classificação Internacional de Crises Epilépticas.", summary: "Padroniza a nomenclatura e o tipo de crise epiléptica observada." },
      { title: "QOLIE-AD-48", file: "qolie-ad-48.html", desc: "Qualidade de Vida em Epilepsia para Adolescentes.", summary: "Mede impacto da epilepsia na qualidade de vida do adolescente." },
      { title: "Escala de Glasgow Pediátrica", file: "glasgow-pediatrica.html", desc: "Escala de Coma de Glasgow adaptada para pediatria.", summary: "Avalia nível de consciência em crianças após trauma ou evento agudo." },
      { title: "Escala de Cefaleia Pediátrica (PedMIDAS)", file: "pedmidas.html", desc: "Avaliação do Impacto da Migrânea em Crianças.", summary: "Mede o impacto funcional das crises de migrânea na rotina infantil." },
      { title: "INAT (Escala Neurológica Infantil)", file: "inat.html", desc: "Avaliação Neurológica Infantil.", summary: "Triagem geral de sinais neurológicos em exame clínico pediátrico." }
    ]
  }
];