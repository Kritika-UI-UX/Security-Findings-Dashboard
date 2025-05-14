
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FindingSummary } from "@/hooks/useDashboardData";

interface SecurityMetricsCardsProps {
  summary: FindingSummary;
  loading: boolean;
}

const SecurityMetricsCards: React.FC<SecurityMetricsCardsProps> = ({
  summary,
  loading
}) => {
  const metrics = [
    { 
      title: "Critical", 
      value: summary.critical, 
      description: "Immediate action required",
      color: "bg-severity-critical text-white",
      textColor: "text-severity-critical"
    },
    { 
      title: "High", 
      value: summary.high, 
      description: "Address within 24 hours",
      color: "bg-severity-high text-white",
      textColor: "text-severity-high"
    },
    { 
      title: "Medium", 
      value: summary.medium, 
      description: "Plan remediation this week",
      color: "bg-severity-medium text-black",
      textColor: "text-severity-medium"
    },
    { 
      title: "Low", 
      value: summary.low, 
      description: "Address in regular cycle",
      color: "bg-severity-low text-white",
      textColor: "text-severity-low"
    },
    { 
      title: "Total", 
      value: summary.total, 
      description: "Total active findings",
      color: "bg-security-blue-gray text-white",
      textColor: "text-security-blue-gray"
    },
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {metrics.map((metric) => (
        <Card key={metric.title} className="overflow-hidden">
          <CardHeader className={`py-2 ${metric.color}`}>
            <CardTitle className="text-center text-sm font-medium">{metric.title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6 flex flex-col items-center justify-center">
            {loading ? (
              <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
            ) : (
              <>
                <div className={`text-3xl font-bold ${metric.textColor}`}>{metric.value}</div>
                <p className="text-xs text-muted-foreground text-center mt-1">
                  {metric.description}
                </p>
              </>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SecurityMetricsCards;
