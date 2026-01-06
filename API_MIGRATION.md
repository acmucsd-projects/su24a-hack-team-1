# Vercel Serverless Functions Migration

All Express routes have been converted to Vercel serverless functions.

## Structure

```
api/
├── lib/
│   ├── db.js          # MongoDB connection utility (cached for serverless)
│   └── auth.js         # JWT token verification utility
├── login.js            # /api/login and /api/signup
├── profile.js          # /profile (GET)
├── posts.js            # /posts (GET, POST, /myposts, /save, /saved)
└── upload.js           # /upload (POST, PUT - profile creation/update with file uploads)
```

## Key Changes

1. **ES Modules**: All files use `import/export` instead of `require/module.exports`
2. **MongoDB Connection**: Cached connection for serverless functions (in `lib/db.js`)
3. **File Uploads**: Uses Vercel Blob storage instead of local file system
4. **No bin/www**: Vercel handles serverless function execution automatically

## Environment Variables Needed

Make sure to set these in Vercel:
- `DATABASE_URL` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `BLOB_READ_WRITE_TOKEN` - For Vercel Blob storage (if using file uploads)

## Routes

- `POST /api/signup` - User registration
- `POST /api/login` - User login
- `GET /profile` - Get user profile (requires auth)
- `GET /posts` - Get all posts
- `POST /posts` - Create new post (requires auth)
- `GET /posts/myposts` - Get user's posts (requires auth)
- `GET /posts/saved` - Get saved posts (requires auth)
- `POST /posts/save` - Save a post (requires auth)
- `POST /upload` - Create profile with file uploads (requires auth)
- `PUT /upload` - Update profile with file uploads (requires auth)

## Notes

- File uploads use Vercel Blob storage (requires `@vercel/blob` package)
- MongoDB connection is cached globally to avoid reconnecting on each request
- All routes maintain the same API structure as before

