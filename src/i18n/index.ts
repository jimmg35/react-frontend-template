import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from '../assets/language/en.json'
import tw from '../assets/language/zh-TW.json'

const resources = {
  'en-US': {
    translation: en
  },
  'zh-TW': {
    translation: tw
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'zh-TW',
  fallbackLng: 'zh-TW',
  interpolation: {
    escapeValue: false
  }
})

export default i18n
