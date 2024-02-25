import { ConsoleLogger, Injectable } from "@nestjs/common";

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  log(message: any, context?: string) {}
}
