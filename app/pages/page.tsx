"use client";

import { useState } from "react";
import Header from "../components/Header";
import Pokemoncategory from "../components/PokemonCategory";
import PokemonList from "../components/PokemonList";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();
  const ptype = params.get("category");
  const selectedPoke = params.get("pokemon");

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          margin: "20px 20px 0px 200px",
          width: "100%",
        }}
      >
        <Header />
        <div style={{ marginTop: "20px" }}></div>
        <div
          style={{
            width: "80%",
            marginTop: "30px",
            display: "flex",
          }}
        ></div>
        <Pokemoncategory />
        <PokemonList ptype={ptype} selectedPoke={selectedPoke} />
      </div>

      <img
        src="../../ball.png"
        style={{
          opacity: "50%",
          margin: "-5% -2%",
          zIndex: -10,
          position: "relative",
        }}
      />
    </main>
  );
}
