import { NgModule } from '@angular/core';

import { WebsocketTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [WebsocketTestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [WebsocketTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class WebsocketTestSharedCommonModule {}
