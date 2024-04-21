// utils/api.js

// import { useQuery } from "";

// const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

// export const getAllCategories = () => {
//   return useQuery({
//     queryKey: ["categories"],
//     queryFn: async () => {
//       const res = await fetch(`${POKEAPI_BASE_URL}/type`);
//       return res.json();
//     },
//   });

// useQuery("categories", async () => {
//   const response = await fetch(`${POKEAPI_BASE_URL}/type`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch categories");
//   }
//   const data = await response.json();
//   return data.results;
// });

export async function getAllCategories() {
  const POKEAPI_BASE_URL = "https://pokeapi.co/api/v2";

  try {
    const response = await fetch(`${POKEAPI_BASE_URL}/type`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
}
