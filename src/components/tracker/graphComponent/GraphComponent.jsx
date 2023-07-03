import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import APIservice from "../../../services/APIservice";

ChartJS.register(ArcElement, Tooltip, Legend);

function GraphComponent() {
  

  const url = "https://disease.sh/v3/covid-19/historical/USA?lastdays=15";
  let last15days = APIservice(url);

  if (last15days) {
    last15days = last15days.timeline.cases;
  
  console.log(last15days);
  }
  const labelsA = Object.keys(last15days);
  console.log(labelsA);

  const casesValues = Object.values(last15days);
  console.log(casesValues);

  const options = {
     responsive: true,
     plugins: {
      legend: {
         position: "top",
       },
       title: {
         display: true,
         text: "Chart.js Line Chart",
       },
     },
   };

const data = {
     labels: [labelsA],
     datasets: [
       {
     label: "Dataset 1",
     data: [casesValues],
     borderColor: "rgb(255, 99, 132)",
     backgroundColor: "rgba(255, 99, 132, 0.5)",
       }]
   };

   return (
     <div>
       <Line options = {options} data={data} />;
     </div>
   );
}
export default GraphComponent