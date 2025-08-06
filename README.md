# Payload Blank Template

This template comes configured with the bare minimum to get started on anything you need.

## Quick start

This template can be deployed directly from our Cloud hosting and it will setup MongoDB and cloud S3 object storage for media.

## Quick Start - local setup

To spin up this template locally, follow these steps:

### Clone

After you click the `Deploy` button above, you'll want to have standalone copy of this repo on your machine. If you've already cloned this repo, skip to [Development](#development).

### Development

1. First [clone the repo](#clone) if you have not done so already
2. `cd my-project && cp .env.example .env` to copy the example environment variables. You'll need to add the `MONGODB_URI` from your Cloud project to your `.env` if you want to use S3 storage and the MongoDB database that was created for you.

3. `pnpm install && pnpm dev` to install dependencies and start the dev server
4. open `http://localhost:3000` to open the app in your browser

That's it! Changes made in `./src` will be reflected in your app. Follow the on-screen instructions to login and create your first admin user. Then check out [Production](#production) once you're ready to build and serve your app, and [Deployment](#deployment) when you're ready to go live.

#### Docker (Optional)

If you prefer to use Docker for local development instead of a local MongoDB instance, the provided docker-compose.yml file can be used.

To do so, follow these steps:

- Modify the `MONGODB_URI` in your `.env` file to `mongodb://127.0.0.1/<dbname>`
- Modify the `docker-compose.yml` file's `MONGODB_URI` to match the above `<dbname>`
- Run `docker-compose up` to start the database, optionally pass `-d` to run in the background.

## How it works

The Payload config is tailored specifically to the needs of most websites. It is pre-configured in the following ways:

### Collections

See the [Collections](https://payloadcms.com/docs/configuration/collections) docs for details on how to extend this functionality.

- #### Users (Authentication)

  Users are auth-enabled collections that have access to the admin panel.

  For additional help, see the official [Auth Example](https://github.com/payloadcms/payload/tree/main/examples/auth) or the [Authentication](https://payloadcms.com/docs/authentication/overview#authentication-overview) docs.

- #### Media

  This is the uploads enabled collection. It features pre-configured sizes, focal point and manual resizing to help you manage your pictures.

### Docker

Alternatively, you can use [Docker](https://www.docker.com) to spin up this template locally. To do so, follow these steps:

1. Follow [steps 1 and 2 from above](#development), the docker-compose file will automatically use the `.env` file in your project root
1. Next run `docker-compose up`
1. Follow [steps 4 and 5 from above](#development) to login and create your first admin user

That's it! The Docker instance will help you get up and running quickly while also standardizing the development environment across your teams.

## Questions

If you have any issues or questions, reach out to us on [Discord](https://discord.com/invite/payload) or start a [GitHub discussion](https://github.com/payloadcms/payload/discussions).

# Harbor Lutheran Church Resource Management System

港湾路德教会资源管理系统

## Project Introduction

This is a church resource management system based on Payload CMS, specifically designed for Harbor Lutheran Church, for managing sermons, audio, video, ministry plans, news announcements, and meeting minutes.

## Features

### 🎯 Core Features

- **Sermon Management**: Record sermon information, scriptures, summaries, etc.
- **Audio Resources**: Manage sermon audio file links
- **Video Resources**: Manage sermon video file links
- **Pastor Management**: Manage pastor information and avatars
- **Series Management**: Organize sermon series
- **Media Management**: Manage images and other media resources
- **Ministry Plans**: Manage church ministry plans
- **Church News**: Publish church announcements and news
- **Meeting Minutes**: Record and manage meeting minutes

### 🔍 Search Features

- Search by sermon title
- Filter by speaker
- Filter by series
- Search by date range
- Search by tags
- Filter by ministry category
- Filter by news category

### 📱 User Interface

- Responsive design, supports mobile and desktop
- Modern admin panel
- Intuitive resource display pages

## Technical Architecture

### Backend Technology

- **Payload CMS 3.0**: Content management system
- **MongoDB**: Database
- **Next.js 15**: Full-stack framework
- **TypeScript**: Type safety

### File Storage Strategy

- **Cloud Storage**: Audio, video, and image files stored in cloud space
- **Database**: Only stores file links and metadata
- **CDN**: Supports CDN acceleration

### Supported Cloud Storage

- Alibaba Cloud OSS
- Tencent Cloud COS
- AWS S3
- Qiniu Cloud

## Quick Start

### Requirements

- Node.js 18.20.2 or higher
- Docker (推荐) 或 PostgreSQL 数据库
- Cloud storage service account

### 使用 Docker (推荐)

1. **启动数据库服务**

```bash
npm run docker:up
```

2. **配置环境变量**
   创建 `.env` 文件：

```env
# Docker PostgreSQL 数据库配置
DATABASE_URI=postgresql://cms:Sun4Love@localhost:3017/cms

# Payload CMS 配置
PAYLOAD_SECRET=your-secret-key-here

# 云存储配置
CLOUD_STORAGE_REGION=cn-hangzhou
CLOUD_STORAGE_BUCKET=your-bucket-name
CLOUD_STORAGE_ACCESS_KEY_ID=your-access-key-id
CLOUD_STORAGE_ACCESS_KEY_SECRET=your-access-key-secret
CLOUD_STORAGE_DOMAIN=your-cdn-domain.com

# 其他配置
NODE_ENV=development
NODE_OPTIONS="--no-deprecation"
```

3. **启动开发服务器**

```bash
npm run dev
```

### 使用本地 PostgreSQL

1. **Clone Project**

```bash
git clone <repository-url>
cd payload-cms-harbor-lutheran
```

2. **Install Dependencies**

```bash
npm install
```

3. **Configure Environment Variables**
   Create `.env` file:

```env
# PostgreSQL Connection String
DATABASE_URI=postgresql://username:password@localhost:5432/harbor_lutheran_db

# Payload CMS Secret
PAYLOAD_SECRET=your-secret-key-here

# Cloud Storage Configuration
CLOUD_STORAGE_REGION=cn-hangzhou
CLOUD_STORAGE_BUCKET=your-bucket-name
CLOUD_STORAGE_ACCESS_KEY_ID=your-access-key-id
CLOUD_STORAGE_ACCESS_KEY_SECRET=your-access-key-secret
CLOUD_STORAGE_DOMAIN=your-cdn-domain.com

# Other Configuration
NODE_ENV=development
```

4. **Start Development Server**

```bash
npm run dev
```

5. **Access System**

- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3000/admin

## User Guide

### Administrator Operations

#### 1. Pastor Management

- Go to Admin Panel → Pastors
- Click "New" to add pastor information
- Upload avatar to cloud storage and enter link

#### 2. Sermon Series Management

- Go to Admin Panel → Series
- Create new sermon series
- Set series title, description, time range

#### 3. Sermon Management

- Go to Admin Panel → Sermons
- Fill in sermon title, speaker, scripture, etc.
- Select associated series
- Set sermon status

#### 4. Audio/Video Management

- Upload files to cloud storage
- Go to Admin Panel → Audio Resources/Video Resources
- Enter file links and related information
- Associate with corresponding sermon

#### 5. Ministry Plan Management

- Go to Admin Panel → Ministry Plans
- Create new ministry plans
- Set ministry category, time, leader
- Add budget information and team members

#### 6. News Management

- Go to Admin Panel → Church News
- Publish church announcements, event notices, etc.
- Set news category and priority
- Add related images and files

#### 7. Meeting Minutes Management

- Go to Admin Panel → Meeting Minutes
- Record content of various meetings
- Add meeting decisions and action items
- Set next meeting arrangements

### Congregation Usage

#### 1. Browse Sermons

- Visit homepage to view latest sermons
- Use search function to find specific sermons
- Filter by speaker or series

#### 2. Listen/Watch

- Click audio/video links
- Support online playback and download

#### 3. View Ministry Plans

- Understand church ministry arrangements
- View ministry progress status

#### 4. Read News

- Learn about latest church updates
- View event notices and announcements

## Data Model

### Collection Structure

```
Users (Users)
├── email
└── auth fields

Pastors (Pastors)
├── name (Name)
├── title (Title)
├── email (Email)
├── phone (Phone)
├── bio (Biography)
├── avatar (Avatar Link)
└── isActive (Active Status)

Series (Series)
├── title (Series Title)
├── description (Series Description)
├── coverImage (Cover Image Link)
├── startDate (Start Date)
├── endDate (End Date)
├── isActive (Active)
└── tags (Tags)

Sermons (Sermons)
├── title (Sermon Title)
├── subtitle (Subtitle)
├── pastor (Speaker - Related to Pastors)
├── series (Series - Related to Series)
├── preachedDate (Preached Date)
├── scripture (Scripture)
├── summary (Summary)
├── content (Content)
├── status (Status)
├── tags (Tags)
└── notes (Notes)

AudioResources (Audio Resources)
├── title (Audio Title)
├── sermon (Related Sermon)
├── description (Description)
├── audioUrl (Audio File Link)
├── duration (Duration)
├── fileSize (File Size)
├── quality (Audio Quality)
├── isPublic (Public Access)
├── downloadUrl (Download Link)
└── tags (Tags)

VideoResources (Video Resources)
├── title (Video Title)
├── sermon (Related Sermon)
├── description (Description)
├── videoUrl (Video File Link)
├── thumbnailUrl (Thumbnail Link)
├── duration (Duration)
├── fileSize (File Size)
├── quality (Video Quality)
├── isPublic (Public Access)
├── youtubeUrl (YouTube Link)
├── vimeoUrl (Vimeo Link)
├── downloadUrl (Download Link)
└── tags (Tags)

Media (Media)
├── title (Title)
├── alt (Alt Text)
├── url (Image Link)
├── type (Image Type)
├── description (Description)
├── width (Width)
├── height (Height)
└── fileSize (File Size)

MinistryPlans (Ministry Plans)
├── title (Ministry Plan Title)
├── ministry (Ministry Category)
├── description (Ministry Description)
├── objectives (Objectives & Plans)
├── startDate (Start Date)
├── endDate (End Date)
├── status (Status)
├── leader (Leader)
├── team (Team Members)
├── budget (Budget Information)
├── location (Activity Location)
├── attachments (Related Files)
├── tags (Tags)
└── isPublic (Public Display)

ChurchNews (Church News)
├── title (News Title)
├── subtitle (Subtitle)
├── category (News Category)
├── content (News Content)
├── summary (News Summary)
├── author (Author)
├── publishDate (Publish Date)
├── status (Publish Status)
├── featuredImage (Featured Image)
├── images (Related Images)
├── attachments (Related Files)
├── priority (Priority)
├── expiryDate (Expiry Date)
├── tags (Tags)
├── isPublic (Public Display)
├── allowComments (Allow Comments)
└── viewCount (View Count)

MeetingMinutes (Meeting Minutes)
├── title (Meeting Title)
├── meetingType (Meeting Type)
├── meetingDate (Meeting Date)
├── startTime (Start Time)
├── endTime (End Time)
├── location (Meeting Location)
├── attendees (Attendees)
├── chairperson (Chairperson)
├── secretary (Secretary)
├── agenda (Meeting Agenda)
├── minutes (Meeting Minutes)
├── decisions (Meeting Decisions)
├── actionItems (Action Items)
├── nextMeeting (Next Meeting Arrangement)
├── attachments (Related Files)
├── status (Status)
├── tags (Tags)
├── isPublic (Public Display)
└── confidential (Confidential Content)
```

## Deployment Guide

### Production Environment Deployment

1. **Build Project**

```bash
npm run build
```

2. **Start Production Server**

```bash
npm start
```

### Environment Variable Configuration

Production environment needs to configure the following environment variables:

```env
# Database
DATABASE_URI=postgresql://username:password@production-host:5432/harbor_lutheran_db

# Security
PAYLOAD_SECRET=production-secret-key

# Cloud Storage
CLOUD_STORAGE_REGION=cn-hangzhou
CLOUD_STORAGE_BUCKET=production-bucket
CLOUD_STORAGE_ACCESS_KEY_ID=production-access-key
CLOUD_STORAGE_ACCESS_KEY_SECRET=production-secret
CLOUD_STORAGE_DOMAIN=production-cdn-domain.com

# Environment
NODE_ENV=production
```

## Maintenance Recommendations

### Database Maintenance

- Regularly backup MongoDB data
- Monitor database performance
- Clean up unused data

### File Storage Maintenance

- Regularly check cloud storage file integrity
- Monitor storage space usage
- Set file access permissions

### System Updates

- Regularly update dependency packages
- Monitor security vulnerabilities
- Backup important data

## Technical Support

If you have any questions, please contact the system administrator or refer to the Payload CMS official documentation.

## License

MIT License
