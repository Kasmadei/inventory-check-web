/**
 * = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
 *
 * Contains payload definitions between the server and client
 * Any modification needs to be copied
 * to other projects.
 *
 * = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
 */

export enum ErrorType {
  Generic = "Generic",
  Unauthorized = "Unauthorized",
  Unhandled = "Unhandled",
  NotEnoughCredits = "NotEnoughCredits",
}

export interface ResponseBase {
  error?: {
    type: ErrorType;
    message: string;
  };
}

export const OrderDirectionValuesArray = ["asc", "desc"] as const;
export type OrderDirection = typeof OrderDirectionValuesArray[number];

/**
 * Pagination explained. Say we have total of 100 videos. We want to fetch
 * videos in batches of 20. The first fetch will have: limit=20, totalSize=100 and
 * start=0. Next property will contain link for fetching more. Calling that link
 * will result in limit=20, totalSize=100, start=1.
 */
export interface Paginable {
  /**
   * This limits amount of content in one fetch. See description of this interface.
   */
  limit: number;
  /**
   * If content is paginated this contain the total size of all available content.
   * See description of this interface.
   */
  totalSize: number;
  /**
   * If content is paginated this contain start of the content. We start numbering with 0
   * See description of this interface.
   */
  start: number;
  /**
   * When we have more content to fetch, this holds the url which should be called. See description of
   * this interface.
   */
  next: string | undefined | null;
}
