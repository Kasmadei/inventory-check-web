import { ResponseBase } from "../../shared/payloads/basePayloads";
import { logError, ErrorCategory } from "./Analytics";

export const getAppInsightsRequestId = (
  response: Response | null
): string | null =>
  response ? response.headers.get("app-insights-request-id") : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handleNetworkResponseAndGetJsonAsync = async (
  response: Response,
  url?: string,
  debugData?: any
): Promise<any> => {
  let parsedJson: ResponseBase | null = null;
  const requestId = getAppInsightsRequestId(response);
  if (!response.ok) {
    try {
      parsedJson = (await response.json()) as ResponseBase;
    } catch (ex) {
      logError(
        ErrorCategory.Network,
        "handleNetworkResponseAndGetResultAsync:: Failed network request with no JSON returned",
        {
          response,
          url: url,
          data: debugData,
        }
      );
      console.log(`Failed request id: ${requestId}`);
      throw new Error(
        "Something went wrong when processing server failed response"
      );
    }
    if (parsedJson.error) {
      logError(
        ErrorCategory.Network,
        "handleNetworkResponseAndGetResultAsync:: Failed api request",
        {
          url,
          error: parsedJson.error.message,
          data: debugData,
        }
      );
      console.log(`Failed request id: ${requestId}`);
      throw parsedJson.error.message;
    } else {
      logError(
        ErrorCategory.Network,
        "handleNetworkResponseAndGetResultAsync:: Failed network request. Returned JSON doesn't contain error property",
        { response, parsedJson: parsedJson, url: url, data: debugData }
      );
      console.log(`Failed request id: ${requestId}`);
      throw new Error(
        "Can't retrieve error when processing failed server response"
      );
    }
  } else {
    try {
      parsedJson = (await response.json()) as ResponseBase;
    } catch (ex) {
      logError(
        ErrorCategory.Network,
        "handleNetworkResponseAndGetResultAsync:: Successful api request but no JSON returned",
        { url }
      );
      console.log(`Failed request id: ${requestId}`);
      return {};
    }
  }
  if (parsedJson.error) {
    logError(
      ErrorCategory.Network,
      "handleNetworkResponseAndGetResultAsync:: Failed api request",
      {
        url,
        error: parsedJson.error,
        data: debugData,
      }
    );
    console.log(`Failed request id: ${requestId}`);
    throw parsedJson.error.message;
  }
  return parsedJson;
};
