import React from "react";
import { render } from "react-dom";
import {
  VictoryChart,
  VictoryGroup,
  VictoryStack,
  VictoryAxis,
  VictoryScatter,
  VictoryLabel,
  VictoryBar
} from "victory";

class App extends React.Component {
  render() {
    const getBarData = () => {
      return [1, 2].map((d, i) => {
        return [{ x: 2, y: 2 + i }];
      });
    };

    const data = [[{ x: 0, y: 50 }], [{ x: 0, y: 40 }]];

    console.log("data", data);

    return (
      <div>
        <VictoryChart width={500} height={100} horizontal domain={{ x: [0, 90] }}>
          <VictoryAxis
            style={{
              ticks: { stroke: "gray" },
              tickLabels: {
                fill: "gray",
                fontSize: 12
              }
            }}
            tickFormat={t => `${t} min`}
          />
          <VictoryStack
            // animate={{
            //   duration: 2000,
            //   onLoad: { duration: 1000 }
            // }}
            horizontal
            style={{
              data: { strokeWidth: 10 }
            }}
            colorScale={"blue"}
          >
            {data.map(data => (
              <VictoryBar
                labels={d => `${d.y} min`}
                labelComponent={<VictoryLabel dx={-100} />}
                style={{ labels: { fill: "#f9f9f9" } }}
                barWidth={40}
                key={data.x}
                data={data}
              />
            ))}
          </VictoryStack>
        </VictoryChart>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
