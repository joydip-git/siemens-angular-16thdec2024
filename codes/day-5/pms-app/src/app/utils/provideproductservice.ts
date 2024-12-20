import { EnvironmentProviders, Provider } from "@angular/core";
import { SERVICE_TOKEN, SERVICE_TYPE } from "./constants";

export const provideProductService = (): Provider | EnvironmentProviders => {
    return {
        provide: SERVICE_TOKEN,
        useClass: SERVICE_TYPE
    }
}