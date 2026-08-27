const Token = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${Token}`,
  },
};

export const Api = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular",
    options
  );

  if (!response.ok) {
    throw new Error(`Popular API Error: ${response.status}`);
  }

  return await response.json();
};


export const BollywoodApi = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?with_origin_country=IN&with_original_language=hi&sort_by=popularity.desc",
    options
  );

  if (!response.ok) {
    throw new Error(`Bollywood API Error: ${response.status}`);
  }

  return await response.json();
};


export const HollywoodApi = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?with_origin_country=US&with_original_language=en&sort_by=popularity.desc",
    options
  );

  if (!response.ok) {
    throw new Error(`Hollywood API Error: ${response.status}`);
  }

  return await response.json();
};


export const LollywoodApi = async () => {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?with_origin_country=PK&sort_by=popularity.desc",
    options
  );

  if (!response.ok) {
    throw new Error(`Lollywood API Error: ${response.status}`);
  }

  return await response.json();
};


export const MovieDetailsApi = async ({ params }) => {
  const { id } = params;

  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos,credits,similar`,
    options
  );

  if (!response.ok) {
    throw new Error(
      `Movie Details API Error: ${response.status}`
    );
  }

  return await response.json();
};


export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
    options
  );

  if (!response.ok) {
    throw new Error(`Search API Error: ${response.status}`);
  }

  return await response.json();
};

export const TrendingApi = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const TopRatedApi = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};


export const UpcomingApi = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${Token}`,
        },
      }
    );

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const GenreApi = async ({ params }) => {

  console.log("🔥 GenreApi chal raha hai");
  console.log("🔥 Params:", params);

  const genreId = params.id;

  console.log("🔥 Genre ID:", genreId);

  const [popularResponse, topRatedResponse, latestResponse] =
    await Promise.all([

      fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=popularity.desc&page=1`,
        options
      ),

      fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=vote_average.desc&vote_count.gte=100&page=1`,
        options
      ),

      fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}&sort_by=primary_release_date.desc&page=1`,
        options
      )

    ]);

  console.log("🔥 Popular Status:", popularResponse.status);
  console.log("🔥 Top Rated Status:", topRatedResponse.status);
  console.log("🔥 Latest Status:", latestResponse.status);

  if (!popularResponse.ok) {
    throw new Error(
      `Popular Genre API Error: ${popularResponse.status}`
    );
  }

  if (!topRatedResponse.ok) {
    throw new Error(
      `Top Rated Genre API Error: ${topRatedResponse.status}`
    );
  }

  if (!latestResponse.ok) {
    throw new Error(
      `Latest Genre API Error: ${latestResponse.status}`
    );
  }

  const popular = await popularResponse.json();
  const topRated = await topRatedResponse.json();
  const latest = await latestResponse.json();

  console.log("🔥 Popular Data:", popular);
  console.log("🔥 Top Rated Data:", topRated);
  console.log("🔥 Latest Data:", latest);

  return {
    popular,
    topRated,
    latest
  };
};