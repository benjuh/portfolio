import { projects, Project } from './projects';

describe('projects data', () => {
  it('exports a non-empty array', () => {
    expect(projects.length).toBeGreaterThan(0);
  });

  it('every project has required fields', () => {
    projects.forEach((p: Project) => {
      expect(typeof p.slug).toBe('string');
      expect(typeof p.name).toBe('string');
      expect(typeof p.type).toBe('string');
      expect(typeof p.description).toBe('string');
      expect(Array.isArray(p.tech)).toBe(true);
      expect(p.tech.length).toBeGreaterThan(0);
    });
  });

  it('has exactly 8 projects', () => {
    expect(projects).toHaveLength(8);
  });

  it('slugs are unique', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('slugs match expected values', () => {
    const slugs = projects.map((p) => p.slug);
    expect(slugs).toEqual(['stall-stars', 'unified', 'speakeasy', 'hash-cli', 'stewordle', 'stew', 'griddy', 'selah']);
  });
});
