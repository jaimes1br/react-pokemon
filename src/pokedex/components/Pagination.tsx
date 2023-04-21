import { useLocation } from "react-router-dom";
import classnames from 'classnames'
import queryString from 'query-string';
import { usePagination } from '../../hooks';

export const Pagination = () => {

    // num max poke: 1008 - 16 p/pagina 
    // Total paginas: 63  

    const location = useLocation();
    const page: string | (string | null)[] | null = queryString.parse( location.search ).page;
  
    const valueToPage: string = ( page ) ? page.toString() : '1'
    const initalPage = parseInt(valueToPage,10);
    
    const {
        currentPage,
        pagesToShow,
        isDisableNext,
        isDisablePrev,
        setCurrentPage,
    } = usePagination( initalPage );


    return (
        <div className="d-flex justify-content-center mt-5 pb-3" >        
            <button 
                disabled={ isDisablePrev }
                type='button' 
                onClick={ () => setCurrentPage(currentPage - 1)} 
                className="btn btn-dark btn-lg">
                    &laquo;
            </button>
            {
                pagesToShow.map(page =>
                    <button 
                        key={ page }
                        type='button' 
                        onClick={ () => setCurrentPage(page)} 
                        className={ classnames(
                            'btn btn-dark btn-size mx-1', 
                            {'active-btn' : currentPage === page }, 
                            {'btn-link btn-link_pag': currentPage !== page})}
                            >
                            { page }
                    </button>
                )
            }
            <button 
                disabled={ isDisableNext }
                type='button' 
                onClick={ () => setCurrentPage(currentPage + 1)} 
                className="btn btn-dark btn-lg">
                    &raquo;
            </button>
        </div>
    )
}
