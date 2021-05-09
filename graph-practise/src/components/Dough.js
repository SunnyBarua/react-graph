import React from 'react'
import {Doughnut} from "react-chartjs-2"

const Dough = () => {
    const data={
        labels:['Jan', 'Feb','Mar','Apr','May'],
        datasets:[
            {
            label:'Sales for 2021 (M)',
            data:[3,2,2,1,5],
            backgroundColor:[
                'rgba(255,99,132,1)',
                'rgba(255,205,86,1)',
                'rgba(54,162,235,1)',
                'rgba(255,159,64,1)',
                'rgba(153,102,255,1)'
            ],

    }
]
}
    const options={
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            yAxes:[
               {
                   tricks:{
                    min:0,
                    max:6,
                    stepSize:1
                   }
               }
            ]
        }
    }
    return (
        <div>
           <Doughnut data={data} options={options}/> 
        </div>
    )
}

export default Dough

