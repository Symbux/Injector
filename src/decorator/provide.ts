import { Injector } from '../module/injector';

/**
 * The decorator defines a class as a provider, so that it can
 * be registered with the injector registry, once this decorator is
 * executed, the method is automatically registered with the
 * injector class.
 * 
 * @param name The name of the provider.
 * @param options Optional array of constructor params when initialised.
 * @param overwrite Whether to overwrite any existing value.
 * @returns Function
 */
export function Provide(name?: string, options?: Array<any>, overwrite?: boolean): Function {
	return (target: any) => {

		// Define base metadata.
		Reflect.defineMetadata('engine:module', 'provider', target);
		Reflect.defineMetadata('provider:name', name || target.name, target);

		// Register the new class with or without arguments.
		if (options && options.length > 0) {
			Injector.register(name || target.name, new target(...options), overwrite);
		} else {
			Injector.register(name || target.name, new target(), overwrite);
		}
	};
}

