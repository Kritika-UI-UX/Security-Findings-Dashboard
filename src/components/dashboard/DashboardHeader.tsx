
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FindingSummary } from "@/hooks/useDashboardData";

interface DashboardHeaderProps {
  summary: FindingSummary;
  lastUpdated: string;
  onRefresh: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  summary,
  lastUpdated,
  onRefresh
}) => {
  const formattedTime = new Date(lastUpdated).toLocaleTimeString();
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Security Findings Dashboard</h1>
          <p className="text-sm text-muted-foreground">
            Last updated: {formattedTime}
          </p>
        </div>
        <Button onClick={onRefresh} variant="outline" className="gap-2">
          <RefreshIcon className="w-4 h-4" />
          Refresh
        </Button>
      </div>
      
      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground mb-2">Anita's Shift Summary</div>
          <div className="text-lg">
            <span className="font-medium">"{summary.critical + summary.high} critical issues</span> need attention. The top concern is <span className="font-medium">SQL Injection in the API Gateway</span>. Focus on this first."
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Simple refresh icon component
const RefreshIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
    <path d="M3 21v-5h5" />
  </svg>
);

export default DashboardHeader;
