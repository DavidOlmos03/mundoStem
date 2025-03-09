import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css'
})
export class SubtitleComponent {

  @Input() text: string = 'Default Subtitle';
  translatedText: string = '';

  constructor(private translateService: TranslateService){}

  ngOnInit(){
    this.translateService.get(this.text).subscribe((translation: string) => {
        this.translatedText = translation
      });

    this.translateService.onLangChange.subscribe(()=>{
      this.translateService.get(this.text).subscribe((translation: string)=>{
        this.translatedText = translation;
      })
    })
  }
}
