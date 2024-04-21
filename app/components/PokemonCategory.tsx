// parallel rounting

import React, { Suspense } from "react";
import { Showdif } from "../utils/helper";
import Link from "next/link";

export const getCategories = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/type/", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data.results;
};

const Pokemoncategory = async () => {
  // const res = await fetch("https://pokeapi.co/api/v2/type/");
  // const categories = await res.json();
  const categories = await getCategories();

  return (
    <main>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          width: "80%",
          marginTop: "  40px",
        }}
      >
        {categories?.map((category, index) => (
          <div
            className="jerking-div"
            style={{
              display: "flex",
              alignItems: "center",
              width: "100px",
              height: "100px",
              justifyContent: "center",
              cursor: "pointer",
              backgroundColor: "white",
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.1)",
              borderRadius: "10px",
              transition: "transform 0.1s ease",
            }}
          >
            <img
              src={Showdif(index)}
              width="80%"
              height="80%"
              style={{
                position: "relative",
                // background: "#3761A8",
                // opacity: "50%",
              }}
            />
            <Link
              // href={`/?param=${category.name}/`}
              href={{
                pathname: "/",
                query: { category: category.name },
              }}
              style={{
                position: "absolute",
                textTransform: "capitalize",
                fontSize: "14px",
                fontWeight: "600",
                color: "#3760AA",
                textDecoration: "none",
                backgroundColor: "white",
                padding: "1px",
              }}
            >
              {category.name}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pokemoncategory;
