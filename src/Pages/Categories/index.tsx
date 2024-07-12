import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetRpgGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } =
    useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: sportGames, isLoading: isLoadingSport } =
    useGetSportGamesQuery()

  console.log('actionGames:', actionGames)
  console.log('fightGames:', fightGames)
  console.log('rpgGames:', rpgGames)
  console.log('simulationGames:', simulationGames)
  console.log('sportGames:', sportGames)

  return (
    <>
      <ProductsList
        games={actionGames}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={sportGames}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSport}
      />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={fightGames}
        title="Luta"
        background="black"
        id="fight"
        isLoading={isLoadingFight}
      />
      <ProductsList
        games={rpgGames}
        title="RPG"
        background="gray"
        id="rpg"
        isLoading={isLoadingRpg}
      />
    </>
  )
}

export default Categories
