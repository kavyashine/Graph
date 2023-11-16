import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

 import { useEffect, useMemo, useRef,useState } from "react";
 import * as d3 from "d3";



function Home() {

  

  const data = [
        {
          name: '09',
          uv: 10000,
          pv: 5000,
          amt: 3000,
        },
        {
          name: '10',
          uv: 12000,
          pv: 7000,
          amt: 4000,
        },
        {
          name: '11',
          uv: 16000,
          pv: 9800,
          amt: 5290,
        },
        {
          name: '12',
          uv: 13000,
          pv: 7800,
          amt: 5500,
        },
        {
          name: '13',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: '14',
          uv: 8390,
          pv: 7800,
          amt: 2500,
        },
        {
          name: '15',
          uv: 8000,
          pv: 6000,
          amt: 2100,
        },
        {
          name: '16',
          uv: 3000,
          pv: 2500,
          amt: 2100,
        },
        {
          name: '17',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
        {
          name: '18',
          uv: 4000,
          pv: 5000,
          amt: 2100,
        },
        
      ];
     
      const data1 = [
        {
          name: 'older',
          uv: 2000,
          
        },
        {
          name: 'Jan 01-08',
          uv: 5000,
          
        },
        {
          name: 'Jan 09-16',
          uv: 13000,
          
        },
        {
          name: 'Jan 17 24',
          uv: 8000,
          
        },
        {
          name: 'Jan 25 31',
          uv: 9000,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Future',
          uv: 7000,
          
        },
        
      ];

      const data2 = [
        {
          name: 'older',
          uv: 2000,
          
        },
        {
          name: 'Jan 01-08',
          uv: 5000,
          
        },
        {
          name: 'Jan 09-16',
          uv: 13000,
          
        },
        {
          name: 'Jan 17 24',
          uv: 8000,
          
        },
        {
          name: 'Jan 25 31',
          uv: 9000,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Future',
          uv: 7000,
          
        },
        
      ];
      const data3 = [
        { name: "Anom", age: 19, gender: "Male" },
        { name: "Megha", age: 19, gender: "Female" },
        { name: "Subham", age: 25, gender: "Male" },
    ]
     
const Invoice=()=>{
  alert('Attach Invoice')
}
  return (
    <main className='main-container'>
       <button className="button1" onClick={Invoice}>
              New Sales Invoice
              </button>

              <div className=''>
                
             
              <button className="button2">
                
            Manage
              </button>&nbsp;&nbsp;&nbsp;

              <select className="button2" name="Month" id="month">
              <option value="month">January</option>
  <option value="month">February</option>
  <option value="March">March</option>
  <option value="April">April</option>
  <option value="May">May</option>
  <option value="May">june</option>
  <option value="May">july</option>
  <option value="May">August</option>
  <option value="May">September</option>
  <option value="May">October</option>
  <option value="May">November</option>
  <option value="May">December</option>
</select>
</div>
             
                
{/* MAIN CHARTS */}
        <div className='charts'>
        
            <div className='card'>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                
                <XAxis dataKey="name" />
                {/* <YAxis /> */}
                
                <Line type="monotone" dataKey="pv" stroke="#32cd32"  width='20px'  strokeWidth={3}/>
                {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
                </LineChart>

            </ResponsiveContainer>
            </div>


                  
                <div className='card'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={400}
            data={data1}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                 
                <XAxis dataKey="name" />
              
               
                <Bar dataKey="uv" fill="#32cd32" barSize={20} radius={20}/>
                </BarChart>
             
            </ResponsiveContainer>
            
            </div>

            <div className='card'>
           
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data2}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
              
                <XAxis dataKey="name" />
               
                <Bar dataKey="uv" fill="#82ca9d" barSize={20} radius={15}/>
                </BarChart>

            </ResponsiveContainer>
            </div>
            
            <div className='card'>
           
            <table class="table table-bordered background-color: white">
  <thead>
    <tr class="dark">
      <th scope="col">Account</th>
      <th scope="col">This Moth</th>
      <th scope="col">YTD</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Sales</th>
      <td>1,194.58</td>
      <td>11,418.29</td>
      
    </tr>
    <tr>
      <th scope="row">Advertising</th>
      <td>6,879.02</td>
      <td>9,2,71,36</td>
      
    </tr>
    <tr>
      <th scope="row">Inventory</th>
      <td>4,692.26</td>
      <td>9768.09</td>
      
    </tr>
    <tr>
      <th scope="row">Entertainment</th>
      <td>0.00</td>
      <td>0.00</td>
      
    </tr>
    <tr>
      <th scope="row">Product</th>
      <td>4,652.10</td>
      <td>2,529.90</td>
      
    </tr>
  </tbody>
</table>
            </div>
            

        </div>

        


       
    </main>
  )
}

export default Home