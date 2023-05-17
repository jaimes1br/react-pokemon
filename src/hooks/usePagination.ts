import { useNavigate } from "react-router-dom";
import { useMemo, useState, useEffect } from 'react';
import { useAppDispatch } from "../store/hooks";
import { setCurrentPage } from "../store/pokemon/pokemonSlice";

const createPagesList = ( totalPages: number ): number[] => {
    
    let pages: number[] = []
    for (let i = 0; i < totalPages; i++) {
        pages.push(i +1)
    }        
    
    return pages
}

export const usePagination = ( initialPage:number = 1 ) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const totalPages: number = 63;
    const pagesList = useMemo(() => createPagesList(totalPages),[]);

    const [currentPagePag, setCurrentPagePag] = useState<number>(initialPage);
    const [pagesToShow, setPagesToShow] = useState<number[]>([]);
    const [isDisablePrev, setIsDisablePrev] = useState<boolean>(true);
    const [isDisableNext, setIsDisableNext] = useState<boolean>(false);

    useEffect(() => {
        
        if(!Number.isNaN(initialPage)){
            if(initialPage > 63) initialPage = 1 
        }else{
            initialPage = 1
        }
    },[ initialPage ])
    
    useEffect(() => {
        
        if(currentPagePag >= 1 && currentPagePag <= 63 ){        
            if( currentPagePag >= 60){                
                setPagesToShow([59,60,61,62,63]);
            }else if( currentPagePag <= 3) {
                setPagesToShow([1,2,3,4,5]);
            }else {
                setPagesToShow(pagesList.slice(currentPagePag - 3, currentPagePag + 2))
            } 
        
            ( currentPagePag === 1 ) 
                ? setIsDisablePrev(true)
                : setIsDisablePrev(false);  

            ( currentPagePag === 63)
                ? setIsDisableNext(true)
                : setIsDisableNext(false);  

            dispatch( setCurrentPage(currentPagePag) );
            navigate(`?page=${ currentPagePag }`);
        
        }else{
            setCurrentPagePag(1);
        }

    },[ currentPagePag ]);

    return {
        currentPagePag,
        pagesToShow,
        isDisableNext,
        isDisablePrev,
        setCurrentPagePag,
    }
}