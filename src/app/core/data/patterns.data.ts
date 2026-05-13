import { Topic } from '../models/question.model';

export const PATTERNS_TOPIC: Topic = {
  key: 'patterns', label: 'Design Patterns', icon: '🧩',
  tip: 'Interviewers ask \'which patterns do you actually use and why?\' Not just definitions.',
  questions: [
    { q: 'What is Repository Pattern and why do you use it?', tag: 'med',
      say: 'Repository pattern abstracts data access behind an interface. The controller or service calls IEmployeeRepository — it doesn\'t know if data comes from SQL Server, MongoDB, or a mock.\n\nWhy I use it:\n1. Easy to unit test — inject a mock repository instead of real DB\n2. Swap DB technology without touching business logic\n3. Centralized data access — no raw SQL scattered everywhere\n\nIn our payroll app: IPayrollRepository handles all DB operations. The service layer never touches DbContext directly.',
      note: 'Without repo pattern: DbContext everywhere, impossible to test, tightly coupled.\nWith: clean separation, testable, swappable.',
      mem: 'Repository = interface between business logic and DB. Makes code testable and swappable.' },
    { q: 'What is Factory Pattern? Where have you used it?', tag: 'med',
      say: 'Factory pattern creates objects without exposing the creation logic. You call a factory method and get back an object — you don\'t know or care how it was built.\n\nReal example: in our leave calculation module, a LeaveCalculatorFactory returns the right calculator based on leave type — AnnualLeaveCalculator, SickLeaveCalculator, CompOffCalculator. The caller just calls factory.GetCalculator(leaveType) and gets the right one.\n\nThis follows OCP too — new leave type = new calculator class + one line in factory.',
      note: 'Factory = object creation logic in one place. Caller doesn\'t need to know which class to instantiate.',
      mem: 'Factory = give me the right object for this situation. Creation logic centralized.' },
    { q: 'What is Dependency Injection — explain with a real-life example?', tag: 'med',
      say: 'DI means: instead of a class creating its own dependencies, they are provided from outside.\n\nReal life analogy: a chef doesn\'t go to the farm to get vegetables. The restaurant supplies them. The chef just cooks — he depends on vegetables but doesn\'t create them.\n\nIn code: PayrollController doesn\'t create new PayrollService() inside it. The DI container injects IPayrollService via the constructor. Controller just uses it.',
      note: 'Without DI: class creates its own dependencies = tightly coupled, impossible to test.\nWith DI: dependencies injected = loosely coupled, testable.',
      mem: 'DI = chef doesn\'t farm his own vegetables. Someone else provides them. Chef just cooks.' },
    { q: 'What is Strategy Pattern?', tag: 'med',
      say: 'Strategy pattern lets you define a family of algorithms, put each in its own class, and make them interchangeable at runtime.\n\nExample in our app: different salary calculation rules for different employee types — Permanent, Contract, Intern. Each has its own SalaryCalculator class implementing ISalaryCalculator. At runtime, the right strategy is picked based on employee type.\n\nThis avoids a giant if-else or switch statement — and adding a new employee type means just adding a new class.',
      note: 'Strategy = replace if-else chains with pluggable classes. Related to OCP — open for extension.',
      mem: 'Strategy = same interface, different algorithms. Pick the right one at runtime.' },
    { q: 'What is Unit of Work pattern?', tag: 'med',
      say: 'Unit of Work groups multiple repository operations into a single transaction — either all succeed or all fail together.\n\nExample: processing payroll involves updating SalaryRecord, creating PayslipEntry, updating EmployeeBalance. If any one fails, all should roll back.\n\nGood news: EF Core\'s DbContext is itself a Unit of Work implementation. SaveChanges() commits all pending operations in one transaction.',
      note: 'UoW = all or nothing. DbContext IS a UoW — SaveChanges() = commit.',
      mem: 'Unit of Work = one SaveChanges() commits everything. Rollback if anything fails.' },
    { q: 'Singleton Pattern — and how is it different from Singleton DI lifetime?', tag: 'hard',
      say: 'Singleton design pattern: ensures only one instance of a class exists in the application. You control this in code.\n\nSingleton DI lifetime: .NET DI container creates one instance and reuses it for the app lifetime — same concept but managed by the container.\n\nDifference: design pattern Singleton you implement manually with a private constructor and static instance. DI Singleton is just AddSingleton() in Program.cs — container handles it.\n\nPrefer DI Singleton over manual Singleton pattern — it\'s testable and follows DI principles.',
      note: 'Manual Singleton = hard to test, global state. DI Singleton = same effect but injectable and testable.',
      mem: 'Singleton pattern = manual. DI Singleton = container managed. Always prefer DI approach.' },
  ]
};
