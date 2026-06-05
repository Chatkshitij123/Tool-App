const NOMINATIM_URL =
  "https://nominatim.openstreetmap.org/search";

export const geocodeCity = async (
  city
) => {
  const response = await fetch(
    `${NOMINATIM_URL}?format=json&q=${encodeURIComponent(
      city
    )}&limit=1`
  );

  const data = await response.json();

  if (!data.length) {
    throw new Error(
      `Location not found: ${city}`
    );
  }

  return {
    lat: Number(data[0].lat),
    lng: Number(data[0].lon),
  };
};