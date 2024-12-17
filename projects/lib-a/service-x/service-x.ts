import { inject, Injectable, InjectionToken } from "@angular/core";

export const X_TOKEN = new InjectionToken('X_TOKEN');

@Injectable({ providedIn: 'root' })
export class ServiceX {

    protected myXToken = inject(X_TOKEN);
}