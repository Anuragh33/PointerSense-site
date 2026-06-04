export type Release = {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  html_url: string;
  assets: {
    id: number;
    name: string;
    size: number;
    browser_download_url: string;
  }[];
};

export async function getReleases(): Promise<Release[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };

  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    "https://api.github.com/repos/Anuragh33/PointerSense-site/releases",
    { headers, next: { revalidate: 300 } }
  );

  if (!res.ok) return [];
  const data = await res.json();
  return (data as Release[]).filter((r) => !r.draft);
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
