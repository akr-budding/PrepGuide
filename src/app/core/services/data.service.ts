import { Injectable } from '@angular/core';
import { Topic, SearchResult } from '../models/question.model';
import {
  CSHARP_TOPIC, ANGULAR_TOPIC, SQL_TOPIC, API_TOPIC, AZURE_TOPIC,
  OOP_TOPIC, PATTERNS_TOPIC, SCENARIOS_TOPIC, CODING_TOPIC,
  GENAI_TOPIC, BEHAVIORAL_TOPIC, PROJECTS_TOPIC
} from '../data';

@Injectable({ providedIn: 'root' })
export class DataService {
  readonly topics: Topic[] = [
    CSHARP_TOPIC, ANGULAR_TOPIC, SQL_TOPIC, API_TOPIC, AZURE_TOPIC,
    OOP_TOPIC, PATTERNS_TOPIC, SCENARIOS_TOPIC, CODING_TOPIC,
    GENAI_TOPIC, BEHAVIORAL_TOPIC, PROJECTS_TOPIC
  ];

  getTopic(key: string): Topic | undefined {
    return this.topics.find(t => t.key === key);
  }

  search(query: string): SearchResult[] {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    const results: SearchResult[] = [];
    for (const topic of this.topics) {
      for (const question of topic.questions) {
        if (
          question.q.toLowerCase().includes(q) ||
          question.say.toLowerCase().includes(q) ||
          question.note.toLowerCase().includes(q) ||
          question.mem.toLowerCase().includes(q)
        ) {
          results.push({ question, topicKey: topic.key, topicLabel: topic.label });
        }
      }
    }
    return results;
  }
}
