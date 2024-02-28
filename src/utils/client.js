import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

// Use Vite-compatible environment variables
const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = 'production';
const apiVersion = '2023-05-26';
const useCdn = true;
const token = import.meta.env.VITE_SANITY_TOKEN;

// Validate that the environment variables are set
if (!projectId || !token) {
    console.error('Sanity client requires VITE_SANITY_PROJECT_ID and VITE_SANITY_TOKEN environment variables');
}

const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    token,
    ignoreBrowserTokenWarning: true
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
