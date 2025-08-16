import NodeCache from "node-cache";

/**
 * A simple in-memory cache service.
 * The standard TTL (Time To Live) is set to 5 minutes, meaning items will be
 * automatically removed from the cache after 5 minutes.
 */
const cache = new NodeCache({ stdTTL: 300 });

export default cache;
