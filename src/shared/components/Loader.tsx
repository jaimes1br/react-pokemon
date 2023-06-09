import { useTranslation } from "react-i18next"

export const Loader = () => {

  const [ t ] = useTranslation('global');
  return (
    <div className="container d-flex justify-content-center align-items-center container_loader my-5">
        <span className="loader">
            <img src="/assets/pokeball-nav.png" alt="Loading" className="loader-ani"/>
            <h3 className="mt-3">{t('LOADER.LOADING')}</h3>
        </span>
    </div>
  )
}
