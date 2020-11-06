import { Container, Link, Wrap, WrapItem } from "@chakra-ui/core"
import { GetStaticProps } from "next"
import NextLink from "next/link"
import React from "react"
import { useTranslation } from "react-i18next"
import RedCard from "../../components/styled/RedCard"
import { findPokemons, useFetch } from "../../hooks/useFetch"
import LayoutMain from "../../layouts/main-with-header"

export interface PokemonsData {
  count: number
  next: string
  previous: null
  results: Pokemon[]
}

export interface Pokemon {
  name: string
  url: string
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: { locale },
  }
}

const Pokedex = ({ locale }) => {
  const { t } = useTranslation()
  const { data, error } = findPokemons<PokemonsData, any>()

  if (!data) {
    return <p> Carregando </p>
  }
  const { results: pokemons } = data

  return (
    <LayoutMain>
      <Container maxW="90%">
        <Wrap display="inline-flex" marginTop="3">
          {pokemons.map((pokemon: Pokemon) => (
            <WrapItem flexBasis="40" key={pokemon.name}>
              <RedCard>
                <NextLink href={`/pokedex/${pokemon.name}`} passHref>
                  <Link> {pokemon.name}</Link>
                </NextLink>
              </RedCard>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </LayoutMain>
  )
}

export default Pokedex
