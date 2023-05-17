import { setLanguage } from "../../store/config/configSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const LanguageBar = () => {
  
  const dispatch = useAppDispatch();
  const [ t,i18n ] = useTranslation('global');
  const { lang } = useAppSelector(state => state.config); 

  useEffect(() => {
    i18n.changeLanguage(lang);
  },[ lang ])

  const handleLanguage = (newLang: string) =>  {
    if(newLang !== lang){
      dispatch(setLanguage(newLang));
      localStorage.setItem('lang', newLang);
    }   
  }
  
  return (
    <div className="d-flex justify-content-end align-items-center align-content-center py-1 pe-2">
        <div 
            onClick={() => handleLanguage('es')}
            className="d-flex align-items-center align-content-center select_lang">
            <p className="m-0 me-1">ES</p>
            <span className="fi fi-mx"/> 
        </div>
        <div
            onClick={() => handleLanguage('en')}
            className="d-flex align-items-center align-content-center select_lang">
            <p className="m-0 ms-2 me-1">EN</p>
            <span className="fi fi-us"/> 
        </div>
    </div>
  )
}
