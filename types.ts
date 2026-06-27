
import { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
  challenge?: string;
  solution?: string;
}

export interface TrustPoint {
  text: string;
}

export interface ProductDetail {
  name: string;
  tagline: string;
  points: string[];
  isService?: boolean;
  betaLink?: string;
  betaLinkText?: string;
  websiteLink?: string;
  websiteLinkText?: string;
  disclaimer?: string;
  status?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Contributor {
  name: string;
  linkedin?: string;
}
