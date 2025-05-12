export const statusMap: Record<number, string> = {
  1: 'Introduced',
  2: 'Engrossed',
  3: 'Enrolled',
  4: 'Passed',
};

export function getStatusLabel(id: number): string {
  return statusMap[id] || 'Unknown';
}
