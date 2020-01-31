const ok = (responseData: string | object) => {
  return response(responseData, 200);
};

const clientError = (responseData: string | object) => {
  return response(responseData, 400);
};

const serverError = (responseData: string | object) => {
  return response(responseData, 500);
};

const response = (responseData: string | object, statusCode: number) => {
  return {
    statusCode,
    headers: { 'Access-Control-Allow-Origin': '*' },
    body: typeof responseData === 'string' ? responseData : JSON.stringify(responseData)
  };
};

export { ok, clientError, serverError };
