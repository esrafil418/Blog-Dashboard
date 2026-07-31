# Blog Dashboard — Modern Full-Stack Dashboard Interface

A modern blog management dashboard built with **Next.js, TypeScript, TanStack Query, TanStack Table, shadcn/ui, Tailwind CSS, and React ecosystem tools**.

This project was created to practice building a production-style dashboard application with clean architecture, reusable components, server-state management, advanced UI patterns, and scalable project structure.

The goal of this project is not only to create a functional dashboard, but also to demonstrate modern frontend development practices used in real-world applications.

---

## Overview

Blog Dashboard is an admin-style application where users can:

- Browse posts
- Search posts and users
- View detailed posts
- View comments related to posts
- Create new posts
- Edit existing posts
- Delete posts with confirmation dialogs
- View dashboard statistics
- Analyze data with charts
- Manage data through advanced tables

The project started by consuming the DummyJSON API and focuses on frontend architecture, state management, UI development, and scalable component design.

---

## Features

### Dashboard

The homepage works as an analytics dashboard.

Included sections:

- Welcome section
- Statistics cards
- Recent posts
- Recent users
- Recent comments
- Data visualization charts

Dashboard features:

- Responsive layout
- Reusable cards
- Dark mode support
- Modern UI components
- Animated interactions

---

## Posts Management

The posts section provides complete CRUD functionality.

### View Posts

Features:

- List all posts
- Search posts
- Pagination
- Loading states
- Error handling
- Empty states

### Post Details

Each post page includes:

- Post title
- Content
- Tags
- Views
- Likes
- Dislikes
- Related comments
- Edit action
- Delete action

### Create Post

Implemented with:

- React Hook Form
- Zod validation
- shadcn/ui Input components
- shadcn/ui Textarea components
- Toast notifications

Validation examples:

- Title minimum length validation
- Body minimum length validation

### Edit Post

Users can:

- Open an edit page
- Update post information
- Submit changes
- Return to the post detail page

### Delete Post

Deletion includes:

- Confirmation dialog
- Mutation handling
- Cache invalidation
- Success/error notifications

---

## Users Management

The users section provides:

- User listing
- Search functionality
- Pagination
- User cards
- User detail support

The same reusable patterns are applied:

- React Query hooks
- Shared UI components
- Loading states
- Error states

---

## Comments

The application supports:

- All comments page
- Comments related to a specific post

Each post can display its related comments.

---

## Data Tables

The project includes a professional table system powered by:

- TanStack Table
- shadcn/ui Table components

Planned and implemented capabilities:

- Sorting
- Filtering
- Column visibility
- Row selection
- Server pagination

The table architecture is reusable and can support:

- Posts table
- Users table
- Comments table

---

## Authentication (Future)

Authentication is planned for a future phase.

Possible implementation:

- Express backend
- MongoDB
- bcrypt password hashing
- JWT authentication
- Protected routes
- Role-based authorization

---

## Tech Stack

### Framework

### Next.js

Used for:

- App Router
- Routing
- Layout system
- Dynamic routes
- Server/client components

---

## Language

### TypeScript

Used throughout the project for:

- Type safety
- Better developer experience
- Safer refactoring
- Maintainable codebase

---

## Styling

### Tailwind CSS

Used for:

- Responsive layouts
- Utility-based styling
- Fast UI development

---

## UI Library

### shadcn/ui

Used components:

- Button
- Card
- Input
- Textarea
- Dialog
- Alert Dialog
- Table
- Dropdown Menu

Benefits:

- Accessible components
- Customizable design
- Production-ready patterns

---

## Server State Management

### TanStack Query

Used for:

- API requests
- Caching
- Mutations
- Query invalidation
- Loading states
- Error handling

Examples:

```text
usePosts()
usePost()
useUsers()
useComments()
useCreatePost()
useUpdatePost()
useDeletePost()
```

---

## Forms

### React Hook Form

Used for:

- Form management
- Validation integration
- Performance optimization

### Zod

Used for:

- Schema validation
- Type inference
- Form safety

---

## Charts

### Recharts

Used for:

- Dashboard analytics
- Data visualization
- Activity charts

---

## Tables

### TanStack Table

Used for:

- Advanced data tables
- Sorting
- Filtering
- Pagination
- Column management

---

## Project Architecture

The project follows a feature-based structure.

Example:

```graph
src
│
├── app
│   ├── posts
│   ├── users
│   ├── comments
│   └── dashboard
│
├── components
│   ├── ui
│   ├── states
│   ├── DataTable.tsx
│   └── PageHeader.tsx
│
├── features
│   │
│   ├── posts
│   │   ├── components
│   │   ├── hooks
│   │   ├── services
│   │   ├── schemas
│   │   └── posts.keys.ts
│   │
│   ├── users
│   │
│   └── comments
│
├── hooks
│
├── providers
│
└── types
```

---

## React Query Architecture

Each feature has its own:

- API service
- Custom hooks
- Query keys

Example:

```graph
posts
│
├── services
│   └── posts.service.ts
│
├── hooks
│   ├── usePosts.ts
│   ├── usePost.ts
│   ├── useCreatePost.ts
│   ├── useUpdatePost.ts
│   └── useDeletePost.ts
│
└── posts.keys.ts
```

---

## Query Key Factory

The project uses query key factories.

Example:

```ts
export const postKeys = {
  all: ["posts"] as const,

  lists: () => [...postKeys.all, "list"],

  detail: (id: string) => [...postKeys.all, "detail", id],
};
```

Benefits:

- Consistent cache management
- Easier invalidation
- Better scalability

---

## UI/UX Features

Implemented:

- Responsive design
- Dark mode
- Toast notifications
- Loading skeletons
- Empty states
- Error states
- Confirmation dialogs
- Reusable components

---

## Development Challenges

During development, several real-world problems were solved:

### Library Version Differences

Handled:

- Tailwind CSS v4 migration issues
- Next.js version changes
- shadcn/ui updates

### API Handling

Implemented:

- Query states
- Mutations
- Cache updates
- Error handling

### Component Architecture

Refactored repeated code into:

- Shared components
- Custom hooks
- Feature folders

---

## Installation

Clone the repository:

```bash
git clone https://github.com/esrafil418/Blog-Dashboard.git
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```tsx
http://localhost:3000
```

---

## Environment Variables

Create:

```env
.env.local
```

Example:

```env
NEXT_PUBLIC_API_URL=
```

---

## Available Scripts

Development:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Production:

```bash
npm start
```

Lint:

```bash
npm run lint
```

---

## Future Improvements

### Backend Integration

Replace DummyJSON with:

- Node.js
- Express
- MongoDB
- Mongoose

---

### Authentication

Add:

- Register
- Login
- Logout
- JWT authentication
- Protected routes

---

### More Dashboard Features

Planned:

- Advanced analytics
- User activity tracking
- Export reports
- Notifications
- Settings page

---

### Performance Improvements

Possible improvements:

- React Server Components optimization
- Better caching strategies
- Image optimization
- Infinite scrolling

---

## Learning Goals

This project helped practice:

- Modern React patterns
- Next.js App Router
- TypeScript architecture
- Server state management
- Component design
- Form handling
- Data visualization
- Dashboard development
- Production-style frontend organization

---

**Created as a learning project to improve frontend engineering skills and build a portfolio-quality application.**
