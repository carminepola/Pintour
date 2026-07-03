export function getExperienceYears(): number {
  const currentYear = new Date().getFullYear();
  return currentYear - 2001;
}

export function getExperienceYearsString(): string {
  return `${getExperienceYears()}+`;
}