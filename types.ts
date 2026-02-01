import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}