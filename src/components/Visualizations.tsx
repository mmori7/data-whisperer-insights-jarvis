
import React from 'react';
import VisualizationCard from './VisualizationCard';
import { ChartData } from '@/types';

interface VisualizationsProps {
  charts: ChartData[];
  horizontal?: boolean;
}

const Visualizations: React.FC<VisualizationsProps> = ({ charts, horizontal = false }) => {
  if (!charts || charts.length === 0) {
    return null;
  }

  if (horizontal) {
    return (
      <div className="space-y-4">
        {charts.map(chart => (
          <VisualizationCard key={chart.id} chart={chart} noCard={true} />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Data Insights</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {charts.map(chart => (
          <VisualizationCard key={chart.id} chart={chart} />
        ))}
      </div>
    </div>
  );
};

export default Visualizations;
