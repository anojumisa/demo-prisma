import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

console.log('main.ts started');
console.time('NestJS App Bootstrap');
async function bootstrap() {
  console.time('NestFactory.create');
  const app = await NestFactory.create(AppModule);
  console.timeEnd('NestFactory.create');
  console.time('app.listen');
  await app.listen(process.env.PORT ?? 3000);
  console.timeEnd('app.listen');
  console.timeEnd('NestJS App Bootstrap');
}
void bootstrap();
