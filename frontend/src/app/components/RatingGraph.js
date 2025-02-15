
"use client"

import { Bar, BarChart, Line, LineChart, XAxis } from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { label: "1", desktop: 186},
  { label: "2", desktop: 305},
  { label: "3", desktop: 237},
  { label: "4", desktop: 237},
  { label: "5", desktop: 237},
  { label: "6", desktop: 37},
  { label: "7", desktop: 237},
  { label: "8", desktop: 237},
  { label: "9", desktop: 17},
  { label: "10", desktop: 237 }
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

const RatingGraph = () => {
  return (
    <div className='p-4 col-span-8 print:col-span-6 bg-neutral-900 rounded-xl'>
              <div className="title text-2xl font-extrabold mt-2 border-b-2 pb-2 border-b-neutral-800 flex w-full items-center justify-between"><div>Comment Ratings</div> </div>
 <ChartContainer config={chartConfig} className="min-h-[200px] w-full mt-4">
      <LineChart accessibilityLayer data={chartData}>
      <XAxis
      dataKey="label"
      tickLine={false}
      tickMargin={10}
      axisLine={false}
      tickFormatter={(value) => value.slice(0, 8)}
    />
        <Line dataKey="desktop" stroke="yellow" radius={4} />
        {/* <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} /> */}
      </LineChart>
    </ChartContainer>
    </div>
  )
}

export default RatingGraph
