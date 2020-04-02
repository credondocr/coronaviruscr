import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  BooleanType: any;
  ItemId: any;
  FloatType: any;
  IntType: any;
  Date: any;
  UploadId: any;
  CustomData: any;
  MetaTagAttributes: any;
};

export type BooleanFilter = {
  eq?: Maybe<Scalars['BooleanType']>;
};


export type CaseModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<DateTimeFilter>;
  _publicationScheduledAt?: Maybe<DateTimeFilter>;
  _publishedAt?: Maybe<DateTimeFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  _isValid?: Maybe<BooleanFilter>;
  location?: Maybe<LatLonFilter>;
  news?: Maybe<LinksFilter>;
  nationality?: Maybe<StringFilter>;
  age?: Maybe<IntegerFilter>;
  gender?: Maybe<StringFilter>;
  casestatus?: Maybe<StringFilter>;
  updated?: Maybe<DateFilter>;
  detected?: Maybe<DateFilter>;
  OR?: Maybe<Array<Maybe<CaseModelFilter>>>;
};

export enum CaseModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  nationality_ASC = 'nationality_ASC',
  nationality_DESC = 'nationality_DESC',
  age_ASC = 'age_ASC',
  age_DESC = 'age_DESC',
  gender_ASC = 'gender_ASC',
  gender_DESC = 'gender_DESC',
  casestatus_ASC = 'casestatus_ASC',
  casestatus_DESC = 'casestatus_DESC',
  updated_ASC = 'updated_ASC',
  updated_DESC = 'updated_DESC',
  detected_ASC = 'detected_ASC',
  detected_DESC = 'detected_DESC'
}

export type CaseRecord = {
   __typename?: 'CaseRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _updatedAt: Scalars['DateTime'];
  age?: Maybe<Scalars['IntType']>;
  casestatus?: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  detected?: Maybe<Scalars['Date']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['ItemId'];
  location?: Maybe<LatLonField>;
  nationality?: Maybe<Scalars['String']>;
  news: Array<NewsRecord>;
  updated?: Maybe<Scalars['Date']>;
  updatedAt: Scalars['DateTime'];
};


export type CaseRecord_seoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type CollectionMetadata = {
   __typename?: 'CollectionMetadata';
  count: Scalars['IntType'];
};

export enum ColorBucketType {
  red = 'red',
  orange = 'orange',
  pink = 'pink',
  cyan = 'cyan',
  purple = 'purple',
  blue = 'blue',
  yellow = 'yellow',
  green = 'green',
  brown = 'brown',
  grey = 'grey',
  white = 'white',
  black = 'black'
}

export type ColorField = {
   __typename?: 'ColorField';
  alpha?: Maybe<Scalars['IntType']>;
  blue?: Maybe<Scalars['IntType']>;
  green?: Maybe<Scalars['IntType']>;
  hex?: Maybe<Scalars['String']>;
  red?: Maybe<Scalars['IntType']>;
};



export type DateFilter = {
  gt?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  exists?: Maybe<Scalars['BooleanType']>;
  eq?: Maybe<Scalars['Date']>;
  neq?: Maybe<Scalars['Date']>;
};


export type DateTimeFilter = {
  gt?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  exists?: Maybe<Scalars['BooleanType']>;
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
};

export enum FaviconType {
  icon = 'icon',
  appleTouchIcon = 'appleTouchIcon',
  msApplication = 'msApplication'
}

export type FileField = {
   __typename?: 'FileField';
  _createdAt: Scalars['DateTime'];
  _updatedAt: Scalars['DateTime'];
  alt?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  basename: Scalars['String'];
  blurUpThumb?: Maybe<Scalars['String']>;
  blurhash?: Maybe<Scalars['String']>;
  colors: Array<Maybe<ColorField>>;
  copyright?: Maybe<Scalars['String']>;
  customData?: Maybe<Scalars['CustomData']>;
  exifInfo?: Maybe<Scalars['CustomData']>;
  filename: Scalars['String'];
  format: Scalars['String'];
  height?: Maybe<Scalars['IntType']>;
  id: Scalars['UploadId'];
  mimeType: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType'];
  smartTags: Array<Maybe<Scalars['String']>>;
  tags: Array<Maybe<Scalars['String']>>;
  title?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']>;
};


export type FileFieldaltArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldblurUpThumbArgs = {
  punch?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  imgixParams?: Maybe<ImgixParams>;
};


export type FileFieldcustomDataArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldresponsiveImageArgs = {
  imgixParams?: Maybe<ImgixParams>;
  sizes?: Maybe<Scalars['String']>;
};


export type FileFieldtitleArgs = {
  locale?: Maybe<SiteLocale>;
};


export type FileFieldurlArgs = {
  imgixParams?: Maybe<ImgixParams>;
};

export type FileFilter = {
  eq?: Maybe<Scalars['UploadId']>;
  neq?: Maybe<Scalars['UploadId']>;
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  exists?: Maybe<Scalars['BooleanType']>;
};


export type GlobalSeoField = {
   __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']>;
  titleSuffix?: Maybe<Scalars['String']>;
  twitterAccount?: Maybe<Scalars['String']>;
};

