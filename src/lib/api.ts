export interface CarbonData {
  totalSaved: number;
  activeProjects: number;
  efficiency: number;
  trend: { day: string; savings: number }[];
  materials: { category: string; value: number }[];
  liveFeed: { user: string; anonUser: string; action: string; time: string }[];
}

export const fetchCarbonData = async (): Promise<CarbonData> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    totalSaved: 1240 + Math.floor(Math.random() * 10),
    activeProjects: 85,
    efficiency: 94,
    trend: [
      { day: "Mon", savings: 120 },
      { day: "Tue", savings: 132 },
      { day: "Wed", savings: 101 },
      { day: "Thu", savings: 154 },
      { day: "Fri", savings: 190 },
      { day: "Sat", savings: 230 },
      { day: "Sun", savings: 210 },
    ],
    materials: [
      { category: "Concrete", value: 45 },
      { category: "Steel", value: 25 },
      { category: "Timber", value: 20 },
      { category: "Glass", value: 10 },
    ],
    liveFeed: [
      { user: "BuildCorp QLD", anonUser: "Tier 1 Builder (QLD)", action: "Saved 12t CO2e", time: "Just now" },
      { user: "EcoStruct NSW", anonUser: "Commercial Project (NSW)", action: "Optimized concrete mix", time: "2m ago" },
      { user: "GreenHomes VIC", anonUser: "Residential Developer (VIC)", action: "Switched to timber frame", time: "5m ago" },
      { user: "UrbanDevelop", anonUser: "Infrastructure Project", action: "Reduced transport emissions", time: "12m ago" },
      { user: "SustainableLiving", anonUser: "Green Star Builder", action: "Saved 5t CO2e", time: "18m ago" },
    ],
  };
};
