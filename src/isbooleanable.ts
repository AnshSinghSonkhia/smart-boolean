const booleanableValues = new Set([
    // truthy
    true, 'true', 'TRUE', 't', 'T', 'yes', 'YES', 'y', 'Y', 'on', 'ON', '1', 1,
    // falsy
    false, 'false', 'FALSE', 'f', 'F', 'no', 'NO', 'n', 'N', 'off', 'OFF', '0', 0
  ]);
  
  export function isBooleanable(value: any): boolean {
    if (typeof value === 'string' || value instanceof String) {
      value = value.trim();
    }
  
    if (value instanceof Boolean || value instanceof String || value instanceof Number) {
      value = value.valueOf();
    }
  
    return booleanableValues.has(value);
  }
  