import { APIGatewayEvent, Context } from 'aws-lambda';
import { log } from 'pn-lambda-logger';
// import * as request from 'request-promise-native';
import { ok } from '../aws/response';
const env = process.env;

export const hello = async (event: APIGatewayEvent, context: Context) => {
  log.setup({ context });
  log.info(`Starting Hello function ${event.pathParameters} in stage ${env.stage}`);

  let responseJson = { message: 'Hello Akke' };
  return ok(responseJson);
};
