export interface Work {
    id: string;
    title: string;
    description: string;
    images: string[];
    url?: string;
    tags: string[];
    date?: string;
}

export type SkillCategory = 'Language' | 'Framework' | 'Tool' | 'Other';

export interface Skill {
    name: string; // The display name
    identifier: string; // For icon mapping (e.g., 'html', 'react')
    category: SkillCategory;
}
