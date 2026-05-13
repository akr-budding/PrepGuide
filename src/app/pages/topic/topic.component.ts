import { Component, OnInit, signal, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../core/services/data.service';
import { ProgressService } from '../../core/services/progress.service';
import { QuestionCardComponent } from '../../shared/question-card/question-card.component';
import { Topic, Difficulty } from '../../core/models/question.model';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [CommonModule, FormsModule, QuestionCardComponent],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.scss'
})
export class TopicComponent implements OnInit {
  topic: Topic | undefined;
  filter = signal<Difficulty | 'all'>('all');
  showReviewed = signal(true);

  constructor(private route: ActivatedRoute, public data: DataService, public progress: ProgressService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(p => {
      this.topic = this.data.getTopic(p.get('key') ?? '');
    });
  }

  filtered() {
    if (!this.topic) return [];
    return this.topic.questions.filter((q, i) => {
      const diffOk = this.filter() === 'all' || q.tag === this.filter();
      const reviewOk = this.showReviewed() || !this.progress.isReviewed(`${this.topic!.key}-${i}`);
      return diffOk && reviewOk;
    });
  }

  filteredIndex(q: any) {
    return this.topic!.questions.indexOf(q);
  }

  setFilter(f: Difficulty | 'all') { this.filter.set(f); }

  get reviewedCount() {
    return this.topic ? this.progress.countForTopic(this.topic.key) : 0;
  }
}
