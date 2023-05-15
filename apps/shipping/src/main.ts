import { NestFactory } from '@nestjs/core';
import { ShippingModule } from './shipping.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ShippingModule, {
    transport: Transport.TCP,
    options: {
      host: 'localhost',
      port: 3002
    }
  });
  await app.listen().then(() => console.log('Shipping Microservice is listening on port 3002'));
}
bootstrap();
