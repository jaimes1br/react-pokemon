import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from 'react';

const createPagesList = ( totalPages: number ): number[] => {
    
    let pages: number[] = []
    for (let i = 0; i < totalPages; i++) {
        pages.push(i +1)
    }        
    
    return pages
}

export const usePagination = (initialPage:number = 1) => {

    const navigate = useNavigate();
    const totalPages: number = 63;
    const pagesList = useMemo(() => createPagesList(totalPages),[]);

    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const [pagesToShow, setPagesToShow] = useState<number[]>([]);
    const [isDisablePrev, setIsDisablePrev] = useState<boolean>(true);
    const [isDisableNext, setIsDisableNext] = useState<boolean>(false);

    useEffect(() => {
        
        if(currentPage >= 1 && currentPage <= 63 ){
            
            if( currentPage >= 60){                
                setPagesToShow([59,60,61,62,63]);
            }else if( currentPage <= 3) {
                setPagesToShow([1,2,3,4,5]);
            }else {
                setPagesToShow(pagesList.slice(currentPage - 3, currentPage + 2))
            } 
        
            ( currentPage === 1 ) 
                ? setIsDisablePrev(true)
                : setIsDisablePrev(false);  

            ( currentPage === 63)
                ? setIsDisableNext(true)
                : setIsDisableNext(false);  

            navigate(`?page=${ currentPage }`);

        }else{
            setCurrentPage(1);
        }

    },[ currentPage ])
    
    return {
        currentPage,
        pagesToShow,
        isDisableNext,
        isDisablePrev,
        setCurrentPage,
    }
}