import { IActionParameters } from "../interfaces/IActionParameters";
import { IActionContext } from "../interfaces/IActionContext";

export class Builder {
    public static GetDefaultActionParameters(): IActionParameters {
        return {
            appName: undefined,
            packagePath: undefined,
            slot: undefined,
            publishProfile: undefined
        }
    }

    public static GetDefaultActionContext(): IActionContext {
        return {
            azureHttpUserAgent: undefined,
            azureHttpUserAgentPrefix: undefined,
            isLinux: undefined,
            kind: undefined,
            resourceGroupName: undefined,
            appService: undefined,
            appServiceUtil: undefined,
            endpoint: undefined,
            kuduService: undefined,
            kuduServiceUtil: undefined,
            package: undefined,
            packageType: undefined,
            publishContentPath: undefined,
            publishMethod: undefined,
            appSettings: undefined,
            language: undefined,
            os: undefined,
            sku: undefined,
            appUrl: undefined,
            scmCredentials: undefined,
            authenticationType: undefined
        }
    }
}