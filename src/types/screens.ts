// Define a type for the device types
export enum DeviceType {
  mobile = "mobile",
  tablet = "tablet",
  laptop = "laptop",
  desktop = "desktop",
}

// Define a type for the breakpoints
export type Breakpoints = {
  [key in DeviceType]: number;
};

// Create a constant object that holds the breakpoints for each device type
export const breakpoints: Breakpoints = {
  mobile: 767,
  tablet: 1200,
  laptop: 1535,
  desktop: 2500, // Use Infinity for the largest breakpoint
};
