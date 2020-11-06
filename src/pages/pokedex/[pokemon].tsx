import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
import { findPokemon } from "../../hooks/useFetch"
import LayoutMain from "../../layouts/main-with-header"
import LayoutPokemonDetails from "../../layouts/pokemon-detail"

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: { locale },
//   }
// }

const PokemonDetails = ({ locale }) => {
  const { t } = useTranslation()
  const { query } = useRouter()
  const { pokemon } = query
  const { data, error } = findPokemon<Pokemon, any>(pokemon)

  if (!data) {
    return <p> Carregando </p>
  }
  const {} = data

  return (
    <LayoutMain>
      <LayoutPokemonDetails
      // heading={pokemon.name}
      // image={pokemon.sprites.front_default}
      />
    </LayoutMain>
  )
}

export default PokemonDetails
