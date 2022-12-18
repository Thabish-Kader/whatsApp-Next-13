# WhatsApp

## NextJS-13, Upstash, Pusher

<img align="left" alt="NextJS" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" />
<img align="left" alt="TypeScript" width="30px" style="padding-right:10px;" src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg" />

<img align="left" alt="Tailwind" width="30px" style="padding-right:10px;" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
<img align="left" alt="redux" width="30px" style="padding-right:10px;" src="https://seeklogo.com/images/U/upstash-icon-logo-6EB6AA96EE-seeklogo.com.png" />

<img align="left" alt="redux" width="30px" style="padding-right:10px;" src="https://cdn.worldvectorlogo.com/logos/pusher-1.svg" />

<br/>
<br/>



This is a chatting web application. Where users can chat with others in real time. To achive this it uses pusher.

## Note 
This application works locally but i found i get errors during deployment. I assume this is the case as most features in next js 13 are still in beta. But feel free to try it

### Problems

-   While createing the endpoint sendMessageToRedis i was sending data to redis but the data stored in the database was [Object object] which was not i wanted after going through the docs and stackoverflow i found that i had to convert the object to string before sending it. Find the solution [here](https://stackoverflow.com/questions/8694871/node-js-store-objects-in-redis)

before: `await redis.hset("messages", data.id , modifiedMessage); `

after: ` await redis.hset("messages", data.id, JSON.stringify(modifiedMessage));`

### Resoruces

-   [Caching NextJS Apps with Serverless Redis using Upstash](https://flatlogic.com/blog/caching-nextjs-apps-with-serverless-redis-using-upstash/)
-   [Sorting an array based on dates](https://www.scaler.com/topics/javascript-sort-an-array-of-objects/)

[How to use SWR in Next JS - client-side data-fetching technique](https://cloudcoders.xyz/blog/how-to-use-swr-in-next-js-client-side-data-fetching-technique/)

-   [How to scroll to bottom in react?](https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react)

### Food for taught

-   Can SWR replcae redux ?

### Screenshots

<img width="1680" alt="Screen Shot 2022-12-18 at 12 01 01 PM" src="https://user-images.githubusercontent.com/76642519/208287774-2291bae5-b422-4502-a2ed-7a92f781210d.png">

<img width="1680" alt="Screen Shot 2022-12-18 at 12 01 14 PM" src="https://user-images.githubusercontent.com/76642519/208287775-84ee6cb1-b248-4274-8638-01b70014c9c0.png">

<img width="1680" alt="Screen Shot 2022-12-18 at 12 01 32 PM" src="https://user-images.githubusercontent.com/76642519/208287778-da896ff3-606b-4f6f-99b0-9cfcedc3b1e8.png">

