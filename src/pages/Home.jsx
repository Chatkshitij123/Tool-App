import Hero from "../components/home/Hero";
import RouteCalculator from "../components/home/RouteCalculator";
import RouteResult from "../components/home/RouteResult";
import PopularRoutes from "../components/home/PopularRoutes";

import Loading from "../components/common/Loading";
import ErrorCard from "../components/common/ErrorCard";

import useRoute from "../hooks/useRoute";

const Home = () => {
  const {
    result,
    loading,
    error,
    calculateRoute,
  } = useRoute();

  return (
    <>
      <Hero />

      <RouteCalculator
        onCalculate={calculateRoute}
      />

      {loading && (
        <Loading />
      )}

      {error && (
        <ErrorCard
          message={error}
        />
      )}

      <RouteResult
        result={result}
      />

      <PopularRoutes />
    </>
  );
};

export default Home;