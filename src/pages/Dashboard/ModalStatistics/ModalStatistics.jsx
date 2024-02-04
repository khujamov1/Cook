import React from "react";
import ReactApexChart from "react-apexcharts";
import "./ModalStatistics.css";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [95, 70,64],
      options: {
        chart: {
          height: 250,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            dataLabels: {
              name: {
                fontSize: "22px",
              },
              value: {
                fontSize: "16px",
              },
              total: {
                formatter: function (w) {
                  return 249;
                },
              },
            },
          },
        },
        labels: ["Apples",  "Bananas", "Berries"],
      },
    };
  }

  render() {
    return (
      <div>
        <div id="chart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="radialBar"
            height={220}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}

const ModalStatistics = () => {
  return (
    <div className="statistics ">
      <div className="header-statistics ">
        <h3>Most Type of Order</h3>
        <select className="header-statistics__select ml-3.5" name="" id="">
          <option className="" value="">
            today
          </option>
        </select>
       
      </div>
      <div className="flex items-center"> 
        <ApexChart />
        <ul className="">
          <li className="apex-item">
            <strong className="apex-title">Dine In</strong>
            <p className="apex-text">200 customers</p>
          </li>
          <li className="apex-item">
            <strong className="apex-title-two">To Go</strong>
            <p className="apex-text">122 customers</p>
          </li>
          <li className="apex-item">
            <strong className="apex-title-three">Dine In</strong>
            <p className="apex-text">264 customers</p>
          </li>
          
        </ul>
        </div>
    </div>
  );
};

export default ModalStatistics;
