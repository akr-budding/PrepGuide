import { Topic } from '../models/question.model';

export const AZURE_TOPIC: Topic = {
  key: 'azure', label: 'Azure & DevOps', icon: '☁️',
  tip: 'You own CI/CD at Gamut. Talk confidently — practical beats theoretical here.',
  questions: [
    { q: 'Describe your CI/CD pipeline', tag: 'med',
      say: '5 stages in Azure DevOps:\n1. Build: compile .NET, build Angular prod\n2. Test: run xUnit tests — fail if any test fails\n3. Publish: package artifact\n4. Deploy to staging: App Service staging slot\n5. Production: manual approval then slot swap\n\nEvery merge auto-builds and deploys. Manual effort = zero.',
      note: 'Key: branch policies — PRs require passing pipeline before merge.',
      mem: 'Build→Test→Publish→Staging→Production. Slot swap = zero downtime.' },
    { q: 'App Service vs Azure Functions?', tag: 'easy',
      say: 'App Service: always running, pay 24/7. Best for web apps and APIs — like our payroll platform.\n\nAzure Functions: runs on trigger, pay per execution. Best for background jobs, scheduled tasks, events.',
      note: 'Main API = App Service. Background jobs = Functions.',
      mem: 'App Service = always on. Functions = on demand.' },
    { q: 'How do you store secrets safely?', tag: 'hard',
      say: 'Never in appsettings.json — it goes into source control.\n\nAzure Key Vault: stores secrets centrally, encrypted. App connects via Managed Identity — no credentials in code.\nApp Service Application Settings: environment variables injected at runtime.',
      note: 'Managed Identity = App Service proves its own identity to Key Vault. Zero credentials in code.',
      mem: 'Key Vault + Managed Identity = zero secrets in codebase.' },
    { q: 'What is Docker?', tag: 'med',
      say: 'Packages your app + everything it needs into one container. Runs identically anywhere — laptop, staging, production.\n\nEliminates \'works on my machine\' problems. Same container that passed tests is what gets deployed.',
      note: 'Multi-stage Dockerfile: build stage (SDK, big) → runtime stage (small, lean).',
      mem: 'Docker = same box runs everywhere. No environment mismatch.' },
  ]
};
