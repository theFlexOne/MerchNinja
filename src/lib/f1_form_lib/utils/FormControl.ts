import { FormInputElement } from '../types';
import { isCheckbox } from './formElementChecker';

export default class FormControl {
  uuid = crypto.randomUUID();
  registered = true;
  element: FormInputElement;

  private validate?: ValidationFunctions<string>;

  private constructor(
    element: FormInputElement,
    options: FormControlConstructorOptions<string> = {}
  ) {
    this.registered = options?.registered ?? true;
    this.element = element;
    this.validate = options?.validate;
  }

  static create(
    element: FormInputElement,
    options: {
      registered?: boolean;
    } = {}
  ): FormControl {
    return new FormControl(element, options);
  }

  get name(): string {
    return this.element.name.split('.').pop() as string;
  }

  get path(): string {
    return `${this.element.name}`;
  }

  get value(): string {
    return this.element.value;
  }

  set value(value: string) {
    this.element.value = value;
  }

  get checked(): boolean | undefined {
    return isCheckbox(this.element)
      ? (this.element as HTMLInputElement).checked
      : undefined;
  }

  register(): void {
    this.registered = true;
  }

  unregister(): void {
    this.registered = false;
  }
}

type FormControlConstructorOptions<T = string> = {
  registered?: boolean;
  validate?: ValidationFunctions<T>;
};

type ValidationFunctions<T = string> = {
  onChange?: (value: T) => boolean;
  onBlur?: (value: T) => boolean;
  onSubmit?: (value: T) => boolean;
};
