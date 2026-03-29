import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * TerrainX documentation site config for Quartz v4.
 * This file is copied into the Quartz checkout during the GitHub Actions build.
 *
 * To use locally:
 *   npx quartz create   (first time only, in a separate folder)
 *   Then replace quartz.config.ts with this file.
 *
 * Change baseUrl to match your GitHub Pages URL:
 *   <your-github-username>.github.io/<your-repo-name>
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "TerrainX",
    pageTitleSuffix: " — Map Component Docs",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "sakshamsahgal.github.io/TerrainX",
    ignorePatterns: [".obsidian", "templates", "private"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#fafafa",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#1a1a1a",
          secondary: "#3b82f6",
          tertiary: "#60a5fa",
          highlight: "rgba(59,130,246,0.1)",
          textHighlight: "#bfdbfe",
        },
        darkMode: {
          light: "#111111",
          lightgray: "#2a2a2a",
          gray: "#555555",
          darkgray: "#d4d4d4",
          dark: "#f5f5f5",
          secondary: "#60a5fa",
          tertiary: "#93c5fd",
          highlight: "rgba(96,165,250,0.1)",
          textHighlight: "#1e3a5f",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({ theme: { light: "github-light", dark: "github-dark" } }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
