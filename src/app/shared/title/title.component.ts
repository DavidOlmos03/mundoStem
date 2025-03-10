import { Component, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() text: string = '';
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
