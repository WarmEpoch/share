import { Module } from '@nestjs/common';
import { ShortcutsService } from './shortcuts.service';
import { ShortcutsController } from './shortcuts.controller';

@Module({
  providers: [ShortcutsService],
  controllers: [ShortcutsController]
})
export class ShortcutsModule {}
