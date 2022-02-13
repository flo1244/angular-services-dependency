// We do not need a decorator here we can simply use the class as Service 

export class LoggingService {
    logStatusChange(status: string) {
        console.log('A server status changed, new status: ' +  status);
    }
}

//Why are we putting loggingservice in providers in app module instead of accountservices???