export type ImgixParams = {
  ar?: Maybe<Scalars['String']>;
  auto?: Maybe<Array<ImgixParamsAuto>>;
  bg?: Maybe<Scalars['String']>;
  blendAlign?: Maybe<Array<ImgixParamsBlendAlign>>;
  blendAlpha?: Maybe<Scalars['IntType']>;
  blendCrop?: Maybe<Array<ImgixParamsBlendCrop>>;
  blendFit?: Maybe<ImgixParamsBlendFit>;
  blendH?: Maybe<Scalars['FloatType']>;
  blendMode?: Maybe<ImgixParamsBlendMode>;
  blendPad?: Maybe<Scalars['IntType']>;
  blendSize?: Maybe<ImgixParamsBlendSize>;
  blendW?: Maybe<Scalars['FloatType']>;
  blendX?: Maybe<Scalars['IntType']>;
  blendY?: Maybe<Scalars['IntType']>;
  blend?: Maybe<Scalars['String']>;
  blur?: Maybe<Scalars['IntType']>;
  borderRadiusInner?: Maybe<Scalars['String']>;
  borderRadius?: Maybe<Scalars['String']>;
  border?: Maybe<Scalars['String']>;
  bri?: Maybe<Scalars['IntType']>;
  ch?: Maybe<Array<ImgixParamsCh>>;
  chromasub?: Maybe<Scalars['IntType']>;
  colorquant?: Maybe<Scalars['IntType']>;
  colors?: Maybe<Scalars['IntType']>;
  con?: Maybe<Scalars['IntType']>;
  cornerRadius?: Maybe<Scalars['String']>;
  crop?: Maybe<Array<ImgixParamsCrop>>;
  cs?: Maybe<ImgixParamsCs>;
  dl?: Maybe<Scalars['String']>;
  dpi?: Maybe<Scalars['IntType']>;
  dpr?: Maybe<Scalars['FloatType']>;
  duotoneAlpha?: Maybe<Scalars['IntType']>;
  duotone?: Maybe<Scalars['String']>;
  exp?: Maybe<Scalars['IntType']>;
  expires?: Maybe<Scalars['IntType']>;
  faceindex?: Maybe<Scalars['IntType']>;
  facepad?: Maybe<Scalars['FloatType']>;
  faces?: Maybe<Scalars['IntType']>;
  fillColor?: Maybe<Scalars['String']>;
  fill?: Maybe<ImgixParamsFill>;
  fit?: Maybe<ImgixParamsFit>;
  flip?: Maybe<ImgixParamsFlip>;
  fm?: Maybe<ImgixParamsFm>;
  fpDebug?: Maybe<Scalars['BooleanType']>;
  fpX?: Maybe<Scalars['FloatType']>;
  fpY?: Maybe<Scalars['FloatType']>;
  fpZ?: Maybe<Scalars['IntType']>;
  gam?: Maybe<Scalars['IntType']>;
  h?: Maybe<Scalars['FloatType']>;
  high?: Maybe<Scalars['IntType']>;
  htn?: Maybe<Scalars['IntType']>;
  hue?: Maybe<Scalars['IntType']>;
  invert?: Maybe<Scalars['BooleanType']>;
  lossless?: Maybe<Scalars['BooleanType']>;
  markAlign?: Maybe<Array<ImgixParamsMarkAlign>>;
  markAlpha?: Maybe<Scalars['IntType']>;
  markBase?: Maybe<Scalars['String']>;
  markFit?: Maybe<ImgixParamsMarkFit>;
  markH?: Maybe<Scalars['FloatType']>;
  markPad?: Maybe<Scalars['IntType']>;
  markScale?: Maybe<Scalars['IntType']>;
  markW?: Maybe<Scalars['FloatType']>;
  markX?: Maybe<Scalars['IntType']>;
  markY?: Maybe<Scalars['IntType']>;
  mark?: Maybe<Scalars['String']>;
  mask?: Maybe<Scalars['String']>;
  maskbg?: Maybe<Scalars['String']>;
  maxH?: Maybe<Scalars['IntType']>;
  maxW?: Maybe<Scalars['IntType']>;
  minH?: Maybe<Scalars['IntType']>;
  minW?: Maybe<Scalars['IntType']>;
  monochrome?: Maybe<Scalars['String']>;
  nr?: Maybe<Scalars['IntType']>;
  nrs?: Maybe<Scalars['IntType']>;
  orient?: Maybe<Scalars['IntType']>;
  pad?: Maybe<Scalars['IntType']>;
  page?: Maybe<Scalars['IntType']>;
  palette?: Maybe<ImgixParamsPalette>;
  prefix?: Maybe<Scalars['String']>;
  px?: Maybe<Scalars['IntType']>;
  q?: Maybe<Scalars['IntType']>;
  rect?: Maybe<Scalars['String']>;
  rot?: Maybe<Scalars['FloatType']>;
  sat?: Maybe<Scalars['IntType']>;
  sepia?: Maybe<Scalars['IntType']>;
  shad?: Maybe<Scalars['FloatType']>;
  sharp?: Maybe<Scalars['FloatType']>;
  trimColor?: Maybe<Scalars['String']>;
  trimMd?: Maybe<Scalars['FloatType']>;
  trimPad?: Maybe<Scalars['IntType']>;
  trimSd?: Maybe<Scalars['FloatType']>;
  trimTol?: Maybe<Scalars['FloatType']>;
  trim?: Maybe<ImgixParamsTrim>;
  txtAlign?: Maybe<Array<ImgixParamsTxtAlign>>;
  txtClip?: Maybe<Array<ImgixParamsTxtClip>>;
  txtColor?: Maybe<Scalars['String']>;
  txtFit?: Maybe<ImgixParamsTxtFit>;
  txtFont?: Maybe<Scalars['String']>;
  txtLead?: Maybe<Scalars['IntType']>;
  txtLig?: Maybe<Scalars['IntType']>;
  txtLineColor?: Maybe<Scalars['String']>;
  txtLine?: Maybe<Scalars['IntType']>;
  txtPad?: Maybe<Scalars['IntType']>;
  txtShad?: Maybe<Scalars['FloatType']>;
  txtSize?: Maybe<Scalars['IntType']>;
  txtTrack?: Maybe<Scalars['IntType']>;
  txtWidth?: Maybe<Scalars['IntType']>;
  txt?: Maybe<Scalars['String']>;
  usm?: Maybe<Scalars['IntType']>;
  usmrad?: Maybe<Scalars['FloatType']>;
  vib?: Maybe<Scalars['IntType']>;
  w?: Maybe<Scalars['FloatType']>;
};

