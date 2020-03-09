import { SiteClient } from 'datocms-client'

require('dotenv').config()

const client = new SiteClient(process.env.API_KEY)

export default client.items.all({ 'filter[type]': 'case' }, { allPages: true })
