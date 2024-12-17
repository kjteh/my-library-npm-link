import { ChangeDetectionStrategy } from "@angular/core";
import { Component, inject } from "@angular/core";

import { ServiceX } from "lib-a/service-x";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "component-y",
    template: "<p>lib-a-component-y works! {{ myServiceX.myXToken}}</p>"
})
export class ComponentY {

    protected myServiceX = inject(ServiceX);
} 