import { projects } from "@/data/projects";

const siteUrl = "https://olas-cyan.vercel.app";

export default function sitemap() {
  const staticRoutes = ["", "/work", "/services", "/resume", "/contact"].map(
    (route) => ({
      url: `${siteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" : "monthly",
      priority: route === "" ? 1 : 0.8,
    })
  );

  const projectRoutes = projects.map((project) => ({
    url: `${siteUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
