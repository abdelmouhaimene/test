import { Component,ElementRef, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReCaptchaV3Service } from 'ng-recaptcha';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  enableZoom: Boolean = true;
  previewImageSrc = 'pathToImage';
  zoomImageSrc = 'pathToImage';
  title = 'test';
  showPopup(code1Value: string, code2Value: string) {
    if(code1Value !== "" && code2Value !== "")
    alert(`Code 1: ${code1Value}\nCode 2: ${code2Value}`);
    else
    alert("Vous devez saisir une valeur pour code 1 et code 2 ");
  }
  @ViewChild('imageElement') imageElement!: ElementRef;
  isZoomActive: boolean = false;
  @ViewChild('input1') input1!: ElementRef;
  @ViewChild('input2') input2!: ElementRef;
  showZoomEffect(input: HTMLInputElement) {
    this.isZoomActive = true;
    if (input === this.input1.nativeElement) {
      this.zoomImage1();
    } else if (input === this.input2.nativeElement) {
      this.zoomImage2();
    }
  }

  zoomImage1() {
    this.imageElement.nativeElement.style.backgroundSize = '200%';
    this.imageElement.nativeElement.style.backgroundPosition = 'top left';    
  }
  zoomImage2() {
    this.imageElement.nativeElement.style.backgroundSize = '200%';
    this.imageElement.nativeElement.style.backgroundPosition = 'center left';     
  }

  constructor(private recaptchaV3Service: ReCaptchaV3Service) {
  }

  public send(form: NgForm): void {
    if (form.invalid) {
      for (const control of Object.keys(form.controls)) {
        form.controls[control].markAsTouched();
      }
      return;
    }

    this.recaptchaV3Service.execute('importantAction')
    .subscribe((token: string) => {
      console.debug(`Token [${token}] generated`);
    });
  }
}
