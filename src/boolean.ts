const trueValues = new Set([
    true, 'true', 'TRUE', 't', 'T', 'yes', 'YES', 'y', 'Y', 'on', 'ON', '1', 1
  ]);
  
  export function boolean(value: any): boolean {
    if (typeof value === 'string' || value instanceof String) {
      value = value.trim();
    }
  
    if (typeof value === 'boolean') return value;
  
    if (value instanceof Boolean || value instanceof String || value instanceof Number) {
      value = value.valueOf();
    }
  
    return trueValues.has(value);
  }
  