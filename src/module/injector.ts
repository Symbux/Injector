/**
 * The injector class allows you to register and resolve dependencies, the
 * class can be used directly and is also included in the inject decorator
 * for resolving dependencies. Note this class is static so that when it is
 * imported into files it retains its state.
 * 
 * @class Injector.
 */
export class Injector {

	private static registry: Map<string, any> = new Map();

	/**
	 * This method will register a injectable class instance with the registry
	 * so that it can be injected anywhere in the engine.
	 * 
	 * @param name The name of the provided item.
	 * @param instance The instance of the item.
	 * @param overwrite Whether to overwrite any existing.
	 * @returns boolean
	 * @static
	 */
	public static register(name: string, instance: any, overwrite = false): boolean {
		if (!overwrite) {
			if (this.registry.has(name)) throw new Error('The name you are trying to register your injectable with already exists.');
		}
		this.registry.set(name, instance);
		return true;
	}

	/**
	 * This method will resolve an injectable instance from the registry
	 * so that it can be defined into the injecting class instance.
	 * 
	 * @param name The name of the provided item.
	 * @param canFail Whether to throw an error if the item is not found (default: false).
	 * @returns any
	 * @static
	 */
	public static resolve(name: string, canFail = false): any {
		if (!this.registry.has(name)) {
			if (!canFail) throw new Error('The injectable name you are trying to inject does not exist.');
			return null;
		}
		return this.registry.get(name);
	}

	/**
	 * This method will simply list all keys registered to the injector
	 * module, and is mainly for debugging.
	 * 
	 * @returns Array<string>
	 * @static
	 */
	public static list(): Array<string> {
		return Array.from(this.registry.keys());
	}
}

