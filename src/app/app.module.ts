import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemPanelComponent } from './layout/item-panel/item-panel.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

const COMPONENTS = [ItemPanelComponent];

@NgModule({
  declarations: [AppComponent, ...COMPONENTS],
  imports: [BrowserModule, NgZorroAntdModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
