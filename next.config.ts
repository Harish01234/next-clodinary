import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary's domain for loading images
  },
  env: {
    CLOUDINARY_CLOUD_NAME: 'df6y0s9sx', // Replace with your Cloudinary cloud name
  },

};

export default nextConfig;
