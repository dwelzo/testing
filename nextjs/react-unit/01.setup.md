# React Unit Testing Setup with TypeScript

## Project Overview

This project demonstrates a complete React unit testing setup using TypeScript, Jest, and React Testing Library. The configuration provides a solid foundation for testing React components with full TypeScript support.

# Project Initialization

```
mkdir react-unit
cd react-unit
npm init -y

```

# Install Core Dependencies
```
npm install react react-dom typescript
```

# Install Development Dependencies
```
npm install --save-dev @types/react @types/react-dom @types/jest jest ts-jest @testing-library/react @testing-library/jest-dom@5 @testing-library/user-event
```

# Create Project Structure
```
mkdir src
mkdir src/components
mkdir src/__tests__
```

# Create Configuration Files
```
touch tsconfig.json
touch jest.config.js
touch jest.setup.ts
```

# Create Sample Files
```
touch src/components/HelloWorld.tsx
touch src/__tests__/HelloWorld.test.tsx
```


# Update package.json Scripts
```
npm pkg set scripts.test="jest"
```

# Run intail test

```
npm test
```

---
# Alternative: Single Command Installation
---

```
npm install --save-dev @testing-library/react @testing-library/jest-dom@5 @testing-library/user-event jest @types/jest ts-jest typescript react react-dom @types/react @types/react-dom
```

# verufy installations

```
npm list
npm test
```

# Development Commands
```
npm test -- --watch
npm test -- --coverage
npm test -- --verbose
```


## Project Structure

```
react-unit/
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── jest.config.js        # Jest testing framework configuration
├── jest.setup.ts         # Jest setup and global test configuration
└── src/
    ├── components/
    │   └── HelloWorld.tsx # Sample React component
    └── __tests__/
        └── HelloWorld.test.tsx # Unit tests for HelloWorld component
```

##  tsconfig.json
```
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "commonjs",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "types": ["jest", "@testing-library/jest-dom", "@testing-library/react"]
  },
  "include": ["src"]
}
```

## Create jest.config.js
```

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testMatch: ['**/__tests__/**/*.(ts|tsx)', '**/*.(test|spec).(ts|tsx)'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};

```

## Create jest.setup.ts
```
import '@testing-library/jest-dom/extend-expect';

                --OR--

import '@testing-library/jest-dom';
```

# Create Sample Component
## Create HelloWorld.tsx

```
import React from 'react';

interface HelloWorldProps {
  name?: string;
  greeting?: string;
}

export const HelloWorld: React.FC<HelloWorldProps> = ({ 
  name = 'World', 
  greeting = 'Hello' 
}) => {
  return (
    <div data-testid="hello-world">
      <h1>{greeting}, {name}!</h1>
      <p>Welcome to React Testing with TypeScript</p>
    </div>
  );
};

export default HelloWorld;
```

#  Create Test File
## Create HelloWorld.test.tsx

```
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HelloWorld } from '../components/HelloWorld';

describe('HelloWorld Component', () => {
  test('renders HelloWorld component with default props', () => {
    render(<HelloWorld />);
    expect(screen.getByTestId('hello-world')).toBeInTheDocument();
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
  });

  test('renders with custom name prop', () => {
    render(<HelloWorld name="React" />);
    expect(screen.getByText('Hello, React!')).toBeInTheDocument();
  });

  test('renders with custom greeting and name', () => {
    render(<HelloWorld greeting="Hi" name="TypeScript" />);
    expect(screen.getByText('Hi, TypeScript!')).toBeInTheDocument();
  });

  test('renders welcome message', () => {
    render(<HelloWorld />);
    expect(screen.getByText('Welcome to React Testing with TypeScript')).toBeInTheDocument();
  });
});
```
---
**npm test**
**npm test -- --watch**
**npm test -- --coverage**
**npm test -- --verbose**

---

## Output
```
PS D:\Testing\nextjs\react-unit> npm test

> react-unit@1.0.0 test
> jest

 PASS  src/__tests__/HelloWorld.test.tsx
  √ renders HelloWorld component (20 ms)

Test Suites: 1 passed, 1 total                                                                                  
Tests:       1 passed, 1 total                                                                                  
Snapshots:   0 total
Time:        1.944 s, estimated 4 s
Ran all test suites.
```

**npm test -- --coverage**

