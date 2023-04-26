
export const getColorType = ( type: string ) =>{
    
    const keyType = type as string;
    
    const colors = {
        electric:  '#FFEA70',
        normal:    '#B09398',
        fire:      '#FF675C',
        water:     '#0596C7',
        ice:       '#AFEAFD',
        rock:      '#999799',
        flying:    '#7AE7C7',
        grass:     '#4A9681',
        psychic:   '#FFC6D9',
        ghots:     '#561D25',
        bug:       '#A2FAA3',
        poison:    '#795663',
        ground:    '#D28074',
        dragon:    '#DA627D',
        steel:     '#1DBA99',
        fighting:  '#2F2F2F',
        default:   '#2A1A1F',
    }
  
    return (type in colors) 
            ? colors[keyType as keyof typeof colors] 
            : colors['default'] 
} 