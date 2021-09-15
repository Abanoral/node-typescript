export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'

export type Visibility = 'great' | 'good' | 'ok' | 'poor'

export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment: string
}
// PICK: este es una manera de excluir un atributo de una interfaz y aplicarlo a un TIPO
// export type NonSensitiveInfoDiaryEntries = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

export type NonSensitiveInfoDiaryEntries = Omit<DiaryEntry, 'comment'>
