
import React, { useState } from 'react';
import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { SeverityType } from "@/hooks/useDashboardData";

interface FilterBarProps {
  onFilterChange: (type: string, value: string[]) => void;
  onClearFilters: () => void;
  filters: {
    severity: SeverityType[];
    asset: string[];
    category: string[];
    status: string[];
  };
  assets: string[];
  categories: string[];
}

const FilterBar: React.FC<FilterBarProps> = ({
  onFilterChange,
  onClearFilters,
  filters,
  assets,
  categories
}) => {
  // Filter toggle animations
  const handleFilterClick = (type: string, value: string) => {
    const currentValues = filters[type as keyof typeof filters] as string[];
    let newValues: string[];
    
    if (currentValues.includes(value)) {
      newValues = currentValues.filter(v => v !== value);
    } else {
      newValues = [...currentValues, value];
    }
    
    onFilterChange(type, newValues);
  };
  
  // Severity filter buttons with indicators
  const severityOptions: {value: SeverityType, label: string}[] = [
    { value: 'critical', label: 'Critical' },
    { value: 'high', label: 'High' },
    { value: 'medium', label: 'Medium' },
    { value: 'low', label: 'Low' },
    { value: 'info', label: 'Info' }
  ];
  
  // Status filter options
  const statusOptions = [
    { value: 'open', label: 'Open' },
    { value: 'assigned', label: 'Assigned' },
    { value: 'resolved', label: 'Resolved' },
    { value: 'false-positive', label: 'False Positive' }
  ];

  return (
    <div className="space-y-2">
      <div className="text-sm font-medium">Filter Findings:</div>
      
      {/* Severity filters */}
      <div className="flex flex-wrap gap-2">
        {severityOptions.map((option) => (
          <Button
            key={option.value}
            variant="outline"
            size="sm"
            className={`transition-all ${
              filters.severity.includes(option.value) ? 'filter-active' : ''
            }`}
            onClick={() => handleFilterClick('severity', option.value)}
          >
            <span className={`severity-indicator severity-${option.value}`}></span>
            {option.label}
          </Button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        {/* Asset filter */}
        <Select
          onValueChange={(value) => onFilterChange('asset', value === 'all' ? [] : [value])}
          value={filters.asset[0] || 'all'}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Asset" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Assets</SelectItem>
              {assets.map(asset => (
                <SelectItem key={asset} value={asset}>{asset}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        
        {/* Category filter */}
        <Select
          onValueChange={(value) => onFilterChange('category', value === 'all' ? [] : [value])}
          value={filters.category[0] || 'all'}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Categories</SelectItem>
              {categories.map(category => (
                <SelectItem key={category} value={category}>{category}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        
        {/* Status filter */}
        <Select
          onValueChange={(value) => onFilterChange('status', value === 'all' ? [] : [value])}
          value={filters.status[0] || 'all'}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Statuses</SelectItem>
              {statusOptions.map(status => (
                <SelectItem key={status.value} value={status.value}>{status.label}</SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      {/* Clear filters button */}
      <div className="flex justify-end">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onClearFilters}
          className="text-sm"
        >
          Clear Filters
        </Button>
      </div>
    </div>
  );
};

export default FilterBar;
