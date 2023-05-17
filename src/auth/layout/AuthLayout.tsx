interface Props {
    children: string | JSX.Element | JSX.Element[] 
    title: string
}

export const AuthLayout = ({ title = '', children }: Props) => {
  return (
    <div className="container d-flex flex-column bg-light mt-1 mb-5 pt-5 pb-3 px-4 auth_container">
      <h2 className="mb-3">{ title }</h2>
      { children }
    </div>
  )
}
