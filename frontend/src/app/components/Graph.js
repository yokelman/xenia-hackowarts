"use client"

import { Bar, BarChart, XAxis, Tooltip } from "recharts"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
  { label: "Negative", value: 186 },
  { label: "Neutral", value: 305 },
  { label: "Positive", value: 237 }
]

const chartConfig = {
  value: {
    label: "Sentiment Score",
    color: "#2563eb",
  },
}

export function Graph() {
  return (
    <div className="rounded-xl p-5 bg-neutral-900 col-span-4 print:col-span-6 flex flex-col justify-between">
      <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800">
        Comments Sentiment
      </div>
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
            cursor={{ fill: "rgba(255, 255, 255, 0.2)" }}
          />
          <Bar dataKey="value" fill="white" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
