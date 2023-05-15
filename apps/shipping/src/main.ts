import { NestFactory } from '@nestjs/core';
import { ShippingModule } from './shipping.module';

async function bootstrap() {
  const app = await NestFactory.create(ShippingModule);
  await app.listen(3002).then(() => console.log('Shipping Microservice is listening on port 3002'));
}
bootstrap();
