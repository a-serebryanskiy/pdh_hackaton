import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeadingComponent} from './heading/heading.component';
import {RegionsMapComponent} from './region-map/regions-map.component';
import {SignatureComponent} from './signature/signature.component';
import {RegTileComponent} from './region-map/reg-tile/reg-tile.component';
import {StoreModule} from '@ngrx/store';
import {regionsReducer} from '../store/clusters/reducer';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {RegionInfoDialogComponent} from './region-map/region-info-dialog/region-info-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {EffectsModule} from '@ngrx/effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {GoogleSheetsDbService} from 'ng-google-sheets-db';
import {CommonModule} from '@angular/common';
import {TextComponent} from './text/text.component';
import {DimensionSwitchComponent} from './heading/dimension-switch/dimension-switch.component';
import {PeriodSwitchComponent} from './region-map/period-switch/period-switch.component';
import {LegendMarchAprilComponent} from './region-map/legend-march-april/legend-march-april.component';
import {LegendVulnerableComponent} from './region-map/legend-vulnerable/legend-vulnerable.component';
import {LegendStabilityComponent} from './region-map/legend-stability/legend-stability.component';
import {AppRoutingModule} from './app-routing.module';
import { MarchAprilPageComponent } from './march-april/march-april-page.component';
import { StabilityPageComponent } from './stability-page-component/stability-page.component';
import { VulnerablePageComponent } from './vulnerable-page/vulnerable-page.component';

@NgModule({
    declarations: [
        AppComponent,
        HeadingComponent,
        RegionsMapComponent,
        SignatureComponent,
        RegTileComponent,
        RegionInfoDialogComponent,
        TextComponent,
        DimensionSwitchComponent,
        PeriodSwitchComponent,
        LegendMarchAprilComponent,
        LegendVulnerableComponent,
        LegendStabilityComponent,
        MarchAprilPageComponent,
        StabilityPageComponent,
        VulnerablePageComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule,
        StoreModule.forRoot({regions: regionsReducer}),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        }),
        BrowserAnimationsModule,
        MatDialogModule,
        MatIconModule,
        FlexLayoutModule,
        AppRoutingModule,
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
    ],
    providers: [GoogleSheetsDbService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
