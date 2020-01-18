import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { ReadmeModule, ReadmeNavigator } from './readme';

class FakeNavigator implements ReadmeNavigator {

  public navigate(url: string) {
     window.alert("Congratulation! You successfully tested navigation:\n" + url);
    return true;
  }
}

@NgModule({
  imports:      [   
    BrowserModule, 
    BrowserAnimationsModule, 
    FlexLayoutModule, 
    MatInputModule,
    ReadmeModule
  ],
  
  declarations: [ 
    AppComponent
  ],

  providers: [{ provide: ReadmeNavigator, useClass: FakeNavigator }],
  
  bootstrap: [ AppComponent ]
})
export class AppModule { }