```
PS D:\Testing\nextjs\react-unit> npm test -- --coverage

> react-unit@1.0.0 test
> jest --coverage

 PASS  src/__tests__/HelloWorld.test.tsx
  √ renders HelloWorld component (19 ms)

----------------|---------|----------|---------|---------|-------------------                                   
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                    
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |      100 |     100 |     100 |                  
 HelloWorld.tsx |     100 |      100 |     100 |     100 |                  
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.839 s, estimated 2 s
Ran all test suites.
PS D:\Testing\nextjs\react-unit> 
```

## Configuration Files

### package.json
Contains all necessary dependencies for React testing with TypeScript:
- React and React DOM for component functionality
- Jest as the testing framework
- React Testing Library for component testing utilities
- TypeScript and related type definitions
- Testing utilities like user-event for interaction simulation

### tsconfig.json
TypeScript configuration optimized for React testing:
- Target ES5 for broad browser compatibility
- Includes DOM and ESNext libraries for modern JavaScript features
- Enables JSX with react-jsx transform
- Includes Jest and testing library types
- Strict mode enabled for better type safety
- Module resolution set to Node.js style

### jest.config.js
Jest configuration tailored for React TypeScript projects:
- Uses ts-jest preset for TypeScript transformation
- Sets up test environment as jsdom for DOM simulation
- Configures setup files to run before tests
- Defines module file extensions Jest should recognize
- Sets up path mapping for clean imports

### jest.setup.ts
Global test setup that runs before all tests:
- Imports jest-dom matchers for enhanced DOM assertions
- Provides additional custom matchers like toBeInTheDocument
- Can be extended with global test utilities and mocks

## Component Structure

### HelloWorld.tsx
A simple React functional component that demonstrates:
- TypeScript interface for props
- Default prop values
- Basic JSX rendering
- Test-friendly data attributes

### HelloWorld.test.tsx
Comprehensive test suite that covers:
- Component rendering verification
- Props handling and default values
- DOM structure validation
- Text content assertions
- TypeScript type safety in tests

## Testing Approach

The testing setup follows React Testing Library principles:
- Tests focus on component behavior rather than implementation
- Uses semantic queries to find elements
- Emphasizes user-centric testing approaches
- Provides excellent TypeScript integration

## Development Workflow

### Installation Process
1. Navigate to project directory
2. Run npm install to install all dependencies
3. Dependencies are automatically resolved with proper versions

### Running Tests
- `npm test` runs all tests once
- `npm test -- --watch` runs tests in watch mode for development
- `npm test -- --coverage` generates test coverage reports
- Tests automatically detect TypeScript files and transform them

### Test Development
- Create components in src/components directory
- Write corresponding tests in src/__tests__ directory
- Use React Testing Library utilities for component interaction
- Leverage TypeScript for type-safe test development

## Key Features

### TypeScript Integration
- Full type safety for components and tests
- IntelliSense support in test files
- Compile-time error detection
- Seamless IDE integration

### React Testing Library
- User-centric testing approach
- Accessible query methods
- Event simulation utilities
- Integration with Jest matchers

### Jest Configuration
- Automatic test discovery
- TypeScript transformation
- DOM environment simulation
- Extensible setup system

## Best Practices Implemented

### Component Design
- Clear prop interfaces with TypeScript
- Meaningful data-testid attributes for reliable element selection
- Default prop values for optional properties
- Functional component pattern with proper typing

### Test Structure
- Descriptive test names that explain expected behavior
- Focused test cases that verify specific functionality
- Proper use of React Testing Library queries
- Type-safe test implementations

### Configuration Management
- Centralized Jest configuration
- Modular setup files for test environment
- Clear separation of concerns between configuration files
- Maintainable and extensible setup

## Dependencies Explanation

### Core Dependencies
- react and react-dom provide the React framework
- typescript enables static type checking
- @types packages provide TypeScript definitions

### Testing Dependencies
- jest serves as the primary testing framework
- @testing-library/react provides React-specific testing utilities
- @testing-library/jest-dom adds custom Jest matchers for DOM elements
- @testing-library/user-event simulates user interactions
- ts-jest transforms TypeScript files for Jest execution

### Development Dependencies
All testing-related packages are installed as dev dependencies since they are only needed during development and testing phases.

## Execution Flow

When running tests, the following sequence occurs:
1. Jest loads configuration from jest.config.js
2. TypeScript files are transformed using ts-jest
3. jest.setup.ts runs to configure global test environment
4. Test files are discovered and executed
5. Components are rendered in jsdom environment
6. Assertions are evaluated using Jest and jest-dom matchers
7. Results are reported with pass/fail status and coverage information

This setup provides a robust foundation for developing and testing React applications with TypeScript, ensuring code quality and reliability through comprehensive testing capabilities.