export enum ImgixParamsAuto {
  enhance = 'enhance',
  format = 'format',
  redeye = 'redeye',
  compress = 'compress'
}

export enum ImgixParamsBlendAlign {
  top = 'top',
  bottom = 'bottom',
  middle = 'middle',
  left = 'left',
  right = 'right',
  center = 'center'
}

export enum ImgixParamsBlendCrop {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  faces = 'faces'
}

export enum ImgixParamsBlendFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  scale = 'scale',
  max = 'max'
}

export enum ImgixParamsBlendMode {
  color = 'color',
  burn = 'burn',
  dodge = 'dodge',
  darken = 'darken',
  difference = 'difference',
  exclusion = 'exclusion',
  hardlight = 'hardlight',
  hue = 'hue',
  lighten = 'lighten',
  luminosity = 'luminosity',
  multiply = 'multiply',
  overlay = 'overlay',
  saturation = 'saturation',
  screen = 'screen',
  softlight = 'softlight',
  normal = 'normal'
}

export enum ImgixParamsBlendSize {
  inherit = 'inherit'
}

export enum ImgixParamsCh {
  width = 'width',
  dpr = 'dpr',
  saveData = 'saveData'
}

export enum ImgixParamsCrop {
  top = 'top',
  bottom = 'bottom',
  left = 'left',
  right = 'right',
  faces = 'faces',
  entropy = 'entropy',
  edges = 'edges',
  focalpoint = 'focalpoint'
}

export enum ImgixParamsCs {
  srgb = 'srgb',
  adobergb1998 = 'adobergb1998',
  tinysrgb = 'tinysrgb',
  strip = 'strip'
}

export enum ImgixParamsFill {
  solid = 'solid',
  blur = 'blur'
}

export enum ImgixParamsFit {
  clamp = 'clamp',
  clip = 'clip',
  crop = 'crop',
  facearea = 'facearea',
  fill = 'fill',
  fillmax = 'fillmax',
  max = 'max',
  min = 'min',
  scale = 'scale'
}

export enum ImgixParamsFlip {
  h = 'h',
  v = 'v',
  hv = 'hv'
}

export enum ImgixParamsFm {
  gif = 'gif',
  jpg = 'jpg',
  jp2 = 'jp2',
  json = 'json',
  jxr = 'jxr',
  pjpg = 'pjpg',
  mp4 = 'mp4',
  png = 'png',
  png8 = 'png8',
  png32 = 'png32',
  webp = 'webp',
  webm = 'webm'
}

export enum ImgixParamsMarkAlign {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  left = 'left',
  center = 'center',
  right = 'right'
}

export enum ImgixParamsMarkFit {
  clip = 'clip',
  crop = 'crop',
  fill = 'fill',
  max = 'max',
  scale = 'scale'
}

export enum ImgixParamsPalette {
  css = 'css',
  json = 'json'
}

export enum ImgixParamsTrim {
  auto = 'auto',
  color = 'color'
}

export enum ImgixParamsTxtAlign {
  top = 'top',
  middle = 'middle',
  bottom = 'bottom',
  left = 'left',
  center = 'center',
  right = 'right'
}

export enum ImgixParamsTxtClip {
  start = 'start',
  middle = 'middle',
  end = 'end',
  ellipsis = 'ellipsis'
}

export enum ImgixParamsTxtFit {
  max = 'max'
}

export type IntegerFilter = {
  gt?: Maybe<Scalars['IntType']>;
  lt?: Maybe<Scalars['IntType']>;
  gte?: Maybe<Scalars['IntType']>;
  lte?: Maybe<Scalars['IntType']>;
  exists?: Maybe<Scalars['BooleanType']>;
  eq?: Maybe<Scalars['IntType']>;
  neq?: Maybe<Scalars['IntType']>;
};


export type InUseFilter = {
  eq?: Maybe<Scalars['BooleanType']>;
};


export type ItemIdFilter = {
  eq?: Maybe<Scalars['ItemId']>;
  neq?: Maybe<Scalars['ItemId']>;
  in?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
};

export enum ItemStatus {
  draft = 'draft',
  updated = 'updated',
  published = 'published'
}

export type LatLonField = {
   __typename?: 'LatLonField';
  latitude?: Maybe<Scalars['FloatType']>;
  longitude?: Maybe<Scalars['FloatType']>;
};

