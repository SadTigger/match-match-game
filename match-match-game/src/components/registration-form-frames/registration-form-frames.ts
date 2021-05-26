import { BaseComponent } from '../base-component';
import { Frame } from '../frame/frame';
import './registration-form-frames.css';

export class RegistrationFormFrames extends BaseComponent {
  constructor() {
    super('div', ['registration-form__frames']);
  }

  addFrames(frames: Frame[]): void {
    frames.forEach(frame => this.element.appendChild(frame.element));
  }
}
