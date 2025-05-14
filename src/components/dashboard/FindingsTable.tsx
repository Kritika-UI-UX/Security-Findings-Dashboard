
import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import StatusChip from "@/components/ui/StatusChip";
import AssignmentButton from "@/components/ui/AssignmentButton";
import { SecurityFinding } from "@/hooks/useDashboardData";
import FindingDetails from './FindingDetails';

interface FindingsTableProps {
  findings: SecurityFinding[];
  onAssign: (id: string, person: string) => void;
  loading: boolean;
}

const FindingsTable: React.FC<FindingsTableProps> = ({
  findings,
  onAssign,
  loading
}) => {
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);
  
  const toggleRowExpansion = (id: string) => {
    setExpandedRowId(prevId => prevId === id ? null : id);
  };
  
  return (
    <div className="border rounded-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-9"></TableHead>
            <TableHead>Finding</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead className="hidden md:table-cell">Asset</TableHead>
            <TableHead className="hidden md:table-cell">Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                <div className="flex justify-center">
                  <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                </div>
              </TableCell>
            </TableRow>
          ) : findings.length === 0 ? (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No findings found matching your filters.
              </TableCell>
            </TableRow>
          ) : (
            findings.map((finding) => (
              <React.Fragment key={finding.id}>
                <TableRow 
                  className={`finding-row ${expandedRowId === finding.id ? 'expanded' : ''}`}
                  onClick={() => toggleRowExpansion(finding.id)}
                >
                  <TableCell className="px-3 py-2">
                    <ChevronIcon expanded={expandedRowId === finding.id} />
                  </TableCell>
                  <TableCell className="font-medium">
                    <div>{finding.title}</div>
                    <div className="text-xs text-muted-foreground">{finding.id}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center">
                      <span className={`severity-indicator severity-${finding.severity}`} />
                      <span className="capitalize">{finding.severity}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">{finding.asset}</TableCell>
                  <TableCell className="hidden md:table-cell">{finding.category}</TableCell>
                  <TableCell>
                    <StatusChip status={finding.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <div onClick={(e) => e.stopPropagation()}>
                      <AssignmentButton 
                        assignedTo={finding.assignedTo}
                        onAssign={(person) => onAssign(finding.id, person)}
                      />
                    </div>
                  </TableCell>
                </TableRow>
                <TableRow className={expandedRowId === finding.id ? 'expanded' : ''}>
                  <TableCell colSpan={7} className="p-0">
                    <div className={`finding-details ${expandedRowId === finding.id ? 'expanded' : ''} p-4`}>
                      <FindingDetails 
                        finding={finding} 
                        onAssign={onAssign}
                      />
                    </div>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

// Chevron icon for expanding/collapsing rows
const ChevronIcon = ({ expanded }: { expanded: boolean }) => (
  <div className={`transition-transform ${expanded ? 'rotate-180' : ''}`}>
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="16" 
      height="16" 
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </div>
);

export default FindingsTable;
