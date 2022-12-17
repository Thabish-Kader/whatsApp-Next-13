# WhatsApp

### Problems

-   While createing the endpoint sendMessageToRedis i was sending data to redis but the data stored in the database was [Object object] which was not i wanted after going through the docs and stackoverflow i found that i had to convert the object to string before sending it. Find the solution [here](https://stackoverflow.com/questions/8694871/node-js-store-objects-in-redis)

before: `await redis.hset("messages", data.id , modifiedMessage); `

after: ` await redis.hset("messages", data.id, JSON.stringify(modifiedMessage));`

### Resoruces

-   [Caching NextJS Apps with Serverless Redis using Upstash](https://flatlogic.com/blog/caching-nextjs-apps-with-serverless-redis-using-upstash/)
-   [Sorting an array based on dates](https://www.scaler.com/topics/javascript-sort-an-array-of-objects/)

[How to use SWR in Next JS - client-side data-fetching technique](https://cloudcoders.xyz/blog/how-to-use-swr-in-next-js-client-side-data-fetching-technique/)

### Food for taught

-   Can SWR replcae redux ?
