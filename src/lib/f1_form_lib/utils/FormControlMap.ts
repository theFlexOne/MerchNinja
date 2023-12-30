import set from 'lodash.set';
import { FormControlMapKey } from '../types';
import FormControl from './FormControl';

export default class FormControlMap extends Map<string, FormControl> {
  private formRef: React.RefObject<HTMLFormElement>;

  constructor(formRef: React.RefObject<HTMLFormElement>) {
    super();
    this.formRef = formRef;
  }

  getFormControl(path: FormControlMapKey): FormControl | undefined {
    return this.get(path);
  }

  getValue(path: FormControlMapKey): string | undefined {
    return this.getFormControl(path)?.value;
  }

  getChecked(path: FormControlMapKey): boolean | undefined {
    return this.getFormControl(path)?.checked;
  }

  getFormRef(): React.RefObject<HTMLFormElement> {
    return this.formRef;
  }

  update(formControl: FormControl): void {
    this.set(formControl.path, formControl);
  }

  updateValue(): void {}

  register(path: FormControlMapKey): void {
    this.getFormControl(path)?.register();
  }

  unregister(path: FormControlMapKey): void {
    this.getFormControl(path)?.unregister();
  }

  buildFormObject(): Record<string, unknown> {
    const result: Record<string, unknown> = {};
    const formControls = [...this.values()];
    console.log('formControls', formControls);

    formControls.forEach((formControl) => {
      if (formControl.registered === false) return;
      if (formControl.element.type === 'checkbox') {
        set(result, formControl.path, formControl.checked);
      } else {
        set(result, formControl.path, formControl.value);
      }
    });
    return result;
  }
}
