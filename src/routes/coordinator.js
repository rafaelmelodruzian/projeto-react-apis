export const goToPokedex = (navigator) => {
    navigator("/pokedex")
}
 
export const goToDetail = (navigator,id,pokemon) => {
    navigator(`/detail/${id}`)
}

export const goToList = (navigator) => {
    navigator("/list")
}

