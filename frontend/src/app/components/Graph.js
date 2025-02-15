"use client"

import { Bar, BarChart, XAxis, Tooltip } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import Loader from "./Loader"



export function Graph(props) {
    const chartData = [
        { label: "Negative", value: props.data.LABEL_0 },
        { label: "Neutral", value: props.data.LABEL_1 },
        { label: "Positive", value: props.data.LABEL_2 }
      ]
      console.log(props)
      
      const chartConfig = {
        value: {
          label: "Value: ",
          color: "#2563eb",
        },
      }
  return (
    <div className="rounded-xl p-5 bg-neutral-900 col-span-12 md:col-span-4 print:col-span-6 flex flex-col justify-between">
          <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800">
        Comments Sentiment
      </div>
    {!props.data.LABEL_0? <Loader />:
   
      <ChartContainer config={chartConfig} className="min-h-[300px] w-full mt-4">
        <BarChart accessibilityLayer data={chartData}>
          <XAxis
            dataKey="label"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />
          <Tooltip 
            content={<ChartTooltipContent labelKey="label" nameKey="value" />}
            cursor={false} 
          />
          <Bar dataKey="value" fill="white" radius={4} />
        </BarChart>
      </ChartContainer>
    }
    </div>
  )
}
