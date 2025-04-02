const chas = [
    {
        id: 1,
        nome: "Açafrão",
        nome_cientifico: "Curcuma longa",
        propriedades: "Antioxidante, anti-inflamatório e melhora a digestão.",
        preparacao: "Decocção",
        sintomas: ["inflamação", "má digestão", "dor nas articulações"],
        imagem: require("./images/acafrao.jpg"),
        contraIndicacoes: "Evitar em casos de obstrução das vias biliares ou uso de anticoagulantes. Gestantes devem consumir com moderação."
    },
    {
        id: 2,
        nome: "Alfavaca",
        nome_cientifico: "Ocimum gratissimum",
        propriedades: "Antisséptico, digestivo e calmante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "ansiedade", "infecções"],
        imagem: require("./images/alfavaca.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 3,
        nome: "Canela de Velho ou Pixirica",
        nome_cientifico: "Miconia albicans",
        propriedades: "Anti-inflamatório, analgésico e auxilia no tratamento de artrite.",
        preparacao: "Decocção",
        sintomas: ["dor nas articulações", "artrite", "inflamação"],
        imagem: require("./images/canela_de_velho.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes e lactantes devem evitar."
    },
    {
        id: 4,
        nome: "Ginkgo Biloba",
        nome_cientifico: "Ginkgo biloba",
        propriedades: "Melhora a circulação, memória e é antioxidante.",
        preparacao: "Infusão",
        sintomas: ["má circulação", "perda de memória", "tontura"],
        imagem: require("./images/ginkgo_biloba.jpg"),
        contraIndicacoes: "Evitar em casos de uso de anticoagulantes ou antes de cirurgias. Pode causar dor de cabeça ou distúrbios gastrointestinais."
    },
    {
        id: 5,
        nome: "Chinchilho",
        nome_cientifico: "Pimpinella anisum",
        propriedades: "Digestivo, antiespasmódico e expectorante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "gases", "tosse"],
        imagem: require("./images/chinchilho.jpg"),
        contraIndicacoes: "Evitar em casos de alergia a plantas da família das apiáceas. Gestantes devem consumir com moderação."
    },
    {
        id: 6,
        nome: "Quebra Pedra",
        nome_cientifico: "Phyllanthus niruri",
        propriedades: "Diurético, auxilia no tratamento de cálculos renais e hepatoprotetor.",
        preparacao: "Infusão",
        sintomas: ["cálculos renais", "retenção de líquidos", "problemas hepáticos"],
        imagem: require("./images/quebra_pedra.jpg"),
        contraIndicacoes: "Evitar em casos de hipotensão ou uso de medicamentos para diabetes. Gestantes devem evitar."
    },
    {
        id: 7,
        nome: "Guabiroba",
        nome_cientifico: "Campomanesia xanthocarpa",
        propriedades: "Anti-inflamatório, diurético e antioxidante.",
        preparacao: "Infusão",
        sintomas: ["inflamação", "retenção de líquidos", "envelhecimento precoce"],
        imagem: require("./images/guabiroba.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 8,
        nome: "Pulmonária",
        nome_cientifico: "Pulmonaria officinalis",
        propriedades: "Expectorante, anti-inflamatório e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["tosse", "bronquite", "feridas"],
        imagem: require("./images/pulmonaria.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 9,
        nome: "Erva Baleeira",
        nome_cientifico: "Cordia verbenacea",
        propriedades: "Anti-inflamatório, analgésico e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["dor muscular", "inflamação", "feridas"],
        imagem: require("./images/erva_baleeira.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 10,
        nome: "Barba de Velho",
        nome_cientifico: "Clematis spp.",
        propriedades: "Diurético, anti-inflamatório e auxilia no tratamento de problemas urinários.",
        preparacao: "Infusão",
        sintomas: ["retenção de líquidos", "infecção urinária", "inflamação"],
        imagem: require("./images/barba_de_velho.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 11,
        nome: "Cipó Mil Homens",
        nome_cientifico: "Aristolochia spp.",
        propriedades: "Analgésico, anti-inflamatório e cicatrizante.",
        preparacao: "Decocção",
        sintomas: ["dor muscular", "feridas", "inflamação"],
        imagem: require("./images/cipo_mil_homens.jpg"),
        contraIndicacoes: "Tóxico em grandes quantidades. Evitar em casos de gestação, lactação ou problemas renais."
    },
    {
        id: 12,
        nome: "Casca de Andrade",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos e hepáticos.",
        preparacao: "Decocção",
        sintomas: ["má digestão", "problemas hepáticos"],
        imagem: require("./images/casca_de_andrade.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 13,
        nome: "Erva de Bicho",
        nome_cientifico: "Polygonum hydropiperoides",
        propriedades: "Anti-hemorrágico, anti-inflamatório e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["hemorroidas", "feridas", "inflamação"],
        imagem: require("./images/erva_de_bicho.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 14,
        nome: "Eucalipto",
        nome_cientifico: "Eucalyptus globulus",
        propriedades: "Expectorante, antisséptico e descongestionante.",
        preparacao: "Infusão",
        sintomas: ["tosse", "congestão nasal", "bronquite"],
        imagem: require("./images/eucalipto.jpg"),
        contraIndicacoes: "Evitar em casos de asma ou bronquite espástica. Não recomendado para crianças pequenas."
    },
    {
        id: 15,
        nome: "Calêndula",
        nome_cientifico: "Calendula officinalis",
        propriedades: "Anti-inflamatório, cicatrizante e antisséptico.",
        preparacao: "Infusão",
        sintomas: ["feridas", "inflamação", "irritação da pele"],
        imagem: require("./images/calendula.jpg"),
        contraIndicacoes: "Evitar em casos de alergia a plantas da família das asteráceas."
    },
    {
        id: 16,
        nome: "Cavalinha",
        nome_cientifico: "Equisetum arvense",
        propriedades: "Diurético, remineralizante e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["retenção de líquidos", "osteoporose", "feridas"],
        imagem: require("./images/cavalinha.jpg"),
        contraIndicacoes: "Evitar em casos de insuficiência renal ou cardíaca. Gestantes devem evitar."
    },
    {
        id: 17,
        nome: "Cambará",
        nome_cientifico: "Gochnatia polymorpha",
        propriedades: "Expectorante, anti-inflamatório e antisséptico.",
        preparacao: "Infusão",
        sintomas: ["tosse", "bronquite", "inflamação"],
        imagem: require("./images/cambara.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 18,
        nome: "Semente de Língua de Vaca",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos.",
        preparacao: "Decocção",
        sintomas: ["má digestão", "gases"],
        imagem: require("./images/semente_lingua_vaca.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 19,
        nome: "Araçá",
        nome_cientifico: "Psidium cattleianum",
        propriedades: "Adstringente, antisséptico e antioxidante.",
        preparacao: "Infusão",
        sintomas: ["diarreia", "infecções", "envelhecimento precoce"],
        imagem: require("./images/araca.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 20,
        nome: "Espinheira Santa",
        nome_cientifico: "Maytenus ilicifolia",
        propriedades: "Protetor gástrico, antiulceroso e digestivo.",
        preparacao: "Infusão",
        sintomas: ["gastrite", "úlcera", "má digestão"],
        imagem: require("./images/espinheira_santa.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 21,
        nome: "Raiz de Urtigão",
        nome_cientifico: "Urtica dioica",
        propriedades: "Diurético, anti-inflamatório e antianêmico.",
        preparacao: "Decocção",
        sintomas: ["retenção de líquidos", "anemia", "inflamação"],
        imagem: require("./images/raiz_urtigao.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 22,
        nome: "Guiné",
        nome_cientifico: "Petiveria alliacea",
        propriedades: "Analgésico, anti-inflamatório e antirreumático.",
        preparacao: "Infusão",
        sintomas: ["dor muscular", "artrite", "inflamação"],
        imagem: require("./images/guine.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 23,
        nome: "Tanchagem",
        nome_cientifico: "Plantago major",
        propriedades: "Cicatrizante, anti-inflamatório e expectorante.",
        preparacao: "Infusão",
        sintomas: ["feridas", "tosse", "inflamação"],
        imagem: require("./images/tanchagem.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 24,
        nome: "Hortelã",
        nome_cientifico: "Mentha spp.",
        propriedades: "Digestivo, antisséptico e refrescante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "náusea", "dor de cabeça"],
        imagem: require("./images/hortela.jpg"),
        contraIndicacoes: "Evitar em casos de refluxo gastroesofágico. Gestantes devem consumir com moderação."
    },
    {
        id: 25,
        nome: "Japeganga",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos e hepáticos.",
        preparacao: "Decocção",
        sintomas: ["má digestão", "problemas hepáticos"],
        imagem: require("./images/japeganga.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 26,
        nome: "Mão de Deus",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas respiratórios e inflamatórios.",
        preparacao: "Infusão",
        sintomas: ["tosse", "bronquite", "inflamação"],
        imagem: require("./images/mao_de_deus.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 27,
        nome: "Malva",
        nome_cientifico: "Malva sylvestris",
        propriedades: "Anti-inflamatório, expectorante e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["tosse", "inflamação", "feridas"],
        imagem: require("./images/malva.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 28,
        nome: "Manjericão",
        nome_cientifico: "Ocimum basilicum",
        propriedades: "Antisséptico, digestivo e calmante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "ansiedade", "infecções"],
        imagem: require("./images/manjericao.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 29,
        nome: "Marcela",
        nome_cientifico: "Achyrocline satureioides",
        propriedades: "Anti-inflamatório, digestivo e calmante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "ansiedade", "inflamação"],
        imagem: require("./images/marcela.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 30,
        nome: "Ipê Roxo",
        nome_cientifico: "Tabebuia avellanedae",
        propriedades: "Anti-inflamatório, analgésico e imunoestimulante.",
        preparacao: "Decocção",
        sintomas: ["inflamação", "dor", "imunidade baixa"],
        imagem: require("./images/ipe_roxo.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 31,
        nome: "Santa Maria",
        nome_cientifico: "Chenopodium ambrosioides",
        propriedades: "Vermífugo, antisséptico e digestivo.",
        preparacao: "Infusão",
        sintomas: ["vermes", "má digestão", "infecções"],
        imagem: require("./images/santa_maria.jpg"),
        contraIndicacoes: "Tóxico em grandes quantidades. Evitar em casos de gestação, lactação ou problemas hepáticos."
    },
    {
        id: 32,
        nome: "Cidró",
        nome_cientifico: "Aloysia citriodora",
        propriedades: "Calmante, digestivo e antiespasmódico.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "má digestão", "cólica"],
        imagem: require("./images/cidro.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 33,
        nome: "Carqueja",
        nome_cientifico: "Baccharis trimera",
        propriedades: "Digestivo, hepatoprotetor e diurético.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "problemas hepáticos", "retenção de líquidos"],
        imagem: require("./images/carqueja.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 34,
        nome: "Bardana",
        nome_cientifico: "Arctium lappa",
        propriedades: "Depurativo, anti-inflamatório e diurético.",
        preparacao: "Decocção",
        sintomas: ["acne", "inflamação", "retenção de líquidos"],
        imagem: require("./images/bardana.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 35,
        nome: "Pata de Boi",
        nome_cientifico: "Bauhinia forficata",
        propriedades: "Hipoglicemiante, diurético e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["diabetes", "feridas", "retenção de líquidos"],
        imagem: require("./images/pata_de_boi.jpg"),
        contraIndicacoes: "Evitar em casos de hipoglicemia. Gestantes devem evitar."
    },
    {
        id: 36,
        nome: "Salvia",
        nome_cientifico: "Salvia officinalis",
        propriedades: "Antisséptico, anti-inflamatório e digestivo.",
        preparacao: "Infusão",
        sintomas: ["infecções", "inflamação", "má digestão"],
        imagem: require("./images/salvia.jpg"),
        contraIndicacoes: "Evitar em casos de gestação ou epilepsia."
    },
    {
        id: 37,
        nome: "Figatil",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos e hepáticos.",
        preparacao: "Decocção",
        sintomas: ["má digestão", "problemas hepáticos"],
        imagem: require("./images/figatil.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 38,
        nome: "São João",
        nome_cientifico: "Hypericum perforatum",
        propriedades: "Antidepressivo, cicatrizante e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["depressão", "feridas", "inflamação"],
        imagem: require("./images/sao_joao.jpg"),
        contraIndicacoes: "Evitar em casos de uso de antidepressivos ou fotossensibilidade. Gestantes devem evitar."
    },
    {
        id: 39,
        nome: "Guamxuma",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas respiratórios e inflamatórios.",
        preparacao: "Infusão",
        sintomas: ["tosse", "bronquite", "inflamação"],
        imagem: require("./images/guamxuma.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 40,
        nome: "Flor de Camélia",
        nome_cientifico: "Camellia japonica",
        propriedades: "Antioxidante, anti-inflamatório e calmante.",
        preparacao: "Infusão",
        sintomas: ["envelhecimento precoce", "inflamação", "ansiedade"],
        imagem: require("./images/flor_camelia.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 41,
        nome: "Guaco",
        nome_cientifico: "Mikania glomerata",
        propriedades: "Expectorante, antisséptico e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["tosse", "bronquite", "inflamação"],
        imagem: require("./images/guaco.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 42,
        nome: "Camomila",
        nome_cientifico: "Matricaria chamomilla",
        propriedades: "Calmante, digestivo e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "má digestão", "inflamação"],
        imagem: require("./images/camomila.jpg"),
        contraIndicacoes: "Evitar em casos de alergia a plantas da família das margaridas. Gestantes devem consumir com moderação."
    },
    {
        id: 43,
        nome: "Ameixa",
        nome_cientifico: "Prunus domestica",
        propriedades: "Laxante, antioxidante e digestivo.",
        preparacao: "Infusão",
        sintomas: ["prisão de ventre", "envelhecimento precoce", "má digestão"],
        imagem: require("./images/ameixa.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 44,
        nome: "Cidreira Cheirosa",
        nome_cientifico: "Lippia alba",
        propriedades: "Calmante, digestivo e antiespasmódico.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "má digestão", "cólica"],
        imagem: require("./images/cidreira_cheirosa.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 45,
        nome: "Nogueira",
        nome_cientifico: "Juglans regia",
        propriedades: "Adstringente, antisséptico e antioxidante.",
        preparacao: "Decocção",
        sintomas: ["diarreia", "infecções", "envelhecimento precoce"],
        imagem: require("./images/nogueira.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 46,
        nome: "Rosa Branca",
        nome_cientifico: "Rosa spp.",
        propriedades: "Calmante, adstringente e antioxidante.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "irritação da pele", "envelhecimento precoce"],
        imagem: require("./images/rosa_branca.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 47,
        nome: "Melissa",
        nome_cientifico: "Melissa officinalis",
        propriedades: "Calmante, digestivo e antiespasmódico.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "má digestão", "cólica"],
        imagem: require("./images/melissa.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 48,
        nome: "Poejo",
        nome_cientifico: "Mentha pulegium",
        propriedades: "Expectorante, antisséptico e digestivo.",
        preparacao: "Infusão",
        sintomas: ["tosse", "má digestão", "infecções"],
        imagem: require("./images/poejo.jpg"),
        contraIndicacoes: "Tóxico em grandes quantidades. Evitar em casos de gestação ou lactação."
    },
    {
        id: 49,
        nome: "Melhoral",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para dores e febre.",
        preparacao: "Infusão",
        sintomas: ["dor de cabeça", "febre"],
        imagem: require("./images/melhoral.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 50,
        nome: "Louro",
        nome_cientifico: "Laurus nobilis",
        propriedades: "Digestivo, antisséptico e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "infecções", "inflamação"],
        imagem: require("./images/louro.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 51,
        nome: "Bulva",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos.",
        preparacao: "Decocção",
        sintomas: ["má digestão"],
        imagem: require("./images/bulva.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 52,
        nome: "7 Sangrias",
        nome_cientifico: "Cuphea spp.",
        propriedades: "Hipotensora, diurética e calmante.",
        preparacao: "Infusão",
        sintomas: ["hipertensão", "retenção de líquidos", "ansiedade"],
        imagem: require("./images/7_sangrias.jpg"),
        contraIndicacoes: "Evitar em casos de hipotensão. Gestantes devem evitar."
    },
    {
        id: 53,
        nome: "Chapéu de Couro",
        nome_cientifico: "Echinodorus grandiflorus",
        propriedades: "Diurético, depurativo e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["retenção de líquidos", "problemas renais", "inflamação"],
        imagem: require("./images/chapeu_de_couro.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 54,
        nome: "Dente de Leão",
        nome_cientifico: "Taraxacum officinale",
        propriedades: "Diurético, depurativo e digestivo.",
        preparacao: "Infusão",
        sintomas: ["retenção de líquidos", "problemas hepáticos", "má digestão"],
        imagem: require("./images/dente_de_leao.jpg"),
        contraIndicacoes: "Evitar em casos de obstrução das vias biliares. Gestantes devem evitar."
    },
    {
        id: 55,
        nome: "Cordão de Frade",
        nome_cientifico: "Leonotis nepetifolia",
        propriedades: "Anti-inflamatório, antisséptico e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["inflamação", "feridas", "infecções"],
        imagem: require("./images/cordao_de_frade.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 56,
        nome: "Pariparoba",
        nome_cientifico: "Pothomorphe umbellata",
        propriedades: "Digestivo, hepatoprotetor e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "problemas hepáticos", "inflamação"],
        imagem: require("./images/pariparoba.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 57,
        nome: "Coentro",
        nome_cientifico: "Coriandrum sativum",
        propriedades: "Digestivo, antisséptico e antioxidante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "infecções", "envelhecimento precoce"],
        imagem: require("./images/coentro.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 58,
        nome: "Alcachofra",
        nome_cientifico: "Cynara scolymus",
        propriedades: "Hepatoprotetor, diurético e digestivo.",
        preparacao: "Infusão",
        sintomas: ["problemas hepáticos", "retenção de líquidos", "má digestão"],
        imagem: require("./images/alcachofra.jpg"),
        contraIndicacoes: "Evitar em casos de obstrução das vias biliares. Gestantes devem evitar."
    },
    {
        id: 59,
        nome: "Taquara",
        nome_cientifico: "Bambusa spp.",
        propriedades: "Diurético, anti-inflamatório e antioxidante.",
        preparacao: "Decocção",
        sintomas: ["retenção de líquidos", "inflamação", "envelhecimento precoce"],
        imagem: require("./images/taquara.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 60,
        nome: "Pontalívio",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos.",
        preparacao: "Decocção",
        sintomas: ["má digestão"],
        imagem: require("./images/pontalivio.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 61,
        nome: "Alecrim",
        nome_cientifico: "Rosmarinus officinalis",
        propriedades: "Estimulante, antioxidante e digestivo.",
        preparacao: "Infusão",
        sintomas: ["cansaço", "envelhecimento precoce", "má digestão"],
        imagem: require("./images/alecrim.jpg"),
        contraIndicacoes: "Evitar em casos de hipertensão ou epilepsia. Gestantes devem evitar."
    },
    {
        id: 62,
        nome: "Catinga de Mulata",
        nome_cientifico: "Tanacetum vulgare",
        propriedades: "Anti-inflamatório, antisséptico e digestivo.",
        preparacao: "Infusão",
        sintomas: ["inflamação", "infecções", "má digestão"],
        imagem: require("./images/catinga_de_mulata.jpg"),
        contraIndicacoes: "Tóxico em grandes quantidades. Evitar em casos de gestação ou lactação."
    },
    {
        id: 63,
        nome: "Picão",
        nome_cientifico: "Bidens pilosa",
        propriedades: "Anti-inflamatório, cicatrizante e diurético.",
        preparacao: "Infusão",
        sintomas: ["inflamação", "feridas", "retenção de líquidos"],
        imagem: require("./images/picao.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 64,
        nome: "Cravo",
        nome_cientifico: "Syzygium aromaticum",
        propriedades: "Antisséptico, analgésico e digestivo.",
        preparacao: "Infusão",
        sintomas: ["infecções", "dor de dente", "má digestão"],
        imagem: require("./images/cravo.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 65,
        nome: "Alfazema",
        nome_cientifico: "Lavandula spp.",
        propriedades: "Calmante, antisséptico e analgésico.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "infecções", "dor de cabeça"],
        imagem: require("./images/alfazema.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 66,
        nome: "Pitanga",
        nome_cientifico: "Eugenia uniflora",
        propriedades: "Antioxidante, anti-inflamatório e digestivo.",
        preparacao: "Infusão",
        sintomas: ["envelhecimento precoce", "inflamação", "má digestão"],
        imagem: require("./images/pitanga.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 67,
        nome: "Flor de Laranjeira",
        nome_cientifico: "Citrus sinensis",
        propriedades: "Calmante, digestivo e antiespasmódico.",
        preparacao: "Infusão",
        sintomas: ["ansiedade", "má digestão", "cólica"],
        imagem: require("./images/flor_laranjeira.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 68,
        nome: "Folha de Badana",
        nome_cientifico: "Não encontrado",
        propriedades: "Utilizada popularmente para problemas digestivos.",
        preparacao: "Decocção",
        sintomas: ["má digestão"],
        imagem: require("./images/folha_badana.jpg"),
        contraIndicacoes: "Informações insuficientes. Consulte um especialista antes de usar."
    },
    {
        id: 69,
        nome: "Oliveira",
        nome_cientifico: "Olea europaea",
        propriedades: "Hipotensora, antioxidante e anti-inflamatório.",
        preparacao: "Infusão",
        sintomas: ["hipertensão", "envelhecimento precoce", "inflamação"],
        imagem: require("./images/oliveira.jpg"),
        contraIndicacoes: "Evitar em casos de hipotensão. Gestantes devem evitar."
    },
    {
        id: 70,
        nome: "Pau Amargo",
        nome_cientifico: "Quassia amara",
        propriedades: "Digestivo, antisséptico e vermífugo.",
        preparacao: "Decocção",
        sintomas: ["má digestão", "infecções", "vermes"],
        imagem: require("./images/pau_amargo.jpg"),
        contraIndicacoes: "Tóxico em grandes quantidades. Evitar em casos de gestação ou lactação."
    },
    {
        id: 71,
        nome: "Ariticum",
        nome_cientifico: "Rollinia mucosa",
        propriedades: "Antioxidante, anti-inflamatório e digestivo.",
        preparacao: "Infusão",
        sintomas: ["envelhecimento precoce", "inflamação", "má digestão"],
        imagem: require("./images/ariticum.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 72,
        nome: "Semente de Limão",
        nome_cientifico: "Citrus limon",
        propriedades: "Antioxidante, digestivo e antisséptico.",
        preparacao: "Decocção",
        sintomas: ["envelhecimento precoce", "má digestão", "infecções"],
        imagem: require("./images/semente_limao.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 73,
        nome: "Semente de Laranja",
        nome_cientifico: "Citrus sinensis",
        propriedades: "Antioxidante, digestivo e calmante.",
        preparacao: "Decocção",
        sintomas: ["envelhecimento precoce", "má digestão", "ansiedade"],
        imagem: require("./images/semente_laranja.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 74,
        nome: "Semente de Moranga",
        nome_cientifico: "Cucurbita maxima",
        propriedades: "Vermífugo, antioxidante e anti-inflamatório.",
        preparacao: "Decocção",
        sintomas: ["vermes", "envelhecimento precoce", "inflamação"],
        imagem: require("./images/semente_moranga.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 75,
        nome: "Semente de Abóbora",
        nome_cientifico: "Cucurbita pepo",
        propriedades: "Vermífugo, antioxidante e anti-inflamatório.",
        preparacao: "Decocção",
        sintomas: ["vermes", "envelhecimento precoce", "inflamação"],
        imagem: require("./images/semente_abobora.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 76,
        nome: "Semente de Ariticum",
        nome_cientifico: "Rollinia mucosa",
        propriedades: "Antioxidante, anti-inflamatório e digestivo.",
        preparacao: "Decocção",
        sintomas: ["envelhecimento precoce", "inflamação", "má digestão"],
        imagem: require("./images/semente_ariticum.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 77,
        nome: "Ora-pro-nóbis",
        nome_cientifico: "Pereskia aculeata",
        propriedades: "Nutritivo, anti-inflamatório e cicatrizante.",
        preparacao: "Infusão",
        sintomas: ["desnutrição", "inflamação", "feridas"],
        imagem: require("./images/ora_pro_nobis.jpg"),
        contraIndicacoes: "Não há contraindicações conhecidas, mas gestantes devem consumir com moderação."
    },
    {
        id: 78,
        nome: "Sassafrás",
        nome_cientifico: "Ocotea odorifera",
        propriedades: "Anti-inflamatório, analgésico e digestivo.",
        preparacao: "Decocção",
        sintomas: ["inflamação", "dor", "má digestão"],
        imagem: require("./images/sassafras.jpg"),
        contraIndicacoes: "Tóxico em grandes quantidades. Evitar em casos de gestação ou lactação."
    },
    {
        id: 79,
        nome: "Casca de Cambará",
        nome_cientifico: "Gochnatia polymorpha",
        propriedades: "Expectorante, anti-inflamatório e antisséptico.",
        preparacao: "Decocção",
        sintomas: ["tosse", "bronquite", "inflamação"],
        imagem: require("./images/casca_cambara.jpg"),
        contraIndicacoes: "Evitar em casos de hipersensibilidade à planta. Gestantes devem evitar."
    },
    {
        id: 80,
        nome: "Vick Vaporub",
        nome_cientifico: "Não aplicável",
        propriedades: "Descongestionante, analgésico e antisséptico.",
        preparacao: "Uso tópico",
        sintomas: ["congestão nasal", "dor muscular", "tosse"],
        imagem: require("./images/vick_vaporub.jpg"),
        contraIndicacoes: "Evitar em crianças menores de 2 anos. Não ingerir."
    },
    {
        id: 81,
        nome: "Gengibre",
        nome_cientifico: "Zingiber officinale",
        propriedades: "Anti-inflamatório, digestivo e imunoestimulante.",
        preparacao: "Decocção",
        sintomas: ["inflamação", "má digestão", "gripe"],
        imagem: require("./images/gengibre.jpg"),
        contraIndicacoes: "Evitar em casos de úlceras gastrintestinais ou uso de anticoagulantes. Gestantes devem consumir com moderação."
    },
    {
        id: 82,
        nome: "Erva Doce",
        nome_cientifico: "Pimpinella anisum",
        propriedades: "Digestivo, antiespasmódico e calmante.",
        preparacao: "Infusão",
        sintomas: ["má digestão", "cólica", "ansiedade"],
        imagem: require("./images/erva_doce.jpg"),
        contraIndicacoes: "Evitar em casos de alergia a plantas da família das apiáceas. Gestantes devem consumir com moderação."
    }
];

export default chas;