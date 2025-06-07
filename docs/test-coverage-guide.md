# Test Coverage Guide

## Overview

This project maintains comprehensive test coverage using Jest and React Testing Library. Our coverage goals are:

- **Statements:** 90%+
- **Branches:** 85%+
- **Functions:** 90%+
- **Lines:** 90%+

## Current Status

See the README.md for up-to-date coverage badges and statistics.

## Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode (recommended for development)
npm run test:watch

# Generate coverage report
npm run test:coverage

# Update README with current coverage badges
npm run coverage:badge

# Run tests with coverage and update badges (one command)
npm run coverage:update
```

### Viewing Coverage Reports

After running `npm run test:coverage`, you can view detailed coverage reports:

1. **HTML Report:** Open `coverage/lcov-report/index.html` in your browser for interactive coverage exploration
2. **Terminal Summary:** Displayed immediately after running coverage command
3. **IDE Integration:** Most IDEs can read `coverage/lcov.info` for inline coverage indicators

## Writing Effective Tests

### Component Testing Checklist

For each React component, ensure you test:

- [ ] **Rendering:** Component renders without errors
- [ ] **Props:** All props are handled correctly (including edge cases)
- [ ] **User Interactions:** All clickable elements and user events
- [ ] **Conditional Rendering:** All branches of conditional logic
- [ ] **Accessibility:** ARIA attributes and roles
- [ ] **Error States:** Component behavior with invalid data
- [ ] **Edge Cases:** Empty states, loading states, etc.

### Test Organization

```
components/
├── ComponentName/
│   ├── ComponentName.tsx
│   ├── ComponentName.test.tsx        # Main test file
│   ├── ComponentName.module.styl     # Styles (if needed)
│   └── __tests__/                    # Additional test utilities (if complex)
│       ├── ComponentName.utils.test.ts
│       └── fixtures.ts
```

### Example Test Structure

```typescript
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  // Mock any external dependencies
  const mockFunction = jest.fn()

  beforeEach(() => {
    mockFunction.mockClear()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('renders correctly with default props', () => {
    render(<ComponentName />)
    expect(screen.getByRole('...')).toBeInTheDocument()
  })

  it('handles user interactions', () => {
    render(<ComponentName onAction={mockFunction} />)
    fireEvent.click(screen.getByRole('button'))
    expect(mockFunction).toHaveBeenCalledWith(...)
  })

  it('applies correct accessibility attributes', () => {
    render(<ComponentName />)
    const element = screen.getByRole('...')
    expect(element).toHaveAttribute('aria-label', '...')
  })

  // Add more tests for edge cases, error states, etc.
})
```

## Coverage Analysis

### Understanding Coverage Metrics

1. **Statements:** Percentage of executable statements run during tests
2. **Branches:** Percentage of conditional branches (if/else, ternary, etc.) tested
3. **Functions:** Percentage of functions called during tests
4. **Lines:** Percentage of lines executed (similar to statements but line-based)

### Improving Coverage

#### Low Statement Coverage
- Add tests for untested functions or code paths
- Check for dead code that can be removed
- Ensure all component states are tested

#### Low Branch Coverage
- Test both true and false conditions for all if statements
- Test all cases in switch statements
- Test ternary operators with both conditions
- Test error and success paths

#### Low Function Coverage
- Ensure all exported functions are tested
- Test callback functions and event handlers
- Test utility functions and helpers

### Finding Uncovered Code

1. **HTML Report:** The `coverage/lcov-report/index.html` shows:
   - Red highlighting for uncovered lines
   - Yellow highlighting for partially covered branches
   - Green highlighting for fully covered code

2. **Terminal Output:** Shows uncovered line numbers after running coverage

3. **IDE Integration:** Many editors can show coverage inline when configured with lcov data

## Coverage Exclusions

### When to Exclude Code

Some code may be legitimately excluded from coverage:

```typescript
/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info')
}

/* istanbul ignore if */
if (typeof window === 'undefined') {
  return null // SSR safety check
}
```

### Current Exclusions

See `jest.config.js` for current coverage exclusions:
- `**/*.d.ts` - TypeScript definition files
- `**/node_modules/**` - Third-party dependencies

## CI/CD Integration

### GitHub Actions

The project includes a GitHub Actions workflow (`.github/workflows/test-coverage.yml`) that:

1. Runs tests on multiple Node.js versions
2. Generates coverage reports
3. Updates README badges automatically (main branch)
4. Comments coverage reports on pull requests
5. Uploads coverage to Codecov (if configured)

### Coverage Badges

The README includes live coverage badges that update automatically:
- **Colors:** Green (excellent) → Yellow (acceptable) → Red (needs work)
- **Thresholds:** 90%+ (green), 70-89% (yellow), <70% (red)

## Best Practices

### Test Maintenance

1. **Keep Tests Simple:** Each test should focus on one behavior
2. **Use Descriptive Names:** Test names should clearly describe what they test
3. **Avoid Implementation Details:** Test behavior, not internal implementation
4. **Mock External Dependencies:** Keep tests isolated and fast
5. **Test Edge Cases:** Empty arrays, null values, error conditions

### Performance Considerations

1. **Parallel Testing:** Jest runs tests in parallel by default
2. **Test Isolation:** Each test should be independent
3. **Smart Mocking:** Mock expensive operations (API calls, file I/O)
4. **Cleanup:** Always clean up after tests (timers, event listeners, etc.)

### Common Pitfalls

1. **Testing Implementation Instead of Behavior**
   ```typescript
   // ❌ Don't test internal state
   expect(component.state.isLoading).toBe(true)
   
   // ✅ Test visible behavior
   expect(screen.getByText('Loading...')).toBeInTheDocument()
   ```

2. **Forgetting to Test Error Cases**
   ```typescript
   it('handles API errors gracefully', async () => {
     mockApiCall.mockRejectedValue(new Error('Network error'))
     render(<Component />)
     expect(await screen.findByText('Error occurred')).toBeInTheDocument()
   })
   ```

3. **Not Testing Accessibility**
   ```typescript
   it('is accessible to screen readers', () => {
     render(<Button>Submit</Button>)
     expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
   })
   ```

## Troubleshooting

### Common Issues

1. **Tests Pass But Coverage Is Low**
   - Check if all code paths are being executed
   - Look for untested conditional branches
   - Verify all functions are being called

2. **Flaky Tests**
   - Ensure proper cleanup between tests
   - Check for timing issues with async operations
   - Verify test isolation

3. **Slow Test Suite**
   - Profile test execution with `npm test -- --verbose`
   - Check for expensive setup/teardown operations
   - Consider using `beforeAll` instead of `beforeEach` where appropriate

### Getting Help

- Check existing test files for patterns and examples
- Refer to [Jest documentation](https://jestjs.io/docs/getting-started)
- Refer to [React Testing Library documentation](https://testing-library.com/docs/react-testing-library/intro/)
- Review the project's test utilities in `jest.setup.js`

## Coverage Targets by Component Type

| Component Type | Statements | Branches | Functions | Lines |
|----------------|------------|----------|-----------|-------|
| UI Components | 95%+ | 90%+ | 95%+ | 95%+ |
| API Routes | 90%+ | 85%+ | 90%+ | 90%+ |
| Utility Functions | 98%+ | 95%+ | 100% | 98%+ |
| Store/State Management | 95%+ | 90%+ | 95%+ | 95%+ |
| Landing Pages | 90%+ | 85%+ | 90%+ | 90%+ | 