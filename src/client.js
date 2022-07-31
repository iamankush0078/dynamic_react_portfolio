import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "kubfjvtk",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skcTtav2M8P0IhJajJmrY0RTOzDblUDxj4J67xWr4Oisfmf3HZz6i5f2m8q6iAPiGxVBzj39UrWf0Sw7gncZcdRCSw04xub18000wmRy0mdb1qHywdBNS6WxuSXswoSPLm2EMaXBoRtEfS8Fhs7LJOlA60W9788dKrSFSIoS7nEewEuEi1d5",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
