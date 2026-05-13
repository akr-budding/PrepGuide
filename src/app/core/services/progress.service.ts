import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly KEY = 'pg_reviewed';
  reviewed = signal<Set<string>>(new Set());

  constructor() {
    const saved = localStorage.getItem(this.KEY);
    if (saved) this.reviewed.set(new Set(JSON.parse(saved)));
  }

  toggle(id: string) {
    const set = new Set(this.reviewed());
    if (set.has(id)) set.delete(id); else set.add(id);
    this.reviewed.set(set);
    localStorage.setItem(this.KEY, JSON.stringify([...set]));
  }

  isReviewed(id: string): boolean {
    return this.reviewed().has(id);
  }

  countForTopic(topicKey: string): number {
    return [...this.reviewed()].filter(id => id.startsWith(topicKey + '-')).length;
  }

  clearAll() {
    this.reviewed.set(new Set());
    localStorage.removeItem(this.KEY);
  }
}