export type LatLonFilter = {
  near?: Maybe<LatLonNearFilter>;
  exists?: Maybe<Scalars['BooleanType']>;
};

export type LatLonNearFilter = {
  latitude: Scalars['FloatType'];
  longitude: Scalars['FloatType'];
  radius: Scalars['FloatType'];
};

export type LinkFilter = {
  eq?: Maybe<Scalars['ItemId']>;
  neq?: Maybe<Scalars['ItemId']>;
  in?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  exists?: Maybe<Scalars['BooleanType']>;
};

export type LinksFilter = {
  eq?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  allIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  anyIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['ItemId']>>>;
  exists?: Maybe<Scalars['BooleanType']>;
};


export enum MuxThumbnailFormatType {
  jpg = 'jpg',
  png = 'png',
  gif = 'gif'
}

export type NewsModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<DateTimeFilter>;
  _publicationScheduledAt?: Maybe<DateTimeFilter>;
  _publishedAt?: Maybe<DateTimeFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  _isValid?: Maybe<BooleanFilter>;
  thumbnail?: Maybe<FileFilter>;
  date?: Maybe<DateFilter>;
  title?: Maybe<StringFilter>;
  source?: Maybe<LinkFilter>;
  url?: Maybe<StringFilter>;
  OR?: Maybe<Array<Maybe<NewsModelFilter>>>;
};

export enum NewsModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC',
  title_ASC = 'title_ASC',
  title_DESC = 'title_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC'
}

export type NewsRecord = {
   __typename?: 'NewsRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['Date']>;
  id: Scalars['ItemId'];
  source?: Maybe<SourceRecord>;
  thumbnail?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type NewsRecord_seoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type OrientationFilter = {
  eq?: Maybe<UploadOrientation>;
  neq?: Maybe<UploadOrientation>;
};

export type PageModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<DateTimeFilter>;
  _publicationScheduledAt?: Maybe<DateTimeFilter>;
  _publishedAt?: Maybe<DateTimeFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  _isValid?: Maybe<BooleanFilter>;
  seo?: Maybe<SeoFilter>;
  name?: Maybe<StringFilter>;
  OR?: Maybe<Array<Maybe<PageModelFilter>>>;
};

export enum PageModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC'
}

export type PageRecord = {
   __typename?: 'PageRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  seo?: Maybe<SeoField>;
  updatedAt: Scalars['DateTime'];
};


export type PageRecord_seoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type Query = {
   __typename?: 'Query';
  _allCasesMeta: CollectionMetadata;
  _allNewsMeta: CollectionMetadata;
  _allPagesMeta: CollectionMetadata;
  _allReportsMeta: CollectionMetadata;
  _allSourcesMeta: CollectionMetadata;
  _allUploadsMeta?: Maybe<CollectionMetadata>;
  _site: Site;
  allCases: Array<CaseRecord>;
  allNews: Array<NewsRecord>;
  allPages: Array<PageRecord>;
  allReports: Array<ReportRecord>;
  allSources: Array<SourceRecord>;
  allUploads: Array<FileField>;
  case?: Maybe<CaseRecord>;
  news?: Maybe<NewsRecord>;
  page?: Maybe<PageRecord>;
  report?: Maybe<ReportRecord>;
  source?: Maybe<SourceRecord>;
  upload?: Maybe<FileField>;
};


export type Query_allCasesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<CaseModelFilter>;
};


export type Query_allNewsMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<NewsModelFilter>;
};


export type Query_allPagesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<PageModelFilter>;
};


export type Query_allReportsMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<ReportModelFilter>;
};


export type Query_allSourcesMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<SourceModelFilter>;
};


export type Query_allUploadsMetaArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<UploadFilter>;
};


export type Query_siteArgs = {
  locale?: Maybe<SiteLocale>;
};


export type QueryallCasesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<CaseModelFilter>;
  orderBy?: Maybe<Array<Maybe<CaseModelOrderBy>>>;
};


export type QueryallNewsArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<NewsModelFilter>;
  orderBy?: Maybe<Array<Maybe<NewsModelOrderBy>>>;
};


export type QueryallPagesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<PageModelFilter>;
  orderBy?: Maybe<Array<Maybe<PageModelOrderBy>>>;
};


export type QueryallReportsArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<ReportModelFilter>;
  orderBy?: Maybe<Array<Maybe<ReportModelOrderBy>>>;
};


export type QueryallSourcesArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<SourceModelFilter>;
  orderBy?: Maybe<Array<Maybe<SourceModelOrderBy>>>;
};


export type QueryallUploadsArgs = {
  locale?: Maybe<SiteLocale>;
  skip?: Maybe<Scalars['IntType']>;
  first?: Maybe<Scalars['IntType']>;
  filter?: Maybe<UploadFilter>;
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>;
};


export type QuerycaseArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<CaseModelFilter>;
  orderBy?: Maybe<Array<Maybe<CaseModelOrderBy>>>;
};


export type QuerynewsArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<NewsModelFilter>;
  orderBy?: Maybe<Array<Maybe<NewsModelOrderBy>>>;
};


export type QuerypageArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<PageModelFilter>;
  orderBy?: Maybe<Array<Maybe<PageModelOrderBy>>>;
};


export type QueryreportArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<ReportModelFilter>;
  orderBy?: Maybe<Array<Maybe<ReportModelOrderBy>>>;
};


export type QuerysourceArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<SourceModelFilter>;
  orderBy?: Maybe<Array<Maybe<SourceModelOrderBy>>>;
};


