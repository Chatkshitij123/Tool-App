const OSRM_URL =
  "https://router.project-osrm.org/route/v1/driving";

export const getRoute = async (
  from,
  to
) => {
  const response = await fetch(
    `${OSRM_URL}/${from.lng},${from.lat};${to.lng},${to.lat}?overview=full&geometries=geojson`
  );

  const data = await response.json();

  if (
    !data.routes ||
    !data.routes.length
  ) {
    throw new Error(
      "Unable to fetch route"
    );
  }

  const route = data.routes[0];

  return {
    distance:
      route.distance / 1000,

    duration:
      route.duration / 3600,

    geometry:
      route.geometry.coordinates,
  };
};