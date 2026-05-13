import { Component, Input, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Question } from '../../core/models/question.model';
import { ProgressService } from '../../core/services/progress.service';

@Component({
  selector: 'app-question-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-card.component.html',
  styleUrl: './question-card.component.scss'
})
export class QuestionCardComponent {
  @Input({ required: true }) question!: Question;
  @Input({ required: true }) topicKey!: string;
  @Input() index = 0;

  open = signal(false);

  constructor(public progress: ProgressService) {}

  get id() { return `${this.topicKey}-${this.index}`; }
  get reviewed() { return this.progress.isReviewed(this.id); }

  toggle() { this.open.set(!this.open()); }
  toggleReviewed(e: Event) {
    e.stopPropagation();
    this.progress.toggle(this.id);
  }
}
