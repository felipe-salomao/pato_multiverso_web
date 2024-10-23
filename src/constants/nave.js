const TAMANHO_P = 'pequena'
const TAMANHO_M = 'media'
const TAMANHO_G = 'grande'
const TAMANHO_C = 'colossal'

const COR_VERMELHA = 'vermelha'
const COR_LARANJA = 'laranja'
const COR_AMARELA = 'amarela'
const COR_VERDE = 'verde'
const COR_AZUL = 'azul'
const COR_ANIL = 'anil'
const COR_VIOLETA = 'violeta'

const ARM_FUZIL = 'fuzil'
const ARM_PISTOLA = 'pistola'
const ARM_ESTILINGUE = 'estilingue'
const ARM_ESCOPETA = 'escopeta'
const ARM_FACA = 'faca'
const ARM_RAIO_LASER = 'raio_laser'

const COMB_CHUVA = 'chuva'
const COMB_TINTA = 'tinta_polvo'
const COMB_GELATINA = 'gelatina_quantica'
const COMB_CHICLETE = 'chiclete_estelar'

const SAUDE_TRIP_ARRASTA = 'arrasta'
const SAUDE_TRIP_CAPENGA = 'capenga'
const SAUDE_TRIP_BACANA = 'bacana'
const SAUDE_TRIP_SHOW = 'show'

const PERIC_BAIXO = 'baixo'
const PERIC_MEDIO = 'medio'
const PERIC_ALTO = 'alto'
const PERIC_SEVERO = 'severo'

const AVARIA_PERDA_TOTAL = 'perda_total'
const AVARIA_MUITO_DEST = 'muito_destruida'
const AVARIA_PARC_DEST = 'parcialmente_destruida'
const AVARIA_INTACTA = 'intacta'
const AVARIA_SEM_AVARIAS = 'sem_avarias'

const LOCAL_AMERICA = 'america'
const LOCAL_AFRICA = 'africa'
const LOCAL_EUROPA = 'europa'
const LOCAL_ASIA = 'asia'
const LOCAL_OCEANIA = 'oceania'
const LOCAL_ANTARTIDA = 'antartida'
const LOCAL_ATLANTICO = 'atlantico'
const LOCAL_PACIFICO = 'pacifico'
const LOCAL_INDICO = 'indico'
const LOCAL_ARTICO = 'artico'

const TAMANHO_FIELDS = [
  { name: 'pequena', value: TAMANHO_P },
  { name: 'media', value: TAMANHO_M },
  { name: 'grande', value: TAMANHO_G },
  { name: 'colossal', value: TAMANHO_C },
]

const COR_FIELDS = [
  { name: 'vermelha', value: COR_VERMELHA },
  { name: 'laranja', value: COR_LARANJA },
  { name: 'amarela', value: COR_AMARELA },
  { name: 'verde', value: COR_VERDE },
  { name: 'azul', value: COR_AZUL },
  { name: 'anil', value: COR_ANIL },
  { name: 'violeta', value: COR_VIOLETA },
]

const ARMAMENTOS_FIELDS = [
  { name: 'fuzil', value: ARM_FUZIL },
  { name: 'pistola', value: ARM_PISTOLA },
  { name: 'estilingue', value: ARM_ESTILINGUE },
  { name: 'escopeta', value: ARM_ESCOPETA },
  { name: 'faca', value: ARM_FACA },
  { name: 'raio laser', value: ARM_RAIO_LASER },
]

const COMBUSTIVEL_FIELDS = [
  { name: 'chuva', value: COMB_CHUVA },
  { name: 'tinta de polvo', value: COMB_TINTA },
  { name: 'gelatina quântica', value: COMB_GELATINA },
  { name: 'chiclete estelar', value: COMB_CHICLETE },
]

const SAUDE_TRIP_FIELDS = [
  { name: 'foi de arrasta', value: SAUDE_TRIP_ARRASTA },
  { name: 'ta capenga', value: SAUDE_TRIP_CAPENGA },
  { name: 'ta bacana', value: SAUDE_TRIP_BACANA },
  { name: 'show de bola', value: SAUDE_TRIP_SHOW },
]

const PERIC_FIELDS = [
  { name: 'baixo', value: PERIC_BAIXO },
  { name: 'medio', value: PERIC_MEDIO },
  { name: 'alto', value: PERIC_ALTO },
  { name: 'severo', value: PERIC_SEVERO },
]

const AVARIA_FIELDS = [
  { name: 'perda total', value: AVARIA_PERDA_TOTAL },
  { name: 'muito destruida', value: AVARIA_MUITO_DEST },
  { name: 'parcialmente destruida', value: AVARIA_PARC_DEST },
  { name: 'intacta', value: AVARIA_INTACTA },
  { name: 'sem avarias', value: AVARIA_SEM_AVARIAS },
]

const LOCAL_FIELDS = [
  { name: 'Continente Americano', value: LOCAL_AMERICA },
  { name: 'Continente Africano', value: LOCAL_AFRICA },
  { name: 'Continente Asiático', value: LOCAL_EUROPA },
  { name: 'Continente Europeu', value: LOCAL_ASIA },
  { name: 'Continente Oceânico', value: LOCAL_OCEANIA },
  { name: 'Continente Antártico', value: LOCAL_ANTARTIDA },
  { name: 'Oceano Atlântico', value: LOCAL_ATLANTICO },
  { name: 'Oceano Pacífico', value: LOCAL_PACIFICO },
  { name: 'Oceano Índico', value: LOCAL_INDICO },
  { name: 'Oceano Ártico', value: LOCAL_ARTICO },
]

const NAVE_FIELDS = [
  { id: 'local', name: 'Local da queda', values: LOCAL_FIELDS },
  { id: 'saudeTripulantes', name: 'Estado dos tripulantes', values: SAUDE_TRIP_FIELDS },
  { id: 'grauAvaria', name: 'Grau de avaria', values: AVARIA_FIELDS },
  { id: 'periculosidade', name: 'Grau de periculosidade', values: PERIC_FIELDS },
  { id: 'combustivel', name: 'Tipo de combustível', values: COMBUSTIVEL_FIELDS },
  { id: 'armamentos', name: 'Armamentos', values: ARMAMENTOS_FIELDS },
  { id: 'cor', name: 'Cor', values: COR_FIELDS },
  { id: 'tamanho', name: 'Tamanho', values: TAMANHO_FIELDS },
]

const nave = { NAVE_FIELDS }

export default nave
