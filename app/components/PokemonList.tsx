// "use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import PokemonDetail from "./PokemonDetail";
import Link from "next/link";

const fetchPokemon = async (ptype) => {
  const res = await fetch(`https://pokeapi.co/api/v2/type/${ptype}/`);
  const data = await res.json();
  return data;
};

function PokemonList({ ptype, selectedPoke }: any) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", ptype],
    queryFn: () => fetchPokemon(ptype),
    enabled: !!ptype,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  return (
    <div
      style={{
        width: "80%",
        display: selectedPoke ? "flex" : "block",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          width: selectedPoke ? "70%" : "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {data?.pokemon.map((pok: any) => (
          <li
            style={{
              listStyle: "none",
              backgroundColor: "white",
              padding: "25px",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              //   border: "5px solid #3A5EA9",
            }}
          >
            <Link
              href={{
                pathname: "/",
                query: { category: ptype, pokemon: pok.pokemon.name },
              }}
              style={{
                position: "absolute",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: "600",
                color: "black",
                textDecoration: "none",
                width: "min-content",
              }}
            >
              {pok.pokemon.name}
            </Link>
          </li>
        ))}
      </div>
      {selectedPoke && <PokemonDetail selectedPoke={selectedPoke} />}
    </div>
  );
}

export default PokemonList;
