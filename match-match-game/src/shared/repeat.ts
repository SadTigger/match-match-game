export function Repeat(arr: string[], repeats: number): string[] {
  return Array.from({ length: repeats }, () => arr).flat();
}
