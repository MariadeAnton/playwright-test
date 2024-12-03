import { defineConfig } from 'checkly'
import { Frequency } from 'checkly/constructs'

export default defineConfig({
 projectName: 'Playwright test',
 logicalId: 'playwright-test',
 repoUrl: 'https://github.com/MariadeAnton/playwright-test',
 checks: {
   activated: true,
   muted: false,
   runtimeId: '2024.09',
   frequency: Frequency.EVERY_5M,
   locations: ['us-east-1', 'eu-west-1'],
   tags: ['website'],
   browserChecks: {
     frequency: Frequency.EVERY_10M,
     testMatch: '/**/*.spec.ts',
   },
   multiStepChecks: {
     testMatch: '/**/*.spec.ts',
   },
 },
 cli: {
   runLocation: 'eu-west-1',
 }
})
