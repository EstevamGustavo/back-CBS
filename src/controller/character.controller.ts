import { Controller, Get } from '@nestjs/common';
import { CharacterService } from '../service/character.service';

@Controller()
export class CharacterController {
  constructor(private readonly appService: CharacterService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
