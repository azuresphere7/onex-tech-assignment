import { ARTICLE_TYPE } from "./enums";

export interface NavbarConfigMenuItem {
  id: number;
  name: string;
  path: string;
}

export interface NavbarConfig {
  id: number;
  name: string;
  items: NavbarConfigMenuItem[];
}

export interface ArticleConfig {
  title: string;
  imageURL: string;
  imageCaptain: string;
  content: string;
  type: ARTICLE_TYPE;
  date: string;
}

export interface SidebarListItem {
  id: number;
  type: string;
  title: string;
}

export interface RelatedPost {
  id: number;
  imageURL: string;
  title: string;
  content: string;
}

export interface FooterMenuItem {
  id: number;
  name: string;
  path: string;
}

export interface FooterMenu {
  id: number;
  title: string;
  items: FooterMenuItem[];
}