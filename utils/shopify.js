import Client from "shopify-buy";

export const shopifyClient = Client.buildClient({
  domain: "***.myshopify.com",
  storefrontAccessToken: "***",
});
