import { SiteClient } from 'datocms-client'
import { Case, SiteInfo } from '../types/content'

const client = new SiteClient('b5d7d10dacad064cb899ce0d988500')

export const fetchCases = (): Promise<Case[]> =>
  client.items.all({ 'filter[type]': 'case' }, { allPages: true })

export const fetchSiteInfo = async (): Promise<SiteInfo> => {
  const [siteInfo] = await client.items.all(
    { 'filter[type]': 'siteinfo' },
    { allPages: true }
  )
  return {
    ...siteInfo,
    imageUrl: await client.uploads
      .find(siteInfo.image.uploadId)
      .then((upload) => upload.url),
  }
}
