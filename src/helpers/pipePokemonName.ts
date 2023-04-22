export const pipePokemonName = (name: string) => {

    const capName = name.replace(/(^\w{1})/g,letter => letter.toUpperCase());

    return capName.length > 14 
                ? capName.slice(0,14) + '...'
                : capName;        
}