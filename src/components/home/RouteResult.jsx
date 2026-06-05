import RouteSummary from "./RouteSummary";
import TollBreakdown from "./TollBreakdown";
import RouteMap from "./RouteMap";

const RouteResult = ({
  result,
}) => {
  if (!result) return null;

  return (
    <div className="result-card">

      <RouteSummary
        tollCost={result.tollCost}
        distance={result.distance}
        duration={result.duration}
        fuelCost={result.fuelCost}
      />

      <TollBreakdown
        tolls={result.tolls}
      />

      <div className="badge-save">

        <i className="fas fa-leaf"></i>

        {" "}

        Smart Tip: Avoid tolls
        may reduce toll charges.

      </div>

      <RouteMap
        routePoints={
          result.routePoints
        }
        fromCoord={
          result.fromCoord
        }
        toCoord={result.toCoord}
      />

    </div>
  );
};

export default RouteResult;