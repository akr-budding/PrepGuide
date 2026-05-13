import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DataService } from '../../core/services/data.service';
import { SearchResult } from '../../core/models/question.model';
import { QuestionCardComponent } from '../../shared/question-card/question-card.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, QuestionCardComponent],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  query = signal('');
  results = signal<SearchResult[]>([]);
  searched = signal(false);

  constructor(public data: DataService) {}

  onSearch() {
    const q = this.query().trim();
    if (!q) { this.results.set([]); this.searched.set(false); return; }
    this.results.set(this.data.search(q));
    this.searched.set(true);
  }

  onInput(val: string) {
    this.query.set(val);
    if (!val.trim()) { this.results.set([]); this.searched.set(false); }
    else this.onSearch();
  }
}
