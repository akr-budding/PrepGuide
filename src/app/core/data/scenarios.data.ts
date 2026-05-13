import { Topic } from '../models/question.model';

export const SCENARIOS_TOPIC: Topic = {
  key: 'scenarios', label: 'Scenarios', icon: '🧠',
  tip: 'Practical thinking questions. They test how you respond under pressure, not just theory.',
  questions: [
    { q: 'Your API failed in production — no downtime allowed. What do you do first?', tag: 'hard',
      say: 'First: don\'t panic. Immediate steps:\n\n1. Check Azure App Service logs and Application Insights — identify the error immediately\n2. Check if it\'s a deployment issue — if last deployment caused it, rollback immediately using slot swap in Azure\n3. If config issue — check App Service Application Settings, env variables, connection strings\n4. If DB issue — check SQL Server, connection pool, query timeouts\n5. If it\'s a code bug — hotfix on a feature branch, deploy to staging, test, then slot swap to production\n\nKey: slot swap = zero downtime. Never deploy directly to production without staging.',
      note: 'Azure slot swap = swap staging to production instantly. Zero downtime. This is why you have staging slot.',
      mem: 'Crash checklist: logs → rollback if deployment → config → DB → hotfix. Slot swap = no downtime.' },
    { q: 'How would you design an API that 10,000 users hit simultaneously?', tag: 'hard',
      say: 'I\'d think about it in layers:\n\n1. Async everywhere — no blocking threads, each thread handles multiple requests\n2. Caching — frequently read data like salary grades, department list cached in memory (IMemoryCache) or Redis\n3. DB optimization — proper indexes, avoid N+1, read replicas for heavy reports\n4. Horizontal scaling — Azure App Service auto-scaling, multiple instances behind a load balancer\n5. Rate limiting — .NET 7+ built-in rate limiter to prevent abuse\n\nFor our payroll system: payslip PDF generation is offloaded to a background job — not blocking the API response.',
      note: 'Scale = async + cache + DB tuning + horizontal scale. Not one silver bullet.',
      mem: '10k users: async threads + cache hot data + DB indexes + scale out + rate limit.' },
    { q: 'How do you debug a slow API endpoint in production?', tag: 'med',
      say: 'Step by step:\n1. Check Application Insights or logs — identify which endpoint is slow and average response time\n2. Enable EF Core query logging — see exact SQL being generated, how many queries per request\n3. SQL Server Profiler — find slow queries, check execution plans, look for missing index warnings\n4. Check if N+1 is happening — query count per request should be low\n5. Check if data is being pulled into memory (IEnumerable on DB queries)\n6. Add stopwatch logging around key operations to pinpoint the bottleneck\n\nThis is exactly what I did for our 30% improvement at Gamut.',
      note: 'Profiling tools: Application Insights, SQL Server Profiler, EF Core logging. Always measure before optimizing.',
      mem: 'Debug slow API: logs → EF Core query log → SQL Profiler → find N+1 → fix IQueryable.' },
    { q: 'What would you do if two developers push conflicting code to the same branch?', tag: 'med',
      say: 'This is a Git merge conflict — handled with proper branching strategy:\n\n1. We use feature branches — no one pushes directly to main\n2. PRs required for merging — code review catches conflicts early\n3. If conflict happens: developer pulls latest main, resolves conflicts locally, runs tests, then creates PR\n4. CI/CD pipeline must pass before PR is approved\n\nIn our team: I set up branch policies in Azure DevOps — PRs require at least one reviewer approval and passing pipeline.',
      note: 'Git conflict = normal. Branch strategy + PRs + CI/CD = minimize and control them.',
      mem: 'Feature branches + PRs + passing pipeline = safe collaboration. No direct push to main.' },
    { q: 'Microservices — basic understanding and real challenges?', tag: 'hard',
      say: 'Microservices = splitting a large app into small independent services, each handling one business domain.\n\nReal challenges:\n1. Communication: services talk via HTTP/REST or message queues (RabbitMQ, Azure Service Bus)\n2. Data consistency: each service has its own DB — keeping data in sync is hard (eventual consistency)\n3. Deployment complexity: 10 services = 10 CI/CD pipelines, Docker containers, orchestration (Kubernetes)\n4. Debugging: a request spans multiple services — distributed tracing needed\n\nHonest answer: our current app is a monolith. But I understand the tradeoffs and when to split.',
      note: 'Don\'t fake microservices experience. Be honest — say you understand the concepts and tradeoffs.',
      mem: 'Microservices = independent services. Challenges: communication, data consistency, complexity.' },
  ]
};
