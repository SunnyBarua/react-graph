import React, { Component } from 'react'
import Plot from "react-plotly.js"

export class Stock extends Component {
    constructor(props){
        super(props);
        this.state={
            stockChartXValues:[],
            stockChartYValues:[]
        }
    }

    componentDidMount(){
        this.fetchStock();

    }
    fetchStock(){
        const pointerToThis = this;
        console.log(pointerToThis)

        const API_KEY='27PPQBSQZMQX15NB';
        let StockSymbol='AAPL'
        let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${StockSymbol}&interval=5min&outputsize=compact&apikey=${API_KEY}`;
        
        let stockChartXValuesFunction=[];
        let stockChartYValuesFunction=[];

        fetch(API_Call)
           .then(
               (response)=>{
                   return response.json()
               }
           ).then(
               (data)=>{
                   console.log(data)

                   for (var key in data['Time Series (5min)']){
                       stockChartXValuesFunction.push(key);
                       stockChartYValuesFunction.push(data['Time Series (5min)'][key]['1. open']);
                   }
                   console.log(stockChartYValuesFunction)
                   pointerToThis.setState({
                       stockChartXValues:stockChartXValuesFunction,
                       stockChartYValues:stockChartYValuesFunction
                   })
                   
               }
           )
    }

    render() {
        return (
            <div>
                <h1>Stock Market</h1>
            
               <Plot
            data={[
            {
                x: this.state.stockChartXValues,
                y: this.state.stockChartYValues,
                type: 'scatter',
                mode: 'lines+markers',
                marker: {color: 'red'},
            },
            
        ]}
        layout={{width: 720, height: 400, title: 'A Fancy Plot'}}
      />

            </div>
        )
    }
}

export default Stock
