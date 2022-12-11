import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2022-12-10",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
  // projectId: "oma83i7a",
  // dataset: "production",
  // apiVersion: "2022-02-01",
  // useCdn: true,
  // token:
  //   "sk1DsBMIQP9oJZ0RjTjSNpko88xoAfqiragECA2Q4kFuHrK8Sc1gtSKgmXuit3wFtKR4x16SB0B6VzHJQQUPtcooGDwRNq0Z43IkjnPNsBIMJZm7bX4aVww1713yCNSubURfTOhUxhJuWiZkLIXSf6NDvmKxaXlKh15InUNyeyW5gBAUQN0s",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
