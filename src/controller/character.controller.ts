import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/character.service';

@Controller()
export class CharacterController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