export type QueryuploadArgs = {
  locale?: Maybe<SiteLocale>;
  filter?: Maybe<UploadFilter>;
  orderBy?: Maybe<Array<Maybe<UploadOrderBy>>>;
};

export type ReportModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<DateTimeFilter>;
  _publicationScheduledAt?: Maybe<DateTimeFilter>;
  _publishedAt?: Maybe<DateTimeFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  _isValid?: Maybe<BooleanFilter>;
  pendingNationalityCases?: Maybe<IntegerFilter>;
  casesInSanJose?: Maybe<IntegerFilter>;
  casesInGuanacaste?: Maybe<IntegerFilter>;
  casesInUnknownLocation?: Maybe<IntegerFilter>;
  casesInHeredia?: Maybe<IntegerFilter>;
  casesInLimon?: Maybe<IntegerFilter>;
  casesInPuntarenas?: Maybe<IntegerFilter>;
  casesInCartago?: Maybe<IntegerFilter>;
  casesInAlajuela?: Maybe<IntegerFilter>;
  foreignersCases?: Maybe<IntegerFilter>;
  costaRicanCases?: Maybe<IntegerFilter>;
  elderlyCases?: Maybe<IntegerFilter>;
  adultCases?: Maybe<IntegerFilter>;
  juvenileCases?: Maybe<IntegerFilter>;
  menCases?: Maybe<IntegerFilter>;
  womenCases?: Maybe<IntegerFilter>;
  deceasedCases?: Maybe<IntegerFilter>;
  recoveredCases?: Maybe<IntegerFilter>;
  activeCases?: Maybe<IntegerFilter>;
  discardedCases?: Maybe<IntegerFilter>;
  confirmedCases?: Maybe<IntegerFilter>;
  date?: Maybe<DateFilter>;
  OR?: Maybe<Array<Maybe<ReportModelFilter>>>;
};

export enum ReportModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  pendingNationalityCases_ASC = 'pendingNationalityCases_ASC',
  pendingNationalityCases_DESC = 'pendingNationalityCases_DESC',
  casesInSanJose_ASC = 'casesInSanJose_ASC',
  casesInSanJose_DESC = 'casesInSanJose_DESC',
  casesInGuanacaste_ASC = 'casesInGuanacaste_ASC',
  casesInGuanacaste_DESC = 'casesInGuanacaste_DESC',
  casesInUnknownLocation_ASC = 'casesInUnknownLocation_ASC',
  casesInUnknownLocation_DESC = 'casesInUnknownLocation_DESC',
  casesInHeredia_ASC = 'casesInHeredia_ASC',
  casesInHeredia_DESC = 'casesInHeredia_DESC',
  casesInLimon_ASC = 'casesInLimon_ASC',
  casesInLimon_DESC = 'casesInLimon_DESC',
  casesInPuntarenas_ASC = 'casesInPuntarenas_ASC',
  casesInPuntarenas_DESC = 'casesInPuntarenas_DESC',
  casesInCartago_ASC = 'casesInCartago_ASC',
  casesInCartago_DESC = 'casesInCartago_DESC',
  casesInAlajuela_ASC = 'casesInAlajuela_ASC',
  casesInAlajuela_DESC = 'casesInAlajuela_DESC',
  foreignersCases_ASC = 'foreignersCases_ASC',
  foreignersCases_DESC = 'foreignersCases_DESC',
  costaRicanCases_ASC = 'costaRicanCases_ASC',
  costaRicanCases_DESC = 'costaRicanCases_DESC',
  elderlyCases_ASC = 'elderlyCases_ASC',
  elderlyCases_DESC = 'elderlyCases_DESC',
  adultCases_ASC = 'adultCases_ASC',
  adultCases_DESC = 'adultCases_DESC',
  juvenileCases_ASC = 'juvenileCases_ASC',
  juvenileCases_DESC = 'juvenileCases_DESC',
  menCases_ASC = 'menCases_ASC',
  menCases_DESC = 'menCases_DESC',
  womenCases_ASC = 'womenCases_ASC',
  womenCases_DESC = 'womenCases_DESC',
  deceasedCases_ASC = 'deceasedCases_ASC',
  deceasedCases_DESC = 'deceasedCases_DESC',
  recoveredCases_ASC = 'recoveredCases_ASC',
  recoveredCases_DESC = 'recoveredCases_DESC',
  activeCases_ASC = 'activeCases_ASC',
  activeCases_DESC = 'activeCases_DESC',
  discardedCases_ASC = 'discardedCases_ASC',
  discardedCases_DESC = 'discardedCases_DESC',
  confirmedCases_ASC = 'confirmedCases_ASC',
  confirmedCases_DESC = 'confirmedCases_DESC',
  date_ASC = 'date_ASC',
  date_DESC = 'date_DESC'
}

