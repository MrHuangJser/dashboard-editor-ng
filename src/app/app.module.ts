import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemPanelComponent } from './layout/item-panel/item-panel.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ItemIconComponent } from './layout/item-panel/item-icon.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const LAYOUT_COMPONENTS = [ItemPanelComponent, ItemIconComponent, ToolbarComponent];

@NgModule({
  declarations: [AppComponent, ...LAYOUT_COMPONENTS],
  imports: [BrowserModule, NgZorroAntdModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
