import { useEffect, useRef } from 'react';
import { FormInputElement } from '../types';
import FormControl from '../utils/FormControl';
import { isFormControlElement } from '../utils/formElementChecker';

export default function useFormControlMap() {
  const formRef = useRef<HTMLFormElement>(null);
  const formControlsRef = useRef<FormControl[]>([]);

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    form.addEventListener('change', (event) => {
      const path = (event.target as FormInputElement).name;
      const formControl = formControlsRef.current.find(
        (formControl) => formControl.path === path
      );
      if (!formControl) return;
      formControl.value = (event.target as FormInputElement).value;
    });
    processForm(formRef, formControlsRef);
    const observerCleanup = setupFormObserver(formRef, formControlsRef);

    return () => {
      form.removeEventListener('change', () => {});
      observerCleanup();
    };
  }, []);

  return { formRef, formControlsRef };
}

function processForm(
  formRef: React.RefObject<HTMLFormElement>,
  formControlsRef: React.MutableRefObject<FormControl[]>
) {
  const formElements: Element[] = formRef.current
    ? [...formRef.current.children]
    : [];
  findFormInputs(formElements).forEach((input) => {
    formControlsRef.current.push(FormControl.create(input));
  });
}

function processFormControlElementsList(
  formElements: FormInputElement[],
  formControls: FormControl[]
) {
  formElements.forEach((input) => {
    formControls.push(FormControl.create(input));
  });
}

function setupFormObserver(
  formRef: React.RefObject<HTMLFormElement>,
  formControlsRef: React.MutableRefObject<FormControl[]>
): () => void {
  const observer = new MutationObserver((mutations: MutationRecord[]) => {
    const addedFormElements: FormInputElement[] = [];
    const removedFormElements: FormInputElement[] = [];
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach((node) => {
          if (
            node instanceof HTMLElement &&
            isFormControlElement(node as HTMLElement)
          ) {
            addedFormElements.push(node as FormInputElement);
          }
        });
        mutation.removedNodes.forEach((node) => {
          if (
            node instanceof HTMLElement &&
            isFormControlElement(node as HTMLElement)
          ) {
            removedFormElements.push(node as FormInputElement);
          }
        });
      }
    });

    processFormControlElementsList(addedFormElements, formControlsRef.current);
    removedFormElements.forEach((input) => {
      formControlsRef.current = formControlsRef.current.filter(
        (formControl) => formControl.name !== input.name
      );
    });
  });
  formRef.current &&
    observer.observe(formRef.current, { childList: true, subtree: true });
  return () => observer.disconnect();
}

function findFormInputs(elements: Element[]): FormInputElement[] {
  const formInputs: FormInputElement[] = [];

  for (let i = 0; i < elements.length; i++) {
    const element = elements[i] as HTMLElement;
    if (isFormControlElement(element)) {
      formInputs.push(element as FormInputElement);
    } else if (element.children.length > 0) {
      const children = [...element.children];
      formInputs.push(
        ...findFormInputs(children.filter((child) => child.children.length > 0))
      );
    }
  }
  return formInputs;
}