export type ReportRecord = {
   __typename?: 'ReportRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _updatedAt: Scalars['DateTime'];
  activeCases?: Maybe<Scalars['IntType']>;
  adultCases?: Maybe<Scalars['IntType']>;
  casesInAlajuela?: Maybe<Scalars['IntType']>;
  casesInCartago?: Maybe<Scalars['IntType']>;
  casesInGuanacaste?: Maybe<Scalars['IntType']>;
  casesInHeredia?: Maybe<Scalars['IntType']>;
  casesInLimon?: Maybe<Scalars['IntType']>;
  casesInPuntarenas?: Maybe<Scalars['IntType']>;
  casesInSanJose?: Maybe<Scalars['IntType']>;
  casesInUnknownLocation?: Maybe<Scalars['IntType']>;
  confirmedCases?: Maybe<Scalars['IntType']>;
  costaRicanCases?: Maybe<Scalars['IntType']>;
  createdAt: Scalars['DateTime'];
  date?: Maybe<Scalars['Date']>;
  deceasedCases?: Maybe<Scalars['IntType']>;
  discardedCases?: Maybe<Scalars['IntType']>;
  elderlyCases?: Maybe<Scalars['IntType']>;
  foreignersCases?: Maybe<Scalars['IntType']>;
  id: Scalars['ItemId'];
  juvenileCases?: Maybe<Scalars['IntType']>;
  menCases?: Maybe<Scalars['IntType']>;
  pendingNationalityCases?: Maybe<Scalars['IntType']>;
  recoveredCases?: Maybe<Scalars['IntType']>;
  updatedAt: Scalars['DateTime'];
  womenCases?: Maybe<Scalars['IntType']>;
};


export type ReportRecord_seoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type ResolutionFilter = {
  eq?: Maybe<ResolutionType>;
  neq?: Maybe<ResolutionType>;
  in?: Maybe<Array<Maybe<ResolutionType>>>;
  notIn?: Maybe<Array<Maybe<ResolutionType>>>;
};

export enum ResolutionType {
  icon = 'icon',
  small = 'small',
  medium = 'medium',
  large = 'large'
}

export type ResponsiveImage = {
   __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['FloatType'];
  base64?: Maybe<Scalars['String']>;
  bgColor?: Maybe<Scalars['String']>;
  height: Scalars['IntType'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  webpSrcSet: Scalars['String'];
  width: Scalars['IntType'];
};

export type SeoField = {
   __typename?: 'SeoField';
  description?: Maybe<Scalars['String']>;
  image?: Maybe<FileField>;
  title?: Maybe<Scalars['String']>;
  twitterCard?: Maybe<Scalars['String']>;
};

export type SeoFilter = {
  exists?: Maybe<Scalars['BooleanType']>;
};

export type Site = {
   __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
};


export type SitefaviconMetaTagsArgs = {
  variants?: Maybe<Array<Maybe<FaviconType>>>;
};


export type SiteglobalSeoArgs = {
  locale?: Maybe<SiteLocale>;
};

export enum SiteLocale {
  es = 'es'
}

export type SourceModelFilter = {
  _createdAt?: Maybe<DateTimeFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  id?: Maybe<ItemIdFilter>;
  _firstPublishedAt?: Maybe<DateTimeFilter>;
  _publicationScheduledAt?: Maybe<DateTimeFilter>;
  _publishedAt?: Maybe<DateTimeFilter>;
  _status?: Maybe<StatusFilter>;
  _updatedAt?: Maybe<DateTimeFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  _isValid?: Maybe<BooleanFilter>;
  url?: Maybe<StringFilter>;
  name?: Maybe<StringFilter>;
  OR?: Maybe<Array<Maybe<SourceModelFilter>>>;
};

export enum SourceModelOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  createdAt_ASC = 'createdAt_ASC',
  createdAt_DESC = 'createdAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC',
  _firstPublishedAt_ASC = '_firstPublishedAt_ASC',
  _firstPublishedAt_DESC = '_firstPublishedAt_DESC',
  _publicationScheduledAt_ASC = '_publicationScheduledAt_ASC',
  _publicationScheduledAt_DESC = '_publicationScheduledAt_DESC',
  _publishedAt_ASC = '_publishedAt_ASC',
  _publishedAt_DESC = '_publishedAt_DESC',
  _status_ASC = '_status_ASC',
  _status_DESC = '_status_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  updatedAt_ASC = 'updatedAt_ASC',
  updatedAt_DESC = 'updatedAt_DESC',
  _isValid_ASC = '_isValid_ASC',
  _isValid_DESC = '_isValid_DESC',
  url_ASC = 'url_ASC',
  url_DESC = 'url_DESC',
  name_ASC = 'name_ASC',
  name_DESC = 'name_DESC'
}

export type SourceRecord = {
   __typename?: 'SourceRecord';
  _createdAt: Scalars['DateTime'];
  _firstPublishedAt?: Maybe<Scalars['DateTime']>;
  _isValid: Scalars['BooleanType'];
  _modelApiKey: Scalars['String'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']>;
  _publishedAt?: Maybe<Scalars['DateTime']>;
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _updatedAt: Scalars['DateTime'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ItemId'];
  name?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  url?: Maybe<Scalars['String']>;
};


export type SourceRecord_seoMetaTagsArgs = {
  locale?: Maybe<SiteLocale>;
};

export type StatusFilter = {
  eq?: Maybe<ItemStatus>;
  neq?: Maybe<ItemStatus>;
  in?: Maybe<Array<Maybe<ItemStatus>>>;
  notIn?: Maybe<Array<Maybe<ItemStatus>>>;
};

export type StringFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  exists?: Maybe<Scalars['BooleanType']>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type StringMatchesFilter = {
  pattern: Scalars['String'];
  caseSensitive?: Maybe<Scalars['BooleanType']>;
  regexp?: Maybe<Scalars['BooleanType']>;
};

export type Tag = {
   __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']>;
  content?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type TypeFilter = {
  eq?: Maybe<UploadType>;
  neq?: Maybe<UploadType>;
  in?: Maybe<Array<Maybe<UploadType>>>;
  notIn?: Maybe<Array<Maybe<UploadType>>>;
};

export type UploadAltFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadAuthorFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  exists?: Maybe<Scalars['BooleanType']>;
};

export type UploadBasenameFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
};

export type UploadColorsFilter = {
  contains?: Maybe<ColorBucketType>;
  allIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  anyIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  notIn?: Maybe<Array<Maybe<ColorBucketType>>>;
  eq?: Maybe<Array<Maybe<ColorBucketType>>>;
};

export type UploadCopyrightFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  exists?: Maybe<Scalars['BooleanType']>;
};

