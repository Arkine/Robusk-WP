import React from 'react';

import Title from './article/title';
import Content from './article/content';
import Meta from './article/meta';
import PostFooter from '../../containers/parts/postFooter';

export default class Article extends React.Component {

    getFeaturedImageSrc() {
        if (this.props.post.featured_image_url) {
            return this.props.isSingle ? this.props.post.featured_image_url.large : this.props.post.featured_image_url.full;
        } else {
            return '';
        }
    }

    getCategories(cat_ids) {
        if ('undefined' !== typeof cat_ids) {
            return cat_ids.map(cat_id => {
                return RT_API['categories'].filter(cat => {
                    return cat.term_id === cat_id
                })[0];
            });
        }
    }

    getContent(post, isSingle) {
        return (isSingle) ? post.content.rendered : post.excerpt.rendered;
    }

    render() {
        const { post, isSingle } = this.props;

        return (
            <article className="ArchiveList__card">
                <img src={this.getFeaturedImageSrc()} />
                <div className="ArchiveList__card__content">
                    <Title link={post.link} isSingle={isSingle}>
                        {post.title.rendered}
                    </Title>

                    <Meta categories={this.getCategories(post.categories)}
                          date={post.date}
                          formattedDate={post.formatted_date}
                          type={post.type}
                          isSingle={isSingle}/>

                    <Content isSingle={isSingle}>
                        {this.getContent(post, isSingle)}
                    </Content>
                </div>
                <PostFooter type={post.type} pId={post.id} isSingle={isSingle} tagIds={post.tags} commentStatus={post.comment_status} />
            </article>
        );
    }
}