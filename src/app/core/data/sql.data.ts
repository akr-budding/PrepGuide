import { Topic } from '../models/question.model';

export const SQL_TOPIC: Topic = {
  key: 'sql', label: 'SQL & EF Core', icon: '🗄️',
  tip: 'You have a real 30% improvement story. Know your 4 exact steps. Revise Eager vs Lazy loading and First vs FirstOrDefault.',
  questions: [
    { q: 'How did you reduce API response times by 30%?', tag: 'hard',
      say: 'Found slow endpoints using SQL Server logs. Fixed 4 ways:\n1. IEnumerable to IQueryable — stopped pulling all rows into memory\n2. Added composite indexes on DeptId, EmployeeId\n3. Added NOLOCK on read-only report queries (acceptable for reporting, not transactions)\n4. Refactored stored procs — removed cursors, set-based operations\n\nResult: 30% response time reduction for 4000+ daily users.',
      note: 'If asked \'NOLOCK risky?\' — say: only used on reporting queries where dirty reads are acceptable, never on payroll transactions.',
      mem: '4 fixes: IQueryable, indexes, NOLOCK on reports, stored proc cleanup.' },
    { q: 'What is the N+1 problem?', tag: 'hard',
      say: '1 query to get a list, then 1 more per item in a loop. Load 100 employees, load each department in loop = 101 queries instead of 1.\n\nFix: .Include() for eager loading. Or .Select() to project only needed data into a DTO.',
      note: 'Bad: employees loop + department load each time.\nFix: .Include(e => e.Department).ToList()',
      mem: 'N+1 = loop + DB call = disaster. Fix with .Include() or .Select().' },
    { q: 'Clustered vs Non-Clustered Index?', tag: 'med',
      say: 'Clustered: physically sorts table rows. One per table, usually PK. Like a phone book sorted by surname.\n\nNon-clustered: separate lookup structure pointing to rows. Many per table. Add on columns you filter or sort by often.',
      note: 'One clustered (PK). Many non-clustered. Add non-clustered on WHERE columns.',
      mem: 'Clustered = data sorted. Non-clustered = separate lookup. Add on filter columns.' },
    { q: 'Eager Loading vs Lazy Loading in EF Core?', tag: 'med',
      say: 'Eager Loading: load related data immediately with the main query using .Include(). One DB call, all data ready.\n\nLazy Loading: related data loads automatically when you access the navigation property — triggers a separate DB query. Can cause N+1 without realizing.\n\nIn our app: I use eager loading with .Include() for known relationships. Lazy loading is disabled — too easy to cause N+1 accidentally.',
      note: 'Eager = .Include(), one query, predictable. Lazy = auto-loads on access, hidden N+1 risk.',
      mem: 'Eager = .Include() = safe. Lazy = dangerous N+1. Disable lazy loading in production apps.' },
    { q: 'First() vs FirstOrDefault() vs Single() vs SingleOrDefault()?', tag: 'med',
      say: 'First(): returns first match. Throws exception if no match found.\nFirstOrDefault(): returns first match or null/default if not found. Safer.\nSingle(): returns the ONE match. Throws if 0 or more than 1 result.\nSingleOrDefault(): returns one match or null. Throws only if more than 1 result.\n\nIn practice: use FirstOrDefault() for most cases — it\'s safe. Use Single() when you expect exactly one record like fetching by ID.',
      note: 'First = first or crash. FirstOrDefault = first or null (safe). Single = exactly one or crash.',
      mem: 'FirstOrDefault = safe default choice. Single = use when exactly 1 expected (like by ID).' },
    { q: 'What are Window Functions?', tag: 'med',
      say: 'Normal aggregates collapse rows into one result. Window functions keep all rows but add aggregate value per row.\n\nPayroll: SUM(Salary) OVER (PARTITION BY DeptId) gives department total alongside each employee row.\nROW_NUMBER() OVER (PARTITION BY EmployeeId ORDER BY PayDate DESC) = latest payslip ranked first.',
      note: 'PARTITION BY = group. ORDER BY inside OVER = rank order.',
      mem: 'Window = aggregate without collapsing rows. ROW_NUMBER, SUM, LAG most used.' },
  ]
};