export type UploadCreatedAtFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type UploadFilenameFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
};

export type UploadFilter = {
  type?: Maybe<TypeFilter>;
  inUse?: Maybe<InUseFilter>;
  resolution?: Maybe<ResolutionFilter>;
  size?: Maybe<UploadSizeFilter>;
  tags?: Maybe<UploadTagsFilter>;
  smartTags?: Maybe<UploadTagsFilter>;
  colors?: Maybe<UploadColorsFilter>;
  orientation?: Maybe<OrientationFilter>;
  id?: Maybe<UploadIdFilter>;
  mimeType?: Maybe<UploadMimeTypeFilter>;
  format?: Maybe<UploadFormatFilter>;
  height?: Maybe<UploadHeightFilter>;
  width?: Maybe<UploadWidthFilter>;
  alt?: Maybe<UploadAltFilter>;
  title?: Maybe<UploadTitleFilter>;
  notes?: Maybe<UploadNotesFilter>;
  author?: Maybe<UploadAuthorFilter>;
  copyright?: Maybe<UploadCopyrightFilter>;
  basename?: Maybe<UploadBasenameFilter>;
  filename?: Maybe<UploadFilenameFilter>;
  _createdAt?: Maybe<UploadCreatedAtFilter>;
  _updatedAt?: Maybe<UploadUpdatedAtFilter>;
  OR?: Maybe<Array<Maybe<UploadFilter>>>;
};

export type UploadFormatFilter = {
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadHeightFilter = {
  gt?: Maybe<Scalars['IntType']>;
  lt?: Maybe<Scalars['IntType']>;
  gte?: Maybe<Array<Maybe<Scalars['IntType']>>>;
  lte?: Maybe<Array<Maybe<Scalars['IntType']>>>;
  eq?: Maybe<Scalars['IntType']>;
  neq?: Maybe<Scalars['IntType']>;
};


export type UploadIdFilter = {
  eq?: Maybe<Scalars['UploadId']>;
  neq?: Maybe<Scalars['UploadId']>;
  in?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['UploadId']>>>;
};

export type UploadMimeTypeFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadNotesFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  exists?: Maybe<Scalars['BooleanType']>;
};

export enum UploadOrderBy {
  _createdAt_ASC = '_createdAt_ASC',
  _createdAt_DESC = '_createdAt_DESC',
  size_ASC = 'size_ASC',
  size_DESC = 'size_DESC',
  resolution_ASC = 'resolution_ASC',
  resolution_DESC = 'resolution_DESC',
  filename_ASC = 'filename_ASC',
  filename_DESC = 'filename_DESC',
  basename_ASC = 'basename_ASC',
  basename_DESC = 'basename_DESC',
  mimeType_ASC = 'mimeType_ASC',
  mimeType_DESC = 'mimeType_DESC',
  format_ASC = 'format_ASC',
  format_DESC = 'format_DESC',
  _updatedAt_ASC = '_updatedAt_ASC',
  _updatedAt_DESC = '_updatedAt_DESC',
  id_ASC = 'id_ASC',
  id_DESC = 'id_DESC'
}

export enum UploadOrientation {
  landscape = 'landscape',
  portrait = 'portrait',
  square = 'square'
}

export type UploadSizeFilter = {
  gt?: Maybe<Scalars['IntType']>;
  lt?: Maybe<Scalars['IntType']>;
  gte?: Maybe<Array<Maybe<Scalars['IntType']>>>;
  lte?: Maybe<Array<Maybe<Scalars['IntType']>>>;
  eq?: Maybe<Scalars['IntType']>;
  neq?: Maybe<Scalars['IntType']>;
};

