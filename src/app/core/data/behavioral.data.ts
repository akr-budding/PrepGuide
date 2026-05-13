import { Topic } from '../models/question.model';

export const BEHAVIORAL_TOPIC: Topic = {
  key: 'behavioral', label: 'Behavioral', icon: '🎯',
  tip: 'STAR format: Situation, Task, Action, Result. Under 2 minutes each. 30% story is your best answer.',
  questions: [
    { q: 'Tell me about yourself', tag: 'easy',
      say: 'I\'m a Full-Stack .NET Developer with 3+ years at Gamut in Kolkata, building and maintaining an enterprise payroll and HR platform used by 4000+ employees daily.\n\nMy biggest contribution: cut API response times by 30% through SQL optimization and EF Core improvements. I work across the full stack — ASP.NET Core APIs, Angular frontend, Azure DevOps CI/CD.\n\nLooking to grow into a Technology Analyst role — larger systems, architectural thinking, solution design.',
      note: '60-90 seconds. Tell a story. End with why this role specifically.',
      mem: 'Current role → biggest win → skills → why this role. 4 sentences, 90 seconds.' },
    { q: 'Tell me about your 30% improvement', tag: 'med',
      say: 'S: Payroll platform had slow APIs affecting 4000+ daily users.\nT: Find and fix bottlenecks.\nA: Profiled with SQL Server logs. Found IEnumerable on DB queries, missing indexes, unoptimized stored procs. Fixed all three.\nR: 30% response time reduction. Users noticed immediately.',
      note: 'If asked \'how measured\' — SQL Server Profiler before/after query duration.',
      mem: 'STAR: slow APIs → profile → IQueryable+indexes+stored procs → 30% faster.' },
    { q: 'Why this company? Why Technology Analyst?', tag: 'med',
      say: '3 years on the same platform — I\'ve built a strong foundation. Now I want larger-scale systems and architectural variety.\n\nThis company: enterprise clients across industries = problems you can\'t encounter at a single-product company. Technology Analyst = path toward solution design and client-facing technical work. That\'s the direction I want to grow.',
      note: 'Never negative about Gamut. Frame as \'I want more growth\' not \'running away\'.',
      mem: 'Growth framing: bigger scale + architectural variety + solution design path.' },
    { q: 'Where do you see yourself in 3 years?', tag: 'easy',
      say: 'Senior technical resource who can own architecture end to end — not just implementation. Comfortable in client conversations, translating business requirements to technical solutions.\n\nTechnology Analyst is the right next step — implementation experience meets design thinking.',
      note: 'Career path: TA → Senior TA → Solution Architect. Show ambition that fits their ladder.',
      mem: '3 years = senior TA / architecture. Ambition that fits the growth path.' },
  ]
};
