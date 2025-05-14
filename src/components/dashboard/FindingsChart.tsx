
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AssetSummary } from "@/hooks/useDashboardData";

interface FindingsChartProps {
  assetSummary: AssetSummary[];
  loading: boolean;
}

const FindingsChart: React.FC<FindingsChartProps> = ({ assetSummary, loading }) => {
  const chartColors = {
    bar: '#2F3E46',
    selectedBar: '#20C997'
  };
  
  return (
    <Card className="col-span-1 lg:col-span-2">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Findings by Asset</CardTitle>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-80">
            <div className="w-10 h-10 rounded-full border-4 border-primary/30 border-t-primary animate-spin" />
          </div>
        ) : (
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={assetSummary.sort((a, b) => b.findings - a.findings)}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 12 }} width={150} />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-popover border border-border p-2 rounded shadow-lg">
                          <p className="font-medium">{payload[0].payload.name}</p>
                          <p className="text-sm">{`Findings: ${payload[0].value}`}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="findings" fill={chartColors.bar} radius={[0, 4, 4, 0]}>
                  {assetSummary.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={entry.findings > 3 ? chartColors.selectedBar : chartColors.bar}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FindingsChart;
