// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Pastors } from './collections/Pastors'
import { Series } from './collections/Series'
import { Sermons } from './collections/Sermons'
import { AudioResources } from './collections/AudioResources'
import { VideoResources } from './collections/VideoResources'
import { MinistryPlans } from './collections/MinistryPlans'
import { ChurchNews } from './collections/ChurchNews'
import { MeetingMinutes } from './collections/MeetingMinutes'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Pastors,
    Series,
    Sermons,
    AudioResources,
    VideoResources,
    MinistryPlans,
    ChurchNews,
    MeetingMinutes,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
