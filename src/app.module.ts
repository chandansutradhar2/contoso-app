import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/product.module';
import { Neo4jModule } from '@dbc-tech/nest-neo4j';

@Module({
  imports: [ProductModule,
    Neo4jModule.forRoot({
      scheme: 'neo4j+s',
      host: '8acb7201.databases.neo4j.io',
      port: 7687,
      username: 'neo4j',
      password: 'prg026zPTJSIfy0YvWetm9H8-iiBsOLBgfTGQyIgQ3c',
      disableLosslessIntegers: true
    })],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
