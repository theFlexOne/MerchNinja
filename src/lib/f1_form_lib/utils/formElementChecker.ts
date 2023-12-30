export function isInput(el: HTMLElement, type?: string): boolean {
  return (
    isElement(el, 'input') && (!type || (el as HTMLInputElement).type === type)
  );
}

export function isText(el: HTMLElement): boolean {
  return isInput(el, 'text');
}

export function isCheckbox(el: HTMLElement): boolean {
  return isInput(el, 'checkbox');
}

export function isRadio(el: HTMLElement): boolean {
  return isInput(el, 'radio');
}

export function isFile(el: HTMLElement): boolean {
  return isInput(el, 'file');
}

export function isPassword(el: HTMLElement): boolean {
  return isInput(el, 'password');
}

export function isHidden(el: HTMLElement): boolean {
  return isInput(el, 'hidden');
}

export function isEmail(el: HTMLElement): boolean {
  return isInput(el, 'email');
}

export function isSelect(el: HTMLElement): boolean {
  return isElement(el, 'select');
}

export function isTextArea(el: HTMLElement): boolean {
  return isElement(el, 'textarea');
}

export function isFormControlElement(element: HTMLElement): boolean {
  return (
    (hasFormInputDataAttribute(element) && isText(element)) ||
    isSelect(element) ||
    isTextArea(element) ||
    isCheckbox(element) ||
    isRadio(element) ||
    isFile(element) ||
    isPassword(element) ||
    isHidden(element) ||
    isEmail(element)
  );
}

function hasFormInputDataAttribute(element: HTMLElement): boolean {
  return element.hasAttribute('data-forminput');
}

function isElement(el: HTMLElement, tagName: string): boolean {
  return el.tagName.toLowerCase() === tagName.toLowerCase();
}
