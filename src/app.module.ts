import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShortcutsController } from './shortcuts/shortcuts.controller';
import { ShortcutsService } from './shortcuts/shortcuts.service';
import { ShortcutsModule } from './shortcuts/shortcuts.module';

@Module({
  imports: [ShortcutsModule],
  controllers: [AppController, ShortcutsController],
  providers: [AppService, ShortcutsService],
})
export class AppModule {}
