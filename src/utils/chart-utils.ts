import { ChartData } from "chart.js";
import { Coin, MarketChartApiResponse } from "../types";
import { convertMilisecondsToDate } from "./date-utils";
import { decimateArray, getRandomColor } from "./general-utils";

export const transformApiData = (
  apiData: MarketChartApiResponse,
  selectedCoin: Coin
): ChartData<"line"> => {
  const color = getRandomColor();

  const result: ChartData<"line"> = {
    labels: decimateArray(
      apiData.prices.map((price) => convertMilisecondsToDate(price[0]))
    ),
    datasets: [
      {
        label: selectedCoin.name,
        data: decimateArray(apiData.prices.map((price) => price[1])),
        borderColor: color,
        backgroundColor: color,
      },
    ],
  };

  return result;
};
