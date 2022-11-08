# ngx-pwa-lib
Contains service to capture `beforeinstallprompt` event and the component to prompt user to install pwa

Add the following code to `app.module.ts` providers array:
```
{
    provide: APP_INITIALIZER, 
    useFactory: (pwaService: PwaService) => () => pwaService.initPwaPrompt(), 
    deps: [PwaService], 
    multi: true
}
```
This will allow Pwa Service to be initialized early and listen to `beforeinstallprompt` event before it is fired. 

# Versions
v1.x.x for Angular 13
v2.x.x for Angular 14

## PwaService
### public initPwaPrompt()
Adds an event listener to current window to listen to `beforeinstallprompt` event. Call this method first so the service could listen to the event. 
### public AskUserToInstallPWA()
This will show a bottom sheet that allow users to install pwa via button click (in Android) or a bottom sheet containing instructions to install pwa in ios. 
### protected OpenPromptComponent(mobileType: 'ios' | 'android')
This method will display the bottom sheet component to prompt user to install pwa. 
Override this method to change the way to prompt user. 