export type UploadTagsFilter = {
  contains?: Maybe<Scalars['String']>;
  allIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  anyIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  eq?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UploadTitleFilter = {
  matches?: Maybe<StringMatchesFilter>;
  notMatches?: Maybe<StringMatchesFilter>;
  eq?: Maybe<Scalars['String']>;
  neq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  notIn?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum UploadType {
  image = 'image',
  audio = 'audio',
  video = 'video',
  richtext = 'richtext',
  presentation = 'presentation',
  spreadsheet = 'spreadsheet',
  pdfdocument = 'pdfdocument',
  archive = 'archive'
}

export type UploadUpdatedAtFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  neq?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
};

export type UploadVideoField = {
   __typename?: 'UploadVideoField';
  duration: Scalars['Int'];
  framerate: Scalars['Int'];
  mp4Url?: Maybe<Scalars['String']>;
  muxAssetId: Scalars['String'];
  muxPlaybackId: Scalars['String'];
  streamingUrl: Scalars['String'];
  thumbnailUrl: Scalars['String'];
};


export type UploadVideoFieldmp4UrlArgs = {
  res?: Maybe<VideoMp4Res>;
  exactRes?: Maybe<VideoMp4Res>;
};


export type UploadVideoFieldthumbnailUrlArgs = {
  format?: Maybe<MuxThumbnailFormatType>;
};

export type UploadWidthFilter = {
  gt?: Maybe<Scalars['IntType']>;
  lt?: Maybe<Scalars['IntType']>;
  gte?: Maybe<Array<Maybe<Scalars['IntType']>>>;
  lte?: Maybe<Array<Maybe<Scalars['IntType']>>>;
  eq?: Maybe<Scalars['IntType']>;
  neq?: Maybe<Scalars['IntType']>;
};

export enum VideoMp4Res {
  low = 'low',
  medium = 'medium',
  high = 'high'
}

export type PageMetaTagFragmentFragment = (
  { __typename?: 'Tag' }
  & Pick<Tag, 'attributes' | 'content' | 'tag'>
);

export type pageMetaTagsQueryVariables = {
  name: Scalars['String'];
};


export type pageMetaTagsQuery = (
  { __typename?: 'Query' }
  & { page: Maybe<(
    { __typename?: 'PageRecord' }
    & { meta: Array<(
      { __typename?: 'Tag' }
      & PageMetaTagFragmentFragment
    )> }
  )> }
);

export type ReportFragmentFragment = (
  { __typename?: 'ReportRecord' }
  & Pick<ReportRecord, 'date' | 'confirmedCases' | 'discardedCases' | 'activeCases' | 'recoveredCases' | 'deceasedCases' | 'womenCases' | 'menCases' | 'juvenileCases' | 'adultCases' | 'elderlyCases' | 'costaRicanCases' | 'foreignersCases' | 'pendingNationalityCases' | 'casesInSanJose' | 'casesInAlajuela' | 'casesInCartago' | 'casesInHeredia' | 'casesInGuanacaste' | 'casesInPuntarenas' | 'casesInLimon' | 'casesInUnknownLocation'>
);

export type reportsQueryVariables = {
  orderBy?: Maybe<Array<Maybe<ReportModelOrderBy>>>;
  first?: Maybe<Scalars['IntType']>;
};


export type reportsQuery = (
  { __typename?: 'Query' }
  & { reports: Array<(
    { __typename?: 'ReportRecord' }
    & ReportFragmentFragment
  )> }
);

export type NewsFragmentFragment = (
  { __typename?: 'NewsRecord' }
  & Pick<NewsRecord, 'id' | 'date' | 'title' | 'url'>
  & { source: Maybe<(
    { __typename?: 'SourceRecord' }
    & Pick<SourceRecord, 'name' | 'url'>
  )> }
);

export type newsQueryVariables = {
  orderBy?: Maybe<Array<Maybe<NewsModelOrderBy>>>;
  first?: Maybe<Scalars['IntType']>;
};


export type newsQuery = (
  { __typename?: 'Query' }
  & { news: Array<(
    { __typename?: 'NewsRecord' }
    & NewsFragmentFragment
  )> }
);

export const PageMetaTagFragmentFragmentDoc = gql`
    fragment PageMetaTagFragment on Tag {
  attributes
  content
  tag
}
    `;
export const ReportFragmentFragmentDoc = gql`
    fragment ReportFragment on ReportRecord {
  date
  confirmedCases
  discardedCases
  activeCases
  recoveredCases
  deceasedCases
  womenCases
  menCases
  juvenileCases
  adultCases
  elderlyCases
  costaRicanCases
  foreignersCases
  pendingNationalityCases
  casesInSanJose
  casesInAlajuela
  casesInCartago
  casesInHeredia
  casesInGuanacaste
  casesInPuntarenas
  casesInLimon
  casesInUnknownLocation
}
    `;
export const NewsFragmentFragmentDoc = gql`
    fragment NewsFragment on NewsRecord {
  id
  date
  title
  url
  source {
    name
    url
  }
}
    `;
export const pageMetaTagsDocument = gql`
    query pageMetaTags($name: String!) {
  page(filter: {name: {eq: $name}}) {
    meta: _seoMetaTags {
      ...PageMetaTagFragment
    }
  }
}
    ${PageMetaTagFragmentFragmentDoc}`;
export const reportsDocument = gql`
    query reports($orderBy: [ReportModelOrderBy], $first: IntType) {
  reports: allReports(orderBy: $orderBy, first: $first) {
    ...ReportFragment
  }
}
    ${ReportFragmentFragmentDoc}`;
export const newsDocument = gql`
    query news($orderBy: [NewsModelOrderBy], $first: IntType) {
  news: allNews(orderBy: $orderBy, first: $first) {
    ...NewsFragment
  }
}
    ${NewsFragmentFragmentDoc}`;
export function getSdk(client: GraphQLClient) {
  return {
    pageMetaTags(variables: pageMetaTagsQueryVariables): Promise<pageMetaTagsQuery> {
      return client.request<pageMetaTagsQuery>(print(pageMetaTagsDocument), variables);
    },
    reports(variables?: reportsQueryVariables): Promise<reportsQuery> {
      return client.request<reportsQuery>(print(reportsDocument), variables);
    },
    news(variables?: newsQueryVariables): Promise<newsQuery> {
      return client.request<newsQuery>(print(newsDocument), variables);
    }
  };
}