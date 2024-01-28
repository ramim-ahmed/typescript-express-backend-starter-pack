import config from './config';

async function bootstrap() {
  try {
    console.log(config.appName);
  } catch (error) {
    console.log(error);
  }
}

bootstrap();
