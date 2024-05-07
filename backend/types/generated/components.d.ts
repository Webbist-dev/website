import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentBlockquote extends Schema.Component {
  collectionName: 'components_content_blockquotes';
  info: {
    displayName: 'blockquote';
  };
  attributes: {
    quote: Attribute.Text;
    admin_user: Attribute.Relation<
      'content.blockquote',
      'oneToOne',
      'admin::user'
    >;
    caption: Attribute.String;
  };
}

export interface ContentCodeblock extends Schema.Component {
  collectionName: 'components_content_codeblocks';
  info: {
    displayName: 'codeblock';
  };
  attributes: {
    code: Attribute.Text;
    language: Attribute.Enumeration<
      ['JavaScript', 'TypeScript', 'HTML', 'CSS', 'SASS']
    >;
    caption: Attribute.String;
  };
}

export interface ContentImage extends Schema.Component {
  collectionName: 'components_content_images';
  info: {
    displayName: 'image';
  };
  attributes: {
    upload: Attribute.Media;
    caption: Attribute.String;
  };
}

export interface ContentMarkdown extends Schema.Component {
  collectionName: 'components_content_markdowns';
  info: {
    displayName: 'markdown';
  };
  attributes: {
    copy: Attribute.RichText;
  };
}

export interface ContentTimeline extends Schema.Component {
  collectionName: 'components_content_timelines';
  info: {
    displayName: 'timeline';
    description: '';
  };
  attributes: {
    date: Attribute.String;
    title: Attribute.String;
    handle: Attribute.String;
    description: Attribute.Text;
    tags: Attribute.Relation<'content.timeline', 'oneToMany', 'api::tag.tag'>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.blockquote': ContentBlockquote;
      'content.codeblock': ContentCodeblock;
      'content.image': ContentImage;
      'content.markdown': ContentMarkdown;
      'content.timeline': ContentTimeline;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
