import { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createBrowserClient(supabaseUrl, supabaseAnonKey)

// Types
export interface BlogAuthor {
  id: string
  name: string
  email: string
  avatar_url?: string
  job_title?: string
  bio?: string
  twitter_url?: string
  linkedin_url?: string
  created_at: string
}

export interface BlogCategory {
  id: string
  name: string
  slug: string
  created_at: string
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  summary: string
  content: string
  thumbnail_url?: string
  author_id?: string
  published_at?: string
  updated_at: string
  is_published: boolean
  reading_time: number
  views: number
  created_at: string
  author?: BlogAuthor
  categories?: BlogCategory[]
}
