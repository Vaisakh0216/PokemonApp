import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export function PokemonStats({ stats }: any) {
  const xAxis = stats && stats?.map((data: any) => data?.stat?.name);
  const YAxis = stats && stats?.map((data: any) => data?.base_stat);

  const options = {
    chart: {
      height: 350,
      type: "bar",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        columnWidth: "50%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 0,
    },
    grid: {
      row: {
        colors: ["#fff", "#f2f2f2"],
      },
    },
    xaxis: {
      labels: {
        rotate: -45,
      },
      categories: xAxis,
      tickPlacement: "on",
    },
    yaxis: {
      title: {
        text: "Stats",
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0.25,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.85,
        opacityTo: 0.85,
        stops: [50, 0, 100],
      },
    },
  };

  const [series, setSeries] = useState([
    {
      name: "Servings",
      data: YAxis,
    },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <div id="chart">
        <ReactApexChart
          options={options}
          series={series}
          type="bar"
          height={250}
          width={"100%"}
        />
      </div>
      <div id="html-dist"></div>
    </div>
  );
}
