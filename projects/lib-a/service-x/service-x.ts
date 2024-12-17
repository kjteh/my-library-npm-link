import { inject, Injectable, InjectionToken } from "@angular/core";

export const X_TOKEN = new InjectionToken('X_TOKEN');

@Injectable({ providedIn: 'root' })
export class ServiceX {

    myXToken = inject(X_TOKEN);
}