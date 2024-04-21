import { useQuery } from "@tanstack/react-query";
import React from "react";
import { PokemonStats } from "./PokemonStats";
import { Skeleton } from "@mui/material";

const fetchPokemon = async (ptype) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ptype}/`);
  const data = await res.json();
  return data;
};

function PokemonDetail({ selectedPoke }: any) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["pokemon", selectedPoke],
    queryFn: () => fetchPokemon(selectedPoke),
    enabled: !!selectedPoke,
  });
  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width={300}
        height={500}
        style={{ backgroundColor: "white" }}
      />
    );
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>;
  }

  console.log("the dataaa", data);

  return (
    <div
      style={{
        backgroundColor: "white",
        height: "500px",
        width: "300px",
        boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "10px",
      }}
    >
      <img
        src={data?.sprites?.back_default}
        style={{
          marginTop: "-120px",
          width: "250px",
          height: "250px",
        }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <span
          style={{
            textTransform: "capitalize",
            fontSize: "16px",
            fontWeight: "600",
            color: "#9DA0AF",
          }}
        >
          #{data?.id}
        </span>
        <span
          style={{
            textTransform: "capitalize",
            fontSize: "18px",
            fontWeight: "800",
          }}
        >
          {data?.name}
        </span>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          {data?.types?.map((type) => (
            <span
              style={{
                backgroundColor: "#3A5DA8",
                padding: "10px",
                borderRadius: "5px",
                color: "#FFCB03",
              }}
            >
              {type?.type?.name}
            </span>
          ))}
        </div>
      </div>
      {data && <PokemonStats stats={data?.stats} />}
    </div>
  );
}

export default PokemonDetail;
