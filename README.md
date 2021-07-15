# Dependecy Injection

![Codecov](https://img.shields.io/codecov/c/github/Symbux/Injector)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Symbux/Injector/Build)
![GitHub issues](https://img.shields.io/github/issues/Symbux/Injector)
![NPM](https://img.shields.io/npm/l/@symbux/injector)
![npm (scoped)](https://img.shields.io/npm/v/@symbux/injector)
![npm](https://img.shields.io/npm/dw/@symbux/injector)

The injector package is a dependecy injection tool built on top of TypeScript decorators for use with Node.JS/TypeScript applications. The original design is for a framework that is soon to come out, this is a prerequisite library.

## Getting Started

### Standard usage.

```typescript
import { Inject, Provide } from '@symbux/injector';

@Provide() // You can optionally give it a name.
export class NumberHelper {
	public multiply(num1: number, num2: number): number {
		return num1 * num2;
	}
}

export class BusinessLogic {

	@Inject() helper!: NumberHelper;

	public main(): void {
		console.log(this.helper.multiply(5, 5));
	}
}
```

### Custom usage.

```typescript
import { Injector, Inject } from '@symbux/injector';

// You can register variables specifically.
Injector.register('my_special_var', 12345);

// You can also resolve them manually.
const mySpecialVar = Injector.resolve('my_special_var');

// You can also inject with a name.
export class BusinessLogic {

	@Inject('my_special_var')
	public specialVariable!: string;
}
```