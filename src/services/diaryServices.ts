import { DiaryEntry, NonSensitiveInfoDiaryEntries } from '../types'
import diaryData from './diary.json'

// esto es una asercion de tipos. Le estamos obligando a que transforme lo que considera un string a los tipos asignados en neuestro archivo types
// para ello, se utiliza el "as" para la asercion indicando y obligando a que sea eso lo que quieres devolver
// aqui estamos haciendo una transformacion del tipo de los datos que nos llegaria de la BBDD
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntries[] => diaries

export const addEntry = (): undefined => undefined
