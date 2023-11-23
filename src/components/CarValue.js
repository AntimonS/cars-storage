import { useSelector } from "react-redux/";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );

  //rješenje s for-loopom:

  /*let cost = 0;
    for (let car of filteredCars) {
      cost += car.cost;
    }
    return cost;
*/

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
