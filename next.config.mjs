const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.com/channels/@me",
        permanent: true,
      },
    ];
  }
}

export default nextConfig
