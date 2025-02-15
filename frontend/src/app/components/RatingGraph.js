"use client"

import { Bar, BarChart, Line, LineChart, XAxis, Tooltip } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import Loader from "./Loader"



const RatingGraph = (props) => {

    const chartData = [
        { label: "1",  desktop: props.data[0]},
        { label: "2",  desktop: props.data[1]},
        { label: "3",  desktop: props.data[2]},
        { label: "4",  desktop: props.data[3]},
        { label: "5",  desktop: props.data[4]},
        { label: "6",  desktop: props.data[5]},
        { label: "7",  desktop: props.data[6]},
        { label: "8",  desktop: props.data[7]},
        { label: "9",  desktop: props.data[8]},
        { label: "10", desktop: props.data[9]}
      ]
      
      const chartConfig = {
        desktop: {
          label: "Desktop",
          color: "#2563eb",
        },
        mobile: {
          label: "Mobile",
          color: "#60a5fa",
        },
      } 

  return (
    <div className='p-4 col-span-12 md:col-span-8 print:col-span-6 bg-neutral-900 rounded-xl min-h-80'>
      <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800 flex w-full items-center justify-between">
        <div>Comment Ratings</div>
      </div>
      {props.data.length == 0? <Loader />:
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full mt-4">
        <LineChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="label"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 8)}
          />
          <Tooltip 
            content={<ChartTooltipContent labelKey="label" nameKey="desktop" />} 
            cursor={{ stroke: 'gray', strokeWidth: 1 }}
          />
          <Line dataKey="desktop" stroke="yellow" radius={4} />
        </LineChart>
      </ChartContainer>}
    </div>
  )
}

export default RatingGraph
