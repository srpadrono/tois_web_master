# Tois - Pediatric Sensory Therapy Platform

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Test Coverage

[![Statements](https://img.shields.io/badge/Coverage--Statements-70%25-yellowgreen?style=flat-square)](coverage/lcov-report/index.html)
[![Branches](https://img.shields.io/badge/Coverage--Branches-100%25-brightgreen?style=flat-square)](coverage/lcov-report/index.html)
[![Functions](https://img.shields.io/badge/Coverage--Functions-82%25-green?style=flat-square)](coverage/lcov-report/index.html)
[![Lines](https://img.shields.io/badge/Coverage--Lines-0%25-red?style=flat-square)](coverage/lcov-report/index.html)

**Current Coverage Statistics:**
- **Statements:** 70%
- **Branches:** 100%
- **Functions:** 82%
- **Lines:** 0%

### Coverage by Component

| Component | Statements | Branches | Functions | Lines | Status |
|-----------|------------|----------|-----------|-------|--------|
| **Landing Components** | 100% | 100% | 100% | 100% | ✅ Complete |
| → FeaturesSection.tsx | 100% | 100% | 100% | 100% | ✅ |
| → HeroSection.tsx | 100% | 100% | 100% | 100% | ✅ |
| → PricingSection.tsx | 100% | 100% | 100% | 100% | ✅ |
| **Layout Components** | 88.88% | 100% | 77.77% | 88.88% | ⚠️ Partial |
| → Footer.tsx | 100% | 100% | 100% | 100% | ✅ |
| → Header.tsx | 83.33% | 100% | 66.66% | 83.33% | ⚠️ |
| **App Pages** | 0% | 100% | 0% | 0% | ❌ Not Tested |
| → layout.tsx | 0% | 100% | 0% | 0% | ❌ |
| → page.tsx | 0% | 100% | 0% | 0% | ❌ |

**Total Test Suites:** 5 passed, 5 total  
**Total Tests:** 57 passed, 57 total

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage

# Update coverage badges in README (run after test:coverage)
npm run coverage:badge

# Generate coverage and update badges in one command
npm run coverage:update
```

### Automating Coverage Updates

The project includes an automated script to update coverage badges in the README. After running tests with coverage, the badges will automatically reflect the current coverage percentages with appropriate colors:

- 🟢 **90%+** - Bright Green (Excellent)
- 🟢 **80-89%** - Green (Good) 
- 🟡 **70-79%** - Yellow Green (Acceptable)
- 🟡 **60-69%** - Yellow (Needs Improvement)
- 🟠 **50-59%** - Orange (Poor)
- 🔴 **<50%** - Red (Critical)

**For CI/CD Integration:**
```yaml
# Example GitHub Actions workflow
- name: Run Tests and Update Coverage
  run: |
    npm ci
    npm run coverage:update
    git add README.md
    git commit -m "Update coverage badges [skip ci]" || exit 0
```

### Coverage Reports

After running `npm run test:coverage`, detailed coverage reports are available in:

- **HTML Report:** Open `coverage/lcov-report/index.html` in your browser
- **LCOV Data:** `coverage/lcov.info` (for CI/CD integration)
- **Clover XML:** `coverage/clover.xml` (for IDE integration)
- **JSON Summary:** `coverage/coverage-final.json`

### Coverage Goals

- **Target Coverage:** 90%+ statements, 85%+ branches
- **Critical Components:** Landing page components (✅ achieved 100%)
- **In Progress:** App pages and additional layout component coverage

📖 **[Detailed Test Coverage Guide](docs/test-coverage-guide.md)** - Comprehensive guide for maintaining and improving test coverage