import { IQuestions } from "@/components/organisms/collapse";

interface IFrequentlyQuestions {
  title: string;
  anchor: string;
  questions: IQuestions[];
}

export const frequentlyQuestions: IFrequentlyQuestions[] = [
  {
    title: "Direito Criminal",
    anchor: "criminal",
    questions: [
      {
        title: "O que são audiências de custódia?",
        text: "Audiências de custódia avaliam a legalidade da prisão e as condições em que foi realizada. A equipe trabalha para reverter detenções injustas. Para saber mais ou agendar uma consulta, fale conosco pelo ",
      },
      {
        title: "Como funciona o pedido de liberdade provisória?",
        text: "É um pedido para a liberação de um preso preventivo, apresentando argumentos que demonstrem a desnecessidade da prisão antes do julgamento. Para orientação e ajuda com seu caso, contate-nos via ",
      },
      {
        title: "O que envolve a instrução processual?",
        text: "Assistência completa durante todas as fases do processo penal, desde a investigação até o julgamento, garantindo uma defesa estratégica. Para suporte em seu processo, fale com nossos advogados pelo ",
      },
      {
        title: "O que são recursos criminais?",
        text: "Recursos criminais são apresentados contra decisões judiciais desfavoráveis, buscando revisão e correção de erros processuais ou de julgamento. Precisa de ajuda com recursos? Entre em contato pelo ",
      },
      {
        title: "Como funcionam os acordos de colaboração premiada?",
        text: "Assessoramos na negociação desses acordos, onde a cooperação com as autoridades pode resultar em benefícios penais. Para mais informações, fale conosco pelo ",
      },
      {
        title: "O que é um acordo de não persecução penal?",
        text: "Permite a suspensão do processo mediante o cumprimento de condições acordadas com o Ministério Público, evitando a continuidade do processo penal. Para assistência, entre em contato pelo ",
      },
      {
        title: "O que é a execução criminal?",
        text: "Acompanhamos a execução das penas impostas, garantindo que os direitos do cliente sejam cumpridos durante essa fase. Para suporte na execução penal, fale conosco pelo ",
      },
      {
        title: "Como funciona a revisão criminal?",
        text: "A revisão de condenações penais pode ser solicitada quando surgem novas provas ou erros processuais que possam ter influenciado o julgamento. Para revisar seu caso, contate-nos via ",
      },
      {
        title: "O que é a progressão de regime prisional?",
        text: "Assistência na solicitação de progressão de regime, permitindo que o cliente avance para regimes menos severos conforme cumpra os requisitos legais. Precisa de ajuda com a progressão de regime? Fale conosco pelo ",
      },
    ],
  },
  {
    title: "Direito Bancário",
    anchor: "bank",
    questions: [
      {
        title: "O que é revisão de contrato bancário?",
        text: "A revisão de contrato bancário identifica cláusulas abusivas e taxas excessivas, garantindo que você pague apenas o justo. Para uma revisão detalhada, entre em contato pelo ",
      },
      {
        title: "Como lidar com cobranças indevidas e taxas abusivas?",
        text: "Defendemos contra cobranças indevidas e taxas abusivas, buscando a devolução dos valores cobrados erroneamente. Para assistência, fale conosco pelo ",
      },
      {
        title: "O que fazer em casos de danos em operações bancárias?",
        text: "Atuamos para responsabilizar o banco e garantir compensação justa por prejuízos devido a falhas em operações bancárias. Precisa de ajuda? Contate-nos pelo ",
      },
      {
        title:
          "Como proceder em ações contra bancos por descumprimento de contrato?",
        text: "Representamos seus interesses em ações judiciais contra bancos que não cumpriram suas obrigações contratuais. Para mais informações, fale conosco pelo ",
      },
      {
        title:
          "Como defender-se contra ações de execução de dívidas bancárias?",
        text: "Oferecemos defesa especializada para negociar melhores condições ou contestar a execução de dívidas bancárias. Precisa de ajuda? Entre em contato pelo ",
      },
      {
        title: "Como obter orientação sobre empréstimos e financiamentos?",
        text: "Fornecemos orientação completa sobre empréstimos e financiamentos, ajudando a escolher as melhores opções. Para uma consulta, fale conosco pelo ",
      },
      {
        title: "Qual a importância da análise de contratos bancários?",
        text: "Garantimos que contratos bancários estejam em conformidade com a legislação e livres de cláusulas abusivas. Para uma análise detalhada, contate-nos pelo ",
      },
      {
        title: "Como recuperar créditos junto a instituições financeiras?",
        text: "Ajudamos na recuperação de créditos, garantindo que você receba os valores devidos com eficiência. Para suporte, fale conosco pelo ",
      },
      {
        title: "Como se defender em ações de busca e apreensão?",
        text: "Oferecemos defesa legal para proteger seu patrimônio e negociar alternativas viáveis com credores. Precisa de assistência? Entre em contato pelo ",
      },
      {
        title: "O que fazer em casos de golpes e fraudes bancárias?",
        text: "Atuamos rapidamente para minimizar danos e recuperar valores perdidos em casos de golpes e fraudes bancárias. Para ajuda imediata, fale conosco pelo  ",
      },
    ],
  },
  {
    title: "Direito Familiar",
    anchor: "family",
    questions: [
      {
        title: "Como funciona o processo de divórcio?",
        text: "O divórcio pode ser consensual ou litigioso. No consensual, há acordo entre as partes; no litigioso, não. Para orientação detalhada, entre em contato pelo ",
      },
      {
        title: "O que é a guarda compartilhada?",
        text: "A guarda compartilhada permite que ambos os pais participem ativamente na vida dos filhos. Para saber mais, fale conosco pelo ",
      },
      {
        title: "Como se calcula a pensão alimentícia?",
        text: "A pensão alimentícia é calculada com base nas necessidades do beneficiário e nas possibilidades do alimentante. Para ajuda, contate-nos pelo ",
      },
      {
        title: "O que é alienação parental?",
        text: "Alienação parental ocorre quando um dos pais tenta afastar o filho do outro. Para proteção e orientação, fale conosco pelo ",
      },
      {
        title: "Como funciona a adoção?",
        text: "Adoção é o processo legal de tornar uma criança filho legítimo, garantindo todos os direitos. Para orientação, contate-nos pelo ",
      },
      {
        title: "O que é investigação de paternidade?",
        text: "Investigação de paternidade determina legalmente o pai biológico de uma criança. Para mais informações, entre em contato pelo ",
      },
      {
        title: "Como proceder com a divisão de bens no divórcio?",
        text: "A divisão de bens varia conforme o regime de casamento adotado. Para suporte, fale conosco pelo ",
      },
      {
        title: "O que fazer em casos de violência doméstica?",
        text: "Oferecemos assistência para proteger vítimas e buscar medidas legais contra o agressor. Para ajuda imediata, contate-nos pelo ",
      },
      {
        title: "Como solicitar a alteração de guarda?",
        text: "A alteração de guarda pode ser solicitada com base no melhor interesse da criança. Para orientação, entre em contato pelo ",
      },
      {
        title: "O que é tutela e curatela?",
        text: "Tutela é para menores de idade sem pais; curatela é para adultos incapazes. Para mais informações, fale conosco pelo ",
      },
    ],
  },
  {
    title: "Direito Imobiliário",
    anchor: "estate",
    questions: [
      {
        title: "O que é revisão de contratos de compra e venda de imóveis?",
        text: "Revisamos contratos de compra e venda para garantir que todas as cláusulas estejam de acordo com a legislação e protejam seus interesses. Para uma revisão detalhada, entre em contato pelo ",
      },
      {
        title: "Como funciona a assessoria jurídica em contratos de locação?",
        text: "Oferecemos assessoria em contratos de locação residencial e comercial, assegurando que os direitos e deveres sejam claros. Para assistência, fale conosco pelo ",
      },
      {
        title: "O que fazer em casos de despejo por falta de pagamento?",
        text: "Atuamos em ações de despejo por falta de pagamento, buscando uma solução rápida para retomar a posse do imóvel. Para ajuda, contate-nos pelo ",
      },
      {
        title: "Como funciona o processo de usucapião?",
        text: "Ajudamos a regularizar a posse de um imóvel por meio da usucapião, permitindo adquirir a propriedade após posse contínua e sem oposição. Para mais informações, fale conosco pelo ",
      },
      {
        title: "O que envolve a regularização de imóveis?",
        text: "Oferecemos serviços para resolver pendências documentais e legais, garantindo a segurança na comercialização ou utilização do bem. Para suporte, entre em contato pelo ",
      },
      {
        title: "Como obter assessoria em incorporação imobiliária?",
        text: "Prestamos assessoria completa em projetos de incorporação, desde a concepção até a conclusão. Para orientação, contate-nos pelo ",
      },
      {
        title:
          "Como gerenciar questões jurídicas e administrativas em condomínios?",
        text: "Auxiliamos na gestão de condomínios, oferecendo suporte em assembleias, cobrança de taxas e resolução de conflitos. Para ajuda, fale conosco pelo ",
      },
      {
        title: "O que é distrato de contratos imobiliários?",
        text: "Atuamos na rescisão de contratos imobiliários, assegurando que os direitos sejam respeitados e obrigações cumpridas. Para mais informações, entre em contato pelo ",
      },
      {
        title: "Como é feita a análise de documentação imobiliária?",
        text: "Realizamos análise minuciosa da documentação para garantir transações seguras e legais. Para assistência, fale conosco pelo ",
      },
      {
        title: "Como proceder em ações possessórias e petitórias?",
        text: "Representamos seus interesses em ações possessórias e petitórias, defendendo seu direito à posse ou propriedade do imóvel. Para ajuda, contate-nos pelo ",
      },
    ],
  },
  {
    title: "Direito Trabalhista",
    anchor: "work",
    questions: [
      {
        title: "O que é uma reclamação trabalhista?",
        text: "É uma ação judicial onde o trabalhador busca garantir seus direitos, como salários atrasados e horas extras. Para assistência, entre em contato pelo ",
      },
      {
        title: "Como funciona a rescisão indireta?",
        text: "A rescisão indireta ocorre quando o empregador comete faltas graves, permitindo que o empregado rescinda o contrato com direito a todas as verbas rescisórias. Para orientação, fale conosco pelo ",
      },
      {
        title: "O que fazer em casos de assédio moral ou sexual no trabalho?",
        text: "Defendemos vítimas de assédio, buscando responsabilizar os agressores e obter reparação pelos danos. Para ajuda, contate-nos pelo ",
      },
      {
        title: "Como reivindicar horas extras e intervalos não concedidos?",
        text: "Buscamos compensação por horas extras e intervalos não concedidos, garantindo que você receba os valores devidos. Para assistência, fale conosco pelo ",
      },
      {
        title: "O que é equiparação salarial?",
        text: "É a ação para garantir remuneração justa e equivalente ao de colegas que desempenham funções similares. Para mais informações, entre em contato pelo ",
      },
      {
        title: "Como proceder em casos de acidente de trabalho?",
        text: "Prestamos assistência para obter indenizações e benefícios previdenciários devidos, além de responsabilizar o empregador. Para suporte, fale conosco pelo ",
      },
      {
        title: "Como garantir o recebimento do FGTS e verbas rescisórias? ",
        text: "Garantimos que você receba corretamente o FGTS e todas as verbas rescisórias ao término do contrato de trabalho. Para ajuda, contate-nos pelo ",
      },
      {
        title: "Como contestar uma demissão por justa causa?",
        text: "Defendemos trabalhadores, contestando a legalidade da demissão e buscando reversão ou compensação adequada. Para orientação, fale conosco pelo ",
      },
      {
        title: "O que é um acordo extrajudicial?",
        text: "Mediamos acordos extrajudiciais entre empregadores e empregados para resolver conflitos trabalhistas de forma rápida. Para mais informações, entre em contato pelo ",
      },
      {
        title:
          "Como proceder com rescisão de contrato por parte do empregador?",
        text: "Assistimos na análise e negociação das condições de rescisão contratual, assegurando que todos os direitos sejam respeitados. Para ajuda, fale conosco pelo  ",
      },
    ],
  },
  {
    title: "Direito Cível",
    anchor: "civil",
    questions: [
      {
        title: "O que é um contrato civil?",
        text: "Um contrato civil é um acordo legal entre duas ou mais partes, estabelecendo direitos e deveres mútuos. Para assistência na elaboração ou revisão de contratos, entre em contato pelo ",
      },
      {
        title: "Quais são os requisitos essenciais de um contrato?",
        text: "Os requisitos essenciais são: acordo entre as partes, objeto lícito e possível, forma prescrita ou não defesa em lei, e capacidade das partes. Para orientação detalhada, fale conosco pelo ",
      },
      {
        title: "Como se caracteriza o inadimplemento contratual?",
        text: "O inadimplemento ocorre quando uma das partes não cumpre suas obrigações conforme estipulado no contrato. Para mais informações, contate-nos pelo ",
      },
      {
        title: "O que é rescisão contratual?",
        text: "A rescisão contratual é a extinção do contrato antes do prazo previsto, por acordo entre as partes ou por descumprimento de uma das partes. Para assistência, fale conosco pelo ",
      },
      {
        title: "Como funciona a revisão de contratos?",
        text: "A revisão de contratos pode ser solicitada quando houver cláusulas abusivas ou situações imprevistas que tornem o cumprimento das obrigações excessivamente oneroso. Para orientação, entre em contato pelo ",
      },
      {
        title: "O que são cláusulas abusivas em contratos?",
        text: "Cláusulas abusivas são aquelas que colocam o consumidor em desvantagem exagerada, contrárias à boa-fé e à equidade. Para identificar e contestar cláusulas abusivas, fale conosco pelo ",
      },
      {
        title:
          "Qual a diferença entre contrato de adesão e contrato bilateral?",
        text: "No contrato de adesão, as cláusulas são estabelecidas por uma das partes sem possibilidade de negociação; no contrato bilateral, ambas as partes negociam os termos. Para mais informações, contate-nos pelo ",
      },
      {
        title: "Como formalizar um contrato civil?",
        text: "A formalização pode ser verbal ou escrita, dependendo da natureza do contrato e das exigências legais. Para ajuda na formalização de contratos, fale conosco pelo ",
      },
      {
        title: "O que é um contrato preliminar?",
        text: "Um contrato preliminar é um acordo que antecede o contrato definitivo, estabelecendo as condições para a futura celebração deste. Para orientação, entre em contato pelo ",
      },
      {
        title: "Quais são as consequências do descumprimento contratual?",
        text: "O descumprimento pode resultar em penalidades, como multas, rescisão contratual e obrigação de indenizar a parte prejudicada. Para mais informações, fale conosco pelo ",
      },
    ],
  },
  {
    title: "Direito Canábico",
    anchor: "cannabis",
    questions: [
      {
        title: "O que é habeas corpus preventivo para plantio de cannabis?",
        text: "É um recurso jurídico que visa proteger o paciente de ser preso por plantar cannabis para fins medicinais. Para saber mais, entre em contato pelo ",
      },
      {
        title: "Como obter autorização para uso medicinal de cannabis?",
        text: "A autorização é obtida por meio de um processo legal que inclui laudos médicos e um pedido à Anvisa. Para orientação, fale conosco pelo ",
      },
      {
        title: "Quais são os benefícios do uso medicinal de cannabis?",
        text: "A cannabis medicinal pode ajudar no tratamento de diversas condições, como epilepsia, dor crônica e ansiedade. Para mais informações, contate-nos pelo ",
      },
      {
        title:
          "O que é necessário para iniciar o cultivo de cannabis medicinal?",
        text: "É necessário obter uma autorização judicial e seguir rigorosamente as normas estabelecidas. Para assistência, fale conosco pelo ",
      },
      {
        title:
          "Como proceder em casos de detenção por porte de cannabis medicinal?",
        text: "A defesa pode incluir a apresentação de laudos médicos e autorização para uso. Para ajuda imediata, entre em contato pelo ",
      },
      {
        title: "Qual a diferença entre uso recreativo e medicinal da cannabis?",
        text: "O uso recreativo é ilegal no Brasil, enquanto o uso medicinal é regulamentado para tratar condições específicas. Para mais esclarecimentos, fale conosco pelo ",
      },
      {
        title:
          "Quais documentos são necessários para pedir habeas corpus preventivo?",
        text: "É preciso reunir laudos médicos, receitas e outras evidências que comprovem a necessidade do uso medicinal. Para orientação, contate-nos pelo  ",
      },
      {
        title: "Como a lei brasileira trata o uso medicinal de cannabis?",
        text: "A legislação permite o uso medicinal com prescrição e autorização, mas proíbe o uso recreativo. Para mais informações, fale conosco pelo ",
      },
      {
        title:
          "Quais são os riscos legais do cultivo de cannabis sem autorização?",
        text: "O cultivo sem autorização pode levar a processos criminais e penalidades severas. Para proteção legal, entre em contato pelo ",
      },
      {
        title:
          "Como posso obter ajuda jurídica especializada em direito canábico?",
        text: "Nossa equipe oferece orientação completa para garantir o cumprimento das leis e a proteção dos seus direitos. Para assistência, fale conosco pelo ",
      },
    ],
  },
];
