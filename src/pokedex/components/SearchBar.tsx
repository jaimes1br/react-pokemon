import { useNavigate } from 'react-router-dom';
import { FormEvent } from "react";
import { useForm } from "../../hooks"

const formData = {
  searchpkm: ''
}

export const SearchBar = () => {

  const navigate = useNavigate();
  const { searchpkm, handleInputChange } = useForm(formData);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    navigate(`/detail/${searchpkm}`);
   }

  return (
    <div className="mt-4 container d-flex justify-content-center">
      <form onSubmit={ handleSubmit } className="row d-flex align-items-center my-2 ">
        <div className="col-auto">
          <input 
            className="form-control" 
            name="searchpkm"
            onChange={ handleInputChange } 
            placeholder="Search Pokemon"
            type="text" 
            value={ searchpkm }
            />
        </div>
        <div className="col-auto ps-0">
          <button className="btn btn_search" type="submit">
            <img src="/assets/pokeball-btn.png" alt="search"/>
          </button>
        </div>
      </form>
    </div>
  )
}
