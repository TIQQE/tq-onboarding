import { APIGatewayEvent, Context } from 'aws-lambda';
import { log } from 'pn-lambda-logger';
import * as request from 'request-promise-native';
import { clientError, ok, serverError } from '../aws/response';
const env = process.env;

export const hello = async (event: APIGatewayEvent, context: Context) => {
  log.setup({ context });
  log.info(`Starting Hello function ${event.pathParameters} in stage ${env.stage}`);

  let responseJson = { message: 'Hello' };
  return ok(responseJson);
};
