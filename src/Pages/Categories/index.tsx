import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && sportGames && simulationGames) {
    return (
      <>
        <ProductsList
          games={actionGames}
          title="Ação"
          background="grey"
          id="action"
        />
        <ProductsList
          games={sportGames}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={simulationGames}
          title="Simulação"
          background="grey"
          id="simulation"
        />
        <ProductsList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductsList games={rpgGames} title="RPG" background="grey" id="rpg" />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Categories
