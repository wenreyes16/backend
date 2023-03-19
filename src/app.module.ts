import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { ContriesModule } from './contries/contries.module';
import { GeneroModule } from './genero/genero.module';
import { CategoriasModule } from './categorias/categorias.module';
import { MarcaModule } from './marca/marca.module';

@Module({
  imports: [MenuModule, ContriesModule, GeneroModule, CategoriasModule, MarcaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
