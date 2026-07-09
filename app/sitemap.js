import { site } from "@/lib/site";

export default function sitemap() {
  const routes = ["", "/services", "/service-areas", "/about", "/contact", "/quote", "/become-a-driver", "/track"];
  return routes.map((r) => ({
    url: `${site.url}${r}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: r === "" ? 1 : 0.8,
  }));
}
