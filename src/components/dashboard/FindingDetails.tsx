
import React from 'react';
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StatusChip from "@/components/ui/StatusChip";
import AssignmentButton from "@/components/ui/AssignmentButton";
import { SecurityFinding } from "@/hooks/useDashboardData";

interface FindingDetailsProps {
  finding: SecurityFinding;
  onAssign: (id: string, person: string) => void;
}

const FindingDetails: React.FC<FindingDetailsProps> = ({
  finding,
  onAssign
}) => {
  const formattedDate = new Date(finding.discoveredAt).toLocaleString();
  
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <span className={`severity-indicator severity-${finding.severity}`} />
              {finding.title}
            </CardTitle>
            <CardDescription>
              ID: {finding.id} • Discovered: {formattedDate}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <StatusChip status={finding.status} />
            <AssignmentButton 
              assignedTo={finding.assignedTo}
              onAssign={(person) => onAssign(finding.id, person)}
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-1">Description</h4>
            <p className="text-sm text-muted-foreground">{finding.description}</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-1">Asset</h4>
              <p className="text-sm">{finding.asset}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium mb-1">Category</h4>
              <p className="text-sm">{finding.category}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-medium mb-1">Recommendations</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Follow the remediation steps from the security playbook:</p>
              <ul className="list-disc pl-5 space-y-1">
                {finding.severity === 'critical' && (
                  <>
                    <li>Immediately isolate the affected system</li>
                    <li>Apply the emergency patch from the security team</li>
                    <li>Conduct post-incident review within 24 hours</li>
                  </>
                )}
                {finding.severity === 'high' && (
                  <>
                    <li>Schedule emergency patch window within 24 hours</li>
                    <li>Review logs for potential exploitation</li>
                    <li>Implement additional monitoring controls</li>
                  </>
                )}
                {(finding.severity === 'medium' || finding.severity === 'low' || finding.severity === 'info') && (
                  <>
                    <li>Plan remediation according to standard procedures</li>
                    <li>Document in the vulnerability tracking system</li>
                    <li>Include in the next security review meeting</li>
                  </>
                )}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <h4 className="text-sm font-medium w-full">Tags</h4>
            <Badge variant="outline">{finding.severity}</Badge>
            <Badge variant="outline">{finding.category}</Badge>
            <Badge variant="outline">{finding.asset}</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FindingDetails;
