import { Controller, Get, Redirect } from '@nestjs/common';

// https://www.sojson.com/md5/
@Controller('shortcuts')
export class ShortcutsController {

  @Get('95d565ef66e7dff9')
  @Redirect('https://www.icloud.com/shortcuts/f8e0c79e18c340d69c4a3140dafc11dd', 302)
  get_231215(){
    return 231215
  }

  @Get('9d4c2f636f067f89')
  @Redirect('https://www.icloud.com/shortcuts/f8e0c79e18c340d69c4a3140dafc11dd', 302)
  get_240209(){
    return 240209
  }

}
