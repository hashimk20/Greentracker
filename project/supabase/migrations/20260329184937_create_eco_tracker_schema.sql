/*
  # GreenTracker Eco-Tracking Schema

  ## Overview
  This migration sets up the complete database schema for the GreenTracker eco-tracking application.

  ## New Tables

  ### 1. `user_profiles`
  Extended user profile information for eco-tracking
  - `id` (uuid, primary key) - References auth.users
  - `username` (text) - Display name
  - `email` (text) - User email
  - `avatar_url` (text) - Profile picture URL
  - `eco_badge` (text) - Current eco level badge (e.g., "ECO NEWBIE")
  - `total_points` (integer) - Total eco points earned
  - `water_saved` (numeric) - Total water saved in liters
  - `energy_offset` (numeric) - Total energy offset in kWh
  - `co2_reduced` (numeric) - Total CO2 reduced in kg
  - `dark_mode` (boolean) - Dark mode preference
  - `compact_sidebar` (boolean) - Compact sidebar preference
  - `email_alerts` (boolean) - Email notifications setting
  - `app_alerts` (boolean) - App notifications setting
  - `account_visible` (boolean) - Leaderboard visibility
  - `created_at` (timestamptz) - Account creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ### 2. `eco_actions`
  Log of all eco-friendly actions taken by users
  - `id` (uuid, primary key)
  - `user_id` (uuid) - References user_profiles
  - `action_type` (text) - Type of action (e.g., "plant_tree", "save_water")
  - `title` (text) - Action title
  - `description` (text) - Action description
  - `points_earned` (integer) - Points awarded for this action
  - `water_impact` (numeric) - Water saved in liters
  - `energy_impact` (numeric) - Energy offset in kWh
  - `co2_impact` (numeric) - CO2 reduced in kg
  - `status` (text) - Status: "pending", "verified", "rejected"
  - `created_at` (timestamptz) - Action timestamp

  ### 3. `achievements`
  Achievements/badges earned by users
  - `id` (uuid, primary key)
  - `user_id` (uuid) - References user_profiles
  - `badge_name` (text) - Name of the badge
  - `badge_icon` (text) - Icon identifier
  - `description` (text) - Badge description
  - `earned_at` (timestamptz) - When the badge was earned

  ### 4. `community_challenges`
  Active community challenges
  - `id` (uuid, primary key)
  - `title` (text) - Challenge title
  - `description` (text) - Challenge description
  - `goal` (integer) - Target goal
  - `current_progress` (integer) - Current progress
  - `participants` (integer) - Number of participants
  - `is_active` (boolean) - Whether challenge is active
  - `start_date` (timestamptz) - Challenge start date
  - `end_date` (timestamptz) - Challenge end date
  - `created_at` (timestamptz) - Creation timestamp

  ## Security
  - Enable Row Level Security (RLS) on all tables
  - Users can read and update their own profiles
  - Users can read/insert/update their own eco actions
  - Users can read their own achievements
  - All users can read active community challenges
  - Only authenticated users can access data
*/

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text NOT NULL DEFAULT '',
  email text NOT NULL DEFAULT '',
  avatar_url text DEFAULT '',
  eco_badge text DEFAULT 'ECO NEWBIE',
  total_points integer DEFAULT 0,
  water_saved numeric DEFAULT 1240,
  energy_offset numeric DEFAULT 85,
  co2_reduced numeric DEFAULT 12.5,
  dark_mode boolean DEFAULT true,
  compact_sidebar boolean DEFAULT false,
  email_alerts boolean DEFAULT true,
  app_alerts boolean DEFAULT true,
  account_visible boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create eco_actions table
CREATE TABLE IF NOT EXISTS eco_actions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
  action_type text NOT NULL,
  title text NOT NULL,
  description text DEFAULT '',
  points_earned integer DEFAULT 0,
  water_impact numeric DEFAULT 0,
  energy_impact numeric DEFAULT 0,
  co2_impact numeric DEFAULT 0,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'verified', 'rejected')),
  created_at timestamptz DEFAULT now()
);

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES user_profiles(id) ON DELETE CASCADE NOT NULL,
  badge_name text NOT NULL,
  badge_icon text NOT NULL,
  description text DEFAULT '',
  earned_at timestamptz DEFAULT now()
);

-- Create community_challenges table
CREATE TABLE IF NOT EXISTS community_challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  goal integer NOT NULL,
  current_progress integer DEFAULT 0,
  participants integer DEFAULT 0,
  is_active boolean DEFAULT true,
  start_date timestamptz DEFAULT now(),
  end_date timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE eco_actions ENABLE ROW LEVEL SECURITY;
ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE community_challenges ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON user_profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- RLS Policies for eco_actions
CREATE POLICY "Users can view own actions"
  ON eco_actions FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own actions"
  ON eco_actions FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own actions"
  ON eco_actions FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for achievements
CREATE POLICY "Users can view own achievements"
  ON achievements FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own achievements"
  ON achievements FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for community_challenges
CREATE POLICY "Authenticated users can view active challenges"
  ON community_challenges FOR SELECT
  TO authenticated
  USING (is_active = true);

-- Insert default community challenge
INSERT INTO community_challenges (title, description, goal, current_progress, participants, is_active)
VALUES (
  'Operation Green Earth',
  'Join 2,500 warriors to plant 10k trees. We''re almost there!',
  10000,
  6500,
  2500,
  true
)
ON CONFLICT DO NOTHING;