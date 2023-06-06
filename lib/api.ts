import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

type Project = {
  title: string;
  link: string;
  imgUrl: string;
  favorite: boolean;
};

type TechStack = {
  name: string;
  image: string;
};

type Experience = {
  title: string;
  company: string;
  year: string;
  companyLink: string;
  description: string;
};

type About = {
  title: string;
  description: string[];
  currentProject: string;
  currentProjectUrl: string;
  techStack: TechStack[];
};

type SocialLinks = {
  twitter: string;
  linkedin: string;
  github: string;
};

type UserData = {
  githubUsername: string;
  name: string;
  designation: string;
  avatarUrl: string;
  email: string;
  address: string;
  projects: Project[];
  about: About;
  experience: Experience[];
  resumeUrl: string;
  socialLinks: SocialLinks;
};

type Repository = {
  id: number;
  name: string;
};


const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }

    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
